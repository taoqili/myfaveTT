const t=new BroadcastChannel("myfaveTT");let e,n;const i=new WeakMap,r=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap;let c={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return r.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return l(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function u(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(f(this),e),l(i.get(this))}:function(...e){return l(t.apply(f(this),e))}:function(e,...n){const i=t.call(f(this),e,...n);return a.set(i,e.sort?e.sort():[e]),l(i)}}function d(t){return"function"==typeof t?u(t):(t instanceof IDBTransaction&&function(t){if(r.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{e(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)}));r.set(t,e)}(t),n=t,(e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,c):t);var n}function l(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{e(l(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&i.set(e,t)})).catch((()=>{})),s.set(e,t),e}(t);if(o.has(t))return o.get(t);const e=d(t);return e!==t&&(o.set(t,e),s.set(e,t)),e}const f=t=>s.get(t);const h=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],y=new Map;function p(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(y.get(e))return y.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=w.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!h.includes(n))return;const a=async function(t,...e){const a=this.transaction(t,r?"readwrite":"readonly");let o=a.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&a.done]))[0]};return y.set(e,a),a}c=(t=>({...t,get:(e,n,i)=>p(e,n)||t.get(e,n,i),has:(e,n)=>!!p(e,n)||t.has(e,n)}))(c);const m={t:function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const o=indexedDB.open(t,e),s=l(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(l(o.result),t.oldVersion,t.newVersion,l(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((t=>{a&&t.addEventListener("close",(()=>a())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}("myfaveTT",2,{upgrade(t,e,n,i){switch(e){case 0:t.createObjectStore("likesCache"),t.createObjectStore("followingCache");case 1:t.createObjectStore("misc")}}})},v={i:async t=>(await m.t).get("misc",t),o:async(t,e)=>(await m.t).put("misc",e,t)},g="chrome-extension://gmajiifkcmjkehmngbopoobeplhoegad";function k(t,e){ui.postMessage({type:t,payload:e},g)}const _=k;function b(t,e){ui.postMessage({type:t,payload:e},g)}function S(t,e,n){k(1,{err:t,location:e,silently:n})}async function C(t,e){try{const n=e.split("/"),i=n.pop();let r=t;for(const t of n)r=await r.getDirectoryHandle(t,{create:!0});return await r.getFileHandle(i,{create:!0})}catch(t){throw S(t,"gfh29"),t}}async function T(t,e){const n=await t.createWritable();await n.write(e),await n.close()}const D={schemaVersion:1,user:{uid:"",id:"",uniqueId:"",nickname:""},authors:{},videos:{},likes:{downloadStatus:"unset",officialList:[],downloaded:new Set,lastRun:{collect:0,download:0}},following:{officialAuthorList:new Set,started:new Set,notInterested:new Set,downloadLog:{},lastRun:{}}};function I(t){return e=function(t){return JSON.stringify(t,(function(t,e){return e instanceof Set?[...e]:"string"==typeof e?e.replaceAll("`","背𓄹剃").replaceAll("${","⑀⦃"):e}))}(t),"db=String.raw`{}`;".slice(0,"db=String.raw`{}`;".indexOf("{"))+e+"db=String.raw`{}`;".slice("db=String.raw`{}`;".lastIndexOf("}")+1);var e}function x(t){return""===t?D:function(t){const e=JSON.parse(t,(function(t,e){switch(t){case"downloaded":case"notInterested":case"started":case"officialAuthorList":if(Array.isArray(e))return new Set(e)}return"string"==typeof e?e.replaceAll("⑀⦃","${").replaceAll("背𓄹剃","`"):e}));for(const[t,n]of Object.entries(e.following.downloadLog))e.following.downloadLog[t]=new Set(n);return e}(function(t){const e=t.indexOf("{"),n=t.lastIndexOf("}")-t.length+1;return t.slice(e,n)}(t))}const $=new class{constructor(){this.u=null,this.l=null}async h(t,e){this.u=t,this.l=e,k(8),v.o("archiveFolderHandle",t)}async p(){try{T(await C(this.u,"data/.appdata/db.js"),I(this.l))}catch(t){S(t,"a42")}}async m(t){try{const{archiveHtml:e,appJs:n}=t;T(await C(this.u,"Archive.html"),e),T(await C(this.u,"data/.appdata/app.js"),n)}catch(t){S(t,"a58")}}v(t){t.forEach((t=>{const{id:e,uniqueId:n,nickname:i,signature:r}=t.user,{followerCount:a,videoCount:o,heartCount:s}=t.stats,c={uniqueIds:[n],nicknames:[i],followerCount:a,heartCount:s,videoCount:o,signature:r},u=this.l.authors[e];u&&(c.uniqueIds=[...new Set([n,...u.uniqueIds])],c.nicknames=[...new Set([i,...u.nicknames])]),this.l.authors[e]=c})),this.l.following.officialAuthorList=new Set(t.map((t=>t.user.id))),this.p()}async g(t){try{if(!this.l.following.started.has(t)&&!this.l.following.downloadLog[t])return;this.l.following.started.delete(t),delete this.l.following.downloadLog[t],await this.p();let e=await this.u.getDirectoryHandle("data");e=await e.getDirectoryHandle("Following"),e=await e.getDirectoryHandle(t),await e.removeEntry("videos",{recursive:!0})}catch(t){S(t,"purge failed","silently")}}},E={k(t,e){k(2,{event:t,params:e})}};const A={};async function B(){const t=[];Object.entries(A).forEach((async([e,n])=>{const{createTime:i,cover:r,dynamicCover:a,video:o}=n;if(Boolean(r&&a&&o))t.push(async function(t){var e;const{startWritingToDiskTime:n,key:i,likedOrFollowing:r,itemData:{id:a,author:o},cover:s,dynamicCover:c,video:u,size:d}=t;if(0!==n){return Date.now()-n<1e4?void 0:(delete A[i],void E.k("stuck in writing"))}t.startWritingToDiskTime=Date.now();try{const t="liked"===r?"data/Likes":`data/Following/${o.id}`,n=`${t}/covers/${a}.jpg`,l=`${t}/animated-covers/${a}.webp`,f=`${t}/videos/${a}.mp4`,h=C($.u,n).then((t=>T(t,s))),w=C($.u,l).then((t=>T(t,c))),y=C($.u,f).then((t=>T(t,u)));if(await Promise.all([h,w,y]),$.l.videos[a].size=d,"following"===r){const t=$.l.following.downloadLog;t[e=o.id]||(t[e]=new Set),t[o.id].add(a)}else $.l.likes.downloaded.add(a)}catch(t){S(t,"ts71","silently")}finally{delete A[i],Object.keys(A).length}}(n));else{Date.now()-i>6e4&&(delete A[e],E.k("took over 30 seconds"))}})),t.length&&(await Promise.allSettled(t),await $.p())}const O=new class{addNew(t){A[t.key]=t}_(t,e){A[t]&&(A[t].cover=e)}S(t,e){A[t]&&(A[t].dynamicCover=e)}C(t,e){A[t]&&(A[t].size=e)}T(t,e){A[t]&&(A[t].video=e,B())}};function j(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}function M(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n}function W(t){return new Promise((e=>{setTimeout((()=>{e(t)}),t)}))}function L(t){const e=5e3,n={unlocked:["unlock_0_to_1000_likes_(free)"],cap:1e3,nextToBuy:"unlock_1001_to_5000_likes",lineItemDescription:'"Enable downloading more than 1000, up to 5000 videos from your Likes on TikTok."'};if(0===t)return n;const i=[n.unlocked[0]],r=e*t,a=r+e,o=`unlock_${r+1}_to_${a}_likes`,s=`"Enable downloading more than ${r}, up to ${a} videos from your Likes on TikTok."`;for(let e=0;e<t;e++)i.push(L(e)?.nextToBuy);return{unlocked:i,cap:r,nextToBuy:o,lineItemDescription:s}}async function N(t,e){const n=await C($.u,`data/Following/${e}`),i=await n.getFile();if(i.size>0){const t=6048e5;if(Date.now()-i.lastModified<t)return}const r=await fetch(t),a=r.headers.get("Content-Type");if("image/jpeg"!==a)return void S(new Error(`avatar type is ${a}`),"daa9","silently");const o=await r.blob(),s=await n.createWritable();await s.write(o),await s.close(),e.includes("avatar_small")&&await W(200),e.includes("avatar_large")&&await W(2e3)}const q={D:!1},F=t=>e=>{const n={};for(const i of t)n[i]=e[i];return n},P=t=>e=>{const n={};return e.forEach((e=>{n[e[t]]=e})),n};function H(t){const e=F(["id","desc","createTime","itemMute"])(t);return e.video=F(["id","cover","dynamicCover","playAddr","downloadAddr","format"])(t.video),e.stats=F(["diggCount","playCount"])(t.stats),e.author=F(["id","uniqueId","nickname","avatarLarger"])(t.author),e.authorStats=F(["followerCount","heartCount","videoCount"])(t.authorStats),e}function R(t){return F(["id","uniqueId","nickname","avatarLarger","avatarThumb","signature"])(t.user)}const U=new class{constructor(){this.I="initial",this.$={}}async A(){if(window.__NEXT_DATA__)try{this.$=window.__NEXT_DATA__.props.initialProps,this.I="next"}catch(t){S(t,"ac26"),this.I="error"}else if(window.SIGI_STATE)try{this.$=window.SIGI_STATE.AppContext.appContext,this.I="sigi"}catch(t){S(t,"ac37"),this.I="error"}else try{const t=await fetch("/node-webapp/api/app-context"),e=await t.json();0===e.statusCode?(this.$=e,this.I="fetched"):(S(new Error(e),"ac49"),this.I="error")}catch(t){S(t,"ac52"),this.I="error"}E.k("app_context",{status:this.I}),this.I}B(){const{$wid:t,$region:e,$os:n,$language:i,$user:r}=this.$;if(!(t&&e&&n&&i))return S(new Error(JSON.stringify({$wid:t,$region:e,$os:n,$language:i})),"ac64"),!1;if(!r)return!0;const{uid:a,uniqueId:o,secUid:s,nickName:c}=r;return!!(a&&o&&s&&c)||(S(new Error(JSON.stringify({uid:a,uniqueId:o,secUid:s,nickName:c})),"ac75"),!1)}};var J,V,K;class z{constructor(t){return J.add(this),V.set(this,void 0),M(this,V,"likes"===t?new URL("https://m.tiktok.com/api/favorite/item_list/"):new URL("https://m.tiktok.com/api/user/list/"),"f"),j(this,J,"m",K).call(this),this}O(t){return j(this,V,"f").searchParams.set("cursor",t),this}j({maxCursor:t,minCursor:e}){return j(this,V,"f").searchParams.set("maxCursor",String(t)),j(this,V,"f").searchParams.set("minCursor",String(e)),this}M(t){return j(this,V,"f").searchParams.set("count",String(t)),this}W(){return j(this,V,"f").toString()}}V=new WeakMap,J=new WeakSet,K=function(){const t=Object.assign({},function(){var t;return{aid:"1988",app_name:"tiktok_web",device_platform:"web_pc",referer:document.referrer,cookie_enabled:navigator.cookieEnabled,screen_width:screen.width,screen_height:screen.height,browser_language:navigator.language,browser_platform:navigator.platform,browser_name:navigator.appCodeName,browser_version:navigator.appVersion,browser_online:navigator.onLine,verifyFp:null===(t=document.cookie.match(/s_v_web_id=(\w+)/))||void 0===t?void 0:t[1],timezone_name:Intl.DateTimeFormat().resolvedOptions().timeZone,is_page_visible:!0,focus_state:!0,is_fullscreen:window.matchMedia("(display-mode: fullscreen)").matches,history_len:window.history.length,battery_info:{}}}(),function(){const{$wid:t,$region:e,$language:n,$os:i,$user:r}=U.$;return{device_id:t,region:e,priority_region:r.region,os:i,app_language:n,secUid:r.secUid,language:n}}());Object.entries(t).forEach((([t,e])=>{j(this,V,"f").searchParams.set(t,(null==e?void 0:e.toString())||"")}))};const G=1030,Z=["unset","downloading","paused","capped","completed"],Q=["downloading","completed","capped","pausing","paused","resuming"],X={L:"unset",N:{q(t){k(16,t)},F(t){k(17,t)}},P:{H(t){_(11,{progress:t})},R(t){Q.includes(t)&&_(11,{status:t}),Z.includes(t)&&($.l.likes.downloadStatus=t)}}};function Y(t){if(!t)return!1;const e=new URL(t),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");return(Number(n+"000")-Date.now())/1e3/60<150}function tt(t){return[t.video.playAddr,t.video.cover,t.video.dynamicCover].some(Y)}function et(t){return t.some(tt)}function nt(t){return{async U(){const e=await m.t,n=await e.get("followingCache",t);return n?et(n)?[]:n.sort(((t,e)=>t.createTime-e.createTime)):[]},o:async e=>(await m.t).put("followingCache",e,t),async J(t){return(await this.U()).map((t=>t.id)).includes(t.id)}}}function it(t){const e=P("id")(t),n=t.map((t=>t.id));return[...new Set(n)].map((t=>e[t]))}var rt,at,ot,st,ct;const ut=new(ct=class{constructor(){rt.add(this),this.I="unset",at.set(this,"unset")}async V(){try{if(this.I===(this.I="expanding"))return;const t=await j(this,rt,"m",ot).call(this);if(!t)return S(new Error("encountered experimental version of tiktok.com, please reload and try again"),"ale45"),void(this.I="failed");if("A"===t.lastChild.tagName)return void(this.I="expanded");if("unset"===j(this,at,"f"))return M(this,at,t.lastChild.textContent,"f"),j(this,at,"f"),void j(this,rt,"m",st).call(this,t);if(j(this,at,"f")===t.lastChild.textContent)return void j(this,rt,"m",st).call(this,t);if(t.lastChild.textContent!==j(this,at,"f"))return void(this.I="expanded")}catch(t){S(t,"ale19")}}},at=new WeakMap,rt=new WeakSet,ot=async function(){let t=document.querySelectorAll(".user-list"),e=t[t.length-1];if(!e){const n=document.querySelector('a[title="TikTok"]');n&&(n.click(),await W(3e3),t=document.querySelectorAll(".user-list"),e=t[t.length-1])}return e},st=async function(t){for(var e,n;;){if(null===(e=t.lastChild)||void 0===e||e.click(),await W(2e3),"A"===t.lastChild.tagName)return void(this.I="expanded");if((null===(n=t.lastChild)||void 0===n?void 0:n.textContent)!==j(this,at,"f"))return void(this.I="expanded")}},ct);async function dt(t){for(ut.V();;){const e=document.querySelector(`a[href*="${t}"]`);if(e)return void e.click();if("expanded"===ut.I)return void S(new Error("Author list already fully expanded, but couldn't find author to click"),"sa22");await W(500)}}var lt,ft,ht,wt;class yt{constructor(t,e){this.K=t,this.G=e,lt.add(this),this.Z=this.K.id+this.G}get X(){var t;return"liked"===this.G?Boolean($.l.likes.downloaded.has(this.K.id)):Boolean(null===(t=$.l.following.downloadLog[this.K.author.id])||void 0===t?void 0:t.has(this.K.id))}Y(){return tt(this.K)}async tt(){O.addNew({createTime:Date.now(),startWritingToDiskTime:0,key:this.Z,likedOrFollowing:this.G,itemData:this.K}),await j(this,lt,"m",ft).call(this),await j(this,lt,"m",ht).call(this),await j(this,lt,"m",wt).call(this)}et(){try{$.l.videos[this.K.id]=function(t,e){const n={authorId:t.author.id,desc:t.desc,createTime:t.createTime,itemMute:t.itemMute,diggCount:t.stats.diggCount,playCount:t.stats.playCount},i=e.videos[t.id];return Object.assign({},i,n)}(this.K,$.l),$.l.authors[this.K.author.id]=function(t,e){const n={uniqueIds:[t.author.uniqueId],nicknames:[t.author.nickname],followerCount:t.authorStats.followerCount,heartCount:t.authorStats.heartCount,videoCount:t.authorStats.videoCount},i=e.authors[t.author.id];i&&(n.uniqueIds=[...new Set([...n.uniqueIds,...i.uniqueIds])],n.nicknames=[...new Set([...n.nicknames,...i.nicknames])]);return Object.assign({},i,n)}(this.K,$.l)}catch(t){S(t,"i77")}}}lt=new WeakSet,ft=async function(){try{const t=await fetch(this.K.video.cover),e=t.headers.get("Content-Type");if("image/jpeg"!==e)throw new Error(`cover type is ${e}`);const n=await t.arrayBuffer();O._(this.Z,n)}catch(t){S(t,"bi50","silently")}},ht=async function(){try{const t=await fetch(this.K.video.dynamicCover),e=t.headers.get("Content-Type");if("image/webp"!==e)throw new Error(`animated cover is ${e}`);const n=await t.arrayBuffer();O.S(this.Z,n)}catch(t){S(t,"bi65","silently")}},wt=async function(){try{const t=await fetch(this.K.video.playAddr),e=t.headers.get("Content-Type");if("video/mp4"!==e)throw new Error(`video type is ${e}`);const n=t.headers.get("Content-Length");O.C(this.Z,(Number(n)/1024/1024).toFixed(1)+"MB");const i=await t.arrayBuffer();b("please_resync_this_video",{tempStorageKey:this.Z,arrayBuffer:i})}catch(t){S(t,"bi91","silently")}};const pt={nt:!1};var mt,vt,gt,kt,_t,bt,St;const Ct=new(St=class{constructor(){mt.add(this),vt.set(this,[]),this.it="",gt.set(this,null)}async rt(t,e){try{this.it=t,M(this,vt,[],"f"),document.documentElement.style.overflow="hidden",document.documentElement.style.pointerEvents="none",document.querySelector("aside#myfaveTT-container").style.pointerEvents="auto",await dt(e),await W(2e3),j(this,mt,"m",kt).call(this)}catch(t){S(t,"sr48")}}async at(t){if(0===t.length)return void S(new Error("repeat failed?"),"scr78","silently");const e=function(t){const e=t[0].author.id;if(t.some((t=>t.author.id!==e)))throw new Error("not all videos share the same author");return e}(t);if(e!==this.it)return;if(et(j(this,vt,"f")))return j(this,mt,"m",bt).call(this),At.ot(e),void(this.it="");j(this,vt,"f").push(...t),X.N.q(j(this,vt,"f").length);if(!await nt(e).J(j(this,vt,"f")[j(this,vt,"f").length-1]))return j(this,vt,"f").length>G?(M(this,vt,j(this,vt,"f").slice(0,G),"f"),void await this.st()):void 0;await this.st()}async st(){var t;try{if(!this.it)return;const e=this.it;this.it="",j(this,mt,"m",bt).call(this);const n=await nt(e).U(),i=it(j(this,vt,"f").concat(n));await nt(e).o(i),i.length,(t=$.l.following.lastRun)[e]||(t[e]={scroll:0,download:0}),$.l.following.lastRun[e].scroll=Date.now(),$.p(),async function(t){$.l.following.started.add(t);const e=await nt(t).U();for(const[n,i]of e.entries()){for(;pt.nt;)await W(500);const r=new yt(i,"following");if(r.et(),!r.X){if(r.Y())return void At.ot(t);X.N.F({total:e.length,current:n+1}),r.tt().catch((t=>S(t,"doa22","silently"))),await W(6e3)}}$.l.following.lastRun[t].download=Date.now(),await W(2e3),await At.ot(t)}(e)}catch(t){S(t,"blf73")}}},vt=new WeakMap,gt=new WeakMap,mt=new WeakSet,kt=function(){j(this,gt,"f")&&clearInterval(j(this,gt,"f")),M(this,gt,setInterval((()=>j(this,mt,"m",_t).call(this)),2e3),"f")},_t=async function(){try{if("hidden"===document.visibilityState)return;if(!this.it)return;!function(){const{scrollHeight:t,scrollTop:e,clientHeight:n}=document.documentElement;return t-e-n<20}()?window.scrollBy(0,window.innerHeight):(await W(2e3),await this.st())}catch(t){S(t,"fl58")}},bt=function(){clearInterval(j(this,gt,"f"))},St);var Tt,Dt,It,xt,$t,Et;const At=new(Et=class{constructor(){Tt.add(this),this.ct={},this.ut={alreadyInArchive:[],willAddToArchive:[],notInterested:[]},Dt.set(this,[])}async dt(){try{const t=await async function(){let t=[],[e,n]=[0,0],i=0;do{await W(1e3);const r=new z("following").j({maxCursor:e,minCursor:n}).M(0===e?10:20);try{const i=await window.fetch(r.W(),{credentials:"include"}),a=await i.json(),{statusCode:o,userList:s}=a;if(0!==o)throw new Error(`Err fetching authors, ${JSON.stringify(a)}`);if(t=(s||[]).concat(t),({maxCursor:e,minCursor:n}=a),_(13,{currentTotal:t.length}),"number"!=typeof e||"number"!=typeof n)throw new Error("Things have changed? Author cursor is no longer number?")}catch(e){if(i++,i<=3)continue;return S(e,"fa43"),t}if(i=0,0===t.length)return[]}while("-1"!==String(e)&&"-1"!==String(n));return t}();if(!q.D)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");$.v(t),async function(t){for(const e of t){const{id:t,avatarThumb:n}=e.user;await N(n,`${t}/avatar_small.jpg`)}for(const e of t){const{id:t,avatarLarger:n}=e.user;await N(n,`${t}/avatar_large.jpg`)}}(t);const e=t.map(R);this.ct=P("id")(e),k(14,{authorDict:this.ct,started:[...$.l.following.started],notInterested:[...$.l.following.notInterested]})}catch(t){S(t,"ff27")}}async lt(t){k(20,"following"),this.ut=t,$.l.following.notInterested=new Set(t.notInterested);const e=[...t.willAddToArchive,...t.alreadyInArchive].sort(((t,e)=>{var n,i;return((null===(n=$.l.following.lastRun[t])||void 0===n?void 0:n.download)||0)-((null===(i=$.l.following.lastRun[e])||void 0===i?void 0:i.download)||0)}));M(this,Dt,e.map((t=>({authorId:t,status:"queued"}))),"f"),await $.p(),await j(this,Tt,"m",It).call(this),await j(this,Tt,"m",xt).call(this)}async ot(t){try{const e=j(this,Dt,"f").find((e=>e.authorId===t));e&&(e.status="finished"),await $.p(),await j(this,Tt,"m",xt).call(this)}catch(t){S(t,"ff101")}}},Dt=new WeakMap,Tt=new WeakSet,It=async function(){for(const t of $.l.following.officialAuthorList)this.ut.alreadyInArchive.includes(t)||this.ut.willAddToArchive.includes(t)||await $.g(t)},xt=async function(){const t=j(this,Dt,"f").find((t=>"queued"===t.status));if(t){t.status="current";const e=this.ct[t.authorId].uniqueId;await Ct.rt(t.authorId,e),k(15,j(this,Dt,"f"))}else j(this,Tt,"m",$t).call(this)},$t=function(){const{officialAuthorList:t,started:e,notInterested:n}=$.l.following;k(18,{numFollowed:t.size,numStarted:e.size,numNotInterested:n.size,numCappedOut:[...t].filter((t=>!e.has(t))).filter((t=>!n.has(t))).length})},Et),Bt=new class{constructor(){this.ft={}}o(t){this.ft=t}};function Ot(){try{return L(Bt.ft.unlocks.likeLevel).cap}catch(t){return S(t,"ud17"),0}}function jt(){return Bt.ft.profile.uid}const Mt={async i(){const t=await m.t;return await t.get("likesCache",jt())||[]},o:async t=>(await m.t).put("likesCache",t,jt()),async ht(){et(await this.i())&&await this.o([])},async J(t){return(await this.i()).map((t=>t.id)).includes(t.id)}};function Wt(t){if(!t.id||!t.video||!t.author)return S(new Error(JSON.stringify(t)),"pid27","silently"),!1;if(!t.video.downloadAddr)return console.error("No downloadAddr"),!1;if(!t.video.playAddr)return S(new Error(JSON.stringify(t.video)),"pid35","silently"),!1;if(!t.video.cover)return S(new Error(JSON.stringify(t.video)),"pid39","silently"),!1;if(!t.video.dynamicCover)return!1;if(t.id!==t.video.id)return S(new Error(`${t.id} different from ${t.video.id}`),"pid49","silently"),!1;if("mp4"!==t.video.format)return S(new Error(`video format is ${t.video.format}`),"pid56","silently"),!1;if(t.video.downloadAddr!==t.video.playAddr)return S(new Error(`downloadAddr ${t.video.downloadAddr} different from playAddr ${t.video.playAddr}`),"pid65","silently"),!1;if(!t.video.cover.includes("tiktokcdn"))return S(new Error(`Cover url not in tiktokcdn: ${t.video.cover}`),"pid79","silently"),!1;if(!t.video.dynamicCover.includes("tiktokcdn"))return S(new Error(`Gif url not in tiktokcdn: ${t.video.dynamicCover}`),"pid72","silently"),!1;{const e=new URL(t.video.cover),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!n||10!==n.length)return S(new Error(`cover url no exp: ${t.video.cover}`),"pid100","silently"),!1}{const e=new URL(t.video.dynamicCover),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!n||10!==n.length)return S(new Error(`cover url no exp: ${t.video.dynamicCover}`),"pid115","silently"),!1}return!0}async function Lt(){const t=await async function(){const t=[];let e="0",n=!0,i=0,r=0;await Mt.ht();do{await W(1e3);const a=new z("likes").O(e).M(30);let o=[],s={};try{const t=await window.fetch(a.W(),{credentials:"include"});if(s=await t.json(),o=s.itemList,0!==s.statusCode)throw new Error(`status_code: ${s.statusCode}`)}catch(t){if(i++,i<=3)continue;if(!s.cursor||s.cursor===e)return S(t,"fl53"),"error"}if(i=0,o){if(o.some((t=>!Wt(t)))&&(r++,r<=3))continue;r=0;const e=o.map(H).filter(Wt);if(0===e.length&&o.length>10)return S(new Error("tiktok api changed, please wait for developer to update"),"fl69"),[];t.push(...e),_(9,{currentTotal:t.length})}if(0===t.length)return[];if(await Mt.J(t[t.length-1]))break;if(({cursor:e,hasMore:n}=s),"-1"===String(e)||"0"===String(e)||!e){S(new Error(`weird cursor: ${e}`),"fl76","silently");break}}while(n);return t}();if("error"===t)return;const e=await Mt.i(),n=it(t.concat(e));await Mt.o(n)}var Nt,qt,Ft,Pt,Ht,Rt,Ut,Jt,Vt;const Kt=new(Vt=class{constructor(){Nt.add(this),qt.set(this,[]),Ft.set(this,!1),Pt.set(this,0)}async wt(){M(this,Ft,!0,"f"),await W(1e3),X.P.R("paused"),$.p()}async yt(){M(this,Ft,!1,"f")}async vt(){var t;await j(this,Nt,"m",Rt).call(this);try{if(0===j(this,qt,"f").length)return void _(10);if(!q.D)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");$.l.likes.officialList=j(this,qt,"f").map((t=>t.id));const{finalDownloadOutcome:e}=await j(this,Nt,"m",Ut).call(this);if("someUrlExpired"===e)return M(this,Pt,1+(t=+j(this,Pt,"f")),"f"),t>3?void S(new Error("Session too long, please reload"),"bl46"):void this.vt();j(this,Nt,"m",Jt).call(this,e)}catch(t){S(t,"bl50")}}},qt=new WeakMap,Ft=new WeakMap,Pt=new WeakMap,Nt=new WeakSet,Ht=function(){return $.l.likes.downloaded.size>=Ot()},Rt=async function(){try{await Lt(),$.l.likes.lastRun.collect=Date.now(),M(this,qt,await Mt.i(),"f")}catch(t){throw S(t,"bl32"),t}},Ut=async function(){k(20,"likes"),X.P.H({total:j(this,qt,"f").length,nowAt:0});for(const t of j(this,qt,"f")){new yt(t,"liked").et()}for(const[t,e]of j(this,qt,"f").reverse().entries()){const n=new yt(e,"liked");if(!n.X){if(j(this,Nt,"m",Ht).call(this))return{finalDownloadOutcome:"capped"};for(;j(this,Ft,"f");)await W(1e3);if(n.Y())return{finalDownloadOutcome:"someUrlExpired"};X.P.R("downloading"),X.P.H({total:j(this,qt,"f").length,nowAt:t+1}),n.tt().catch((t=>S(t,"bl75","silently"))),j(this,Ft,"f")||await W(6e3)}}return{finalDownloadOutcome:"completed"}},Jt=async function(t){const e={officialListLength:$.l.likes.officialList.length,numMp4InLocalFolder:$.l.likes.downloaded.size,status:t};$.l.likes.lastRun.download=Date.now(),await W(200),_(12,e),X.P.R(t),await $.p()},Vt);function zt(t){_(6,t)}let Gt=!1;var Zt,Qt,Xt,Yt,te,ee,ne,ie,re,ae,oe;const se=new(oe=class{constructor(){Zt.add(this),Qt.set(this,null)}async gt(){const t=await v.i("archiveFolderHandle"),e=await showDirectoryPicker({startIn:t});j(this,Zt,"m",ie).call(this,e)}kt(){var t;j(this,Zt,"m",Xt).call(this),_(5),null===(t=document.getElementById("myfaveTT-container"))||void 0===t||t.appendChild(j(this,Qt,"f"))}},Qt=new WeakMap,Zt=new WeakSet,Xt=function(){M(this,Qt,document.createElement("div"),"f"),j(this,Qt,"f").id="dropbox",j(this,Qt,"f").innerHTML='<svg viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>',j(this,Qt,"f").addEventListener("dragover",(t=>{t.preventDefault()})),j(this,Qt,"f").addEventListener("dragenter",(()=>{j(this,Zt,"m",Yt).call(this)})),j(this,Qt,"f").addEventListener("dragleave",(()=>{j(this,Zt,"m",te).call(this)})),j(this,Qt,"f").addEventListener("drop",(t=>{try{j(this,Zt,"m",ee).call(this,t)}catch(t){S(t,"db30","silently")}}))},Yt=function(){var t;null===(t=j(this,Qt,"f"))||void 0===t||t.classList.add("dragging-over")},te=function(){var t;null===(t=j(this,Qt,"f"))||void 0===t||t.classList.remove("dragging-over")},ee=async function(t){if(t.preventDefault(),j(this,Zt,"m",te).call(this),!t.dataTransfer)return void j(this,Zt,"m",ne).call(this);if(1!==t.dataTransfer.items.length)return void j(this,Zt,"m",ne).call(this);const e=t.dataTransfer.items[0];if("file"!==e.kind)return void j(this,Zt,"m",ne).call(this);const n=await e.getAsFileSystemHandle();if(n&&"directory"===n.kind)try{j(this,Zt,"m",ie).call(this,n)}catch(t){S(t,"db67")}else j(this,Zt,"m",ne).call(this)},ne=function(){zt({dropResult:"not_a_folder"})},ie=async function(t){if("granted"!==await t.requestPermission({mode:"readwrite"}))return;if(!await async function(t){if(await async function(t){const e=[];for await(const n of t.keys())e.push(n);return 0===e.length}(t))return!!Gt||(Gt=!0,!Bt.ft.behavior.hasCreatedArchiveFolder||(zt({dropResult:"unexpectedly_empty"}),!1));try{await t.getFileHandle("Archive.html");const e=await t.getDirectoryHandle("data"),n=await e.getDirectoryHandle(".appdata");return await n.getFileHandle("app.js"),!0}catch(t){return zt({dropResult:"content_seems_wrong"}),!1}}(t))return;const e=await async function(t){const e=await C(t,"data/.appdata/db.js"),n=await e.getFile(),i=x(await n.text()),{id:r,uid:a,uniqueId:o,nickname:s}=Bt.ft.profile;return i.user.id.length>0&&i.user.id!==r?(zt({dropResult:"belongs_to_another_tiktok_account",belongsToUser:i.user.uniqueId}),null):(i.user={uid:a,id:r,uniqueId:o,nickname:s},i)}(t);e&&j(this,Zt,"m",re).call(this,t,e)},re=async function(t,e){q.D||b("is_resync_ready"),k(7),await $.h(t,e),"following"===X.L?At.dt():Kt.vt(),j(this,Zt,"m",ae).call(this)},ae=function(){var t;null===(t=j(this,Qt,"f"))||void 0===t||t.remove(),M(this,Qt,null,"f")},oe);function ce(){var e;null===(e=document.getElementById("myfaveTT-container"))||void 0===e||e.remove(),document.body.classList.remove("pushed-by-myfaveTT"),t.onmessage=null,t.close(),window.removeEventListener("message",le)}let ue="";async function de(e){try{const{type:n,payload:i}=e.data;if(0===n)return void t.postMessage({type:1});if(1===n)return ce(),void alert("Not loading myFaveTT sidebar, because it's already running in another tab.");if(100===n)return k(3,i),void ut.V();if(102===n)return void k(19,i);if(101===n){if(!Ct.it)return;if(ue===(ue=JSON.stringify(e.data)))return void console.error("double listener?!");try{const t=await async function(t){const{url:e,requestHeaders:n}=t,i=n.find((t=>"x-tt-params"===t.name));if(!i)return[];const r={[i.name]:i.value,Accept:"application/json, text/plain, text/csv, */*"};let a=0,o=0;for(;;){await W(1e3);const t=await fetch(e,{headers:r,credentials:"include"}),n=await t.json(),{statusCode:i,itemList:s}=n;if(0!==i){if(a++,a<=3)continue;return S(new Error(`Err in repeat captured request, ${JSON.stringify(n)} `),"bf31","silently"),[]}if(!s)return[];if(s.some((t=>!Wt(t)))){if(o++,o<=3)continue;S(new Error("still flawed"),"bf45","silently")}return s.map(H).filter(Wt)}}(i);await Ct.at(t)}catch(t){S(t,"om82")}}}catch(t){S(t,"om41")}}async function le(e){try{const{origin:n,data:{type:i,payload:r}}=e;if(n!==g)return;switch(i){case"resync_is_ready":q.D=!0;break;case"resynced":{const{tempStorageKey:t,arrayBuffer:e}=r;O.T(t,e);break}case 12:se.gt();break;case 1:try{X.L="likes",$.u?Kt.vt():se.kt()}catch(t){S(t,"om46")}break;case 2:try{X.L="following",$.u?At.dt():se.kt()}catch(t){S(t,"om55")}break;case 3:ce();break;case 4:$.m(r);break;case 0:if(_(0,"1.2.15"),"initial"===U.I){if(await U.A(),"error"===U.I)break;if(!U.B())break}_(4,function(){const t=U.$.$user;return{id:(null==t?void 0:t.uid)||null,secUid:(null==t?void 0:t.secUid)||null,uniqueId:(null==t?void 0:t.uniqueId)||null,nickname:(null==t?void 0:t.nickName)||null}}()),function(e,n){t.postMessage({type:e,payload:n})}(2);break;case 5:Kt.wt();break;case 6:Kt.yt();break;case 10:pt.nt=!0;break;case 11:pt.nt=!1;break;case 7:Bt.o(r);break;case 8:try{At.lt(r)}catch(t){S(t,"om161")}break;case 9:dt(r)}}catch(t){S(t,"om136")}}try{t.onmessage=de,window.removeEventListener("message",le),window.addEventListener("message",le),t.postMessage({type:0})}catch(t){S(t,"st8")}
