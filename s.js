const t=new BroadcastChannel("myfaveTT");let e,n;const i=new WeakMap,r=new WeakMap,o=new WeakMap,a=new WeakMap,s=new WeakMap;let c={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return r.get(t);if("objectStoreNames"===e)return t.objectStoreNames||o.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function u(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(d(this),e),f(i.get(this))}:function(...e){return f(t.apply(d(this),e))}:function(e,...n){const i=t.call(d(this),e,...n);return o.set(i,e.sort?e.sort():[e]),f(i)}}function l(t){return"function"==typeof t?u(t):(t instanceof IDBTransaction&&function(t){if(r.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));r.set(t,e)}(t),n=t,(e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,c):t);var n}function f(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(f(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&i.set(e,t)})).catch((()=>{})),s.set(e,t),e}(t);if(a.has(t))return a.get(t);const e=l(t);return e!==t&&(a.set(t,e),s.set(e,t)),e}const d=t=>s.get(t);const h=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],y=new Map;function p(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(y.get(e))return y.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=w.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!h.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&o.done]))[0]};return y.set(e,o),o}c=(t=>({...t,get:(e,n,i)=>p(e,n)||t.get(e,n,i),has:(e,n)=>!!p(e,n)||t.has(e,n)}))(c);const m={t:function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),s=f(a);return i&&a.addEventListener("upgradeneeded",(t=>{i(f(a.result),t.oldVersion,t.newVersion,f(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}("myfaveTT",2,{upgrade(t,e,n,i){switch(e){case 0:t.createObjectStore("likesCache"),t.createObjectStore("followingCache");case 1:t.createObjectStore("misc")}}})},g={i:async t=>(await m.t).get("misc",t),o:async(t,e)=>(await m.t).put("misc",e,t)},v="chrome-extension://gmajiifkcmjkehmngbopoobeplhoegad";function b(t,e){ui.postMessage({type:t,payload:e},v)}const k=b;function _(t,e){ui.postMessage({type:t,payload:e},v)}function T(t,e,n){b(1,{err:t,location:e,silently:n})}async function S(t,e){try{const n=e.split("/"),i=n.pop();let r=t;for(const t of n)r=await r.getDirectoryHandle(t,{create:!0});return await r.getFileHandle(i,{create:!0})}catch(t){throw T(t,"gfh29"),t}}async function E(t,e){const n=await t.createWritable();await n.write(e),await n.close()}const C={schemaVersion:1,user:{uid:"",id:"",uniqueId:"",nickname:""},authors:{},videos:{},likes:{downloadStatus:"unset",officialList:[],downloaded:new Set,lastRun:{collect:0,download:0}},following:{officialAuthorList:new Set,started:new Set,notInterested:new Set,downloadLog:{},lastRun:{}}};function D(t){return e=function(t){return JSON.stringify(t,(function(t,e){return e instanceof Set?[...e]:"string"==typeof e?e.replaceAll("`","背𓄹剃").replaceAll("${","⑀⦃"):e}))}(t),"db=String.raw`{}`;".slice(0,"db=String.raw`{}`;".indexOf("{"))+e+"db=String.raw`{}`;".slice("db=String.raw`{}`;".lastIndexOf("}")+1);var e}function I(t){return""===t?C:function(t){const e=JSON.parse(t,(function(t,e){switch(t){case"downloaded":case"notInterested":case"started":case"officialAuthorList":if(Array.isArray(e))return new Set(e)}return"string"==typeof e?e.replaceAll("⑀⦃","${").replaceAll("背𓄹剃","`"):e}));for(const[t,n]of Object.entries(e.following.downloadLog))e.following.downloadLog[t]=new Set(n);return e}(function(t){const e=t.indexOf("{"),n=t.lastIndexOf("}")-t.length+1;return t.slice(e,n)}(t))}const $=new class{constructor(){this.u=null,this.l=null}async h(t,e){this.u=t,this.l=e,b(8),g.o("archiveFolderHandle",t)}async p(){try{E(await S(this.u,"data/.appdata/db.js"),D(this.l))}catch(t){T(t,"a42")}}async m(t){try{const{archiveHtml:e,appJs:n}=t;E(await S(this.u,"Archive.html"),e),E(await S(this.u,"data/.appdata/app.js"),n)}catch(t){T(t,"a58")}}g(t){t.forEach((t=>{const{id:e,uniqueId:n,nickname:i,signature:r}=t.user,{followerCount:o,videoCount:a,heartCount:s}=t.stats,c={uniqueIds:[n],nicknames:[i],followerCount:o,heartCount:s,videoCount:a,signature:r},u=this.l.authors[e];u&&(c.uniqueIds=[...new Set([n,...u.uniqueIds])],c.nicknames=[...new Set([i,...u.nicknames])]),this.l.authors[e]=c})),this.l.following.officialAuthorList=new Set(t.map((t=>t.user.id))),this.p()}async v(t){try{if(!this.l.following.started.has(t)&&!this.l.following.downloadLog[t])return;this.l.following.started.delete(t),delete this.l.following.downloadLog[t],await this.p();let e=await this.u.getDirectoryHandle("data");e=await e.getDirectoryHandle("Following"),e=await e.getDirectoryHandle(t),await e.removeEntry("videos",{recursive:!0})}catch(t){T(t,"purge failed","silently")}}},x={k(t,e){b(2,{event:t,params:e})}};let j=0;function O(){let t;return t=j<=2?5:4+3*(j-2),1e3*t}const A={};async function B(){const t=[];Object.entries(A).forEach((async([e,n])=>{const{createTime:i,cover:r,video:o}=n;if(Boolean(r&&o))t.push(async function(t){var e;const{startWritingToDiskTime:n,key:i,likedOrFollowing:r,itemData:{id:o,author:a},cover:s,video:c,size:u}=t;if(0!==n){return Date.now()-n<1e4?void 0:(delete A[i],void x.k("stuck in writing"))}t.startWritingToDiskTime=Date.now();try{const t="liked"===r?"data/Likes":`data/Following/${a.id}`,n=`${t}/covers/${o}.jpg`,l=`${t}/videos/${o}.mp4`,f=S($.u,n).then((t=>E(t,s))),d=S($.u,l).then((t=>E(t,c)));if(await Promise.all([f,d]),$.l.videos[o].size=u,"following"===r){const t=$.l.following.downloadLog;t[e=a.id]||(t[e]=new Set),t[a.id].add(o)}else $.l.likes.downloaded.add(o)}catch(t){T(t,"ts71","silently")}finally{delete A[i]}}(n));else{Date.now()-i>6e4&&(delete A[e],x.k("took over 30 seconds"))}})),t.length&&(await Promise.allSettled(t),await $.p())}const M=new class{addNew(t){A[t.key]=t,j=Object.keys(A).length}_(t,e){A[t]&&(A[t].cover=e,B())}T(t,e){A[t]&&(A[t].size=e)}S(t,e){A[t]&&(A[t].video=e,B())}C(t){A[t],A[t]&&delete A[t]}};function N(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}function W(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n}function L(t){return new Promise((e=>{setTimeout((()=>{e(t)}),t)}))}function F(t){const e=5e3,n={unlocked:["unlock_0_to_1000_likes_(free)"],cap:1e3,nextToBuy:"unlock_1001_to_5000_likes",lineItemDescription:'"Enable downloading more than 1000, up to 5000 videos from your Likes on TikTok."'};if(0===t)return n;const i=[n.unlocked[0]],r=e*t,o=r+e,a=`unlock_${r+1}_to_${o}_likes`,s=`"Enable downloading more than ${r}, up to ${o} videos from your Likes on TikTok."`;for(let e=0;e<t;e++)i.push(F(e)?.nextToBuy);return{unlocked:i,cap:r,nextToBuy:a,lineItemDescription:s}}const q=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,R=/^0o[0-7]+$/i,J=parseInt,H="object"==typeof global&&global&&global.Object===Object&&global,z="object"==typeof self&&self&&self.Object===Object&&self,K=H||z||Function("return this")(),V=Object.prototype.toString,G=Math.max,Q=Math.min,X=function(){return K.Date.now()};function Y(t,e,n){let i,r,o,a,s,c,u=0,l=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){const n=i,o=r;return i=r=void 0,u=e,a=t.apply(o,n),a}function w(t){return u=t,s=setTimeout(p,e),l?h(t):a}function y(t){const n=t-c;return void 0===c||n>=e||n<0||f&&t-u>=o}function p(){const t=X();if(y(t))return m(t);s=setTimeout(p,function(t){const n=e-(t-c);return f?Q(n,o-(t-u)):n}(t))}function m(t){return s=void 0,d&&i?h(t):(i=r=void 0,a)}function g(){const t=X(),n=y(t);if(i=arguments,r=this,c=t,n){if(void 0===s)return w(c);if(f)return s=setTimeout(p,e),h(c)}return void 0===s&&(s=setTimeout(p,e)),a}return e=tt(e)||0,Z(n)&&(l=!!n.leading,f="maxWait"in n,o=f?G(tt(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=c=r=s=void 0},g.flush=function(){return void 0===s?a:m(X())},g}function Z(t){const e=typeof t;return!!t&&("object"==e||"function"==e)}function tt(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==V.call(t)}(t))return NaN;if(Z(t)){const e="function"==typeof t.valueOf?t.valueOf():t;t=Z(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(q,"");const e=P.test(t);return e||R.test(t)?J(t.slice(2),e?2:8):U.test(t)?NaN:+t}const et={};const nt=function(t,e,n){let i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return Z(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Y(t,e,{leading:i,maxWait:e,trailing:r})}((function(){Object.entries(et).forEach((async([t,e])=>{const n=await S($.u,`data/Following/Avatars/${t}`),i=await n.createWritable();await i.write(e),await i.close(),delete et[t]}))}),7e3);async function it(t,e){const n=await S($.u,`data/Following/Avatars/${e}`),i=await n.getFile();if(i.size>0){const t=12096e5;if(Date.now()-i.lastModified<t)return}const r=await fetch(t),o=r.headers.get("Content-Type");if("image/jpeg"!==o)return void T(new Error(`avatar type is ${o}`),"daa9","silently");const a=await r.blob();et[e]=a,nt(),e.includes("small")&&await L(200),e.includes("large")&&await L(2e3)}const rt={D:!1},ot=t=>e=>{const n={};for(const i of t)n[i]=e[i];return n},at=t=>e=>{const n={};return e.forEach((e=>{n[e[t]]=e})),n};function st(t){const e=ot(["id","desc","createTime","itemMute"])(t);return e.video=ot(["id","cover","playAddr","downloadAddr","format"])(t.video),e.stats=ot(["diggCount","playCount"])(t.stats),e.author=ot(["id","uniqueId","nickname","avatarLarger"])(t.author),e.authorStats=ot(["followerCount","heartCount","videoCount"])(t.authorStats),e}function ct(t){return ot(["id","uniqueId","nickname","avatarLarger","avatarThumb","signature"])(t.user)}function ut(){var t;return{aid:"1988",app_name:"tiktok_web",channel:"tiktok_web",device_platform:"web_pc",referer:document.referrer,cookie_enabled:navigator.cookieEnabled,screen_width:screen.width,screen_height:screen.height,browser_language:navigator.language,browser_platform:navigator.platform,browser_name:navigator.appCodeName,browser_version:navigator.appVersion,browser_online:navigator.onLine,verifyFp:null===(t=document.cookie.match(/s_v_web_id=(\w+)/))||void 0===t?void 0:t[1],is_page_visible:!0,focus_state:!0,is_fullscreen:window.matchMedia("(display-mode: fullscreen)").matches,history_len:window.history.length,battery_info:1,tz_name:Intl.DateTimeFormat().resolvedOptions().timeZone}}const lt=new class{constructor(){this.I="initial",this.$={}}async j(){if(window.__NEXT_DATA__)try{this.$=window.__NEXT_DATA__.props.initialProps,this.I="next"}catch(t){T(t,"ac26"),this.I="error"}else if(window.SIGI_STATE)try{this.$=window.SIGI_STATE.AppContext.appContext,this.I="sigi"}catch(t){T(t,"ac37"),this.I="error"}else try{const t=await fetch("/node-webapp/api/app-context"),e=await t.json();0===e.statusCode?(this.$=e,this.I="fetched"):(T(new Error(e),"ac49"),this.I="error")}catch(t){T(t,"ac52"),this.I="error"}x.k("app_context",{status:this.I}),this.I}O(){const{$wid:t,$region:e,$os:n,$language:i,$user:r}=this.$;if(!(t&&e&&n&&i))return T(new Error(JSON.stringify({$wid:t,$region:e,$os:n,$language:i})),"ac64"),!1;if(!r)return!0;const{uid:o,uniqueId:a,secUid:s,nickName:c}=r;return!!(o&&a&&s&&c)||(T(new Error(JSON.stringify({uid:o,uniqueId:a,secUid:s,nickName:c})),"ac75"),!1)}};function ft(){const{$wid:t,$region:e,$language:n,$os:i,$user:r}=lt.$;return{device_id:t,region:e,priority_region:r.region,os:i,app_language:n,webcast_language:n,language:n}}function dt(){const t=lt.$.$user;return{id:(null==t?void 0:t.uid)||null,secUid:(null==t?void 0:t.secUid)||null,uniqueId:(null==t?void 0:t.uniqueId)||null,nickname:(null==t?void 0:t.nickName)||null}}function ht(){const{secUid:t}=dt();if(!t)throw new Error("no secUid or id @ gsp19");return{from_page:"user",secUid:t}}var wt;class yt{constructor(t){wt.set(this,void 0),W(this,wt,"likes"===t?new URL("https://m.tiktok.com/api/favorite/item_list/"):new URL("https://m.tiktok.com/api/user/list/"),"f");const e={...ut(),...ft(),..."likes"===t?ht():{scene:21,from_page:"fyp"}};return Object.entries(e).forEach((([t,e])=>{N(this,wt,"f").searchParams.set(t,(null==e?void 0:e.toString())||"")})),this}A(t){return N(this,wt,"f").searchParams.set("cursor",t),this}B({maxCursor:t,minCursor:e}){return N(this,wt,"f").searchParams.set("maxCursor",String(t)),N(this,wt,"f").searchParams.set("minCursor",String(e)),this}M(t){return N(this,wt,"f").searchParams.set("count",String(t)),this}N(){return N(this,wt,"f").toString()}}wt=new WeakMap;const pt=1030,mt=["unset","downloading","paused","capped","completed"],gt=["downloading","completed","capped","pausing","paused","resuming"],vt={W:"unset",L:{F(t){b(16,t)},q(t){b(17,t)}},U:{P(t){k(11,{progress:t})},R(t){gt.includes(t)&&k(11,{status:t}),mt.includes(t)&&($.l.likes.downloadStatus=t)}}};function bt(t){if(!t)return!1;const e=new URL(t),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!n)return!1;return(Number(n+"000")-Date.now())/1e3/60<30}function kt(t){return[t.video.playAddr,t.video.cover].some(bt)}function _t(t){return t.some(kt)}function Tt(t){return{async J(){const e=await m.t,n=await e.get("followingCache",t);return n?_t(n)?[]:n.sort(((t,e)=>t.createTime-e.createTime)):[]},o:async e=>(await m.t).put("followingCache",e,t),async H(t){return(await this.J()).map((t=>t.id)).includes(t.id)}}}function St(t){const e=at("id")(t),n=t.map((t=>t.id));return[...new Set(n)].map((t=>e[t]))}var Et,Ct,Dt,It,$t;const xt=new($t=class{constructor(){Et.add(this),this.I="unset",Ct.set(this,"unset")}async K(){try{if(this.I===(this.I="expanding"))return;const t=await N(this,Et,"m",Dt).call(this);if(!t)return T(new Error("cannot find authorList"),"ale63","silently"),k(21),void(this.I="failed");if("A"===t.lastChild.tagName)return void(this.I="expanded");if("unset"===N(this,Ct,"f"))return W(this,Ct,t.lastChild.textContent,"f"),N(this,Ct,"f"),void N(this,Et,"m",It).call(this,t);if(N(this,Ct,"f")===t.lastChild.textContent)return void N(this,Et,"m",It).call(this,t);if(t.lastChild.textContent!==N(this,Ct,"f"))return void(this.I="expanded")}catch(t){T(t,"ale92")}}},Ct=new WeakMap,Et=new WeakSet,Dt=async function(){let t=document.querySelectorAll(".user-list");0===t.length&&(t=document.querySelectorAll('div[class*="-DivUserContainer"]'));let e=t[t.length-1];if(!e){const n=document.querySelector('a[title="TikTok"]');n&&(n.click(),await L(3e3),t=document.querySelectorAll(".user-list"),0===t.length&&(t=document.querySelectorAll('div[class*="-DivUserContainer"]')),e=t[t.length-1])}return e},It=async function(t){for(var e,n;;){if(null===(e=t.lastChild)||void 0===e||e.click(),await L(2e3),"A"===t.lastChild.tagName)return void(this.I="expanded");if((null===(n=t.lastChild)||void 0===n?void 0:n.textContent)!==N(this,Ct,"f"))return void(this.I="expanded")}},$t);async function jt(t){for(xt.K();;){const e=document.querySelector(`a[href*="${t}"]`);if(e)return void e.click();if("expanded"===xt.I)throw new Error("Couldn't find the user to click on the left bar. Maybe you just started following this user so it's not on the left bar yet. Reload and try again.");await L(500)}}var Ot,At,Bt;class Mt{constructor(t,e){this.V=t,this.G=e,Ot.add(this),this.X=this.V.id+this.G}get Y(){var t;return"liked"===this.G?Boolean($.l.likes.downloaded.has(this.V.id)):Boolean(null===(t=$.l.following.downloadLog[this.V.author.id])||void 0===t?void 0:t.has(this.V.id))}Z(){return kt(this.V)}async tt(){M.addNew({createTime:Date.now(),startWritingToDiskTime:0,key:this.X,likedOrFollowing:this.G,itemData:this.V}),await N(this,Ot,"m",At).call(this),await N(this,Ot,"m",Bt).call(this)}et(){try{$.l.videos[this.V.id]=function(t,e){const n={authorId:t.author.id,desc:t.desc,createTime:t.createTime,itemMute:t.itemMute,diggCount:t.stats.diggCount,playCount:t.stats.playCount},i=e.videos[t.id];return Object.assign({},i,n)}(this.V,$.l),$.l.authors[this.V.author.id]=function(t,e){const n={uniqueIds:[t.author.uniqueId],nicknames:[t.author.nickname],followerCount:t.authorStats.followerCount,heartCount:t.authorStats.heartCount,videoCount:t.authorStats.videoCount},i=e.authors[t.author.id];i&&(n.uniqueIds=[...new Set([...n.uniqueIds,...i.uniqueIds])],n.nicknames=[...new Set([...n.nicknames,...i.nicknames])]);return Object.assign({},i,n)}(this.V,$.l)}catch(t){T(t,"i77")}}}Ot=new WeakSet,At=async function(){try{const t=await fetch(this.V.video.cover),e=t.headers.get("Content-Type");if("image/jpeg"!==e)throw new Error(`cover type is ${e}`);const n=await t.arrayBuffer();M._(this.X,n)}catch(t){M.C(this.X),"Failed to fetch"===t.message?T(new Error(`fetch failed ${this.V.video.cover}`),"bi60","silently"):T(t,"bi63","silently")}},Bt=async function(){try{const t=new AbortController,e=setTimeout((()=>{throw t.abort(),new Error("fetch video timeout")}),7e3),n=await fetch(this.V.video.playAddr||this.V.video.downloadAddr,{signal:t.signal});if(clearTimeout(e),!String(n.status).startsWith("2"))throw new Error(`video status code ${n.status}`);if(206===n.status)throw new Error("status 206, could be very large");const i=n.headers.get("Content-Type");if("video/mp4"!==i)throw new Error(`video type is ${i}`);const r=n.headers.get("Content-Length"),o=(Number(r)/1024/1024).toFixed(1)+"MB";if(Number(r)>5e7)throw console.error(`video is too large, skip. size: ${o}, url: ${this.V.video.playAddr}`),new Error("video is too large, skip");M.T(this.X,o);const a=await n.arrayBuffer();_("please_resync_this_video",{tempStorageKey:this.X,arrayBuffer:a})}catch(t){M.C(this.X),"Failed to fetch"===t.message?T(new Error(`fetch failed ${this.V.video.playAddr||this.V.video.downloadAddr}`),"bi105","silently"):T(t,"bi108","silently")}};const Nt={nt:!1};var Wt,Lt,Ft,qt,Ut,Pt,Rt;const Jt=new(Rt=class{constructor(){Wt.add(this),Lt.set(this,[]),this.it="",Ft.set(this,null)}async rt(t,e){try{this.it=t,W(this,Lt,[],"f"),document.documentElement.style.overflow="hidden",document.documentElement.style.pointerEvents="none",document.querySelector("aside#myfaveTT-container").style.pointerEvents="auto",await jt(e),await L(2e3),N(this,Wt,"m",qt).call(this)}catch(t){T(t,"sr48")}}async ot(t){if(0===t.length)return void T(new Error("repeat failed?"),"scr78","silently");const e=function(t){const e=t[0].author.id;if(t.some((t=>t.author.id!==e)))throw new Error("not all videos share the same author");return e}(t);if(e!==this.it)return;if(_t(N(this,Lt,"f")))return N(this,Wt,"m",Pt).call(this),Xt.at(e),void(this.it="");N(this,Lt,"f").push(...t),vt.L.F(N(this,Lt,"f").length);if(!await Tt(e).H(N(this,Lt,"f")[N(this,Lt,"f").length-1]))return N(this,Lt,"f").length>pt?(W(this,Lt,N(this,Lt,"f").slice(0,pt),"f"),void await this.st()):void 0;await this.st()}async st(){var t;try{if(!this.it)return;const e=this.it;this.it="",N(this,Wt,"m",Pt).call(this);const n=await Tt(e).J(),i=St(N(this,Lt,"f").concat(n));await Tt(e).o(i),i.length,(t=$.l.following.lastRun)[e]||(t[e]={scroll:0,download:0}),$.l.following.lastRun[e].scroll=Date.now(),$.p(),async function(t){$.l.following.started.add(t);const e=await Tt(t).J();for(const[n,i]of e.entries()){for(;Nt.nt;)await L(500);const r=new Mt(i,"following");if(r.et(),!r.Y){if(r.Z())return void Xt.at(t);vt.L.q({total:e.length,current:n+1}),r.tt().catch((t=>T(t,"doa22","silently"))),await L(O())}}$.l.following.lastRun[t].download=Date.now(),await L(2e3),await Xt.at(t)}(e)}catch(t){T(t,"blf73")}}},Lt=new WeakMap,Ft=new WeakMap,Wt=new WeakSet,qt=function(){N(this,Ft,"f")&&clearInterval(N(this,Ft,"f")),W(this,Ft,setInterval((()=>N(this,Wt,"m",Ut).call(this)),1e3),"f")},Ut=async function(){try{if("hidden"===document.visibilityState)return;if(!this.it)return;!function(){const{scrollHeight:t,scrollTop:e,clientHeight:n}=document.documentElement;return t-e-n<20}()?window.scrollBy({top:350,left:0,behavior:"smooth"}):(await L(2e3),await this.st())}catch(t){T(t,"fl58")}},Pt=function(){clearInterval(N(this,Ft,"f"))},Rt);var Ht,zt,Kt,Vt,Gt,Qt;const Xt=new(Qt=class{constructor(){Ht.add(this),this.ct={},this.ut={alreadyInArchive:[],willAddToArchive:[],notInterested:[]},zt.set(this,[])}async lt(){try{const t=await async function(){let t=[],[e,n]=[0,0],i=0;do{await L(1e3);const r=new yt("following").B({maxCursor:e,minCursor:n}).M(0===e?10:20);try{const i=await window.fetch(r.N(),{credentials:"include"}),o=await i.json(),{statusCode:a,userList:s}=o;if(0!==a)throw new Error(`Err fetching authors, ${JSON.stringify(o)}`);if(t=(s||[]).concat(t),({maxCursor:e,minCursor:n}=o),k(13,{currentTotal:t.length}),"number"!=typeof e||"number"!=typeof n)throw new Error("Things have changed? Author cursor is no longer number?")}catch(t){if(i++,i<=3)continue;throw t}if(i=0,0===t.length)return[]}while("-1"!==String(e)&&"-1"!==String(n));return t}();if(!rt.D)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");$.g(t),async function(t){for(const e of t){const{id:t,avatarThumb:n}=e.user;try{await it(n,`small_${t}.jpg`)}catch(t){T(t,"daa60","silently")}}for(const e of t){const{id:t,avatarLarger:n}=e.user;try{await it(n,`large_${t}.jpg`)}catch(t){T(t,"daa68","silently")}}}(t);const e=t.map(ct);this.ct=at("id")(e),b(14,{authorDict:this.ct,started:[...$.l.following.started],notInterested:[...$.l.following.notInterested]})}catch(t){T(t,"ff27")}}async ft(t){b(20,"following"),this.ut=t,$.l.following.notInterested=new Set(t.notInterested);const e=[...t.willAddToArchive,...t.alreadyInArchive].sort(((t,e)=>{var n,i;return((null===(n=$.l.following.lastRun[t])||void 0===n?void 0:n.download)||0)-((null===(i=$.l.following.lastRun[e])||void 0===i?void 0:i.download)||0)}));W(this,zt,e.map((t=>({authorId:t,status:"queued"}))),"f"),await $.p(),await N(this,Ht,"m",Kt).call(this),await N(this,Ht,"m",Vt).call(this)}async at(t){try{const e=N(this,zt,"f").find((e=>e.authorId===t));e&&(e.status="finished"),await $.p(),await N(this,Ht,"m",Vt).call(this)}catch(t){T(t,"ff101")}}},zt=new WeakMap,Ht=new WeakSet,Kt=async function(){for(const t of $.l.following.officialAuthorList)this.ut.alreadyInArchive.includes(t)||this.ut.willAddToArchive.includes(t)||await $.v(t)},Vt=async function(){const t=N(this,zt,"f").find((t=>"queued"===t.status));if(t){t.status="current";const e=this.ct[t.authorId].uniqueId;await Jt.rt(t.authorId,e),b(15,N(this,zt,"f"))}else N(this,Ht,"m",Gt).call(this)},Gt=function(){const{officialAuthorList:t,started:e,notInterested:n}=$.l.following;b(18,{numFollowed:t.size,numStarted:e.size,numNotInterested:n.size,numCappedOut:[...t].filter((t=>!e.has(t))).filter((t=>!n.has(t))).length})},Qt),Yt=new class{constructor(){this.dt={}}o(t){this.dt=t}};function Zt(){try{return F(Yt.dt.unlocks.likeLevel).cap}catch(t){return T(t,"ud17"),0}}function te(){return Yt.dt.profile.uid}const ee={async i(){const t=await m.t;return await t.get("likesCache",te())||[]},o:async t=>(await m.t).put("likesCache",t,te()),async ht(){_t(await this.i())&&await this.o([])},async H(t){return(await this.i()).map((t=>t.id)).includes(t.id)}};function ne(t){if(!t.id||!t.video||!t.author)return T(new Error(JSON.stringify(t)),"pid27","silently"),!1;if(!t.video.downloadAddr&&!t.video.playAddr)return T(new Error("no video addr"),"pid11","silently"),!1;if(!t.video.cover)return T(new Error(JSON.stringify(t.video)),"pid39","silently"),!1;if(t.id!==t.video.id)return T(new Error(`${t.id} different from ${t.video.id}`),"pid49","silently"),!1;if("mp4"!==t.video.format)return T(new Error(`video format is ${t.video.format}`),"pid56","silently"),!1;if(!t.video.cover.includes("tiktokcdn"))return T(new Error(`Cover url not in tiktokcdn: ${t.video.cover}`),"pid79","silently"),!1;{const e=new URL(t.video.cover),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!n||10!==n.length)return T(new Error(`cover url no exp: ${t.video.cover}`),"pid100","silently"),!1}return!0}async function ie(){const t=await async function(){const t=[];let e="0",n=!0,i=0,r=0;await ee.ht();do{await L(1e3);const o=new yt("likes").A(e).M(30);let a=[],s={};try{const t=await window.fetch(o.N(),{credentials:"include"});if(s=await t.json(),a=s.itemList,0!==s.statusCode){if("10000"===s.code&&"verify"===s.type)return T(new Error("need to solve recaptcha"),"fl39"),"error";throw new Error(`code: ${s.code} ${s.type}`)}}catch(t){if(i++,i<=3)continue;if(!s.cursor||s.cursor===e)return T(t,"fl53"),"error"}if(i=0,a){let e=a.map(st);if(e.some((t=>!ne(t)))&&(r++,r<=3))continue;if(r=0,e=a.filter(ne),0===e.length&&a.length>10)return T(new Error("tiktok api changed, wait for the next patch of this extension to fix"),"fl76"),[];t.push(...e),k(9,{currentTotal:t.length})}if(0===t.length)return[];if(await ee.H(t[t.length-1]))break;if(({cursor:e,hasMore:n}=s),"-1"===String(e)||"0"===String(e)||!e){T(new Error(`weird cursor: ${e}`),"fl76","silently");break}}while(n);return t}();if("error"===t)return;const e=await ee.i(),n=St(t.concat(e));await ee.o(n)}var re,oe,ae,se,ce,ue,le,fe,de;const he=new(de=class{constructor(){re.add(this),oe.set(this,[]),ae.set(this,!1),se.set(this,0)}async wt(){W(this,ae,!0,"f"),await L(1e3),vt.U.R("paused"),$.p()}async yt(){W(this,ae,!1,"f")}async gt(){var t;await N(this,re,"m",ue).call(this);try{if(0===N(this,oe,"f").length)return void k(10);if(!rt.D)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");$.l.likes.officialList=N(this,oe,"f").map((t=>t.id));const{finalDownloadOutcome:e}=await N(this,re,"m",le).call(this);if("someUrlExpired"===e)return W(this,se,1+(t=+N(this,se,"f")),"f"),t>3?void T(new Error("Session too long, please reload"),"bl46"):void this.gt();N(this,re,"m",fe).call(this,e)}catch(t){T(t,"bl50")}}},oe=new WeakMap,ae=new WeakMap,se=new WeakMap,re=new WeakSet,ce=function(){return $.l.likes.downloaded.size>=Zt()},ue=async function(){try{await ie(),$.l.likes.lastRun.collect=Date.now(),W(this,oe,await ee.i(),"f")}catch(t){throw T(t,"bl32"),t}},le=async function(){b(20,"likes"),vt.U.P({total:N(this,oe,"f").length,nowAt:0});for(const t of N(this,oe,"f")){new Mt(t,"liked").et()}for(const[t,e]of N(this,oe,"f").reverse().entries()){const n=new Mt(e,"liked");if(!n.Y){if(N(this,re,"m",ce).call(this))return{finalDownloadOutcome:"capped"};for(;N(this,ae,"f");)await L(1e3);if(n.Z())return{finalDownloadOutcome:"someUrlExpired"};vt.U.R("downloading"),vt.U.P({total:N(this,oe,"f").length,nowAt:t+1}),n.tt().catch((t=>T(t,"bl75","silently"))),N(this,ae,"f")||await L(O())}}return{finalDownloadOutcome:"completed"}},fe=async function(t){const e={officialListLength:$.l.likes.officialList.length,numMp4InLocalFolder:$.l.likes.downloaded.size,status:t};$.l.likes.lastRun.download=Date.now(),await L(200),k(12,e),vt.U.R(t),await $.p()},de);function we(t){k(6,t)}let ye=!1;var pe,me,ge,ve,be,ke;const _e=new(ke=class{constructor(){pe.add(this),me.set(this,null)}async vt(){const t=await g.i("archiveFolderHandle"),e=await showDirectoryPicker({startIn:t});N(this,pe,"m",ge).call(this,e)}bt(){k(5)}},me=new WeakMap,pe=new WeakSet,ge=async function(t){if("granted"!==await t.requestPermission({mode:"readwrite"}))return;if(!await async function(t){if(await async function(t){const e=[];for await(const n of t.keys())e.push(n);return 0===e.length}(t))return!!ye||(ye=!0,!Yt.dt.behavior.hasCreatedArchiveFolder||(we({dropResult:"unexpectedly_empty"}),!1));try{await t.getFileHandle("Archive.html");const e=await t.getDirectoryHandle("data"),n=await e.getDirectoryHandle(".appdata");return await n.getFileHandle("app.js"),!0}catch(t){return we({dropResult:"content_seems_wrong"}),!1}}(t))return;const e=await async function(t){const e=await S(t,"data/.appdata/db.js"),n=await e.getFile(),i=I(await n.text()),{id:r,uid:o,uniqueId:a,nickname:s}=Yt.dt.profile;return i.user.id.length>0&&i.user.id!==r?(we({dropResult:"belongs_to_another_tiktok_account",belongsToUser:i.user.uniqueId}),null):(i.user={uid:o,id:r,uniqueId:a,nickname:s},i)}(t);e&&N(this,pe,"m",ve).call(this,t,e)},ve=async function(t,e){rt.D||_("is_resync_ready"),b(7),await $.h(t,e),"following"===vt.W?Xt.lt():he.gt(),N(this,pe,"m",be).call(this)},be=function(){var t;null===(t=N(this,me,"f"))||void 0===t||t.remove(),W(this,me,null,"f")},ke);function Te(){var e;null===(e=document.getElementById("myfaveTT-container"))||void 0===e||e.remove(),document.body.classList.remove("pushed-by-myfaveTT"),t.onmessage=null,t.close(),window.removeEventListener("message",Ce)}let Se="";async function Ee(e){try{const{type:n,payload:i}=e.data;if(0===n)return void t.postMessage({type:1});if(1===n)return Te(),void alert("Not loading myFaveTT sidebar, because it's already running in another tab.");if(100===n)return b(3,i),void xt.K();if(102===n)return void b(19,i);if(101===n){if(!Jt.it)return;if(Se===(Se=JSON.stringify(e.data)))return void console.error("double listener?!");try{const t=await async function(t){const{url:e,requestHeaders:n}=t,i=n.find((t=>"x-tt-params"===t.name));if(!i)return[];const r={[i.name]:i.value,Accept:"application/json, text/plain, text/csv, */*"};let o=0,a=0;for(;;){await L(1e3);const t=await fetch(e,{headers:r,credentials:"include"}),n=await t.json(),{statusCode:i,itemList:s}=n;if(0!==i){if(o++,o<=3)continue;return T(new Error(`Err in repeat captured request, ${JSON.stringify(n)}`),"bf31","silently"),[]}if(!s)return[];let c=s.map(st);if(c.some((t=>!ne(t)))){if(a++,a<=3)continue;T(new Error("still flawed"),"bf45","silently")}if(c=c.filter(ne),s.length>10&&0===c.length)throw T(new Error(JSON.stringify(st(s[0]))),"rp58","silently"),new Error("tiktok api changed, wait for the next patch of this extension to fix");return c}}(i);await Jt.ot(t)}catch(t){T(t,"om82","silently")}}}catch(t){T(t,"om41")}}async function Ce(e){try{const{origin:n,data:{type:i,payload:r}}=e;if(n!==v)return;switch(i){case"reload":location.href="https://www.tiktok.com";break;case"resync_is_ready":rt.D=!0;break;case"resynced":{const{tempStorageKey:t,arrayBuffer:e}=r;M.S(t,e);break}case 12:_e.vt();break;case 1:try{vt.W="likes",$.u?he.gt():_e.bt()}catch(t){T(t,"om46")}break;case 2:try{vt.W="following",$.u?Xt.lt():_e.bt()}catch(t){T(t,"om55")}break;case 3:Te();break;case 4:$.m(r);break;case 0:if(k(0,"1.2.48"),"initial"===lt.I){if(await lt.j(),"error"===lt.I)break;if(!lt.O())break}k(4,dt()),function(e,n){t.postMessage({type:e,payload:n})}(2);break;case 5:he.wt();break;case 6:he.yt();break;case 10:Nt.nt=!0;break;case 11:Nt.nt=!1;break;case 7:Yt.o(r);break;case 8:try{Xt.ft(r)}catch(t){T(t,"om161")}break;case 9:jt(r);break;case 13:location.href="https://www.tiktok.com";break;case 14:location.href="https://chrome.google.com/webstore/detail/myfavett/gmajiifkcmjkehmngbopoobeplhoegad"}}catch(t){T(t,"om136")}}try{t.onmessage=Ee,window.removeEventListener("message",Ce),window.addEventListener("message",Ce),t.postMessage({type:0})}catch(t){T(t,"st8")}
