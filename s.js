const t=new BroadcastChannel("myfaveTT"),e=new BroadcastChannel("params-guard");let i,n;const r=new WeakMap,o=new WeakMap,a=new WeakMap,s=new WeakMap,c=new WeakMap;let u={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return f(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function l(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(h(this),e),f(r.get(this))}:function(...e){return f(t.apply(h(this),e))}:function(e,...i){const n=t.call(h(this),e,...i);return a.set(n,e.sort?e.sort():[e]),f(n)}}function d(t){return"function"==typeof t?l(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),n()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));o.set(t,e)}(t),e=t,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,u):t);var e}function f(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(f(t.result)),n()},o=()=>{i(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&r.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(s.has(t))return s.get(t);const e=d(t);return e!==t&&(s.set(t,e),c.set(e,t)),e}const h=t=>c.get(t);const w=["get","getKey","getAll","getAllKeys","count"],p=["put","add","delete","clear"],y=new Map;function m(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(y.get(e))return y.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,r=p.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!w.includes(i))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let a=o.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[i](...e),r&&o.done]))[0]};return y.set(e,o),o}u=(t=>({...t,get:(e,i,n)=>m(e,i)||t.get(e,i,n),has:(e,i)=>!!m(e,i)||t.has(e,i)}))(u);const v={t:function(t,e,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),s=f(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(f(a.result),t.oldVersion,t.newVersion,f(a.transaction))})),i&&a.addEventListener("blocked",(()=>i())),s.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}("myfaveTT",2,{upgrade(t,e,i,n){switch(e){case 0:t.createObjectStore("likesCache"),t.createObjectStore("followingCache");case 1:t.createObjectStore("misc")}}})},g={i:async t=>(await v.t).get("misc",t),o:async(t,e)=>(await v.t).put("misc",e,t)},_="chrome-extension://gmajiifkcmjkehmngbopoobeplhoegad";function k(t,e){ui.postMessage({type:t,payload:e},_)}const b=k;function T(t,e){ui.postMessage({type:t,payload:e},_)}function $(t,e,i){k(1,{err:t,location:e,silently:i})}async function E(t,e){try{const i=e.split("/"),n=i.pop();let r=t;for(const t of i)r=await r.getDirectoryHandle(t,{create:!0});return await r.getFileHandle(n,{create:!0})}catch(t){throw $(t,"gfh29"),t}}async function C(t,e){const i=await t.createWritable();await i.write(e),await i.close()}const S={schemaVersion:1,user:{uid:"",id:"",uniqueId:"",nickname:""},authors:{},videos:{},likes:{downloadStatus:"unset",officialList:[],downloaded:new Set,lastRun:{collect:0,download:0}},following:{officialAuthorList:new Set,started:new Set,notInterested:new Set,downloadLog:{},lastRun:{}}};function D(t){return e=function(t){return JSON.stringify(t,(function(t,e){return e instanceof Set?[...e]:"string"==typeof e?e.replaceAll("`","背𓄹剃").replaceAll("${","⑀⦃"):e}))}(t),"db=String.raw`{}`;".slice(0,"db=String.raw`{}`;".indexOf("{"))+e+"db=String.raw`{}`;".slice("db=String.raw`{}`;".lastIndexOf("}")+1);var e}function x(t){return""===t?S:function(t){const e=JSON.parse(t,(function(t,e){switch(t){case"downloaded":case"notInterested":case"started":case"officialAuthorList":if(Array.isArray(e))return new Set(e)}return"string"==typeof e?e.replaceAll("⑀⦃","${").replaceAll("背𓄹剃","`"):e}));for(const[t,i]of Object.entries(e.following.downloadLog))e.following.downloadLog[t]=new Set(i);return e}(function(t){const e=t.indexOf("{"),i=t.lastIndexOf("}")-t.length+1;return t.slice(e,i)}(t))}const I=new class{constructor(){this.u=null,this.l=null}async h(t,e){this.u=t,this.l=e,k(8),g.o("archiveFolderHandle",t)}async p(){try{C(await E(this.u,"data/.appdata/db.js"),D(this.l))}catch(t){$(t,"a42")}}async m(t){try{const{archiveHtml:e,appJs:i}=t;C(await E(this.u,"Archive.html"),e),C(await E(this.u,"data/.appdata/app.js"),i)}catch(t){$(t,"a58")}}v(t){t.forEach((t=>{const{id:e,uniqueId:i,nickname:n,signature:r}=t.user,{followerCount:o,videoCount:a,heartCount:s}=t.stats,c={uniqueIds:[i],nicknames:[n],followerCount:o,heartCount:s,videoCount:a,signature:r},u=this.l.authors[e];u&&(c.uniqueIds=[...new Set([i,...u.uniqueIds])],c.nicknames=[...new Set([n,...u.nicknames])]),this.l.authors[e]=c})),this.l.following.officialAuthorList=new Set(t.map((t=>t.user.id))),this.p()}async g(t){try{if(!this.l.following.started.has(t)&&!this.l.following.downloadLog[t])return;this.l.following.started.delete(t),delete this.l.following.downloadLog[t],await this.p();let e=await this.u.getDirectoryHandle("data");e=await e.getDirectoryHandle("Following"),await e.removeEntry(t,{recursive:!0})}catch(t){$(t,"purge failed","silently")}}},j={_(t,e){k(2,{event:t,params:e})}};let O=0;function A(){let t;return t=O<=2?5:2+5*(O-2),1e3*t}const B={};async function M(){const t=[];Object.entries(B).forEach((async([e,i])=>{const{createTime:n,cover:r,video:o}=i;if(Boolean(r&&o))t.push(async function(t){var e;const{startWritingToDiskTime:i,key:n,likedOrFollowing:r,itemData:{id:o,author:a},cover:s,video:c,size:u}=t;if(0!==i){return Date.now()-i<1e4?void 0:(delete B[n],void j._("stuck in writing"))}t.startWritingToDiskTime=Date.now();try{const t="liked"===r?"data/Likes":`data/Following/${a.id}`,i=`${t}/covers/${o}.jpg`,l=`${t}/videos/${o}.mp4`,d=E(I.u,i).then((t=>C(t,s))),f=E(I.u,l).then((t=>C(t,c)));if(await Promise.all([d,f]),I.l.videos[o].size=u,"following"===r){const t=I.l.following.downloadLog;t[e=a.id]||(t[e]=new Set),t[a.id].add(o)}else I.l.likes.downloaded.add(o)}catch(t){$(t,"ts71","silently")}finally{delete B[n]}}(i));else{Date.now()-n>1e5&&(delete B[e],j._("took over 30 seconds"))}})),t.length&&(await Promise.allSettled(t),await I.p())}const L=new class{addNew(t){B[t.key]=t,O=Object.keys(B).length}k(t,e){B[t]&&(B[t].cover=e,M())}T(t,e){B[t]&&(B[t].size=e)}$(t,e){B[t]&&(B[t].video=e,M())}C(t){B[t],B[t]&&delete B[t]}};function W(t,e,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(t):n?n.value:e.get(t)}function N(t,e,i,n,r){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?r.call(t,i):r?r.value=i:e.set(t,i),i}function U(t){return new Promise((e=>{setTimeout((()=>{e(t)}),t)}))}function F(t){const e=5e3,i={unlocked:["unlock_0_to_1000_likes_(free)"],cap:1e3,nextToBuy:"unlock_1001_to_5000_likes",lineItemDescription:'"Enable downloading more than 1000, up to 5000 videos from your Likes on TikTok."'};if(0===t)return i;const n=[i.unlocked[0]],r=e*t,o=r+e,a=`unlock_${r+1}_to_${o}_likes`,s=`"Enable downloading more than ${r}, up to ${o} videos from your Likes on TikTok."`;for(let e=0;e<t;e++)n.push(F(e)?.nextToBuy);return{unlocked:n,cap:r,nextToBuy:a,lineItemDescription:s}}const q=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,J=/^0o[0-7]+$/i,H=parseInt,z="object"==typeof global&&global&&global.Object===Object&&global,V="object"==typeof self&&self&&self.Object===Object&&self,K=z||V||Function("return this")(),G=Object.prototype.toString,Q=Math.max,X=Math.min,Y=function(){return K.Date.now()};function Z(t,e,i){let n,r,o,a,s,c,u=0,l=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){const i=n,o=r;return n=r=void 0,u=e,a=t.apply(o,i),a}function w(t){return u=t,s=setTimeout(y,e),l?h(t):a}function p(t){const i=t-c;return void 0===c||i>=e||i<0||d&&t-u>=o}function y(){const t=Y();if(p(t))return m(t);s=setTimeout(y,function(t){const i=e-(t-c);return d?X(i,o-(t-u)):i}(t))}function m(t){return s=void 0,f&&n?h(t):(n=r=void 0,a)}function v(){const t=Y(),i=p(t);if(n=arguments,r=this,c=t,i){if(void 0===s)return w(c);if(d)return s=setTimeout(y,e),h(c)}return void 0===s&&(s=setTimeout(y,e)),a}return e=et(e)||0,tt(i)&&(l=!!i.leading,d="maxWait"in i,o=d?Q(et(i.maxWait)||0,e):o,f="trailing"in i?!!i.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),u=0,n=c=r=s=void 0},v.flush=function(){return void 0===s?a:m(Y())},v}function tt(t){const e=typeof t;return!!t&&("object"==e||"function"==e)}function et(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==G.call(t)}(t))return NaN;if(tt(t)){const e="function"==typeof t.valueOf?t.valueOf():t;t=tt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(q,"");const e=P.test(t);return e||J.test(t)?H(t.slice(2),e?2:8):R.test(t)?NaN:+t}const it={};const nt=function(t,e,i){let n=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return tt(i)&&(n="leading"in i?!!i.leading:n,r="trailing"in i?!!i.trailing:r),Z(t,e,{leading:n,maxWait:e,trailing:r})}((function(){Object.entries(it).forEach((async([t,e])=>{const i=await E(I.u,`data/Following/Avatars/${t}`),n=await i.createWritable();await n.write(e),await n.close(),delete it[t]}))}),7e3);async function rt(t,e){const i=await E(I.u,`data/Following/Avatars/${e}`),n=await i.getFile();if(n.size>0){const t=6048e5,e=(6*Math.random()+1)*t;if(Date.now()-n.lastModified<e)return}const r=await fetch(t),o=r.headers.get("Content-Type");if("image/jpeg"!==o)return void $(new Error(`avatar type is ${o}`),"daa9","silently");const a=await r.blob();it[e]=a,nt(),e.includes("small")&&await U(200),e.includes("large")&&await U(2e3)}const ot={S:!1},at=t=>e=>{const i={};for(const n of t)i[n]=e[n];return i},st=t=>e=>{const i={};return e.forEach((e=>{i[e[t]]=e})),i};function ct(t){const e=at(["id","desc","createTime","itemMute"])(t);return e.video=at(["id","cover","playAddr","downloadAddr","format"])(t.video),e.stats=at(["diggCount","playCount"])(t.stats),e.author=at(["id","uniqueId","nickname","avatarLarger"])(t.author),e.authorStats=at(["followerCount","heartCount","videoCount"])(t.authorStats),e}function ut(t){return at(["id","uniqueId","nickname","avatarLarger","avatarThumb","signature"])(t.user)}function lt(){var t;return{aid:"1988",app_name:"tiktok_web",channel:"tiktok_web",device_platform:"web_pc",referer:document.referrer,cookie_enabled:navigator.cookieEnabled,screen_width:screen.width,screen_height:screen.height,browser_language:navigator.language,browser_platform:navigator.platform,browser_name:navigator.appCodeName,browser_version:navigator.appVersion,browser_online:navigator.onLine,verifyFp:null===(t=document.cookie.match(/s_v_web_id=(\w+)/))||void 0===t?void 0:t[1],is_page_visible:!0,focus_state:!0,is_fullscreen:window.matchMedia("(display-mode: fullscreen)").matches,history_len:window.history.length,battery_info:1,tz_name:Intl.DateTimeFormat().resolvedOptions().timeZone}}const dt=new class{constructor(){this.D="initial",this.I={}}async j(){if(window.__NEXT_DATA__)try{this.I=window.__NEXT_DATA__.props.initialProps,this.D="next"}catch(t){$(t,"ac26"),this.D="error"}else if(window.SIGI_STATE)try{this.I=window.SIGI_STATE.AppContext.appContext,this.D="sigi"}catch(t){$(t,"ac37"),this.D="error"}else try{const t=await fetch("/node-webapp/api/app-context"),e=await t.json();0===e.statusCode?(this.I=e,this.D="fetched"):($(new Error(e),"ac49"),this.D="error")}catch(t){$(t,"ac52"),this.D="error"}j._("app_context",{status:this.D}),this.D}O(){const{$wid:t,$region:e,$os:i,$language:n,$user:r}=this.I;if(!(t&&e&&i&&n))return $(new Error(JSON.stringify({$wid:t,$region:e,$os:i,$language:n})),"ac64"),!1;if(!r)return!0;const{uid:o,uniqueId:a,secUid:s,nickName:c}=r;return!!(o&&a&&s&&c)||($(new Error(JSON.stringify({uid:o,uniqueId:a,secUid:s,nickName:c})),"ac75"),!1)}};function ft(){const{$wid:t,$region:e,$language:i,$os:n,$user:r}=dt.I;return{device_id:t,region:e,priority_region:r.region,os:n,app_language:i,webcast_language:i,language:i}}function ht(){const t=dt.I.$user;return{id:(null==t?void 0:t.uid)||null,secUid:(null==t?void 0:t.secUid)||null,uniqueId:(null==t?void 0:t.uniqueId)||null,nickname:(null==t?void 0:t.nickName)||null}}function wt(){const{secUid:t}=ht();if(!t)throw new Error("no secUid or id @ gsp19");return{from_page:"user",secUid:t}}const pt={A:-1,B:-1,M:0,L:0,W:0,N:0,U:0,F:!1,region:"unset",userRegion:"unset",get q(){return this.A+this.B+this.M+2*this.L+-10*this.W+this.N+-1*this.U},i(){return this.q>=3?"us.tiktok.com":"m.tiktok.com"},async h(){var t,e;const{$region:i,$user:n}=dt.I;this.region=i,this.userRegion=(null==n?void 0:n.region)||"unknown","us"===(null===(t=this.region)||void 0===t?void 0:t.toLowerCase())&&(this.A=1),"us"===(null===(e=this.userRegion)||void 0===e?void 0:e.toLowerCase())&&(this.B=1),this.region!==this.userRegion&&$(new Error(`region=${this.region} but userRegion=${this.userRegion}`),"hn44","silently"),!0===await g.i("captured_us_in_previous_sessions_")&&(this.M=1),2===this.q&&this.R()},async R(){try{const t=new mt("ping").J("0").P(30),e=await window.fetch(t.H(),{credentials:"include"}),i=await e.json();if(0!==i.statusCode)throw new Error(`statusCode: ${i.statusCode}`);if(!i.itemList)throw new Error(`no itemList: ${i}`);this.N=1}catch(t){$(t,"hn53","silently")}},V(t){try{if(t.startsWith("https://m.tiktok.com")){if(this.W=1,1===this.A||1===this.B)throw new Error(`${this.region} & ${this.userRegion} but captured m`)}else{if(!t.startsWith("https://us.tiktok.com"))throw new Error(`unexpected url: ${t}`);if(1===this.L&&1===this.M)return;if(this.L=1,this.M=1,g.o("captured_us_in_previous_sessions_",!0),1!==this.A||1!==this.B)throw new Error(`${this.region} ${this.userRegion} but captured us`)}}catch(t){this.F||($(t,"hn90","silently"),this.F=!0)}}};var yt;class mt{constructor(t){yt.set(this,void 0),N(this,yt,"ping"===t?new URL("https://us.tiktok.com/api/favorite/item_list/"):"likes"===t?new URL(`https://${pt.i()}/api/favorite/item_list/`):new URL(`https://${pt.i()}/api/user/list/`),"f");const e={...lt(),...ft(),..."following"===t?{scene:21,from_page:"fyp"}:wt()};return Object.entries(e).forEach((([t,e])=>{W(this,yt,"f").searchParams.set(t,(null==e?void 0:e.toString())||"")})),this}J(t){return W(this,yt,"f").searchParams.set("cursor",t),this}K({maxCursor:t,minCursor:e}){return W(this,yt,"f").searchParams.set("maxCursor",String(t)),W(this,yt,"f").searchParams.set("minCursor",String(e)),this}P(t){return W(this,yt,"f").searchParams.set("count",String(t)),this}H(){return W(this,yt,"f").toString()}}yt=new WeakMap;const vt=1030,gt=["unset","downloading","paused","capped","completed"],_t=["downloading","completed","capped","pausing","paused","resuming"],kt={G:"unset",X:{Y(t){k(16,t)},Z(t){k(17,t)}},tt:{et(t){b(11,{progress:t})},it(t){_t.includes(t)&&b(11,{status:t}),gt.includes(t)&&(I.l.likes.downloadStatus=t)}}};function bt(t){if(!t)return!1;const e=new URL(t),i=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!i)return!1;return(Number(i+"000")-Date.now())/1e3/60<30}function Tt(t){return[t.video.playAddr,t.video.cover].some(bt)}function $t(t){return t.some(Tt)}function Et(t){return{async nt(){const e=await v.t,i=await e.get("followingCache",t);return i?$t(i)?[]:i.sort(((t,e)=>t.createTime-e.createTime)):[]},o:async e=>(await v.t).put("followingCache",e,t),async rt(t){return(await this.nt()).map((t=>t.id)).includes(t.id)}}}function Ct(t){const e=st("id")(t),i=t.map((t=>t.id));return[...new Set(i)].map((t=>e[t]))}var St,Dt,xt,It,jt;const Ot=new(jt=class{constructor(){St.add(this),this.D="unset",Dt.set(this,"unset")}async ot(){try{if(this.D===(this.D="expanding"))return;const t=await W(this,St,"m",xt).call(this);if(!t)return $(new Error("cannot find authorList"),"ale63","silently"),b(21),void(this.D="failed");if("A"===t.lastChild.tagName)return void(this.D="expanded");if("unset"===W(this,Dt,"f"))return N(this,Dt,t.lastChild.textContent,"f"),W(this,Dt,"f"),void W(this,St,"m",It).call(this,t);if(W(this,Dt,"f")===t.lastChild.textContent)return void W(this,St,"m",It).call(this,t);if(t.lastChild.textContent!==W(this,Dt,"f"))return void(this.D="expanded")}catch(t){$(t,"ale92")}}},Dt=new WeakMap,St=new WeakSet,xt=async function(){let t=document.querySelectorAll(".user-list");0===t.length&&(t=document.querySelectorAll('div[class*="-DivUserContainer"]'));let e=t[t.length-1];if(!e){const i=document.querySelector('a[title="TikTok"]');i&&(i.click(),await U(3e3),t=document.querySelectorAll(".user-list"),0===t.length&&(t=document.querySelectorAll('div[class*="-DivUserContainer"]')),e=t[t.length-1])}return e},It=async function(t){for(var e,i;;){if(null===(e=t.lastChild)||void 0===e||e.click(),await U(2e3),"A"===t.lastChild.tagName)return void(this.D="expanded");if((null===(i=t.lastChild)||void 0===i?void 0:i.textContent)!==W(this,Dt,"f"))return void(this.D="expanded")}},jt);async function At(t){for(Ot.ot();;){const e=document.querySelector(`a[href$="${t}"]`);if(e)return void e.click();if("expanded"===Ot.D)throw new Error("Couldn't find the user to click on the left side. Maybe you just started following this user so it's not on the left sidebar yet. Reload and try again.");await U(500)}}var Bt,Mt;const Lt=new(Mt=class{constructor(){Bt.set(this,void 0)}async h(){N(this,Bt,await g.i("largeVideos")||new Set,"f")}st(t){return W(this,Bt,"f").has(t)}ct(t){W(this,Bt,"f").add(t),g.o("largeVideos",W(this,Bt,"f"))}},Bt=new WeakMap,Mt);var Wt,Nt,Ut;class Ft{constructor(t,e){this.ut=t,this.lt=e,Wt.add(this),this.dt=this.ut.id+this.lt}get ft(){var t;return"liked"===this.lt?Boolean(I.l.likes.downloaded.has(this.ut.id)):Boolean(null===(t=I.l.following.downloadLog[this.ut.author.id])||void 0===t?void 0:t.has(this.ut.id))}get ht(){return Lt.st(this.dt)}wt(){return Tt(this.ut)}async yt(){L.addNew({createTime:Date.now(),startWritingToDiskTime:0,key:this.dt,likedOrFollowing:this.lt,itemData:this.ut}),await W(this,Wt,"m",Nt).call(this),await W(this,Wt,"m",Ut).call(this)}vt(){try{I.l.videos[this.ut.id]=function(t,e){const i={authorId:t.author.id,desc:t.desc,createTime:t.createTime,itemMute:t.itemMute,diggCount:t.stats.diggCount,playCount:t.stats.playCount},n=e.videos[t.id];return Object.assign({},n,i)}(this.ut,I.l),I.l.authors[this.ut.author.id]=function(t,e){const i={uniqueIds:[t.author.uniqueId],nicknames:[t.author.nickname],followerCount:t.authorStats.followerCount,heartCount:t.authorStats.heartCount,videoCount:t.authorStats.videoCount},n=e.authors[t.author.id];n&&(i.uniqueIds=[...new Set([...i.uniqueIds,...n.uniqueIds])],i.nicknames=[...new Set([...i.nicknames,...n.nicknames])]);return Object.assign({},n,i)}(this.ut,I.l)}catch(t){$(t,"i77")}}}Wt=new WeakSet,Nt=async function(){try{const t=await fetch(this.ut.video.cover),e=t.headers.get("Content-Type");if("image/jpeg"!==e)throw new Error(`cover type is ${e}`);const i=await t.arrayBuffer();L.k(this.dt,i)}catch(t){L.C(this.dt),"Failed to fetch"===t.message?$(new Error(`fetch failed ${this.ut.video.cover}`),"bi60","silently"):$(t,"bi63","silently")}},Ut=async function(){var t,e;const i=new AbortController;try{const t=setTimeout((()=>i.abort()),7e3),e=setTimeout((()=>i.abort()),1e5),n=await fetch(this.ut.video.playAddr||this.ut.video.downloadAddr,{signal:i.signal});if(clearTimeout(t),!String(n.status).startsWith("2"))throw new Error(`video status code ${n.status}`);if(206===n.status)throw new Error("status 206, video could be very large");const r=n.headers.get("Content-Type");if("video/mp4"!==r)throw new Error(`video type is ${r}`);const o=Number(n.headers.get("Content-Length"));if(!o)throw new Error("unknown video size");const a=(o/1024/1024).toFixed(1)+"MB";if(o>5e7)throw console.error(`video is too large, skip. size: ${a}, url: ${this.ut.video.playAddr}`),Lt.ct(this.dt),new Error("video is too large, skip");L.T(this.dt,a);const s=await n.arrayBuffer();T("please_resync_this_video",{tempStorageKey:this.dt,arrayBuffer:s}),clearTimeout(e)}catch(n){if(i.abort(),L.C(this.dt),null===(e=null===(t=n.message)||void 0===t?void 0:t.includes)||void 0===e?void 0:e.call(t,"video is too large, skip"))return;"Failed to fetch"===n.message?$(new Error(`fetch failed ${this.ut.video.playAddr||this.ut.video.downloadAddr}`),"bi127","silently"):$(n,"bi130","silently")}};const qt={gt:!1};var Rt,Pt,Jt,Ht,zt;const Vt={settings:{minimalInterval:1e3,maximalDistance:750,requestIntervalGoal:4e3},on:!1,timeoutId:null,interval:1200,distance:400,lastHttpRequestTime:0,adjust(){Date.now()-this.lastHttpRequestTime>this.settings.requestIntervalGoal?(this.interval=Math.max(this.interval-50,this.settings.minimalInterval),this.distance=Math.min(this.distance+50,this.settings.maximalDistance)):(this.interval+=50,this.distance-=50),this.lastHttpRequestTime=Date.now()}};async function Kt(){try{if(!Vt.on)return;if(Vt.timeoutId=setTimeout(Kt,Vt.interval),"hidden"===document.visibilityState)return;if(!Gt._t)return;!function(){const{scrollHeight:t,scrollTop:e,clientHeight:i}=document.documentElement;return t-e-i<20}()?window.scrollBy({top:Vt.distance,left:0,behavior:"smooth"}):(await U(2e3),await Gt.kt())}catch(t){$(t,"scr56")}}const Gt=new(zt=class{constructor(){Rt.add(this),Pt.set(this,[]),this._t=""}async bt(t,e){try{this._t=t,N(this,Pt,[],"f"),document.documentElement.style.overflow="hidden",document.documentElement.style.pointerEvents="none",document.querySelector("aside#myfaveTT-container").style.pointerEvents="auto",await At(e),await U(2500),W(this,Rt,"m",Jt).call(this)}catch(t){$(t,"sr48")}}async Tt(t){if(0===t.length)return void $(new Error("repeat failed?"),"scr78","silently");const e=function(t){const e=t[0].author.id;if(t.some((t=>t.author.id!==e)))throw new Error("not all videos share the same author");return e}(t);if(e!==this._t)return;if($t(W(this,Pt,"f")))return W(this,Rt,"m",Ht).call(this),ie.$t(e),void(this._t="");W(this,Pt,"f").push(...t),kt.X.Y(W(this,Pt,"f").length),Vt.adjust();if(!await Et(e).rt(W(this,Pt,"f")[W(this,Pt,"f").length-1]))return W(this,Pt,"f").length>vt?(N(this,Pt,W(this,Pt,"f").slice(0,vt),"f"),void await this.kt()):void 0;await this.kt()}async kt(){var t;try{if(!this._t)return;const e=this._t;this._t="",W(this,Rt,"m",Ht).call(this);const i=await Et(e).nt(),n=Ct(W(this,Pt,"f").concat(i));await Et(e).o(n),n.length,(t=I.l.following.lastRun)[e]||(t[e]={scroll:0,download:0}),I.l.following.lastRun[e].scroll=Date.now(),I.p(),async function(t){I.l.following.started.add(t);const e=await Et(t).nt();for(const[i,n]of e.entries()){for(;qt.gt;)await U(500);const r=new Ft(n,"following");if(r.vt(),!r.ft&&!r.ht){if(r.wt())return void ie.$t(t);kt.X.Z({total:e.length,current:i+1}),r.yt().catch((t=>$(t,"doa22","silently"))),await U(A())}}I.l.following.lastRun[t].download=Date.now(),await U(2e3),await ie.$t(t)}(e)}catch(t){$(t,"scr173")}}},Pt=new WeakMap,Rt=new WeakSet,Jt=function(){Vt.on=!0,Vt.timeoutId&&clearTimeout(Vt.timeoutId),Kt()},Ht=function(){clearTimeout(Vt.timeoutId),Vt.on=!1},zt);var Qt,Xt,Yt,Zt,te,ee;const ie=new(ee=class{constructor(){Qt.add(this),this.Et={},this.Ct={alreadyInArchive:[],willAddToArchive:[],notInterested:[]},Xt.set(this,[])}async St(){try{const t=await async function(){let t=[],[e,i]=[0,0],n=0;do{await U(1e3);const r=new mt("following").K({maxCursor:e,minCursor:i}).P(0===e?10:20);try{const n=await window.fetch(r.H(),{credentials:"include"}),o=await n.json(),{statusCode:a,userList:s}=o;if(0!==a)throw new Error(`Err fetching authors, ${JSON.stringify(o)}`);if(t=(s||[]).concat(t),({maxCursor:e,minCursor:i}=o),b(13,{currentTotal:t.length}),"number"!=typeof e||"number"!=typeof i)throw new Error("Things have changed? Author cursor is no longer number?")}catch(t){if(n++,n<=3)continue;throw t}if(n=0,0===t.length)return[]}while("-1"!==String(e)&&"-1"!==String(i));return t}();if(!ot.S)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");I.v(t),async function(t){for(const e of t){const{id:t,avatarThumb:i}=e.user;try{await rt(i,`small_${t}.jpg`)}catch(t){$(t,"daa60","silently")}}for(const e of t){const{id:t,avatarLarger:i}=e.user;try{await rt(i,`large_${t}.jpg`)}catch(t){$(t,"daa68","silently")}}}(t);const e=t.map(ut);e.forEach((t=>{var e;t.lastChecked=(null===(e=I.l.following.lastRun[t.id])||void 0===e?void 0:e.download)||0})),this.Et=st("id")(e),k(14,{authorDict:this.Et,started:[...I.l.following.started],notInterested:[...I.l.following.notInterested]})}catch(t){$(t,"ff27")}}async Dt(t){k(20,"following"),this.Ct=t,I.l.following.notInterested=new Set(t.notInterested);const e=[...t.willAddToArchive,...t.alreadyInArchive].sort(((t,e)=>{var i,n;return((null===(i=I.l.following.lastRun[t])||void 0===i?void 0:i.download)||0)-((null===(n=I.l.following.lastRun[e])||void 0===n?void 0:n.download)||0)}));N(this,Xt,e.map((t=>({authorId:t,status:"queued"}))),"f"),await I.p(),W(this,Qt,"m",Yt).call(this),await W(this,Qt,"m",Zt).call(this)}async $t(t){try{const e=W(this,Xt,"f").find((e=>e.authorId===t));e&&(e.status="finished"),await I.p(),await W(this,Qt,"m",Zt).call(this)}catch(t){$(t,"ff101")}}},Xt=new WeakMap,Qt=new WeakSet,Yt=async function(){for(const t of I.l.following.officialAuthorList)this.Ct.alreadyInArchive.includes(t)||this.Ct.willAddToArchive.includes(t)||await I.g(t)},Zt=async function(){const t=W(this,Xt,"f").find((t=>"queued"===t.status));if(t){t.status="current";const e=this.Et[t.authorId].uniqueId;await Gt.bt(t.authorId,e),k(15,W(this,Xt,"f"))}else W(this,Qt,"m",te).call(this)},te=function(){const{officialAuthorList:t,started:e,notInterested:i}=I.l.following;k(18,{numFollowed:t.size,numStarted:e.size,numNotInterested:i.size,numCappedOut:[...t].filter((t=>!e.has(t))).filter((t=>!i.has(t))).length})},ee),ne=new class{constructor(){this.xt={}}o(t){this.xt=t}};function re(){try{return F(ne.xt.unlocks.likeLevel).cap}catch(t){return $(t,"ud17"),0}}function oe(){return ne.xt.profile.uid}const ae={async i(){const t=await v.t;return await t.get("likesCache",oe())||[]},o:async t=>(await v.t).put("likesCache",t,oe()),async It(){$t(await this.i())&&await this.o([])},async rt(t){return(await this.i()).map((t=>t.id)).includes(t.id)}};function se(t){if(!t.id||!t.video||!t.author)return $(new Error(JSON.stringify(t)),"pid27","silently"),!1;if(!t.video.downloadAddr&&!t.video.playAddr)return $(new Error("no video addr"),"pid11","silently"),!1;if(!t.video.cover)return $(new Error("no cover"),"pid15","silently"),!1;if(t.id!==t.video.id)return $(new Error(`${t.id} different from ${t.video.id}`),"pid49","silently"),!1;if("mp4"!==t.video.format)return $(new Error(`video format is ${t.video.format}`),"pid56","silently"),!1;{const e=new URL(t.video.cover),i=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!i||10!==i.length)return $(new Error(`cover url no exp: ${t.video.cover}`),"pid100","silently"),!1}return!0}async function ce(){const t=await async function(){const t=[];let e="0",i=!0,n=0,r=0;await ae.It();do{await U(1500);const o=new mt("likes").J(e).P(30);let a=[],s={};try{const t=await window.fetch(o.H(),{credentials:"include"});if(s=await t.json(),a=s.itemList,0!==s.statusCode){if("10000"===s.code&&"verify"===s.type)return $(new Error("need to solve recaptcha"),"fl39"),"error";throw new Error(`code: ${s.code} ${s.type}`)}}catch(t){if(n++,n<=3)continue;if(!s.cursor||s.cursor===e)return $(t,"fl53"),"error"}if(n=0,a){let e=a.map(ct);if(e.some((t=>!se(t)))&&(r++,r<=3))continue;if(r=0,e=a.filter(se),0===e.length&&a.length>10)return $(new Error("tiktok api changed, wait for the next patch of this extension to fix"),"fl76"),[];t.push(...e),b(9,{currentTotal:t.length})}if(0===t.length)return[];if(await ae.rt(t[t.length-1]))break;if(({cursor:e,hasMore:i}=s),"-1"===String(e)||"0"===String(e)||!e){$(new Error(`weird cursor: ${e}`),"fl76","silently");break}}while(i);return t}();if("error"===t)return;const e=await ae.i(),i=Ct(t.concat(e));await ae.o(i)}var ue,le,de,fe,he,we,pe,ye,me;const ve=new(me=class{constructor(){ue.add(this),le.set(this,[]),de.set(this,!1),fe.set(this,0)}async jt(){N(this,de,!0,"f"),await U(1e3),kt.tt.it("paused"),I.p()}async Ot(){N(this,de,!1,"f")}async At(){var t;await W(this,ue,"m",we).call(this);try{if(0===W(this,le,"f").length)return void b(10);if(!ot.S)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");I.l.likes.officialList=W(this,le,"f").map((t=>t.id));const{finalDownloadOutcome:e}=await W(this,ue,"m",pe).call(this);if("someUrlExpired"===e)return N(this,fe,1+(t=+W(this,fe,"f")),"f"),t>3?void $(new Error("Session too long, please reload"),"bl46"):void this.At();W(this,ue,"m",ye).call(this,e)}catch(t){$(t,"bl50")}}},le=new WeakMap,de=new WeakMap,fe=new WeakMap,ue=new WeakSet,he=function(){return I.l.likes.downloaded.size>=re()},we=async function(){try{await ce(),I.l.likes.lastRun.collect=Date.now(),N(this,le,await ae.i(),"f")}catch(t){throw $(t,"bl32"),t}},pe=async function(){k(20,"likes"),kt.tt.et({total:W(this,le,"f").length,nowAt:0});for(const t of W(this,le,"f")){new Ft(t,"liked").vt()}for(const[t,e]of W(this,le,"f").reverse().entries()){const i=new Ft(e,"liked");if(!i.ft&&!i.ht){if(W(this,ue,"m",he).call(this))return{finalDownloadOutcome:"capped"};for(;W(this,de,"f");)await U(1e3);if(i.wt())return{finalDownloadOutcome:"someUrlExpired"};kt.tt.it("downloading"),kt.tt.et({total:W(this,le,"f").length,nowAt:t+1}),i.yt().catch((t=>$(t,"bl75","silently"))),W(this,de,"f")||await U(A())}}return{finalDownloadOutcome:"completed"}},ye=async function(t){const e={officialListLength:I.l.likes.officialList.length,numMp4InLocalFolder:I.l.likes.downloaded.size,status:t};I.l.likes.lastRun.download=Date.now(),await U(200),b(12,e),kt.tt.it(t),await I.p()},me);function ge(t){b(6,t)}let _e=!1;var ke,be,Te,$e,Ee,Ce;const Se=new(Ce=class{constructor(){ke.add(this),be.set(this,null)}async Bt(){const t=await g.i("archiveFolderHandle"),e=await showDirectoryPicker({startIn:t});W(this,ke,"m",Te).call(this,e)}Mt(){b(5)}},be=new WeakMap,ke=new WeakSet,Te=async function(t){if("granted"!==await t.requestPermission({mode:"readwrite"}))return;if(!await async function(t){if(await async function(t){const e=[];for await(const i of t.keys())e.push(i);return 0===e.length}(t))return!!_e||(_e=!0,!ne.xt.behavior.hasCreatedArchiveFolder||(ge({dropResult:"unexpectedly_empty"}),!1));try{await t.getFileHandle("Archive.html");const e=await t.getDirectoryHandle("data"),i=await e.getDirectoryHandle(".appdata");return await i.getFileHandle("app.js"),!0}catch(t){return ge({dropResult:"content_seems_wrong"}),!1}}(t))return;const e=await async function(t){const e=await E(t,"data/.appdata/db.js"),i=await e.getFile(),n=x(await i.text()),{id:r,uid:o,uniqueId:a,nickname:s}=ne.xt.profile;return n.user.id.length>0&&n.user.id!==r?(ge({dropResult:"belongs_to_another_tiktok_account",belongsToUser:n.user.uniqueId}),null):(n.user={uid:o,id:r,uniqueId:a,nickname:s},n)}(t);e&&W(this,ke,"m",$e).call(this,t,e)},$e=async function(t,e){ot.S||T("is_resync_ready"),k(7),await I.h(t,e),await Lt.h(),"following"===kt.G?ie.St():ve.At(),W(this,ke,"m",Ee).call(this)},Ee=function(){var t;null===(t=W(this,be,"f"))||void 0===t||t.remove(),N(this,be,null,"f")},Ce);function De(t){const{type:i,payload:n}=t.data;if("official_tiktok_likes"===i){const t=new mt("likes").J("0").P(30).H();e.postMessage({type:"compare",payload:{myUrl:t,officialUrl:n.officialUrl}})}if("official_tiktok_followed_authors"===i){const t=new mt("following").K({maxCursor:0,minCursor:0}).P(20).H();e.postMessage({type:"compare",payload:{myUrl:t,officialUrl:n.officialUrl}})}}function xe(){var i;null===(i=document.getElementById("myfaveTT-container"))||void 0===i||i.remove(),document.body.classList.remove("pushed-by-myfaveTT"),window.onmessage=null,t.onmessage=null,t.close(),e.onmessage=null,e.close()}let Ie="";async function je(e){try{const{type:i,payload:n}=e.data;if(0===i)return void t.postMessage({type:1});if(1===i)return xe(),void alert("Not loading myFaveTT sidebar, because it's already running in another tab.");if(100===i)return k(3,n),void Ot.ot();if(102===i)return void k(19,n);if(101===i){if(!Gt._t)return;if(Ie===(Ie=JSON.stringify(e.data)))return void console.error("double listener?!");try{const t=await async function(t){const{url:e,requestHeaders:i}=t,n=i.find((t=>"x-tt-params"===t.name));if(!n)return[];pt.V(e);const r={[n.name]:n.value,Accept:"application/json, text/plain, text/csv, */*"};let o=0,a=0;for(;;){await U(1e3);const t=await fetch(e,{headers:r,credentials:"include"}),i=await t.json(),{statusCode:n,itemList:s}=i;if(0!==n){if(o++,o<=3)continue;return $(new Error(`Err in repeat captured request, ${JSON.stringify(i)}`),"bf31","silently"),[]}if(!s)return[];let c=s.map(ct);if(c.some((t=>!se(t)))){if(a++,a<=3)continue;$(new Error("still flawed"),"bf45","silently")}if(c=c.filter(se),s.length>10&&0===c.length)throw $(new Error(JSON.stringify(ct(s[0]))),"rp58","silently"),new Error("tiktok api changed, wait for the next patch of this extension to fix");return c}}(n);await Gt.Tt(t)}catch(t){$(t,"om82","silently")}}}catch(t){$(t,"om41")}}async function Oe(e){try{const{origin:i,data:{type:n,payload:r}}=e;if(i!==_)return;switch(n){case"reload":location.href="https://www.tiktok.com";break;case"resync_is_ready":ot.S=!0;break;case"resynced":{const{tempStorageKey:t,arrayBuffer:e}=r;L.$(t,e);break}case 12:Se.Bt();break;case 1:try{kt.G="likes",I.u?ve.At():Se.Mt()}catch(t){$(t,"om46")}break;case 2:try{kt.G="following",I.u?ie.St():Se.Mt()}catch(t){$(t,"om55")}break;case 3:xe();break;case 4:I.m(r);break;case 0:if(b(0,"1.2.59"),"initial"===dt.D){if(await dt.j(),"error"===dt.D)break;if(!dt.O())break;pt.h()}b(4,ht()),function(e,i){t.postMessage({type:e,payload:i})}(2);break;case 5:ve.jt();break;case 6:ve.Ot();break;case 10:qt.gt=!0;break;case 11:qt.gt=!1;break;case 7:ne.o(r);break;case 8:try{ie.Dt(r)}catch(t){$(t,"om161")}break;case 9:At(r);break;case 13:location.href="https://www.tiktok.com";break;case 14:location.href="https://chrome.google.com/webstore/detail/myfavett/gmajiifkcmjkehmngbopoobeplhoegad";break;case 15:history.replaceState(null,"","/")}}catch(t){$(t,"om136")}}try{window.onmessage=Oe,t.onmessage=je,e.onmessage=De,t.postMessage({type:0})}catch(t){$(t,"st8")}
