"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:6},i="Execution Model",o={unversionedId:"executionmodel",id:"executionmodel",title:"Execution Model",description:"Lifecycle",source:"@site/docs/executionmodel.md",sourceDirName:".",slug:"/executionmodel",permalink:"/CrystalDEV/docs/executionmodel",draft:!1,editUrl:"https://github.com/AnimalStudio-Official/Crystal/edit/master/docs/executionmodel.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Util",permalink:"/CrystalDEV/docs/util"},next:{title:"Examples",permalink:"/CrystalDEV/docs/examples"}},s={},c=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Catching CrystalInit Errors",id:"catching-crystalinit-errors",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:c};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execution-model"},"Execution Model"),(0,a.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,a.kt)("p",null,"The execution model of Crystal defines the flow of operations and lifecycle of Crystal."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Require the Crystal module"),(0,a.kt)("li",{parentName:"ol"},"Create services or controllers"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"Crystal.Start()"),", which immediately returns a Promise",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"All ",(0,a.kt)("inlineCode",{parentName:"li"},"CrystalInit")," methods are invoked at the same time, and waits for all to finish"),(0,a.kt)("li",{parentName:"ol"},"All ",(0,a.kt)("inlineCode",{parentName:"li"},"CrystalStart")," methods are invoked at the same time"))),(0,a.kt)("li",{parentName:"ol"},"After all ",(0,a.kt)("inlineCode",{parentName:"li"},"CrystalStart")," methods are called, the promise returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"Crystal.Start()")," resolves")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lifecycle",src:r(36085).Z,width:"1203",height:"943"})),(0,a.kt)("p",null,"On the server, you should have one Script in ServerScriptService. On the client, you should have one LocalScript in PlayerStarterScripts. Each of these scripts should have a similar layout:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Crystal = require(game:GetService("ReplicatedStorage").Packages.Crystal)\n\n-- Load services or controllers here\n\nCrystal.Start():catch(warn)\n')),(0,a.kt)("p",null,"Once services or controllers are created, they persist forever (until the server shuts down or the player leaves)."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Services and controllers ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"cannot"))," be created after ",(0,a.kt)("inlineCode",{parentName:"p"},"Crystal.Start()")," has been called.")),(0,a.kt)("h2",{id:"catching-crystalinit-errors"},"Catching CrystalInit Errors"),(0,a.kt)("p",null,"Due to the way Promises work, errors that occur within ",(0,a.kt)("inlineCode",{parentName:"p"},"CrystalInit")," methods of services or controllers will be caught as a rejected promise. These can be handled by either grabbing the status after using ",(0,a.kt)("inlineCode",{parentName:"p"},"Await")," or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Catch()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local success, err = Crystal.Start():await()\nif (not success) then\n    -- Handle error\n    error(tostring(err))\nend\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"Crystal.Start():catch(function(err)\n    -- Handle error\n    warn(tostring(err))\nend)\n")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only one Script on the server should manage loading services and starting Crystal"),(0,a.kt)("li",{parentName:"ul"},"Only one LocalScript on the client should manage loading controllers and starting Crystal"),(0,a.kt)("li",{parentName:"ul"},"Split up services and controllers into their own modules"),(0,a.kt)("li",{parentName:"ul"},"Services should be kept in either ServerStorage or ServerScriptService to avoid being exposed to the client"),(0,a.kt)("li",{parentName:"ul"},"Code within ",(0,a.kt)("inlineCode",{parentName:"li"},"CrystalInit")," and within the root scope of the ModuleScript should try to finish ASAP, and should avoid yielding if possible"),(0,a.kt)("li",{parentName:"ul"},"Events and methods should never be added to a service's Client table after ",(0,a.kt)("inlineCode",{parentName:"li"},"Crystal.Start()")," has been called"),(0,a.kt)("li",{parentName:"ul"},"As shown above in the ",(0,a.kt)("a",{parentName:"li",href:"#catching-Crystalinit-errors"},"Catching CrystalInit Errors")," section, handling a failure case of ",(0,a.kt)("inlineCode",{parentName:"li"},"Start")," is the cleanest way to catch errors on startup.")))}d.isMDXComponent=!0},36085:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lifecycle-e82da43cf6f64111c58ce945878817f9.svg"}}]);