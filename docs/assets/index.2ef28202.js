const Re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};Re();function H(){}function _e(t,e){for(const n in e)t[n]=e[n];return t}function Ye(t){return t()}function Pe(){return Object.create(null)}function J(t){t.forEach(Ye)}function Je(t){return typeof t=="function"}function C(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Qe(t){return Object.keys(t).length===0}function Ue(t,...e){if(t==null)return H;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function oe(t,e,n){t.$$.on_destroy.push(Ue(e,n))}function de(t,e,n){return t.set(n),e}function g(t,e){t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function pe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function G(){return te(" ")}function B(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ve(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t){return Array.from(t.childNodes)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function A(t,e,n){t.classList[n?"add":"remove"](e)}let Me;function le(t){Me=t}function be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const ne=[],Se=[],fe=[],Ie=[],Ze=Promise.resolve();let ke=!1;function et(){ke||(ke=!0,Ze.then(Oe))}function xe(t){fe.push(t)}const we=new Set;let ce=0;function Oe(){const t=Me;do{for(;ce<ne.length;){const e=ne[ce];ce++,le(e),tt(e.$$)}for(le(null),ne.length=0,ce=0;Se.length;)Se.pop()();for(let e=0;e<fe.length;e+=1){const n=fe[e];we.has(n)||(we.add(n),n())}fe.length=0}while(ne.length);for(;Ie.length;)Ie.pop()();ke=!1,we.clear(),le(t)}function tt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(xe)}}const ue=new Set;let X;function K(){X={r:0,c:[],p:X}}function R(){X.r||J(X.c),X=X.p}function k(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(ue.has(t))return;ue.add(t),X.c.push(()=>{ue.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function $e(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],l=e[o];if(l){for(const f in i)f in l||(r[f]=1);for(const f in l)s[f]||(n[f]=l[f],s[f]=1);t[o]=l}else for(const f in i)s[f]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ye(t){return typeof t=="object"&&t!==null?t:{}}function q(t){t&&t.c()}function S(t,e,n,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),r||xe(()=>{const f=o.map(Ye).filter(Je);i?i.push(...f):J(f),t.$$.on_mount=[]}),l.forEach(xe)}function I(t,e){const n=t.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,s,o,i,l=[-1]){const f=Me;le(t);const c=t.$$={fragment:null,ctx:null,props:o,update:H,not_equal:s,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Pe(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};i&&i(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...v)=>{const T=v.length?v[0]:h;return c.ctx&&s(c.ctx[a],c.ctx[a]=T)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](T),u&&nt(t,a)),h}):[],c.update(),u=!0,J(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const a=Xe(e.target);c.fragment&&c.fragment.l(a),a.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&k(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),Oe()}le(f)}class Y{$destroy(){I(this,1),this.$destroy=H}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ee=[];function De(t,e=H){let n;const r=new Set;function s(l){if(C(t,l)&&(t=l,n)){const f=!ee.length;for(const c of r)c[1](),ee.push(c,t);if(f){for(let c=0;c<ee.length;c+=2)ee[c][0](ee[c+1]);ee.length=0}}}function o(l){s(l(t))}function i(l,f=H){const c=[l,f];return r.add(c),r.size===1&&(n=e(s)||H),l(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:i}}const se=[{id:1,name:"\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",pic:"https://im.wampi.ru/2022/07/29/project-pic-01.jpg",description:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A. \u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0443\u043B\u0443\u0447\u0448\u0435\u043D \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0443\u0440\u043E\u043A\u043E\u043C: \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u0441\u043B\u0430\u0439\u0434 \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435."},{id:2,name:"Drag & Drop",pic:"https://im.wampi.ru/2022/07/29/project-pic-02.png",description:"\u041C\u0438\u043D\u0438-\u043A\u043B\u043E\u043D Trello \u0441 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u043C Drag & Drop"},{id:3,name:"\u0421\u043B\u0430\u0439\u0434\u0435\u0440",pic:"https://ie.wampi.ru/2022/07/30/2022-07-30_13-45-55.jpg",description:"\u0412\u043F\u0435\u0447\u0430\u0442\u043B\u044F\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434\u0435\u0440 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A"}],ie=De(0),qe=De(0);function rt(t){let e,n,r,s,o,i,l,f,c;return{c(){e=_("div"),n=_("div"),r=_("h3"),r.textContent=`${t[1]}`,s=G(),o=_("article"),o.textContent=`${t[3]}`,i=G(),l=_("div"),m(r,"class","svelte-e0fqcu"),m(o,"class","description"),A(o,"hidden",!t[0]),m(n,"class","text svelte-e0fqcu"),m(l,"class","pic svelte-e0fqcu"),N(l,"background-image","url("+t[2]+")"),A(l,"hidden",!t[0]),m(e,"class","card svelte-e0fqcu")},m(u,a){V(u,e,a),g(e,n),g(n,r),g(n,s),g(n,o),g(e,i),g(e,l),f||(c=B(e,"click",t[4]),f=!0)},p(u,[a]){a&1&&A(o,"hidden",!u[0]),a&1&&A(l,"hidden",!u[0])},i:H,o:H,d(u){u&&E(e),f=!1,c()}}}function lt(t,e,n){let r,s,o;oe(t,qe,h=>n(6,s=h)),oe(t,ie,h=>n(7,o=h));let{project:i}=e;const{id:l,name:f,pic:c,description:u}=i,a=()=>de(qe,s=s==l?de(ie,o=l,o):l,s);return t.$$set=h=>{"project"in h&&n(5,i=h.project)},t.$$.update=()=>{t.$$.dirty&64&&n(0,r=s==l)},[r,f,c,u,a,i,s]}class st extends Y{constructor(e){super(),W(this,e,lt,rt,C,{project:5})}}function Ge(t,e,n){const r=t.slice();return r[0]=e[n],r}function ze(t){let e,n;return e=new st({props:{project:t[0]}}),{c(){q(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:H,i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function ot(t){let e,n,r,s,o,i=se,l=[];for(let c=0;c<i.length;c+=1)l[c]=ze(Ge(t,i,c));const f=c=>D(l[c],1,1,()=>{l[c]=null});return{c(){e=_("main"),n=_("article");for(let c=0;c<l.length;c+=1)l[c].c();r=G(),s=_("div"),s.innerHTML=`\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u0441\u0434\u0435\u043B\u0430\u043D\u044B \u043D\u0430 Svelte, \u0442\u0430\u043A \u043A\u0430\u043A \u043D\u0430 Vanilla \u0431\u044B\u043B\u043E \u0441\u043A\u0443\u0447\u043D\u043E, \u0430 Svelte \u044F \u043F\u0440\u044F\u043C\u043E
    \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u0437\u0443\u0447\u0430\u044E. <br/>\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043A\u043E\u0434\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C
    <a href="https://github.com/c-c-6ypo8/js_minin_marathon_5">\u0437\u0434\u0435\u0441\u044C</a>.`,m(n,"class","list svelte-v4lgu6"),m(s,"class","comment svelte-v4lgu6"),m(e,"class","list-page svelte-v4lgu6")},m(c,u){V(c,e,u),g(e,n);for(let a=0;a<l.length;a+=1)l[a].m(n,null);g(e,r),g(e,s),o=!0},p(c,[u]){if(u&0){i=se;let a;for(a=0;a<i.length;a+=1){const h=Ge(c,i,a);l[a]?(l[a].p(h,u),k(l[a],1)):(l[a]=ze(h),l[a].c(),k(l[a],1),l[a].m(n,null))}for(K(),a=i.length;a<l.length;a+=1)f(a);R()}},i(c){if(!o){for(let u=0;u<i.length;u+=1)k(l[u]);o=!0}},o(c){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);o=!1},d(c){c&&E(e),pe(l,c)}}}class it extends Y{constructor(e){super(),W(this,e,null,ot,C,{})}}function ct(t){let e,n,r,s,o;return{c(){e=_("div"),n=te("\u2190"),m(e,"class",r="no-selection arrow-left "+t[0]+" svelte-1iwyhaq"),m(e,"title","\u041D\u0430\u0437\u0430\u0434")},m(i,l){V(i,e,l),g(e,n),s||(o=B(e,"click",t[1]),s=!0)},p(i,[l]){l&1&&r!==(r="no-selection arrow-left "+i[0]+" svelte-1iwyhaq")&&m(e,"class",r)},i:H,o:H,d(i){i&&E(e),s=!1,o()}}}function at(t,e,n){let r;oe(t,ie,i=>n(2,r=i));let{theme:s="light"}=e;const o=()=>{de(ie,r=0,r)};return t.$$set=i=>{"theme"in i&&n(0,s=i.theme)},[s,o]}class He extends Y{constructor(e){super(),W(this,e,at,ct,C,{theme:0})}}const Ae=De(""),Le=[{name:"Buffalo",pic:"https://images.unsplash.com/photo-1658847344712-7667fc61a597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Monkey",pic:"https://images.unsplash.com/photo-1630475417393-63741a3bfc97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},{name:"Chameleon",pic:"https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Leo",pic:"https://images.unsplash.com/photo-1654541245278-392677ee68ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"},{name:"Bee",pic:"https://images.unsplash.com/photo-1654920139911-b529a68903c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}];function ft(t){let e,n,r,s,o;return{c(){e=_("div"),n=_("h3"),r=te(t[0]),m(n,"class","svelte-182x119"),m(e,"class","slide svelte-182x119"),N(e,"background-image","url('"+t[1]+"')"),A(e,"active",t[2]==t[0])},m(i,l){V(i,e,l),g(e,n),g(n,r),s||(o=B(e,"click",t[3]),s=!0)},p(i,[l]){l&1&&ge(r,i[0]),l&2&&N(e,"background-image","url('"+i[1]+"')"),l&5&&A(e,"active",i[2]==i[0])},i:H,o:H,d(i){i&&E(e),s=!1,o()}}}function ut(t,e,n){let r;oe(t,Ae,l=>n(2,r=l));let{name:s,pic:o}=e;const i=()=>de(Ae,r=r==s?"":s,r);return t.$$set=l=>{"name"in l&&n(0,s=l.name),"pic"in l&&n(1,o=l.pic)},[s,o,r,i]}class dt extends Y{constructor(e){super(),W(this,e,ut,ft,C,{name:0,pic:1})}}function Ce(t,e,n){const r=t.slice();return r[0]=e[n],r}function Ee(t){let e,n;return e=new dt({props:{name:t[0].name,pic:t[0].pic}}),{c(){q(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:H,i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function pt(t){let e,n,r,s,o;n=new He({props:{theme:"dark"}});let i=Le,l=[];for(let c=0;c<i.length;c+=1)l[c]=Ee(Ce(t,i,c));const f=c=>D(l[c],1,1,()=>{l[c]=null});return{c(){e=_("div"),q(n.$$.fragment),r=G(),s=_("div");for(let c=0;c<l.length;c+=1)l[c].c();m(s,"class","slides svelte-4psmkf"),m(e,"class","slides-page svelte-4psmkf")},m(c,u){V(c,e,u),S(n,e,null),g(e,r),g(e,s);for(let a=0;a<l.length;a+=1)l[a].m(s,null);o=!0},p(c,[u]){if(u&0){i=Le;let a;for(a=0;a<i.length;a+=1){const h=Ce(c,i,a);l[a]?(l[a].p(h,u),k(l[a],1)):(l[a]=Ee(h),l[a].c(),k(l[a],1),l[a].m(s,null))}for(K(),a=i.length;a<l.length;a+=1)f(a);R()}},i(c){if(!o){k(n.$$.fragment,c);for(let u=0;u<i.length;u+=1)k(l[u]);o=!0}},o(c){D(n.$$.fragment,c),l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);o=!1},d(c){c&&E(e),I(n),pe(l,c)}}}class gt extends Y{constructor(e){super(),W(this,e,null,pt,C,{})}}function mt(t){let e,n,r,s;return{c(){e=_("div"),n=te(t[0]),m(e,"class","item svelte-1o8lu0g"),m(e,"draggable","true"),A(e,"left-its-place",t[1])},m(o,i){V(o,e,i),g(e,n),r||(s=[B(e,"dragstart",t[2]),B(e,"dragend",t[3])],r=!0)},p(o,[i]){i&1&&ge(n,o[0]),i&2&&A(e,"left-its-place",o[1])},i:H,o:H,d(o){o&&E(e),r=!1,J(s)}}}function ht(t,e,n){let{text:r=""}=e;const s=()=>{setTimeout(()=>n(1,i=!0),0)},o=()=>{n(1,i=!1)};let i=!1;return t.$$set=l=>{"text"in l&&n(0,r=l.text)},[r,i,s,o]}class ae extends Y{constructor(e){super(),W(this,e,ht,mt,C,{text:0})}}function _t(t){let e,n,r,s,o,i,l,f,c,u,a,h,v,T,P,w,M,z,$,x,Z,d;n=new He({props:{theme:"light"}});const y=[t[6]];var p=t[0];function O(b){let j={};for(let L=0;L<y.length;L+=1)j=_e(j,y[L]);return{props:j}}p&&(v=new p(O()));const me=[t[6]];var Q=t[1];function je(b){let j={};for(let L=0;L<me.length;L+=1)j=_e(j,me[L]);return{props:j}}Q&&(w=new Q(je()));const he=[t[6]];var U=t[2];function Be(b){let j={};for(let L=0;L<he.length;L+=1)j=_e(j,he[L]);return{props:j}}return U&&($=new U(Be())),{c(){e=_("div"),q(n.$$.fragment),r=G(),s=_("div"),o=_("div"),i=_("div"),i.textContent="\u041D\u0430\u0447\u0430\u0442\u044C",l=G(),f=_("div"),f.textContent="\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435",c=G(),u=_("div"),u.textContent="\u0413\u043E\u0442\u043E\u0432\u044B",a=G(),h=_("div"),v&&q(v.$$.fragment),T=G(),P=_("div"),w&&q(w.$$.fragment),M=G(),z=_("div"),$&&q($.$$.fragment),m(i,"class","task task-start svelte-czd9eo"),m(f,"class","task task-in-process svelte-czd9eo"),m(u,"class","task task-ready svelte-czd9eo"),m(h,"class","place svelte-czd9eo"),A(h,"hovered",t[4]&&t[0]===null),m(P,"class","place svelte-czd9eo"),A(P,"hovered",t[5]&&t[1]===null),m(z,"class","place svelte-czd9eo"),A(z,"hovered",t[3]&&t[2]===null),m(o,"class","task-list svelte-czd9eo"),m(s,"class","task-list-container svelte-czd9eo"),m(e,"class","dragndrop-page svelte-czd9eo")},m(b,j){V(b,e,j),S(n,e,null),g(e,r),g(e,s),g(s,o),g(o,i),g(o,l),g(o,f),g(o,c),g(o,u),g(o,a),g(o,h),v&&S(v,h,null),g(o,T),g(o,P),w&&S(w,P,null),g(o,M),g(o,z),$&&S($,z,null),x=!0,Z||(d=[B(h,"dragenter",t[13]),B(h,"dragleave",t[14]),B(h,"dragover",ve(t[12])),B(h,"drop",t[9]),B(P,"dragenter",t[15]),B(P,"dragleave",t[16]),B(P,"dragover",ve(t[11])),B(P,"drop",t[7]),B(z,"dragenter",t[17]),B(z,"dragleave",t[18]),B(z,"dragover",ve(t[10])),B(z,"drop",t[8])],Z=!0)},p(b,[j]){const L=j&64?$e(y,[ye(b[6])]):{};if(p!==(p=b[0])){if(v){K();const F=v;D(F.$$.fragment,1,0,()=>{I(F,1)}),R()}p?(v=new p(O()),q(v.$$.fragment),k(v.$$.fragment,1),S(v,h,null)):v=null}else p&&v.$set(L);j&17&&A(h,"hovered",b[4]&&b[0]===null);const Fe=j&64?$e(me,[ye(b[6])]):{};if(Q!==(Q=b[1])){if(w){K();const F=w;D(F.$$.fragment,1,0,()=>{I(F,1)}),R()}Q?(w=new Q(je()),q(w.$$.fragment),k(w.$$.fragment,1),S(w,P,null)):w=null}else Q&&w.$set(Fe);j&34&&A(P,"hovered",b[5]&&b[1]===null);const Ke=j&64?$e(he,[ye(b[6])]):{};if(U!==(U=b[2])){if($){K();const F=$;D(F.$$.fragment,1,0,()=>{I(F,1)}),R()}U?($=new U(Be()),q($.$$.fragment),k($.$$.fragment,1),S($,z,null)):$=null}else U&&$.$set(Ke);j&12&&A(z,"hovered",b[3]&&b[2]===null)},i(b){x||(k(n.$$.fragment,b),v&&k(v.$$.fragment,b),w&&k(w.$$.fragment,b),$&&k($.$$.fragment,b),x=!0)},o(b){D(n.$$.fragment,b),v&&D(v.$$.fragment,b),w&&D(w.$$.fragment,b),$&&D($.$$.fragment,b),x=!1},d(b){b&&E(e),I(n),v&&I(v),w&&I(w),$&&I($),Z=!1,J(d)}}}function vt(t,e,n){let r=ae,s=null,o=null,i={text:"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438 \u043C\u0435\u043D\u044F"},l,f,c=!1;const u=()=>{n(0,r=null),n(2,o=null),n(1,s=ae)},a=()=>{n(0,r=null),n(2,o=ae),n(1,s=null)},h=()=>{n(0,r=ae),n(2,o=null),n(1,s=null)};function v(d){be.call(this,t,d)}function T(d){be.call(this,t,d)}function P(d){be.call(this,t,d)}return[r,s,o,l,f,c,i,u,a,h,v,T,P,()=>n(4,f=!0),()=>n(4,f=!1),()=>n(5,c=!0),()=>n(5,c=!1),()=>n(3,l=!0),()=>n(3,l=!1)]}class bt extends Y{constructor(e){super(),W(this,e,vt,_t,C,{})}}function wt(t){let e,n,r,s,o,i;return{c(){e=_("div"),n=_("h1"),r=te(t[0]),s=G(),o=_("p"),i=te(t[1]),m(n,"class","slide-title svelte-gxoaer"),m(e,"class","slide svelte-gxoaer"),N(e,"background","linear-gradient(210.0deg, "+t[2]+" 0%, "+t[3]+" 150%)")},m(l,f){V(l,e,f),g(e,n),g(n,r),g(e,s),g(e,o),g(o,i)},p(l,[f]){f&1&&ge(r,l[0]),f&2&&ge(i,l[1]),f&12&&N(e,"background","linear-gradient(210.0deg, "+l[2]+" 0%, "+l[3]+" 150%)")},i:H,o:H,d(l){l&&E(e)}}}function $t(t,e,n){let{title:r,description:s,color1:o,color2:i}=e;return t.$$set=l=>{"title"in l&&n(0,r=l.title),"description"in l&&n(1,s=l.description),"color1"in l&&n(2,o=l.color1),"color2"in l&&n(3,i=l.color2)},[r,s,o,i]}class yt extends Y{constructor(e){super(),W(this,e,$t,wt,C,{title:0,description:1,color1:2,color2:3})}}function kt(t){let e;return{c(){e=_("div"),m(e,"class","main-slide svelte-1tumemo"),N(e,"background-image","url("+t[0]+")")},m(n,r){V(n,e,r)},p(n,[r]){r&1&&N(e,"background-image","url("+n[0]+")")},i:H,o:H,d(n){n&&E(e)}}}function xt(t,e,n){let{url:r}=e;return t.$$set=s=>{"url"in s&&n(0,r=s.url)},[r]}class Mt extends Y{constructor(e){super(),W(this,e,xt,kt,C,{url:0})}}const re=[{title:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u043D\u044B\u0439 \u043C\u043E\u0441\u0442",description:"\u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F",url:"https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80",color1:"#FD9391",color2:"#CA1243"},{title:"\u0424\u043E\u043D\u0442\u0430\u043D \u0422\u0440\u0435\u0432\u0438",description:"\u0420\u0438\u043C, \u0418\u0442\u0430\u043B\u0438\u044F",url:"https://images.unsplash.com/photo-1529154166925-574a0236a4f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",color1:"#D99F65",color2:"#775133"},{title:"\u041F\u0430\u0440\u0438\u0436\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442",description:"\u041F\u0430\u0440\u0438\u0436, \u0424\u0440\u0430\u043D\u0446\u0438\u044F",url:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80",color1:"#655267",color2:"#FEC73B"},{title:"\u041E\u0441\u0432\u0435\u0449\u0451\u043D\u043D\u0430\u044F \u0430\u043B\u043B\u0435\u044F",description:"\u041A\u0438\u043E\u0442\u043E, \u042F\u043F\u043E\u043D\u0438\u044F",url:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",color1:"#5F5C9B",color2:"#013482"}];function Te(t,e,n){const r=t.slice();return r[5]=e[n],r}function Ne(t,e,n){const r=t.slice();return r[5]=e[n],r}function Ve(t){let e,n;return e=new yt({props:{title:t[5].title,description:t[5].description,color1:t[5].color1,color2:t[5].color2}}),{c(){q(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:H,i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function We(t){let e,n;return e=new Mt({props:{url:t[5].url}}),{c(){q(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:H,i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function Dt(t){let e,n,r,s,o,i,l,f,c,u,a,h,v,T,P;r=new He({props:{theme:"light"}});let w=re,M=[];for(let d=0;d<w.length;d+=1)M[d]=Ve(Ne(t,w,d));const z=d=>D(M[d],1,1,()=>{M[d]=null});let $=[...re].reverse(),x=[];for(let d=0;d<$.length;d+=1)x[d]=We(Te(t,$,d));const Z=d=>D(x[d],1,1,()=>{x[d]=null});return{c(){e=_("div"),n=_("div"),q(r.$$.fragment),s=G(),o=_("div");for(let d=0;d<M.length;d+=1)M[d].c();i=G(),l=_("div");for(let d=0;d<x.length;d+=1)x[d].c();f=G(),c=_("div"),u=_("button"),u.innerHTML='<i class="fas fa-arrow-down"></i>',a=G(),h=_("button"),h.innerHTML='<i class="fas fa-arrow-up"></i>',m(n,"class","backbutton-container svelte-1m9zrne"),m(o,"class","sidebar svelte-1m9zrne"),N(o,"top",t[0]+"vh"),m(l,"class","mainbar svelte-1m9zrne"),N(l,"top",t[1]+"vh"),m(u,"class","down-button svelte-1m9zrne"),m(h,"class","up-button svelte-1m9zrne"),m(c,"class","controls"),m(e,"class","slider-page svelte-1m9zrne")},m(d,y){V(d,e,y),g(e,n),S(r,n,null),g(e,s),g(e,o);for(let p=0;p<M.length;p+=1)M[p].m(o,null);g(e,i),g(e,l);for(let p=0;p<x.length;p+=1)x[p].m(l,null);g(e,f),g(e,c),g(c,u),g(c,a),g(c,h),v=!0,T||(P=[B(u,"click",t[2]),B(h,"click",t[3])],T=!0)},p(d,[y]){if(y&0){w=re;let p;for(p=0;p<w.length;p+=1){const O=Ne(d,w,p);M[p]?(M[p].p(O,y),k(M[p],1)):(M[p]=Ve(O),M[p].c(),k(M[p],1),M[p].m(o,null))}for(K(),p=w.length;p<M.length;p+=1)z(p);R()}if((!v||y&1)&&N(o,"top",d[0]+"vh"),y&0){$=[...re].reverse();let p;for(p=0;p<$.length;p+=1){const O=Te(d,$,p);x[p]?(x[p].p(O,y),k(x[p],1)):(x[p]=We(O),x[p].c(),k(x[p],1),x[p].m(l,null))}for(K(),p=$.length;p<x.length;p+=1)Z(p);R()}(!v||y&2)&&N(l,"top",d[1]+"vh")},i(d){if(!v){k(r.$$.fragment,d);for(let y=0;y<w.length;y+=1)k(M[y]);for(let y=0;y<$.length;y+=1)k(x[y]);v=!0}},o(d){D(r.$$.fragment,d),M=M.filter(Boolean);for(let y=0;y<M.length;y+=1)D(M[y]);x=x.filter(Boolean);for(let y=0;y<x.length;y+=1)D(x[y]);v=!1},d(d){d&&E(e),I(r),pe(M,d),pe(x,d),T=!1,J(P)}}}function Ht(t,e,n){const r=-(re.length-1)*100;let s=0,o=r;return[s,o,()=>{n(0,s=s-100<r?0:n(0,s-=100)),n(1,o=r-s)},()=>{n(1,o=o-100<r?0:n(1,o-=100)),n(0,s=r-o)}]}class jt extends Y{constructor(e){super(),W(this,e,Ht,Dt,C,{})}}function Bt(t){let e,n,r;var s=t[0];function o(i){return{}}return s&&(n=new s(o())),{c(){e=_("main"),n&&q(n.$$.fragment),m(e,"class","svelte-flfq7a")},m(i,l){V(i,e,l),n&&S(n,e,null),r=!0},p(i,[l]){if(s!==(s=i[0])){if(n){K();const f=n;D(f.$$.fragment,1,0,()=>{I(f,1)}),R()}s?(n=new s(o()),q(n.$$.fragment),k(n.$$.fragment,1),S(n,e,null)):n=null}},i(i){r||(n&&k(n.$$.fragment,i),r=!0)},o(i){n&&D(n.$$.fragment,i),r=!1},d(i){i&&E(e),n&&I(n)}}}function Pt(t,e,n){let r;oe(t,ie,l=>n(1,r=l));const s=[{id:0,name:"5 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0437\u0430 5 \u0434\u043D\u0435\u0439",component:it},{...se[0],component:gt},{...se[1],component:bt},{...se[2],component:jt}];let o;const i=l=>{n(0,o=s[l].component),document.title=s[l].name};return t.$$.update=()=>{t.$$.dirty&2&&i(r)},[o,r]}class St extends Y{constructor(e){super(),W(this,e,Pt,Bt,C,{})}}new St({target:document.getElementById("app")});
