"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7024:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});var n={};r.r(n),r.d(n,{exclude:function(){return X},extract:function(){return H},parse:function(){return J},parseUrl:function(){return Q},pick:function(){return W},stringify:function(){return K},stringifyUrl:function(){return V}});var o=r(7294),a=r(4316),i=r(1883),s=r(917);const l=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),c=(0,a.Z)((e=>{let{active:t,...r}=e;return(0,s.tZ)(i.rU,r)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"})," cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var p=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,s.tZ)(l,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,s.tZ)(c,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},u=r(3723);const d=(0,a.Z)(u.G,{target:"e1n1u3tj0"})({name:"xjbnw9",styles:"width:120px;heigth:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var f=function(e){let{profileImage:t}=e;return(0,s.tZ)(d,{image:t,alt:"Profile Image"})};const g=(0,a.Z)("div",{target:"etdyifd3"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),m=(0,a.Z)("div",{target:"etdyifd2"})({name:"c72mbd",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;heigth:300px;padding:0 20px;}"}),y=(0,a.Z)("div",{target:"etdyifd1"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),x=(0,a.Z)("div",{target:"etdyifd0"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var h=function(e){let{profileImage:t}=e;return(0,s.tZ)(g,null,(0,s.tZ)(m,null,(0,s.tZ)(f,{profileImage:t}),(0,s.tZ)("div",null,(0,s.tZ)(y,null,"nice to Meet You,"),(0,s.tZ)(x,null,"i'm Jea Huck Yang "))))},b=r(7462);const w=(0,a.Z)(i.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),k=(0,a.Z)(u.G,{target:"e1eg5kak6"})({name:"pxpl23",styles:"width:100%;height:200px;border-radius:10px 10px 0 0;object-fit:cover"}),v=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),Z=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),j=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),F=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),O=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var S=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,s.tZ)(w,{to:i},(0,s.tZ)(k,{image:a,alt:"Post Item Image"}),(0,s.tZ)(v,null,(0,s.tZ)(Z,null,t),(0,s.tZ)(j,null,r),(0,s.tZ)(I,null,n.map((e=>(0,s.tZ)(F,{key:e},e)))),(0,s.tZ)(O,null,o)))};var E=function(e,t){const r=(0,o.useRef)(null),{0:n,1:a}=(0,o.useState)(1),i=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]),s=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(a((e=>e+1)),t.disconnect())}));return(0,o.useEffect)((()=>a(1)),[e]),(0,o.useEffect)((()=>{var e;10*n>=i.length||null===(e=r.current)||void 0===e||!e.children.length||s.observe(r.current.children[r.current.children.length-1])}),[n,e]),{containerRef:r,postList:i.slice(0,10*n)}};const C=(0,a.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var R=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=E(t,r);return(0,s.tZ)(C,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,s.tZ)(S,(0,b.Z)({},n,{link:r,key:t}))})))};const A="%[a-f0-9]{2}",N=new RegExp("("+A+")|([^%]+?)","gi"),U=new RegExp("("+A+")+","gi");function $(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],$(r),$(n))}function z(e){try{return decodeURIComponent(e)}catch{let t=e.match(N)||[];for(let r=1;r<t.length;r++)t=(e=$(t,r).join("")).match(N)||[];return e}}function L(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=U.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=z(r[0]);e!==r[0]&&(t[r[0]]=e)}r=U.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function q(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function P(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const M=Symbol("encodeFragmentIdentifier");function D(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function _(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function B(e,t){return t.decode?L(e):e}function T(e){return Array.isArray(e)?e.sort():"object"==typeof e?T(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function G(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function Y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function H(e){const t=(e=G(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function J(e,t){D((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&B(r,e).includes(e.arrayFormatSeparator);r=a?B(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>B(t,e))):null===r?r:B(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?B(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>B(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=q(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:B(i,t),r(B(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=Y(r,t);else n[o]=Y(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=T(r):e[t]=r,e}),Object.create(null))}function K(e,t){if(!e)return"";D((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[_(t,e),"[",o,"]"].join("")]:[...r,[_(t,e),"[",_(o,e),"]=",_(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[_(t,e),"[]"].join("")]:[...r,[_(t,e),"[]=",_(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[_(t,e),":list="].join("")]:[...r,[_(t,e),":list=",_(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[_(r,e),t,_(o,e)].join("")]:[[n,_(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,_(t,e)]:[...r,[_(t,e),"=",_(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?_(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?_(r,t)+"[]":o.reduce(n(r),[]).join("&"):_(r,t)+"="+_(o,t)})).filter((e=>e.length>0)).join("&")}function Q(e,t){t={decode:!0,...t};let[r,n]=q(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:J(H(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:B(n,t)}:{}}}function V(e,t){t={encode:!0,strict:!0,[M]:!0,...t};const r=G(e.url).split("?")[0]||"";let n=K({...J(H(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[M]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function W(e,t,r){r={parseFragmentIdentifier:!0,[M]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=Q(e,r);return V({url:n,query:P(o,t),fragmentIdentifier:a},r)}function X(e,t,r){return W(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var ee=n,te=r(6450);var re=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:l},publicURL:c}}}=e;const u=ee.parse(t),d="string"==typeof u.category&&u.category?u.category:"All",f=(0,o.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>e[t]?e[t]++:e[t]=1)),e.All++,e}),{All:0})),[]);return(0,s.tZ)(te.Z,{title:r,description:n,url:a,image:c},(0,s.tZ)(h,{profileImage:l}),(0,s.tZ)(p,{selectedCategory:d,categoryList:f}),(0,s.tZ)(R,{selectedCategory:d,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-242f16e858e8422e11c5.js.map