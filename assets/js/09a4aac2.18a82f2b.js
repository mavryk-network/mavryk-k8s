"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[121],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,b=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Accounts",s={unversionedId:"Mavryk-Accounts",id:"Mavryk-Accounts",title:"Accounts",description:"Reference an existing secret and override the created secret",source:"@site/02-Mavryk-Accounts.md",sourceDirName:".",slug:"/Mavryk-Accounts",permalink:"/Mavryk-Accounts",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"mavrykK8sSidebar",previous:{title:"Helm charts",permalink:"/helm-chart"},next:{title:"Nodes",permalink:"/Mavryk-Nodes"}},p={},u=[],d={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"Reference an existing secret and override the created secret"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'accountsSecretName: ""\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," object of values.yaml defines Mavryk accounts used in the chart.\nBy default no account is configured:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"accounts: {}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," is a map where keys are account aliases and values are maps of\nfields ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"is_bootstrap_baker_account"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap_balance"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"signer_url"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"protocols")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"operations_pool"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," field can be set to a public or private key. For a bootstrap baker,\nit must be set to a private key. The key type will be recognized automatically,\nand the pod will fail if the key type is unexpected."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"protocols")," fields overrides the top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"protocols")," field described\nbelow and has the same syntax. This allows to set specific per-block votes per\nbaker."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"operations_pool")," field instructs the baker to target a url for external\nmempool queries when baking a block. This is useful to run a Flashbake-capable baker.\nThe entry is passed to baker binaries using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--operations-pool")," flag."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public chains: Accounts do not get ",(0,o.kt)("inlineCode",{parentName:"li"},"is_bootstrap_baker_account")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap_balance")," fields."),(0,o.kt)("li",{parentName:"ul"},"Non-public chains: If you don't specify accounts needed by nodes, they can\nbe created deterministically via the above setting. If specifying, accounts\ncan be given a bootstrap balance and can also be configured to be bootstrap\nbaker accounts. Accounts with balances set to \"0\" will be imported by the\nnode but they will not be bootstrap accounts. If you don't set a bootstrap\nbalance, it will default to the ",(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap_mumav")," field above.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'accounts:\n  baker0:\n    key: edsk...\n    is_bootstrap_baker_account: true\n    bootstrap_balance: "50000000000000"\n\n  baker1:\n    key: edsk...\n    operations_pool: http://flashbake-endpoint-baker-listener:12732\n    protocols:\n    - command: PtMumbai\n      vote:\n        liquidity_baking_toggle_vote: "on"\n')),(0,o.kt)("p",null,"A public key account can contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"signer_url")," to a remote signer\nthat signs with the corresponding secret key. You don't need to\nset this if you're deploying a mavryk-k8s signer into the same\nnamespace of its baker. See ",(0,o.kt)("inlineCode",{parentName:"p"},"mavkitSigners")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tacoinfraSigners"),"\nfields in values.yaml to define remote signers. (You shouldn't add things\nto the URL path such as the public key hash. It will be added automatically.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'accounts:\n  externalSignerAccount:\n    key: edpk...\n    is_bootstrap_baker_account: true\n    bootstrap_balance: "4000000000000"\n    signer_url: http://[POD-NAME].[SERVICE-NAME].[NAMESPACE]:6732\n')),(0,o.kt)("p",null," An account being signed for by a Tacoinfra AWS KMS signer requires a\n",(0,o.kt)("inlineCode",{parentName:"p"},"key_id")," field. This should be a valid id of the AWS KMS key.\nThe key's corresponding public key must be provided here as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'accounts:\n  tacoinfraSigner:\n    key: sppk...\n    key_id: "cloud-id-of-key"\n    is_bootstrap_baker_account: true\n    bootstrap_balance: "4000000000000"\n')),(0,o.kt)("p",null,"When running bakers for a public net, you must provide your own secret keys.\nFor non public networks you can change the\n",(0,o.kt)("inlineCode",{parentName:"p"},"should_generate_unsafe_deterministic_data")," setting to true, and deterministic\nkeys will be generated for your nodes automatically. This is helpful to spin up\nlocal testnets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"should_generate_unsafe_deterministic_data: false\n")))}k.isMDXComponent=!0}}]);