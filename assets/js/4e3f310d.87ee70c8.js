"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5920],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=(n(44996),["components"]),l={id:"testing-rn",title:"Testing React Native Changes in the Sample App",sidebar_label:"Testing RN Changes"},p=void 0,s={unversionedId:"extending/testing-rn",id:"extending/testing-rn",title:"Testing React Native Changes in the Sample App",description:"When making changes to the React Native integration, it can be helpful to test them directly in the ReactNativeFlipperExample we provide in the repository. However, the app builds against a production release of Flipper and not the version checked in in the repository.",source:"@site/../docs/extending/testing-rn.mdx",sourceDirName:"extending",slug:"/extending/testing-rn",permalink:"/docs/extending/testing-rn",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/testing-rn.mdx",tags:[],version:"current",frontMatter:{id:"testing-rn",title:"Testing React Native Changes in the Sample App",sidebar_label:"Testing RN Changes"},sidebar:"main",previous:{title:"Public Flipper Releases",permalink:"/docs/extending/public-releases"},next:{title:"Linters",permalink:"/docs/internals/linters"}},c={},d=[{value:"Publishing a Local Release",id:"publishing-a-local-release",level:2},{value:"Using the new Release",id:"using-the-new-release",level:2},{value:"Full Diff",id:"full-diff",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"When making changes to the React Native integration, it can be helpful to test them directly in the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/main/react-native/ReactNativeFlipperExample"},"ReactNativeFlipperExample")," we provide in the repository. However, the app builds against a production release of Flipper and not the version checked in in the repository."),(0,a.mdx)("p",null,"In order to test against the changes you have made, you need to publish a Flipper release locally."),(0,a.mdx)("h2",{id:"publishing-a-local-release"},"Publishing a Local Release"),(0,a.mdx)("p",null,"First, create a unique version number. This step is optional but is helpful to prevent accidentally testing against the wrong version."),(0,a.mdx)("p",null,"In the top-level ",(0,a.mdx)("inlineCode",{parentName:"p"},"gradle.properties"),", change the version:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"...\n# POM publishing constants\nVERSION_NAME=0.44.99-SNAPSHOT # Change this one.\nGROUP=com.facebook.flipper\n...\n")),(0,a.mdx)("p",null,"Now, run ",(0,a.mdx)("inlineCode",{parentName:"p"},"./gradlew installArchives -PRELEASE_SIGNING_ENABLED=false")," in the root of the repository. This will place the artifact files in your local ",(0,a.mdx)("inlineCode",{parentName:"p"},"~/.m2/repository")," folder."),(0,a.mdx)("h2",{id:"using-the-new-release"},"Using the new Release"),(0,a.mdx)("p",null,"Usually, you need to change your project to also pick up files in ",(0,a.mdx)("inlineCode",{parentName:"p"},"mavenLocal()"),". As this is already done, you can directly change the ",(0,a.mdx)("inlineCode",{parentName:"p"},"FLIPPER_VERSION")," to the previously used identifier\nin ",(0,a.mdx)("inlineCode",{parentName:"p"},"react-native/ReactNativeFlipperExample/android/gradle.properties"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"# Version of flipper SDK to use with React Native\nFLIPPER_VERSION=0.30.2\nFLIPPER_VERSION=0.44.99-SNAPSHOT\n")),(0,a.mdx)("p",null,"Now run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn android")," to rebuild, install and launch the RN sample app."),(0,a.mdx)("p",null,"To test further changes, rerun the ",(0,a.mdx)("inlineCode",{parentName:"p"},"./gradlew installArchives -PRELEASE_SIGNING_ENABLED=false")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn android")," steps."),(0,a.mdx)("h2",{id:"full-diff"},"Full Diff"),(0,a.mdx)("p",null,"For a quick overview, here are the two changes you need to make:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"diff --git a/gradle.properties b/gradle.properties\nindex 1ccd002a..100a7169 100644\n--- a/gradle.properties\n+++ b/gradle.properties\n@@ -4,7 +4,7 @@\n # LICENSE file in the root directory of this source tree.\n\n # POM publishing constants\n-VERSION_NAME=0.44.1-SNAPSHOT\n+VERSION_NAME=0.44.99-SNAPSHOT\n GROUP=com.facebook.flipper\n POM_URL=https://github.com/facebook/flipper\n POM_SCM_URL=https://github.com/facebook/flipper.git\ndiff --git a/react-native/ReactNativeFlipperExample/android/gradle.properties b/react-native/ReactNativeFlipperExample/android/gradle.properties\nindex 495c12e8..bc815d0e 100644\n--- a/react-native/ReactNativeFlipperExample/android/gradle.properties\n+++ b/react-native/ReactNativeFlipperExample/android/gradle.properties\n@@ -30,4 +30,4 @@ android.useAndroidX=true\n android.enableJetifier=true\n\n # Version of flipper SDK to use with React Native\n-FLIPPER_VERSION=0.30.2\n+FLIPPER_VERSION=0.44.99-SNAPSHOT\n\n")))}m.isMDXComponent=!0}}]);