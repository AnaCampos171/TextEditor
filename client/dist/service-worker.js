if(!self.define){let e,i={};const n=(n,t)=>(n=new URL(n+".js",t).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const o=e=>n(e,s),l={module:{uri:s},exports:f,require:o};i[s]=Promise.all(t.map((e=>l[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"ff7a0cd910c8ec3cff7f43de0c680c7a"},{url:"install.bundle.js",revision:"1c1416c7befae3fa7bafb769454cf770"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"2b2163428cb8e145f433d069714ec9be"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));