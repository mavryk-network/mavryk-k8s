"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[436],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1219:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={},s=void 0,u={unversionedId:"Prerequisites",id:"Prerequisites",title:"Prerequisites",description:"Prerequisites",source:"@site/Prerequisites.md",sourceDirName:".",slug:"/Prerequisites",permalink:"/Prerequisites",tags:[],version:"current",frontMatter:{},sidebar:"mavrykK8sSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Public network node",permalink:"/Public-Node"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"For local deployment",id:"for-local-deployment",level:3},{value:"For deployment on a cloud platform (AWS)",id:"for-deployment-on-a-cloud-platform-aws",level:3},{value:"Installing prerequisites",id:"installing-prerequisites",level:2},{value:"Mac",id:"mac",level:3},{value:"Arch Linux",id:"arch-linux",level:3},{value:"Other Operating Systems",id:"other-operating-systems",level:3},{value:"Configuring Minikube",id:"configuring-minikube",level:2},{value:"Mac",id:"mac-1",level:3},{value:"Other Operating Systems",id:"other-operating-systems-1",level:3},{value:"Starting Minikube",id:"starting-minikube",level:2},{value:"Adding the Mavryk Dynamics Helm Chart Repository",id:"adding-the-mavryk-dynamics-helm-chart-repository",level:2},{value:"Using a custom Mavryk build",id:"using-a-custom-mavryk-build",level:2},{value:"Notes",id:"notes",level:2}],c={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"python3 (>=3.7)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/kubectl/"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")),(0,i.kt)("li",{parentName:"ul"},"(optional, for distributed private chains) A ",(0,i.kt)("a",{parentName:"li",href:"https://www.zerotier.com/"},"ZeroTier")," network with api access token")),(0,i.kt)("h3",{id:"for-local-deployment"},"For local deployment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},"minikube"))),(0,i.kt)("h3",{id:"for-deployment-on-a-cloud-platform-aws"},"For deployment on a cloud platform (AWS)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we recommend ",(0,i.kt)("a",{parentName:"li",href:"https://www.pulumi.com/docs/get-started/install/"},"pulumi"),", an infrastructure-as-code platform, for cloud deployments")),(0,i.kt)("h2",{id:"installing-prerequisites"},"Installing prerequisites"),(0,i.kt)("p",null,"This section varies depending on OS."),(0,i.kt)("h3",{id:"mac"},"Mac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"Docker Desktop"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start Docker Desktop and follow the setup instructions. Note: You may quit Docker after it has finished setting up. It is not required that Docker Desktop is running for you to run a Mavryk chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install other prerequisites:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install python3 kubectl minikube helm\n")))),(0,i.kt)("h3",{id:"arch-linux"},"Arch Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pacman -Syu && pacman -S docker python3 minikube kubectl kubectx helm\n")),(0,i.kt)("h3",{id:"other-operating-systems"},"Other Operating Systems"),(0,i.kt)("p",null,"Please see the respective pages for installation instructions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"python3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm"))),(0,i.kt)("h2",{id:"configuring-minikube"},"Configuring Minikube"),(0,i.kt)("p",null,"It is suggested to deploy minikube as a virtual machine. This requires a virtual machine ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/drivers/"},"driver"),"."),(0,i.kt)("h3",{id:"mac-1"},"Mac"),(0,i.kt)("p",null,"Requires the ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/drivers/hyperkit/"},"hyperkit")," driver. This comes already bundled together with Docker Desktop."),(0,i.kt)("p",null,"Make hyperkit the default minikube driver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"minikube config set driver hyperkit\n")),(0,i.kt)("p",null,"(Note: We do not use Docker itself as the minikube driver due to an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube/issues/7332"},"issue")," regarding the minikube ingress addon that is required by rpc-auth.)"),(0,i.kt)("h3",{id:"other-operating-systems-1"},"Other Operating Systems"),(0,i.kt)("p",null,"If in the next step minikube does not start correctly, you may need to configure a different driver for it. Please see the minikube docs ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/drivers/"},"here")," for more information."),(0,i.kt)("h2",{id:"starting-minikube"},"Starting Minikube"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start\n")),(0,i.kt)("p",null,"Configure your shell environment to use minikube\u2019s Docker daemon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eval $(minikube docker-env)\n")),(0,i.kt)("p",null,"This allows you to run Docker commands inside of minikube. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker images")," to view the images that minikube has."),(0,i.kt)("p",null,"If you want to unset your shell from using minikube's docker daemon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eval $(minikube docker-env -u)\n")),(0,i.kt)("h2",{id:"adding-the-mavryk-dynamics-helm-chart-repository"},"Adding the Mavryk Dynamics Helm Chart Repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm repo add mavryk-network https://charts.mavryk.org/\n")),(0,i.kt)("h2",{id:"using-a-custom-mavryk-build"},"Using a custom Mavryk build"),(0,i.kt)("p",null,"Create a clone of the ",(0,i.kt)("inlineCode",{parentName:"p"},"[mavryk](https://gitlab.com/mavryk-network/mavryk-protocol)"),"\nrepository.  ",(0,i.kt)("a",{parentName:"p",href:"https://protocol.mavryk.org/introduction/howtoget.html#setting-up-the-development-environment-from-scratch"},"Set up your development environment as usual"),".  Then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eval $(minikube docker-env)\nmake docker-image\n")),(0,i.kt)("p",null,"This will create a docker image called ",(0,i.kt)("inlineCode",{parentName:"p"},"mavryk:latest")," and install it\ninto the minikube environment."),(0,i.kt)("p",null,"Or, if you prefer, you can build the image using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/create_docker_image.sh\n")),(0,i.kt)("p",null,"This will create an image with a name like ",(0,i.kt)("inlineCode",{parentName:"p"},"mavrykdynamics/mavryk:v16.0"),".\nThen you install it thus:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker image save <image> | ( eval $(minikube docker-env); docker image load )\n")),(0,i.kt)("p",null,"Either way, inside ",(0,i.kt)("inlineCode",{parentName:"p"},"$CHAIN_NAME_values.yaml"),", change the ",(0,i.kt)("inlineCode",{parentName:"p"},"images")," section to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"images:\n  mavkit: <image>\n")),(0,i.kt)("p",null,"where image is ",(0,i.kt)("inlineCode",{parentName:"p"},"mavryk:latest")," or whatever."),(0,i.kt)("p",null,"Then install the chart as above."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We recommend using a very nice GUI for your k8s Mavryk chain infrastructure called ",(0,i.kt)("a",{parentName:"p",href:"https://k8slens.dev/"},"Lens"),". This allows you to easily see all of the k8s resources that have been spun up as well as to view the logs for your Mavryk nodes. Checkout a similar tool called ",(0,i.kt)("a",{parentName:"p",href:"https://k9scli.io/"},"k9s")," that works in the CLI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check out Oxheadalpha's Typescript node module ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oxheadalpha/tezos-pulumi"},"tezos-pulumi")," to deploy mavryk-k8s in ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"AWS EKS"),"."))))}k.isMDXComponent=!0}}]);