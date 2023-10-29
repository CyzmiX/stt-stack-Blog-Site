import{K as S,s as H,e as $,i as D,d as b,D as B,f as w,a as C,l as I,g as x,h as T,E as L,c as M,m as V,j as m,x as h,C as N,n as O,G as U}from"./scheduler.c2dc8c0f.js";import{S as W,i as Z,a as k,g as q,t as F,c as z,f as A,h as G}from"./index.5b389fc0.js";import{j as K}from"./singletons.7d3b1378.js";function E(n){const t=n-1;return t*t*t+1}function J(n,{delay:t=0,duration:e=400,easing:a=S}={}){const r=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:a,css:s=>`opacity: ${s*r}`}}function et(n,{delay:t=0,duration:e=400,easing:a=E,axis:r="y"}={}){const s=getComputedStyle(n),p=+s.opacity,i=r==="y"?"height":"width",o=parseFloat(s[i]),u=r==="y"?["top","bottom"]:["left","right"],c=u.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),_=parseFloat(s[`padding${c[0]}`]),g=parseFloat(s[`padding${c[1]}`]),y=parseFloat(s[`margin${c[0]}`]),v=parseFloat(s[`margin${c[1]}`]),l=parseFloat(s[`border${c[0]}Width`]),f=parseFloat(s[`border${c[1]}Width`]);return{delay:t,duration:e,easing:a,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*p};${i}: ${d*o}px;padding-${u[0]}: ${d*_}px;padding-${u[1]}: ${d*g}px;margin-${u[0]}: ${d*y}px;margin-${u[1]}: ${d*v}px;border-${u[0]}-width: ${d*l}px;border-${u[1]}-width: ${d*f}px;`}}function P(n,{delay:t=0,duration:e=400,easing:a=E,start:r=0,opacity:s=0}={}){const p=getComputedStyle(n),i=+p.opacity,o=p.transform==="none"?"":p.transform,u=1-r,c=i*(1-s);return{delay:t,duration:e,easing:a,css:(_,g)=>`
			transform: ${o} scale(${1-u*g});
			opacity: ${i-c*g}
		`}}function j(n){let t,e,a='<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"></path></svg> <span class="sr-only">Error icon</span>',r,s,p,i,o,u='<span class="sr-only">Close</span> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg>',c,_,g,y,v;return{c(){t=w("div"),e=w("div"),e.innerHTML=a,r=C(),s=w("div"),p=I(n[0]),i=C(),o=w("button"),o.innerHTML=u,this.h()},l(l){t=x(l,"DIV",{id:!0,class:!0,role:!0});var f=T(t);e=x(f,"DIV",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1iuumdy"&&(e.innerHTML=a),r=M(f),s=x(f,"DIV",{class:!0});var d=T(s);p=V(d,n[0]),d.forEach(b),i=M(f),o=x(f,"BUTTON",{type:!0,class:!0,"data-dismiss-target":!0,"aria-label":!0,"data-svelte-h":!0}),L(o)!=="svelte-1vmpx1g"&&(o.innerHTML=u),f.forEach(b),this.h()},h(){m(e,"class","inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"),m(s,"class","ml-3 text-sm font-normal"),m(o,"type","button"),m(o,"class","ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"),m(o,"data-dismiss-target","#toast-danger"),m(o,"aria-label","Close"),m(t,"id","toast-danger"),m(t,"class","flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 svelte-y01ehn"),m(t,"role","alert")},m(l,f){D(l,t,f),h(t,e),h(t,r),h(t,s),h(s,p),h(t,i),h(t,o),g=!0,y||(v=N(o,"click",n[3]),y=!0)},p(l,f){(!g||f&1)&&O(p,l[0])},i(l){g||(l&&U(()=>{g&&(_&&_.end(1),c=A(t,P,{}),c.start())}),g=!0)},o(l){c&&c.invalidate(),l&&(_=G(t,J,{})),g=!1},d(l){l&&b(t),l&&_&&_.end(),y=!1,v()}}}function Q(n){let t,e=n[1]&&j(n);return{c(){e&&e.c(),t=$()},l(a){e&&e.l(a),t=$()},m(a,r){e&&e.m(a,r),D(a,t,r)},p(a,[r]){a[1]?e?(e.p(a,r),r&2&&k(e,1)):(e=j(a),e.c(),k(e,1),e.m(t.parentNode,t)):e&&(q(),F(e,1,1,()=>{e=null}),z())},i(a){k(e)},o(a){F(e)},d(a){a&&b(t),e&&e.d(a)}}}function R(n,t,e){let{msg:a=""}=t,{show:r=!1}=t;const s=B(),p=()=>s("close");return n.$$set=i=>{"msg"in i&&e(0,a=i.msg),"show"in i&&e(1,r=i.show)},[a,r,s,p]}class at extends W{constructor(t){super(),Z(this,t,R,Q,H,{msg:0,show:1})}}const st=K("goto");export{at as T,st as g,et as s};
