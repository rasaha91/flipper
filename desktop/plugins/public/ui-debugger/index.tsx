/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {PluginClient, createState, createDataSource} from 'flipper-plugin';
import {Events, Id, PerfStatsEvent, Snapshot, TreeState, UINode} from './types';
import './node_modules/react-complex-tree/lib/style.css';

export function plugin(client: PluginClient<Events>) {
  const rootId = createState<Id | undefined>(undefined);
  client.onMessage('init', (root) => rootId.set(root.rootId));

  const perfEvents = createDataSource<PerfStatsEvent, 'txId'>([], {
    key: 'txId',
    limit: 10 * 1024,
  });
  client.onMessage('perfStats', (event) => {
    perfEvents.append(event);
  });

  const nodesAtom = createState<Map<Id, UINode>>(new Map());
  const snapshotsAtom = createState<Map<Id, Snapshot>>(new Map());

  const treeState = createState<TreeState>({expandedNodes: []});

  client.onMessage('coordinateUpdate', (event) => {
    nodesAtom.update((draft) => {
      const node = draft.get(event.nodeId);
      if (!node) {
        console.warn(`Coordinate update for non existing node `, event);
      } else {
        node.bounds.x = event.coordinate.x;
        node.bounds.y = event.coordinate.y;
      }
    });
  });

  const seenNodes = new Set<Id>();
  client.onMessage('subtreeUpdate', (event) => {
    snapshotsAtom.update((draft) => {
      draft.set(event.rootId, event.snapshot);
    });
    nodesAtom.update((draft) => {
      for (const node of event.nodes) {
        draft.set(node.id, node);
      }
    });

    treeState.update((draft) => {
      for (const node of event.nodes) {
        if (!seenNodes.has(node.id)) {
          draft.expandedNodes.push(node.id);
        }
        seenNodes.add(node.id);

        if (node.activeChild) {
          const inactiveChildren = node.children.filter(
            (child) => child !== node.activeChild,
          );

          draft.expandedNodes = draft.expandedNodes.filter(
            (nodeId) => !inactiveChildren.includes(nodeId),
          );
          draft.expandedNodes.push(node.activeChild);
        }
      }
    });
  });

  return {
    rootId,
    snapshots: snapshotsAtom,
    nodes: nodesAtom,
    perfEvents,
    treeState,
  };
}

export {Component} from './components/main';
