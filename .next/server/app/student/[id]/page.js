(()=>{var e={};e.id=541,e.ids=[541],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6758:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var r=s(482),n=s(9108),a=s(2563),i=s.n(a),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["student",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8490)),"C:\\Users\\Amr\\Desktop\\july-grad\\app\\student\\[id]\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4615)),"C:\\Users\\Amr\\Desktop\\july-grad\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Amr\\Desktop\\july-grad\\app\\student\\[id]\\page.jsx"],u="/student/[id]/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/student/[id]/page",pathname:"/student/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5808:(e,t,s)=>{Promise.resolve().then(s.bind(s,7689))},7689:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(5344),n=s(9565),a=s(3187),i=s(3729),o=s(7321),l=s(8428),d=s(6809),c=s(620),u=s(4966);function p({params:e}){let t=(0,l.useRouter)(),[s,p]=(0,i.useState)([]),[x,m]=(0,i.useState)(),[h,j]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{j(!0),fetch("/dessoq-data.json").then(e=>e.json()).then(s=>{p(s),console.log(s);let r=s.find(t=>parseInt(t.id)===parseInt(e.id));r?m(r):setTimeout(()=>{t.push("/")},3e3),setTimeout(()=>{j(!1)},1e3)}).then(e=>console.log(e))},[]),h)?r.jsx("div",{className:"w-full h-screen flex justify-center items-center",children:(0,r.jsxs)("div",{className:"w-[500px]   flex justify-center items-center h-[500px] flex-col gap-8 ",children:[r.jsx(o.c,{size:"lg"}),r.jsx("h3",{className:"text-xl font-medium",children:"يرجي الانتظار حتي يتم تحميل النتيجة"})]})}):x?(0,r.jsxs)("div",{className:"min-h-screen  ",children:[r.jsx(n.Z,{}),r.jsx("div",{className:"relative my-12",children:(0,r.jsxs)("div",{className:"max-w-[800px]  mx-auto",children:[r.jsx("div",{className:"",children:r.jsx(d.O,{href:"/",children:r.jsx(c.A,{color:"primary",children:"العودة الى الرئيسية"})})}),r.jsx(a.Z,{student:x})]})}),r.jsx(u.Z,{})]}):(0,r.jsxs)("div",{children:[r.jsx(n.Z,{}),r.jsx("div",{className:"max-w-[800px] mt-24 mx-auto",children:(0,r.jsxs)("p",{className:"text-4xl text-center",children:["لا يوجد طالب مسجل لدينا ",r.jsx("br",{}),"بالرقم القومى المدخل"]})})]})}},8490:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let r=(0,s(6843).createProxy)(String.raw`C:\Users\Amr\Desktop\july-grad\app\student\[id]\page.jsx`),{__esModule:n,$$typeof:a}=r,i=r.default}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,17,726,849],()=>s(6758));module.exports=r})();