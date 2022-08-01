const _t=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}};_t();function B(){}function dt(t){return t()}function Fe(){return Object.create(null)}function Z(t){t.forEach(dt)}function mt(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return B;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function T(t,e,n){t.$$.on_destroy.push(pt(e,n))}function V(t,e,n){return t.set(n),e}function d(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function P(){return L(" ")}function Le(){return L("")}function q(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function vt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function z(t,e,n){t.classList[n?"add":"remove"](e)}function $t(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,r,e),l}let he;function ge(t){he=t}function yt(){if(!he)throw new Error("Function called outside component initialization");return he}function kt(){const t=yt();return(e,n,{cancelable:r=!1}={})=>{const l=t.$$.callbacks[e];if(l){const i=$t(e,n,{cancelable:r});return l.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}function Dt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const me=[],Se=[],De=[],Xe=[],Bt=Promise.resolve();let Ge=!1;function jt(){Ge||(Ge=!0,Bt.then(gt))}function Ae(t){De.push(t)}const Ee=new Set;let ve=0;function gt(){const t=he;do{for(;ve<me.length;){const e=me[ve];ve++,ge(e),Mt(e.$$)}for(ge(null),me.length=0,ve=0;Se.length;)Se.pop()();for(let e=0;e<De.length;e+=1){const n=De[e];Ee.has(n)||(Ee.add(n),n())}De.length=0}while(me.length);for(;Xe.length;)Xe.pop()();Ge=!1,Ee.clear(),ge(t)}function Mt(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ae)}}const Be=new Set;let oe;function R(){oe={r:0,c:[],p:oe}}function U(){oe.r||Z(oe.c),oe=oe.p}function b(t,e){t&&t.i&&(Be.delete(t),t.i(e))}function y(t,e,n,r){if(t&&t.o){if(Be.has(t))return;Be.add(t),oe.c.push(()=>{Be.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function G(t){t&&t.c()}function H(t,e,n,r){const{fragment:l,on_mount:i,on_destroy:s,after_update:o}=t.$$;l&&l.m(e,n),r||Ae(()=>{const f=i.map(dt).filter(mt);s?s.push(...f):Z(f),t.$$.on_mount=[]}),o.forEach(Ae)}function E(t,e){const n=t.$$;n.fragment!==null&&(Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(me.push(t),jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,l,i,s,o=[-1]){const f=he;ge(t);const c=t.$$={fragment:null,ctx:null,props:i,update:B,not_equal:l,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Fe(),dirty:o,skip_bound:!1,root:e.target||f.$$.root};s&&s(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(a,v,...$)=>{const h=$.length?$[0]:v;return c.ctx&&l(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),u&&xt(t,a)),v}):[],c.update(),u=!0,Z(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&b(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),gt()}ge(f)}class O{$destroy(){E(this,1),this.$destroy=B}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ue=[];function It(t,e){return{subscribe:Q(t,e).subscribe}}function Q(t,e=B){let n;const r=new Set;function l(o){if(N(t,o)&&(t=o,n)){const f=!ue.length;for(const c of r)c[1](),ue.push(c,t);if(f){for(let c=0;c<ue.length;c+=2)ue[c][0](ue[c+1]);ue.length=0}}}function i(o){l(o(t))}function s(o,f=B){const c=[o,f];return r.add(c),r.size===1&&(n=e(l)||B),o(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:l,update:i,subscribe:s}}function Pt(t,e,n){const r=!Array.isArray(t),l=r?[t]:t,i=e.length<2;return It(n,s=>{let o=!1;const f=[];let c=0,u=B;const a=()=>{if(c)return;u();const $=e(r?f[0]:f,s);i?s($):u=mt($)?$:B},v=l.map(($,h)=>pt($,Y=>{f[h]=Y,c&=~(1<<h),o&&a()},()=>{c|=1<<h}));return o=!0,a(),function(){Z(v),u()}})}const le=[{id:1,name:"\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",pic:"https://im.wampi.ru/2022/07/29/project-pic-01.jpg",description:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A. \u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0443\u043B\u0443\u0447\u0448\u0435\u043D \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0443\u0440\u043E\u043A\u043E\u043C: \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u0441\u043B\u0430\u0439\u0434 \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435."},{id:2,name:"Drag & Drop",pic:"https://im.wampi.ru/2022/07/29/project-pic-02.png",description:"\u041C\u0438\u043D\u0438-\u043A\u043B\u043E\u043D Trello \u0441 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u043C Drag & Drop. \u041F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0443\u0440\u043E\u043A\u043E\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0434\u0432\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u044D\u0442\u0438\u043C \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0430 \u043B\u043E\u0433\u0438\u043A\u0430. \u0422\u0435\u043F\u0435\u0440\u044C (\u0442\u0435\u043E\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438) \u043C\u043E\u0436\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043B\u044E\u0431\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0434\u0430\u0447 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u043B\u044E\u0431\u0443\u044E \u043B\u043E\u0433\u0438\u043A\u0443 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043D\u0438\u043C\u0438."},{id:3,name:"\u0421\u043B\u0430\u0439\u0434\u0435\u0440",pic:"https://ie.wampi.ru/2022/07/30/2022-07-30_13-45-55.jpg",description:"\u0412\u043F\u0435\u0447\u0430\u0442\u043B\u044F\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434\u0435\u0440 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A. \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043B\u0430\u0439\u0434\u043E\u0432 \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u043C\u044B\u0448\u044C\u044E \u043D\u0430 \u0441\u043B\u0430\u0439\u0434\u0435 \u0438\u043B\u0438 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435. \u0410 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0430\u043C \u0412\u0432\u0435\u0440\u0445/\u0412\u043D\u0438\u0437 \u0438 PageDown/PageUp."},{id:4,name:"\u0425\u043E\u0432\u0435\u0440-\u0434\u043E\u0441\u043A\u0430",pic:"https://ic.wampi.ru/2022/07/31/project-pic-04.png",description:"\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043D\u0438-\u0438\u0433\u0440\u0430 \u0441 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430."},{id:5,name:"\u0418\u0433\u0440\u0430",pic:"https://ic.wampi.ru/2022/07/31/project-pic-04.png",description:"\u0418\u0433\u0440\u0430 \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 AIM (\u043C\u0435\u0442\u043A\u043E\u0441\u0442\u0438) \u0441 \u0442\u0440\u0435\u043C\u044F \u044D\u043A\u0440\u0430\u043D\u0430\u043C\u0438."}],_e=Q(0),Ke=Q(0);function Ct(t){let e,n,r,l,i,s,o,f,c;return{c(){e=g("div"),n=g("div"),r=g("h3"),r.textContent=`${t[1]}`,l=P(),i=g("article"),i.textContent=`${t[3]}`,s=P(),o=g("div"),p(r,"class","svelte-e0fqcu"),p(i,"class","description"),z(i,"hidden",!t[0]),p(n,"class","text svelte-e0fqcu"),p(o,"class","pic svelte-e0fqcu"),x(o,"background-image","url("+t[2]+")"),z(o,"hidden",!t[0]),p(e,"class","card svelte-e0fqcu")},m(u,a){A(u,e,a),d(e,n),d(n,r),d(n,l),d(n,i),d(e,s),d(e,o),f||(c=q(e,"click",t[4]),f=!0)},p(u,[a]){a&1&&z(i,"hidden",!u[0]),a&1&&z(o,"hidden",!u[0])},i:B,o:B,d(u){u&&S(e),f=!1,c()}}}function Ht(t,e,n){let r,l,i;T(t,Ke,v=>n(6,l=v)),T(t,_e,v=>n(7,i=v));let{project:s}=e;const{id:o,name:f,pic:c,description:u}=s,a=()=>V(Ke,l=l==o?V(_e,i=o,i):o,l);return t.$$set=v=>{"project"in v&&n(5,s=v.project)},t.$$.update=()=>{t.$$.dirty&64&&n(0,r=l==o)},[r,f,c,u,a,s,l]}class Et extends O{constructor(e){super(),W(this,e,Ht,Ct,N,{project:5})}}function Re(t,e,n){const r=t.slice();return r[0]=e[n],r}function Ue(t){let e,n;return e=new Et({props:{project:t[0]}}),{c(){G(e.$$.fragment)},m(r,l){H(e,r,l),n=!0},p:B,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function St(t){let e,n,r,l,i,s=le,o=[];for(let c=0;c<s.length;c+=1)o[c]=Ue(Re(t,s,c));const f=c=>y(o[c],1,1,()=>{o[c]=null});return{c(){e=g("main"),n=g("article");for(let c=0;c<o.length;c+=1)o[c].c();r=P(),l=g("div"),l.innerHTML=`\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u0441\u0434\u0435\u043B\u0430\u043D\u044B \u043D\u0430 Svelte, \u0442\u0430\u043A \u043A\u0430\u043A \u043D\u0430 Vanilla \u0431\u044B\u043B\u043E \u0441\u043A\u0443\u0447\u043D\u043E, \u0430 Svelte \u044F \u043F\u0440\u044F\u043C\u043E
    \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u0437\u0443\u0447\u0430\u044E. <br/>\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043A\u043E\u0434\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C
    <a href="https://github.com/c-c-6ypo8/js_minin_marathon_5">\u0437\u0434\u0435\u0441\u044C</a>.`,p(n,"class","list svelte-v4lgu6"),p(l,"class","comment svelte-v4lgu6"),p(e,"class","list-page svelte-v4lgu6")},m(c,u){A(c,e,u),d(e,n);for(let a=0;a<o.length;a+=1)o[a].m(n,null);d(e,r),d(e,l),i=!0},p(c,[u]){if(u&0){s=le;let a;for(a=0;a<s.length;a+=1){const v=Re(c,s,a);o[a]?(o[a].p(v,u),b(o[a],1)):(o[a]=Ue(v),o[a].c(),b(o[a],1),o[a].m(n,null))}for(R(),a=s.length;a<o.length;a+=1)f(a);U()}},i(c){if(!i){for(let u=0;u<s.length;u+=1)b(o[u]);i=!0}},o(c){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)y(o[u]);i=!1},d(c){c&&S(e),se(o,c)}}}class Gt extends O{constructor(e){super(),W(this,e,null,St,N,{})}}function At(t){let e,n,r,l,i;return{c(){e=g("div"),n=L("\u2190"),p(e,"class",r="no-selection arrow-left "+t[0]+" svelte-1iwyhaq"),p(e,"title","\u041D\u0430\u0437\u0430\u0434")},m(s,o){A(s,e,o),d(e,n),l||(i=q(e,"click",t[1]),l=!0)},p(s,[o]){o&1&&r!==(r="no-selection arrow-left "+s[0]+" svelte-1iwyhaq")&&p(e,"class",r)},i:B,o:B,d(s){s&&S(e),l=!1,i()}}}function qt(t,e,n){let r;T(t,_e,s=>n(2,r=s));let{theme:l="light"}=e;const i=()=>{V(_e,r=0,r)};return t.$$set=s=>{"theme"in s&&n(0,l=s.theme)},[l,i]}class be extends O{constructor(e){super(),W(this,e,qt,At,N,{theme:0})}}const Ze=Q(""),Qe=[{name:"Buffalo",pic:"https://images.unsplash.com/photo-1658847344712-7667fc61a597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Monkey",pic:"https://images.unsplash.com/photo-1630475417393-63741a3bfc97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},{name:"Chameleon",pic:"https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Leo",pic:"https://images.unsplash.com/photo-1654541245278-392677ee68ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"},{name:"Bee",pic:"https://images.unsplash.com/photo-1654920139911-b529a68903c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}];function Lt(t){let e,n,r,l,i;return{c(){e=g("div"),n=g("h3"),r=L(t[0]),p(n,"class","svelte-182x119"),p(e,"class","slide svelte-182x119"),x(e,"background-image","url('"+t[1]+"')"),z(e,"active",t[2]==t[0])},m(s,o){A(s,e,o),d(e,n),d(n,r),l||(i=q(e,"click",t[3]),l=!0)},p(s,[o]){o&1&&te(r,s[0]),o&2&&x(e,"background-image","url('"+s[1]+"')"),o&5&&z(e,"active",s[2]==s[0])},i:B,o:B,d(s){s&&S(e),l=!1,i()}}}function Nt(t,e,n){let r;T(t,Ze,o=>n(2,r=o));let{name:l,pic:i}=e;const s=()=>V(Ze,r=r==l?"":l,r);return t.$$set=o=>{"name"in o&&n(0,l=o.name),"pic"in o&&n(1,i=o.pic)},[l,i,r,s]}class Tt extends O{constructor(e){super(),W(this,e,Nt,Lt,N,{name:0,pic:1})}}function Je(t,e,n){const r=t.slice();return r[0]=e[n],r}function et(t){let e,n;return e=new Tt({props:{name:t[0].name,pic:t[0].pic}}),{c(){G(e.$$.fragment)},m(r,l){H(e,r,l),n=!0},p:B,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function Wt(t){let e,n,r,l,i;n=new be({props:{theme:"dark"}});let s=Qe,o=[];for(let c=0;c<s.length;c+=1)o[c]=et(Je(t,s,c));const f=c=>y(o[c],1,1,()=>{o[c]=null});return{c(){e=g("div"),G(n.$$.fragment),r=P(),l=g("div");for(let c=0;c<o.length;c+=1)o[c].c();p(l,"class","slides svelte-4psmkf"),p(e,"class","slides-page svelte-4psmkf")},m(c,u){A(c,e,u),H(n,e,null),d(e,r),d(e,l);for(let a=0;a<o.length;a+=1)o[a].m(l,null);i=!0},p(c,[u]){if(u&0){s=Qe;let a;for(a=0;a<s.length;a+=1){const v=Je(c,s,a);o[a]?(o[a].p(v,u),b(o[a],1)):(o[a]=et(v),o[a].c(),b(o[a],1),o[a].m(l,null))}for(R(),a=s.length;a<o.length;a+=1)f(a);U()}},i(c){if(!i){b(n.$$.fragment,c);for(let u=0;u<s.length;u+=1)b(o[u]);i=!0}},o(c){y(n.$$.fragment,c),o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)y(o[u]);i=!1},d(c){c&&S(e),E(n),se(o,c)}}}class Ot extends O{constructor(e){super(),W(this,e,null,Wt,N,{})}}const fe=Q(),Me=Q(),qe=[{id:"started",name:"\u041D\u0430\u0447\u0430\u0442\u044C"},{id:"processed",name:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435"},{id:"ready",name:"\u0413\u043E\u0442\u043E\u0432\u044B"}];qe.map(t=>t.id);const je=Q([{id:"j8aZPjEELGW9_XNX7OzB5",categoryId:"started",text:"\u041A\u0443\u043F\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"},{id:"j8aZPjEELGW9_XNX7OzB7",categoryId:"started",text:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0434\u0443\u0448"},{id:"j8aZPjEELGW9_XNX7OzB8",categoryId:"processed",text:"\u0417\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044C \u043C\u0438\u0440"}]),ht=Pt(je,t=>{let e={started:[],processed:[],ready:[]};for(const n of t)e[n.categoryId].push(n);return e});function Vt(t){let e,n=t[0].text+"",r,l,i;return{c(){e=g("div"),r=L(n),p(e,"class","item svelte-npo8pr"),p(e,"draggable","true"),z(e,"left-its-place",t[1]==t[0])},m(s,o){A(s,e,o),d(e,r),l||(i=[q(e,"dragstart",t[2]),q(e,"dragend",t[3])],l=!0)},p(s,[o]){o&1&&n!==(n=s[0].text+"")&&te(r,n),o&3&&z(e,"left-its-place",s[1]==s[0])},i:B,o:B,d(s){s&&S(e),l=!1,Z(i)}}}function Yt(t,e,n){let r;T(t,fe,o=>n(1,r=o));let{item:l}=e;const i=()=>{setTimeout(()=>V(fe,r=l,r),0)},s=()=>{V(fe,r=void 0,r)};return t.$$set=o=>{"item"in o&&n(0,l=o.item)},[l,r,i,s]}class tt extends O{constructor(e){super(),W(this,e,Yt,Vt,N,{item:0})}}function zt(t){let e,n,r;return{c(){e=g("div"),p(e,"class","cell svelte-17qh2kp"),z(e,"dragged-over",t[0]&&t[1]),z(e,"drag-available",t[1])},m(l,i){A(l,e,i),n||(r=[q(e,"dragover",vt(t[8])),q(e,"dragenter",t[3]),q(e,"dragleave",t[4]),q(e,"drop",t[2])],n=!0)},p(l,[i]){i&3&&z(e,"dragged-over",l[0]&&l[1]),i&2&&z(e,"drag-available",l[1])},i:B,o:B,d(l){l&&S(e),n=!1,Z(r)}}}function Ft(t,e,n){let r,l,i,s;T(t,fe,$=>n(6,l=$)),T(t,ht,$=>n(7,i=$)),T(t,Me,$=>n(9,s=$));let{categoryId:o}=e;const f=()=>{r&&V(Me,s={categoryId:o},s),n(0,c=!1)};let c=!1;const u=()=>n(0,c=!0),a=()=>n(0,c=!1);function v($){Dt.call(this,t,$)}return t.$$set=$=>{"categoryId"in $&&n(5,o=$.categoryId)},t.$$.update=()=>{t.$$.dirty&224&&n(1,r=l&&(l.categoryId!==o||i[o].length>1&&i[o].slice(-1)[0].id!==l.id))},[c,r,f,u,a,o,l,i,v]}class nt extends O{constructor(e){super(),W(this,e,Ft,zt,N,{categoryId:5})}}function rt(t,e,n){const r=t.slice();return r[7]=e[n],r}function lt(t,e,n){const r=t.slice();return r[10]=e[n],r}function ot(t){let e,n,r;var l=tt;function i(s){return{props:{item:s[10]}}}return l&&(e=new l(i(t))),{c(){e&&G(e.$$.fragment),n=Le()},m(s,o){e&&H(e,s,o),A(s,n,o),r=!0},p(s,o){const f={};if(o&2&&(f.item=s[10]),l!==(l=tt)){if(e){R();const c=e;y(c.$$.fragment,1,0,()=>{E(c,1)}),U()}l?(e=new l(i(s)),G(e.$$.fragment),b(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else l&&e.$set(f)},i(s){r||(e&&b(e.$$.fragment,s),r=!0)},o(s){e&&y(e.$$.fragment,s),r=!1},d(s){s&&S(n),e&&E(e,s)}}}function st(t){let e,n,r;var l=nt;function i(s){return{props:{categoryId:s[7].id}}}return l&&(e=new l(i(t))),{c(){e&&G(e.$$.fragment),n=Le()},m(s,o){e&&H(e,s,o),A(s,n,o),r=!0},p(s,o){if(l!==(l=nt)){if(e){R();const f=e;y(f.$$.fragment,1,0,()=>{E(f,1)}),U()}l?(e=new l(i(s)),G(e.$$.fragment),b(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}},i(s){r||(e&&b(e.$$.fragment,s),r=!0)},o(s){e&&y(e.$$.fragment,s),r=!1},d(s){s&&S(n),e&&E(e,s)}}}function it(t){let e,n,r=t[7].name+"",l,i,s=t[1][t[7].id].length+"",o,f,c,u,a,v,$=t[1][t[7].id],h=[];for(let m=0;m<$.length;m+=1)h[m]=ot(lt(t,$,m));const Y=m=>y(h[m],1,1,()=>{h[m]=null});let k=(t[1][t[7].id].length!==1||t[0].length>1)&&st(t);return{c(){e=g("div"),n=g("div"),l=L(r),i=L(" ("),o=L(s),f=L(")"),c=P();for(let m=0;m<h.length;m+=1)h[m].c();u=P(),k&&k.c(),a=P(),p(n,"class","no-selection task tasks-"+t[7].id+" svelte-10mv7af"),p(e,"class","task-column svelte-10mv7af")},m(m,C){A(m,e,C),d(e,n),d(n,l),d(n,i),d(n,o),d(n,f),d(e,c);for(let D=0;D<h.length;D+=1)h[D].m(e,null);d(e,u),k&&k.m(e,null),d(e,a),v=!0},p(m,C){if((!v||C&2)&&s!==(s=m[1][m[7].id].length+"")&&te(o,s),C&2){$=m[1][m[7].id];let D;for(D=0;D<$.length;D+=1){const j=lt(m,$,D);h[D]?(h[D].p(j,C),b(h[D],1)):(h[D]=ot(j),h[D].c(),b(h[D],1),h[D].m(e,u))}for(R(),D=$.length;D<h.length;D+=1)Y(D);U()}m[1][m[7].id].length!==1||m[0].length>1?k?(k.p(m,C),C&3&&b(k,1)):(k=st(m),k.c(),b(k,1),k.m(e,a)):k&&(R(),y(k,1,1,()=>{k=null}),U())},i(m){if(!v){for(let C=0;C<$.length;C+=1)b(h[C]);b(k),v=!0}},o(m){h=h.filter(Boolean);for(let C=0;C<h.length;C+=1)y(h[C]);y(k),v=!1},d(m){m&&S(e),se(h,m),k&&k.d()}}}function Xt(t){let e,n,r,l,i;n=new be({props:{theme:"light"}});let s=qe,o=[];for(let c=0;c<s.length;c+=1)o[c]=it(rt(t,s,c));const f=c=>y(o[c],1,1,()=>{o[c]=null});return{c(){e=g("div"),G(n.$$.fragment),r=P(),l=g("div");for(let c=0;c<o.length;c+=1)o[c].c();p(l,"class","task-list svelte-10mv7af"),p(e,"class","dragndrop-page svelte-10mv7af")},m(c,u){A(c,e,u),H(n,e,null),d(e,r),d(e,l);for(let a=0;a<o.length;a+=1)o[a].m(l,null);i=!0},p(c,[u]){if(u&3){s=qe;let a;for(a=0;a<s.length;a+=1){const v=rt(c,s,a);o[a]?(o[a].p(v,u),b(o[a],1)):(o[a]=it(v),o[a].c(),b(o[a],1),o[a].m(l,null))}for(R(),a=s.length;a<o.length;a+=1)f(a);U()}},i(c){if(!i){b(n.$$.fragment,c);for(let u=0;u<s.length;u+=1)b(o[u]);i=!0}},o(c){y(n.$$.fragment,c),o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)y(o[u]);i=!1},d(c){c&&S(e),E(n),se(o,c)}}}function Kt(t,e,n){let r,l,i,s;T(t,Me,u=>n(2,r=u)),T(t,fe,u=>n(3,l=u)),T(t,je,u=>n(0,i=u)),T(t,ht,u=>n(1,s=u));const o=u=>{V(je,i=i==null?void 0:i.filter(a=>a.id!==u.id),i)},f=(u,a)=>{V(je,i=[...i,{...u,categoryId:a}],i)},c=()=>{o(l),f(l,r.categoryId),V(fe,l=V(Me,r=void 0,r),l)};return t.$$.update=()=>{t.$$.dirty&12&&l&&r&&c()},[i,s,r,l]}class Rt extends O{constructor(e){super(),W(this,e,Kt,Xt,N,{})}}function Ut(t){let e,n,r,l,i,s;return{c(){e=g("div"),n=g("h1"),r=L(t[0]),l=P(),i=g("p"),s=L(t[1]),p(n,"class","slide-title svelte-gxoaer"),p(e,"class","slide svelte-gxoaer"),x(e,"background","linear-gradient(210.0deg, "+t[2]+" 0%, "+t[3]+" 150%)")},m(o,f){A(o,e,f),d(e,n),d(n,r),d(e,l),d(e,i),d(i,s)},p(o,[f]){f&1&&te(r,o[0]),f&2&&te(s,o[1]),f&12&&x(e,"background","linear-gradient(210.0deg, "+o[2]+" 0%, "+o[3]+" 150%)")},i:B,o:B,d(o){o&&S(e)}}}function Zt(t,e,n){let{title:r,description:l,color1:i,color2:s}=e;return t.$$set=o=>{"title"in o&&n(0,r=o.title),"description"in o&&n(1,l=o.description),"color1"in o&&n(2,i=o.color1),"color2"in o&&n(3,s=o.color2)},[r,l,i,s]}class Qt extends O{constructor(e){super(),W(this,e,Zt,Ut,N,{title:0,description:1,color1:2,color2:3})}}function Jt(t){let e;return{c(){e=g("div"),p(e,"class","main-slide svelte-1tumemo"),x(e,"background-image","url("+t[0]+")")},m(n,r){A(n,e,r)},p(n,[r]){r&1&&x(e,"background-image","url("+n[0]+")")},i:B,o:B,d(n){n&&S(e)}}}function en(t,e,n){let{url:r}=e;return t.$$set=l=>{"url"in l&&n(0,r=l.url)},[r]}class tn extends O{constructor(e){super(),W(this,e,en,Jt,N,{url:0})}}const pe=[{title:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u043D\u044B\u0439 \u043C\u043E\u0441\u0442",description:"\u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F",url:"https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80",color1:"#FD9391",color2:"#CA1243"},{title:"\u0424\u043E\u043D\u0442\u0430\u043D \u0422\u0440\u0435\u0432\u0438",description:"\u0420\u0438\u043C, \u0418\u0442\u0430\u043B\u0438\u044F",url:"https://images.unsplash.com/photo-1529154166925-574a0236a4f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",color1:"#D99F65",color2:"#775133"},{title:"\u041C\u043E\u0441\u0442 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 III",description:"\u041F\u0430\u0440\u0438\u0436, \u0424\u0440\u0430\u043D\u0446\u0438\u044F",url:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80",color1:"#FEC73B",color2:"#655267"},{title:"\u041E\u0441\u0432\u0435\u0449\u0451\u043D\u043D\u0430\u044F \u0430\u043B\u043B\u0435\u044F",description:"\u041A\u0438\u043E\u0442\u043E, \u042F\u043F\u043E\u043D\u0438\u044F",url:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",color1:"#5F5C9B",color2:"#013482"}];function ct(t,e,n){const r=t.slice();return r[6]=e[n],r}function at(t,e,n){const r=t.slice();return r[6]=e[n],r}function ut(t){let e,n;return e=new Qt({props:{title:t[6].title,description:t[6].description,color1:t[6].color1,color2:t[6].color2}}),{c(){G(e.$$.fragment)},m(r,l){H(e,r,l),n=!0},p:B,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function ft(t){let e,n;return e=new tn({props:{url:t[6].url}}),{c(){G(e.$$.fragment)},m(r,l){H(e,r,l),n=!0},p:B,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function nn(t){let e,n,r,l,i,s,o,f,c,u,a,v,$,h,Y;r=new be({props:{theme:"light"}});let k=pe,m=[];for(let _=0;_<k.length;_+=1)m[_]=ut(at(t,k,_));const C=_=>y(m[_],1,1,()=>{m[_]=null});let D=[...pe].reverse(),j=[];for(let _=0;_<D.length;_+=1)j[_]=ft(ct(t,D,_));const ie=_=>y(j[_],1,1,()=>{j[_]=null});return{c(){e=g("div"),n=g("div"),G(r.$$.fragment),l=P(),i=g("div");for(let _=0;_<m.length;_+=1)m[_].c();s=P(),o=g("div");for(let _=0;_<j.length;_+=1)j[_].c();f=P(),c=g("div"),u=g("button"),u.innerHTML='<i class="fas fa-arrow-down"></i>',a=P(),v=g("button"),v.innerHTML='<i class="fas fa-arrow-up"></i>',p(n,"class","backbutton-container"),p(i,"class","sidebar svelte-1l1isap"),x(i,"top",t[0]+"vh"),p(o,"class","mainbar svelte-1l1isap"),x(o,"top",t[1]+"vh"),p(u,"class","down-button svelte-1l1isap"),p(v,"class","up-button svelte-1l1isap"),p(c,"class","controls"),p(e,"class","slider-page svelte-1l1isap")},m(_,M){A(_,e,M),d(e,n),H(r,n,null),d(e,l),d(e,i);for(let w=0;w<m.length;w+=1)m[w].m(i,null);d(e,s),d(e,o);for(let w=0;w<j.length;w+=1)j[w].m(o,null);d(e,f),d(e,c),d(c,u),d(c,a),d(c,v),$=!0,h||(Y=[q(window,"keydown",t[4]),q(i,"click",t[2]),q(o,"click",t[3]),q(u,"click",t[2]),q(v,"click",t[3])],h=!0)},p(_,[M]){if(M&0){k=pe;let w;for(w=0;w<k.length;w+=1){const F=at(_,k,w);m[w]?(m[w].p(F,M),b(m[w],1)):(m[w]=ut(F),m[w].c(),b(m[w],1),m[w].m(i,null))}for(R(),w=k.length;w<m.length;w+=1)C(w);U()}if((!$||M&1)&&x(i,"top",_[0]+"vh"),M&0){D=[...pe].reverse();let w;for(w=0;w<D.length;w+=1){const F=ct(_,D,w);j[w]?(j[w].p(F,M),b(j[w],1)):(j[w]=ft(F),j[w].c(),b(j[w],1),j[w].m(o,null))}for(R(),w=D.length;w<j.length;w+=1)ie(w);U()}(!$||M&2)&&x(o,"top",_[1]+"vh")},i(_){if(!$){b(r.$$.fragment,_);for(let M=0;M<k.length;M+=1)b(m[M]);for(let M=0;M<D.length;M+=1)b(j[M]);$=!0}},o(_){y(r.$$.fragment,_),m=m.filter(Boolean);for(let M=0;M<m.length;M+=1)y(m[M]);j=j.filter(Boolean);for(let M=0;M<j.length;M+=1)y(j[M]);$=!1},d(_){_&&S(e),E(r),se(m,_),se(j,_),h=!1,Z(Y)}}}function rn(t,e,n){const r=-(pe.length-1)*100;let l=0,i=r;const s=()=>{n(0,l=l-100<r?0:n(0,l-=100)),n(1,i=r-l)},o=()=>{n(1,i=i-100<r?0:n(1,i-=100)),n(0,l=r-i)};return[l,i,s,o,c=>{(c.key==="ArrowDown"||c.key==="PageDown")&&s(),(c.key==="ArrowUp"||c.key==="PageUp")&&o()}]}class ln extends O{constructor(e){super(),W(this,e,rn,nn,N,{})}}function on(t){let e,n,r;return{c(){e=g("div"),p(e,"class","element svelte-6um3nc"),x(e,"background-color",t[0]),x(e,"box-shadow",t[1])},m(l,i){A(l,e,i),n||(r=[q(e,"mouseenter",t[2]),q(e,"mouseleave",t[3])],n=!0)},p(l,[i]){i&1&&x(e,"background-color",l[0]),i&2&&x(e,"box-shadow",l[1])},i:B,o:B,d(l){l&&S(e),n=!1,Z(r)}}}function sn(t,e,n){const r=["rgba(21,135,196,1)","rgba(108,196,21,1)","rgba(196,161,21,1)","rgba(196,65,184,1)","rgba(60,189,175,1)","rgba(60,189,121,1)","rgba(216,96,42,1)"];let l,i;const s=()=>r[Math.floor(Math.random()*r.length)],o=()=>{n(0,l=s()),n(1,i=`0 0 2px ${l}, 0 0 10px ${l}`)},f=()=>{n(0,l=""),n(1,i="0 0 2px #000")};return f(),[l,i,o,f]}class cn extends O{constructor(e){super(),W(this,e,sn,on,N,{})}}function an(t,e,n){const r=t.slice();return r[0]=e[n],r}function un(t){let e,n;return e=new cn({}),{c(){G(e.$$.fragment)},m(r,l){H(e,r,l),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function fn(t){let e,n,r,l,i,s;r=new be({props:{theme:"dark"}});let o=Array(dn),f=[];for(let c=0;c<o.length;c+=1)f[c]=un(an(t,o,c));return{c(){e=g("main"),n=g("div"),G(r.$$.fragment),l=P(),i=g("div");for(let c=0;c<f.length;c+=1)f[c].c();p(n,"class","backbutton-container"),p(i,"id","board"),p(i,"class","svelte-8h4bjk"),p(e,"class","hoverdesk-page svelte-8h4bjk")},m(c,u){A(c,e,u),d(e,n),H(r,n,null),d(e,l),d(e,i);for(let a=0;a<f.length;a+=1)f[a].m(i,null);s=!0},p:B,i(c){if(!s){b(r.$$.fragment,c);for(let u=0;u<o.length;u+=1)b(f[u]);s=!0}},o(c){y(r.$$.fragment,c),f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)y(f[u]);s=!1},d(c){c&&S(e),E(r),se(f,c)}}}const dn=500;class mn extends O{constructor(e){super(),W(this,e,null,fn,N,{})}}const xe=Q(0),Ie=Q(0),we=[{color1:"#46aef7",color2:"#30c7ec",color3:"#16d9e3"},{color1:"rgba(219,62,44,1)",color2:"rgba(219,98,44,1)",color3:"rgba(219,117,44,1)"},{color1:"rgba(44,219,60,1)",color2:"rgba(95,219,44,1)",color3:"rgba(44,219,134,1)"},{color1:"rgba(113,44,219,1)",color2:"rgba(144,44,219,1)",color3:"rgba(168,44,219,1)"}];function pn(t){let e,n,r,l,i;return{c(){e=g("button"),n=L(t[0]),r=L(" \u0441\u0435\u043A"),p(e,"class","time-btn svelte-1j0tkwf")},m(s,o){A(s,e,o),d(e,n),d(e,r),l||(i=q(e,"click",t[1]),l=!0)},p(s,[o]){o&1&&te(n,s[0])},i:B,o:B,d(s){s&&S(e),l=!1,i()}}}function gn(t,e,n){let r;T(t,xe,o=>n(2,r=o));const l=kt();let{time:i=0}=e;const s=()=>{V(xe,r=i,r),l("click")};return t.$$set=o=>{"time"in o&&n(0,i=o.time)},[i,s]}class $e extends O{constructor(e){super(),W(this,e,gn,pn,N,{time:0})}}const ye=(t,e)=>Math.round(Math.random()*(e-t)+t);function hn(t){let e,n,r;return{c(){e=g("div"),p(e,"class","circle no-selection svelte-1vphi7w"),x(e,"width",t[0]+"px"),x(e,"height",t[0]+"px"),x(e,"top",t[2]+"px"),x(e,"left",t[1]+"px"),x(e,"background","linear-gradient(90deg, "+t[3]+" 0%, "+t[4]+" 47%, "+t[5]+" 100%)")},m(l,i){A(l,e,i),n||(r=q(e,"click",t[6]),n=!0)},p(l,[i]){i&1&&x(e,"width",l[0]+"px"),i&1&&x(e,"height",l[0]+"px"),i&4&&x(e,"top",l[2]+"px"),i&2&&x(e,"left",l[1]+"px"),i&56&&x(e,"background","linear-gradient(90deg, "+l[3]+" 0%, "+l[4]+" 47%, "+l[5]+" 100%)")},i:B,o:B,d(l){l&&S(e),n=!1,r()}}}const ke=2;function _n(t,e,n){let r;T(t,Ie,m=>n(8,r=m));let{parent:l}=e,{width:i,height:s}=l.getBoundingClientRect(),o,f,c,u,a,v;const $=()=>{n(1,f=ye(ke,s-o-ke)),n(2,c=ye(ke,i-o-ke))},h=()=>{n(0,o=ye(10,60))},Y=()=>{const m=ye(0,we.length-1);n(3,u=we[m].color1),n(4,a=we[m].color2),n(5,v=we[m].color3)},k=()=>{Y(),h(),$(),V(Ie,r+=1,r)};return Y(),h(),$(),t.$$set=m=>{"parent"in m&&n(7,l=m.parent)},[o,f,c,u,a,v,k,l]}class bn extends O{constructor(e){super(),W(this,e,_n,hn,N,{parent:7})}}function vn(t){let e,n;return e=new bn({props:{parent:t[1]}}),{c(){G(e.$$.fragment)},m(r,l){H(e,r,l),n=!0},p(r,l){const i={};l&2&&(i.parent=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function wn(t){let e,n,r,l,i,s,o,f,c;return{c(){e=g("div"),n=g("span"),r=L("\u0421\u0447\u0451\u0442: "),l=g("span"),i=L(t[4]),s=P(),o=g("button"),o.textContent="\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430",p(l,"class","primary svelte-1unmr7c"),p(o,"class","btn svelte-1unmr7c"),p(e,"class","score-dialog svelte-1unmr7c")},m(u,a){A(u,e,a),d(e,n),d(n,r),d(n,l),d(l,i),d(e,s),d(e,o),f||(c=q(o,"click",t[5]),f=!0)},p(u,a){a&16&&te(i,u[4])},i:B,o:B,d(u){u&&S(e),f=!1,c()}}}function $n(t){let e,n,r,l,i,s,o,f,c,u,a,v,$,h,Y,k,m,C,D,j,ie,_,M,w,F,Ne,ce,ne,Te,de,We,Pe,Oe,re,X,K,ae,Ce,Ve;r=new be({props:{theme:"dark"}}),k=new $e({props:{time:"10"}}),k.$on("click",t[6]),D=new $e({props:{time:"20"}}),D.$on("click",t[6]),_=new $e({props:{time:"30"}}),_.$on("click",t[6]),F=new $e({props:{time:"60"}}),F.$on("click",t[6]);const Ye=[wn,vn],J=[];function ze(I,ee){return I[0]?1:0}return X=ze(t),K=J[X]=Ye[X](t),{c(){e=g("main"),n=g("div"),G(r.$$.fragment),l=P(),i=g("div"),s=g("div"),o=g("h1"),o.textContent="\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u043C\u0435\u0442\u043A\u043E\u0441\u0442\u0438",f=P(),c=g("div"),c.textContent="\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443",u=P(),a=g("div"),v=g("h1"),v.textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F",$=P(),h=g("ul"),Y=g("li"),G(k.$$.fragment),m=P(),C=g("li"),G(D.$$.fragment),j=P(),ie=g("li"),G(_.$$.fragment),M=P(),w=g("li"),G(F.$$.fragment),Ne=P(),ce=g("div"),ne=g("h3"),Te=L("\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C "),de=g("span"),We=L("00:"),Pe=L(t[3]),Oe=P(),re=g("div"),K.c(),p(n,"class","backbutton-container"),p(o,"class","svelte-1unmr7c"),p(c,"class","start no-selection svelte-1unmr7c"),p(s,"class","screen-welcome svelte-1unmr7c"),p(v,"class","svelte-1unmr7c"),p(Y,"class","svelte-1unmr7c"),p(C,"class","svelte-1unmr7c"),p(ie,"class","svelte-1unmr7c"),p(w,"class","svelte-1unmr7c"),p(h,"class","time-list svelte-1unmr7c"),p(a,"class","screen-options svelte-1unmr7c"),p(de,"id","time"),p(ne,"class","svelte-1unmr7c"),z(ne,"hide",!t[0]),p(re,"class","board svelte-1unmr7c"),p(re,"id","board"),p(ce,"class","screen-game svelte-1unmr7c"),p(i,"class","screens svelte-1unmr7c"),x(i,"top",t[2]+"vh"),p(e,"class","game-page no-selection svelte-1unmr7c")},m(I,ee){A(I,e,ee),d(e,n),H(r,n,null),d(e,l),d(e,i),d(i,s),d(s,o),d(s,f),d(s,c),d(i,u),d(i,a),d(a,v),d(a,$),d(a,h),d(h,Y),H(k,Y,null),d(h,m),d(h,C),H(D,C,null),d(h,j),d(h,ie),H(_,ie,null),d(h,M),d(h,w),H(F,w,null),d(i,Ne),d(i,ce),d(ce,ne),d(ne,Te),d(ne,de),d(de,We),d(de,Pe),d(ce,Oe),d(ce,re),J[X].m(re,null),t[7](re),ae=!0,Ce||(Ve=q(c,"click",t[5]),Ce=!0)},p(I,[ee]){(!ae||ee&8)&&te(Pe,I[3]),ee&1&&z(ne,"hide",!I[0]);let He=X;X=ze(I),X===He?J[X].p(I,ee):(R(),y(J[He],1,1,()=>{J[He]=null}),U(),K=J[X],K?K.p(I,ee):(K=J[X]=Ye[X](I),K.c()),b(K,1),K.m(re,null)),(!ae||ee&4)&&x(i,"top",I[2]+"vh")},i(I){ae||(b(r.$$.fragment,I),b(k.$$.fragment,I),b(D.$$.fragment,I),b(_.$$.fragment,I),b(F.$$.fragment,I),b(K),ae=!0)},o(I){y(r.$$.fragment,I),y(k.$$.fragment,I),y(D.$$.fragment,I),y(_.$$.fragment,I),y(F.$$.fragment,I),y(K),ae=!1},d(I){I&&S(e),E(r),E(k),E(D),E(_),E(F),J[X].d(),t[7](null),Ce=!1,Ve()}}}function yn(t,e,n){let r,l,i;T(t,xe,h=>n(0,l=h)),T(t,Ie,h=>n(4,i=h));let s,o=0,f;const c=()=>{n(2,o=-100)},u=()=>{n(2,o=-200)},a=()=>{u(),V(Ie,i=0,i),f=setInterval(()=>V(xe,l-=1,l),1e3)},v=()=>{clearInterval(f)};function $(h){Se[h?"unshift":"push"](()=>{s=h,n(1,s)})}return t.$$.update=()=>{t.$$.dirty&1&&l===0&&v(),t.$$.dirty&1&&n(3,r=l<10?"0"+l:l)},[l,s,o,r,i,c,a,$]}class kn extends O{constructor(e){super(),W(this,e,yn,$n,N,{})}}function Dn(t){let e,n,r;var l=t[0];function i(s){return{}}return l&&(e=new l(i())),{c(){e&&G(e.$$.fragment),n=Le()},m(s,o){e&&H(e,s,o),A(s,n,o),r=!0},p(s,[o]){if(l!==(l=s[0])){if(e){R();const f=e;y(f.$$.fragment,1,0,()=>{E(f,1)}),U()}l?(e=new l(i()),G(e.$$.fragment),b(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}},i(s){r||(e&&b(e.$$.fragment,s),r=!0)},o(s){e&&y(e.$$.fragment,s),r=!1},d(s){s&&S(n),e&&E(e,s)}}}function Bn(t,e,n){let r;T(t,_e,o=>n(1,r=o));const l=[{id:0,name:"5 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0437\u0430 5 \u0434\u043D\u0435\u0439",component:Gt},{...le[0],component:Ot},{...le[1],component:Rt},{...le[2],component:ln},{...le[3],component:mn},{...le[4],component:kn}];let i;const s=o=>{n(0,i=l[o].component),document.title=l[o].name};return t.$$.update=()=>{t.$$.dirty&2&&s(r)},[i,r]}class jn extends O{constructor(e){super(),W(this,e,Bn,Dn,N,{})}}new jn({target:document.getElementById("app")});