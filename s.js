const t=new BroadcastChannel("myfaveTT"),e=new BroadcastChannel("params-guard");let n,i;const r=new WeakMap,o=new WeakMap,a=new WeakMap,s=new WeakMap,c=new WeakMap;let u={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function l(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(h(this),e),d(r.get(this))}:function(...e){return d(t.apply(h(this),e))}:function(e,...n){const i=t.call(h(this),e,...n);return a.set(i,e.sort?e.sort():[e]),d(i)}}function f(t){return"function"==typeof t?l(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));o.set(t,e)}(t),e=t,(n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,u):t);var e}function d(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(d(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&r.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(s.has(t))return s.get(t);const e=f(t);return e!==t&&(s.set(t,e),c.set(e,t)),e}const h=t=>c.get(t);const w=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],p=new Map;function m(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(p.get(e))return p.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=y.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!w.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&o.done]))[0]};return p.set(e,o),o}u=(t=>({...t,get:(e,n,i)=>m(e,n)||t.get(e,n,i),has:(e,n)=>!!m(e,n)||t.has(e,n)}))(u);const v={t:function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),s=d(a);return i&&a.addEventListener("upgradeneeded",(t=>{i(d(a.result),t.oldVersion,t.newVersion,d(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}("myfaveTT",2,{upgrade(t,e,n,i){switch(e){case 0:t.createObjectStore("likesCache"),t.createObjectStore("followingCache");case 1:t.createObjectStore("misc")}}})},g={i:async t=>(await v.t).get("misc",t),o:async(t,e)=>(await v.t).put("misc",e,t)},k="chrome-extension://gmajiifkcmjkehmngbopoobeplhoegad";function b(t,e){ui.postMessage({type:t,payload:e},k)}const _=b;function T(t,e){ui.postMessage({type:t,payload:e},k)}function S(t,e,n){b(1,{err:t,location:e,silently:n})}async function $(t,e){try{const n=e.split("/"),i=n.pop();let r=t;for(const t of n)r=await r.getDirectoryHandle(t,{create:!0});return await r.getFileHandle(i,{create:!0})}catch(t){throw S(t,"gfh29"),t}}async function E(t,e){const n=await t.createWritable();await n.write(e),await n.close()}const C={schemaVersion:1,user:{uid:"",id:"",uniqueId:"",nickname:""},authors:{},videos:{},likes:{downloadStatus:"unset",officialList:[],downloaded:new Set,lastRun:{collect:0,download:0}},following:{officialAuthorList:new Set,started:new Set,notInterested:new Set,downloadLog:{},lastRun:{}}};function D(t){return e=function(t){return JSON.stringify(t,(function(t,e){return e instanceof Set?[...e]:"string"==typeof e?e.replaceAll("`","背𓄹剃").replaceAll("${","⑀⦃"):e}))}(t),"db=String.raw`{}`;".slice(0,"db=String.raw`{}`;".indexOf("{"))+e+"db=String.raw`{}`;".slice("db=String.raw`{}`;".lastIndexOf("}")+1);var e}function x(t){return""===t?C:function(t){const e=JSON.parse(t,(function(t,e){switch(t){case"downloaded":case"notInterested":case"started":case"officialAuthorList":if(Array.isArray(e))return new Set(e)}return"string"==typeof e?e.replaceAll("⑀⦃","${").replaceAll("背𓄹剃","`"):e}));for(const[t,n]of Object.entries(e.following.downloadLog))e.following.downloadLog[t]=new Set(n);return e}(function(t){const e=t.indexOf("{"),n=t.lastIndexOf("}")-t.length+1;return t.slice(e,n)}(t))}const I=new class{constructor(){this.u=null,this.l=null}async h(t,e){this.u=t,this.l=e,b(8),g.o("archiveFolderHandle",t)}async p(){try{E(await $(this.u,"data/.appdata/db.js"),D(this.l))}catch(t){S(t,"a42")}}async m(t){try{const{archiveHtml:e,appJs:n}=t;E(await $(this.u,"Archive.html"),e),E(await $(this.u,"data/.appdata/app.js"),n)}catch(t){S(t,"a58")}}v(t){t.forEach((t=>{const{id:e,uniqueId:n,nickname:i,signature:r}=t.user,{followerCount:o,videoCount:a,heartCount:s}=t.stats,c={uniqueIds:[n],nicknames:[i],followerCount:o,heartCount:s,videoCount:a,signature:r},u=this.l.authors[e];u&&(c.uniqueIds=[...new Set([n,...u.uniqueIds])],c.nicknames=[...new Set([i,...u.nicknames])]),this.l.authors[e]=c})),this.l.following.officialAuthorList=new Set(t.map((t=>t.user.id))),this.p()}async g(t){try{if(!this.l.following.started.has(t)&&!this.l.following.downloadLog[t])return;this.l.following.started.delete(t),delete this.l.following.downloadLog[t],await this.p();let e=await this.u.getDirectoryHandle("data");e=await e.getDirectoryHandle("Following"),await e.removeEntry(t,{recursive:!0})}catch(t){S(t,"purge failed","silently")}}},j={k(t,e){b(2,{event:t,params:e})}};let O=0;function A(){let t;return t=O<=2?5:2+5*(O-2),1e3*t}const B={};async function M(){const t=[];Object.entries(B).forEach((async([e,n])=>{const{createTime:i,cover:r,video:o}=n;if(Boolean(r&&o))t.push(async function(t){var e;const{startWritingToDiskTime:n,key:i,likedOrFollowing:r,itemData:{id:o,author:a},cover:s,video:c,size:u}=t;if(0!==n){return Date.now()-n<1e4?void 0:(delete B[i],void j.k("stuck in writing"))}t.startWritingToDiskTime=Date.now();try{const t="liked"===r?"data/Likes":`data/Following/${a.id}`,n=`${t}/covers/${o}.jpg`,l=`${t}/videos/${o}.mp4`,f=$(I.u,n).then((t=>E(t,s))),d=$(I.u,l).then((t=>E(t,c)));if(await Promise.all([f,d]),I.l.videos[o].size=u,"following"===r){const t=I.l.following.downloadLog;t[e=a.id]||(t[e]=new Set),t[a.id].add(o)}else I.l.likes.downloaded.add(o)}catch(t){S(t,"ts71","silently")}finally{delete B[i]}}(n));else{Date.now()-i>1e5&&(delete B[e],j.k("took over 30 seconds"))}})),t.length&&(await Promise.allSettled(t),await I.p())}const L=new class{addNew(t){B[t.key]=t,O=Object.keys(B).length}_(t,e){B[t]&&(B[t].cover=e,M())}T(t,e){B[t]&&(B[t].size=e)}S(t,e){B[t]&&(B[t].video=e,M())}$(t){B[t],B[t]&&delete B[t]}};function W(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}function N(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n}function F(t){return new Promise((e=>{setTimeout((()=>{e(t)}),t)}))}function U(t){const e=5e3,n={unlocked:["unlock_0_to_1000_likes_(free)"],cap:1e3,nextToBuy:"unlock_1001_to_5000_likes",lineItemDescription:'"Enable downloading more than 1000, up to 5000 videos from your Likes on TikTok."'};if(0===t)return n;const i=[n.unlocked[0]],r=e*t,o=r+e,a=`unlock_${r+1}_to_${o}_likes`,s=`"Enable downloading more than ${r}, up to ${o} videos from your Likes on TikTok."`;for(let e=0;e<t;e++)i.push(U(e)?.nextToBuy);return{unlocked:i,cap:r,nextToBuy:a,lineItemDescription:s}}const q=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,J=/^0o[0-7]+$/i,H=parseInt,z="object"==typeof global&&global&&global.Object===Object&&global,V="object"==typeof self&&self&&self.Object===Object&&self,K=z||V||Function("return this")(),G=Object.prototype.toString,Q=Math.max,X=Math.min,Y=function(){return K.Date.now()};function Z(t,e,n){let i,r,o,a,s,c,u=0,l=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){const n=i,o=r;return i=r=void 0,u=e,a=t.apply(o,n),a}function w(t){return u=t,s=setTimeout(p,e),l?h(t):a}function y(t){const n=t-c;return void 0===c||n>=e||n<0||f&&t-u>=o}function p(){const t=Y();if(y(t))return m(t);s=setTimeout(p,function(t){const n=e-(t-c);return f?X(n,o-(t-u)):n}(t))}function m(t){return s=void 0,d&&i?h(t):(i=r=void 0,a)}function v(){const t=Y(),n=y(t);if(i=arguments,r=this,c=t,n){if(void 0===s)return w(c);if(f)return s=setTimeout(p,e),h(c)}return void 0===s&&(s=setTimeout(p,e)),a}return e=et(e)||0,tt(n)&&(l=!!n.leading,f="maxWait"in n,o=f?Q(et(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=c=r=s=void 0},v.flush=function(){return void 0===s?a:m(Y())},v}function tt(t){const e=typeof t;return!!t&&("object"==e||"function"==e)}function et(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==G.call(t)}(t))return NaN;if(tt(t)){const e="function"==typeof t.valueOf?t.valueOf():t;t=tt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(q,"");const e=P.test(t);return e||J.test(t)?H(t.slice(2),e?2:8):R.test(t)?NaN:+t}const nt={};const it=function(t,e,n){let i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return tt(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Z(t,e,{leading:i,maxWait:e,trailing:r})}((function(){Object.entries(nt).forEach((async([t,e])=>{const n=await $(I.u,`data/Following/Avatars/${t}`),i=await n.createWritable();await i.write(e),await i.close(),delete nt[t]}))}),7e3);async function rt(t,e){const n=await $(I.u,`data/Following/Avatars/${e}`),i=await n.getFile();if(i.size>0){const t=6048e5,e=(6*Math.random()+1)*t;if(Date.now()-i.lastModified<e)return}const r=await fetch(t),o=r.headers.get("Content-Type");if("image/jpeg"!==o)return void S(new Error(`avatar type is ${o}`),"daa9","silently");const a=await r.blob();nt[e]=a,it(),e.includes("small")&&await F(200),e.includes("large")&&await F(2e3)}const ot={C:!1},at=t=>e=>{const n={};for(const i of t)n[i]=e[i];return n},st=t=>e=>{const n={};return e.forEach((e=>{n[e[t]]=e})),n};function ct(t){const e=at(["id","desc","createTime","itemMute"])(t);return e.video=at(["id","cover","playAddr","downloadAddr","format"])(t.video),e.stats=at(["diggCount","playCount"])(t.stats),e.author=at(["id","uniqueId","nickname","avatarLarger"])(t.author),e.authorStats=at(["followerCount","heartCount","videoCount"])(t.authorStats),e}function ut(t){return at(["id","uniqueId","nickname","avatarLarger","avatarThumb","signature"])(t.user)}const lt=new class{constructor(){this.D="initial",this.I={}}async j(){if(window.__NEXT_DATA__)try{this.I=window.__NEXT_DATA__.props.initialProps,this.D="next"}catch(t){S(t,"ac26"),this.D="error"}else if(window.SIGI_STATE)try{this.I=window.SIGI_STATE.AppContext.appContext,this.D="sigi"}catch(t){S(t,"ac37"),this.D="error"}else try{const t=await fetch("/node-webapp/api/app-context"),e=await t.json();0===e.statusCode?(this.I=e,this.D="fetched"):(S(new Error(e),"ac49"),this.D="error")}catch(t){S(t,"ac52"),this.D="error"}j.k("app_context",{status:this.D}),this.D}O(){const{$wid:t,$region:e,$os:n,$language:i,$user:r,$domains:o}=this.I;if(!(t&&e&&n&&i))return S(new Error(JSON.stringify({$wid:t,$region:e,$os:n,$language:i})),"ac64"),!1;if(!r)return!0;const{uid:a,uniqueId:s,secUid:c,nickName:u}=r;return a&&s&&c&&u?(o||S(new Error("$domains: "+JSON.stringify({$domains:o})),"ac86","silently"),!0):(S(new Error(JSON.stringify({uid:a,uniqueId:s,secUid:c,nickName:u})),"ac75"),!1)}};function ft(){var t;return{aid:"1988",app_name:"tiktok_web",channel:"tiktok_web",device_platform:"web_pc",referer:document.referrer,cookie_enabled:navigator.cookieEnabled,screen_width:screen.width,screen_height:screen.height,browser_language:navigator.language,browser_platform:navigator.platform,browser_name:navigator.appCodeName,browser_version:navigator.appVersion,browser_online:navigator.onLine,verifyFp:null===(t=document.cookie.match(/s_v_web_id=(\w+)/))||void 0===t?void 0:t[1],is_page_visible:!0,focus_state:!0,is_fullscreen:window.matchMedia("(display-mode: fullscreen)").matches,history_len:window.history.length,battery_info:1,tz_name:Intl.DateTimeFormat().resolvedOptions().timeZone}}function dt(){const{$wid:t,$region:e,$language:n,$os:i,$user:r}=lt.I;return{device_id:t,region:e,priority_region:r.region,os:i,app_language:n,webcast_language:n}}function ht(){const t=lt.I.$user;return{id:(null==t?void 0:t.uid)||null,secUid:(null==t?void 0:t.secUid)||null,uniqueId:(null==t?void 0:t.uniqueId)||null,nickname:(null==t?void 0:t.nickName)||null}}function wt(){const{$language:t}=lt.I,{secUid:e}=ht();if(!e)throw new Error("no secUid or id @ gsp19");return{from_page:"user",secUid:e,language:t}}var yt;let pt=!1;class mt{constructor(t){var e;yt.set(this,void 0);let n=null===(e=lt.I.$domains)||void 0===e?void 0:e.mTApi;(null==n?void 0:n.startsWith("https://"))||(n="https://m.tiktok.com"),N(this,yt,"likes"===t?new URL(`${n}/api/favorite/item_list/`):new URL(`${n}/api/user/list/`),"f");const i={...ft(),...dt(),..."following"===t?{scene:21,from_page:"fyp"}:wt()};return Object.entries(i).forEach((([t,e])=>{W(this,yt,"f").searchParams.set(t,(null==e?void 0:e.toString())||"")})),this}A(t){return W(this,yt,"f").searchParams.set("cursor",t),this}B({maxCursor:t,minCursor:e}){return W(this,yt,"f").searchParams.set("maxCursor",String(t)),W(this,yt,"f").searchParams.set("minCursor",String(e)),this}M(t){return W(this,yt,"f").searchParams.set("count",String(t)),this}L(){return W(this,yt,"f").toString()}}yt=new WeakMap;const vt=1030,gt=["unset","downloading","paused","capped","completed"],kt=["downloading","completed","capped","pausing","paused","resuming"],bt={W:"unset",N:{F(t){b(16,t)},U(t){b(17,t)}},q:{R(t){_(11,{progress:t})},P(t){kt.includes(t)&&_(11,{status:t}),gt.includes(t)&&(I.l.likes.downloadStatus=t)}}};function _t(t){if(!t)return!1;const e=new URL(t),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!n)return!1;return(Number(n+"000")-Date.now())/1e3/60<30}function Tt(t){return[t.video.playAddr,t.video.cover].some(_t)}function St(t){return t.some(Tt)}function $t(t){return{async J(){const e=await v.t,n=await e.get("followingCache",t);return n?St(n)?[]:n.sort(((t,e)=>t.createTime-e.createTime)):[]},o:async e=>(await v.t).put("followingCache",e,t),async H(t){return(await this.J()).map((t=>t.id)).includes(t.id)}}}function Et(t){const e=st("id")(t),n=t.map((t=>t.id));return[...new Set(n)].map((t=>e[t]))}var Ct,Dt,xt,It,jt;const Ot=new(jt=class{constructor(){Ct.add(this),this.D="unset",Dt.set(this,"unset")}async V(){try{if(this.D===(this.D="expanding"))return;const t=await W(this,Ct,"m",xt).call(this);if(!t)return S(new Error("cannot find authorList"),"ale63","silently"),_(21),void(this.D="failed");if("A"===t.lastChild.tagName)return void(this.D="expanded");if("unset"===W(this,Dt,"f"))return N(this,Dt,t.lastChild.textContent,"f"),W(this,Dt,"f"),void W(this,Ct,"m",It).call(this,t);if(W(this,Dt,"f")===t.lastChild.textContent)return void W(this,Ct,"m",It).call(this,t);if(t.lastChild.textContent!==W(this,Dt,"f"))return void(this.D="expanded")}catch(t){S(t,"ale92")}}},Dt=new WeakMap,Ct=new WeakSet,xt=async function(){await F(1500);let t=document.querySelectorAll(".user-list");0===t.length&&(t=document.querySelectorAll('div[class*="-DivUserContainer"]'));let e=t[t.length-1];if(!e){const n=document.querySelector('a[title="TikTok"]');n&&(n.click(),await F(3e3),t=document.querySelectorAll(".user-list"),0===t.length&&(t=document.querySelectorAll('div[class*="-DivUserContainer"]')),e=t[t.length-1])}return e},It=async function(t){for(var e,n;;){if(null===(e=t.lastChild)||void 0===e||e.click(),await F(2e3),"A"===t.lastChild.tagName)return void(this.D="expanded");if((null===(n=t.lastChild)||void 0===n?void 0:n.textContent)!==W(this,Dt,"f"))return void(this.D="expanded")}},jt);async function At(t){for(Ot.V();;){const e=document.querySelector(`a[href$="${t}"]`);if(e)return void e.click();if("expanded"===Ot.D)throw new Error("Couldn't find the user to click on the left side. Maybe you just started following this user so it's not on the left sidebar yet. Reload and try again.");await F(500)}}var Bt,Mt;const Lt=new(Mt=class{constructor(){Bt.set(this,void 0)}async h(){N(this,Bt,await g.i("largeVideos")||new Set,"f")}K(t){return W(this,Bt,"f").has(t)}G(t){W(this,Bt,"f").add(t),g.o("largeVideos",W(this,Bt,"f"))}},Bt=new WeakMap,Mt);var Wt,Nt,Ft;class Ut{constructor(t,e){this.X=t,this.Y=e,Wt.add(this),this.Z=this.X.id+this.Y}get tt(){var t;return"liked"===this.Y?Boolean(I.l.likes.downloaded.has(this.X.id)):Boolean(null===(t=I.l.following.downloadLog[this.X.author.id])||void 0===t?void 0:t.has(this.X.id))}get et(){return Lt.K(this.Z)}nt(){return Tt(this.X)}async it(){L.addNew({createTime:Date.now(),startWritingToDiskTime:0,key:this.Z,likedOrFollowing:this.Y,itemData:this.X}),await W(this,Wt,"m",Nt).call(this),await W(this,Wt,"m",Ft).call(this)}rt(){try{I.l.videos[this.X.id]=function(t,e){const n={authorId:t.author.id,desc:t.desc,createTime:t.createTime,itemMute:t.itemMute,diggCount:t.stats.diggCount,playCount:t.stats.playCount},i=e.videos[t.id];return Object.assign({},i,n)}(this.X,I.l),I.l.authors[this.X.author.id]=function(t,e){const n={uniqueIds:[t.author.uniqueId],nicknames:[t.author.nickname],followerCount:t.authorStats.followerCount,heartCount:t.authorStats.heartCount,videoCount:t.authorStats.videoCount},i=e.authors[t.author.id];i&&(n.uniqueIds=[...new Set([...n.uniqueIds,...i.uniqueIds])],n.nicknames=[...new Set([...n.nicknames,...i.nicknames])]);return Object.assign({},i,n)}(this.X,I.l)}catch(t){S(t,"i77")}}}Wt=new WeakSet,Nt=async function(){try{const t=await fetch(this.X.video.cover),e=t.headers.get("Content-Type");if("image/jpeg"!==e)throw new Error(`cover type is ${e}`);const n=await t.arrayBuffer();L._(this.Z,n)}catch(t){L.$(this.Z),"Failed to fetch"===t.message?S(new Error(`fetch failed ${this.X.video.cover}`),"bi60","silently"):S(t,"bi63","silently")}},Ft=async function(){var t,e;const n=new AbortController;try{const t=setTimeout((()=>n.abort()),7e3),e=setTimeout((()=>n.abort()),1e5),i=await fetch(this.X.video.playAddr||this.X.video.downloadAddr,{signal:n.signal});if(clearTimeout(t),!String(i.status).startsWith("2"))throw new Error(`video status code ${i.status}`);if(206===i.status)throw new Error("status 206, video could be very large");const r=i.headers.get("Content-Type");if("video/mp4"!==r)throw new Error(`video type is ${r}`);const o=Number(i.headers.get("Content-Length"));if(!o)throw new Error("unknown video size");const a=(o/1024/1024).toFixed(1)+"MB";if(o>5e7)throw console.error(`video is too large, skip. size: ${a}, url: ${this.X.video.playAddr}`),Lt.G(this.Z),new Error("video is too large, skip");L.T(this.Z,a);const s=await i.arrayBuffer();T("please_resync_this_video",{tempStorageKey:this.Z,arrayBuffer:s}),clearTimeout(e)}catch(i){if(n.abort(),L.$(this.Z),null===(e=null===(t=i.message)||void 0===t?void 0:t.includes)||void 0===e?void 0:e.call(t,"video is too large, skip"))return;"Failed to fetch"===i.message?S(new Error(`fetch failed ${this.X.video.playAddr||this.X.video.downloadAddr}`),"bi127","silently"):S(i,"bi130","silently")}};const qt={ot:!1};var Rt,Pt,Jt,Ht,zt;const Vt={settings:{minimalInterval:1e3,maximalDistance:750,requestIntervalGoal:4e3},on:!1,timeoutId:null,interval:1200,distance:400,lastHttpRequestTime:0,adjust(){Date.now()-this.lastHttpRequestTime>this.settings.requestIntervalGoal?(this.interval=Math.max(this.interval-50,this.settings.minimalInterval),this.distance=Math.min(this.distance+50,this.settings.maximalDistance)):(this.interval+=50,this.distance-=50),this.lastHttpRequestTime=Date.now()}};async function Kt(){try{if(!Vt.on)return;if(Vt.timeoutId=setTimeout(Kt,Vt.interval),"hidden"===document.visibilityState)return;if(!Gt.st)return;!function(){const{scrollHeight:t,scrollTop:e,clientHeight:n}=document.documentElement;return t-e-n<20}()?window.scrollBy({top:Vt.distance,left:0,behavior:"smooth"}):(await F(2e3),await Gt.ct())}catch(t){S(t,"scr56")}}const Gt=new(zt=class{constructor(){Rt.add(this),Pt.set(this,[]),this.st=""}async ut(t,e){try{this.st=t,N(this,Pt,[],"f"),document.documentElement.style.overflow="hidden",document.documentElement.style.pointerEvents="none",document.querySelector("aside#myfaveTT-container").style.pointerEvents="auto",await At(e),await F(2500),W(this,Rt,"m",Jt).call(this)}catch(t){S(t,"sr48")}}async lt(t){if(0===t.length)return void S(new Error("repeat failed?"),"scr78","silently");const e=function(t){const e=t[0].author.id;if(t.some((t=>t.author.id!==e)))throw new Error("not all videos share the same author");return e}(t);if(e!==this.st)return;if(St(W(this,Pt,"f")))return W(this,Rt,"m",Ht).call(this),ne.ft(e),void(this.st="");W(this,Pt,"f").push(...t),bt.N.F(W(this,Pt,"f").length),Vt.adjust();if(!await $t(e).H(W(this,Pt,"f")[W(this,Pt,"f").length-1]))return W(this,Pt,"f").length>vt?(N(this,Pt,W(this,Pt,"f").slice(0,vt),"f"),void await this.ct()):void 0;await this.ct()}async ct(){var t;try{if(!this.st)return;const e=this.st;this.st="",W(this,Rt,"m",Ht).call(this);const n=await $t(e).J(),i=Et(W(this,Pt,"f").concat(n));await $t(e).o(i),i.length,(t=I.l.following.lastRun)[e]||(t[e]={scroll:0,download:0}),I.l.following.lastRun[e].scroll=Date.now(),I.p(),async function(t){I.l.following.started.add(t);const e=await $t(t).J();for(const[n,i]of e.entries()){for(;qt.ot;)await F(500);const r=new Ut(i,"following");if(r.rt(),!r.tt&&!r.et){if(r.nt())return void ne.ft(t);bt.N.U({total:e.length,current:n+1}),r.it().catch((t=>S(t,"doa22","silently"))),await F(A())}}I.l.following.lastRun[t].download=Date.now(),await F(2e3),await ne.ft(t)}(e)}catch(t){S(t,"scr173")}}},Pt=new WeakMap,Rt=new WeakSet,Jt=function(){Vt.on=!0,Vt.timeoutId&&clearTimeout(Vt.timeoutId),Kt()},Ht=function(){clearTimeout(Vt.timeoutId),Vt.on=!1},zt);var Qt,Xt,Yt,Zt,te,ee;const ne=new(ee=class{constructor(){Qt.add(this),this.dt={},this.ht={alreadyInArchive:[],willAddToArchive:[],notInterested:[]},Xt.set(this,[])}async wt(){try{const t=await async function(){let t=[],[e,n]=[0,0],i=0;do{await F(1e3);const r=new mt("following").B({maxCursor:e,minCursor:n}).M(0===e?10:20);try{const i=await window.fetch(r.L(),{credentials:"include"}),o=await i.json(),{statusCode:a,userList:s}=o;if(0!==a)throw new Error(`Err fetching authors, ${JSON.stringify(o)}`);if(t=(s||[]).concat(t),({maxCursor:e,minCursor:n}=o),_(13,{currentTotal:t.length}),"number"!=typeof e||"number"!=typeof n)throw new Error("Things have changed? Author cursor is no longer number?")}catch(t){if(i++,i<=3)continue;throw t}if(i=0,0===t.length)return[]}while("-1"!==String(e)&&"-1"!==String(n));return t}();if(!ot.C)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");I.v(t),async function(t){for(const e of t){const{id:t,avatarThumb:n}=e.user;try{await rt(n,`small_${t}.jpg`)}catch(t){S(t,"daa60","silently")}}for(const e of t){const{id:t,avatarLarger:n}=e.user;try{await rt(n,`large_${t}.jpg`)}catch(t){S(t,"daa68","silently")}}}(t);const e=t.map(ut);e.forEach((t=>{var e;t.lastChecked=(null===(e=I.l.following.lastRun[t.id])||void 0===e?void 0:e.download)||0})),this.dt=st("id")(e),_(14,{authorDict:this.dt,started:[...I.l.following.started],notInterested:[...I.l.following.notInterested]})}catch(t){S(t,"ff27")}}async yt(t){b(20,"following"),this.ht=t,I.l.following.notInterested=new Set(t.notInterested);const e=[...t.willAddToArchive,...t.alreadyInArchive].sort(((t,e)=>{var n,i;return((null===(n=I.l.following.lastRun[t])||void 0===n?void 0:n.download)||0)-((null===(i=I.l.following.lastRun[e])||void 0===i?void 0:i.download)||0)}));N(this,Xt,e.map((t=>({authorId:t,status:"queued"}))),"f"),await I.p(),b(22,this.vt),W(this,Qt,"m",Yt).call(this),await W(this,Qt,"m",Zt).call(this)}async ft(t){try{const e=W(this,Xt,"f").find((e=>e.authorId===t));e&&(e.status="finished"),await I.p(),await W(this,Qt,"m",Zt).call(this)}catch(t){S(t,"ff101")}}get vt(){const{officialAuthorList:t,started:e,notInterested:n}=I.l.following;return{numFollowed:t.size,numStarted:e.size,numNotInterested:n.size,numCappedOut:[...t].filter((t=>!e.has(t))).filter((t=>!n.has(t))).length}}},Xt=new WeakMap,Qt=new WeakSet,Yt=async function(){for(const t of I.l.following.officialAuthorList)this.ht.alreadyInArchive.includes(t)||this.ht.willAddToArchive.includes(t)||await I.g(t)},Zt=async function(){const t=W(this,Xt,"f").find((t=>"queued"===t.status));if(t){t.status="current";const e=this.dt[t.authorId].uniqueId;await Gt.ut(t.authorId,e),b(15,W(this,Xt,"f"))}else W(this,Qt,"m",te).call(this)},te=function(){b(18,this.vt)},ee),ie=new class{constructor(){this.gt={}}o(t){this.gt=t}};function re(){try{return U(ie.gt.unlocks.likeLevel).cap}catch(t){return S(t,"ud17"),0}}function oe(){return ie.gt.profile.uid}const ae={async i(){const t=await v.t;return await t.get("likesCache",oe())||[]},o:async t=>(await v.t).put("likesCache",t,oe()),async kt(){St(await this.i())&&await this.o([])},async H(t){return(await this.i()).map((t=>t.id)).includes(t.id)}};function se(t){if(!t.id||!t.video||!t.author)return S(new Error(JSON.stringify(t)),"pid27","silently"),!1;if(!t.video.downloadAddr&&!t.video.playAddr)return S(new Error("no video addr"),"pid11","silently"),!1;if(!t.video.cover)return S(new Error("no cover"),"pid15","silently"),!1;if(t.id!==t.video.id)return S(new Error(`${t.id} different from ${t.video.id}`),"pid49","silently"),!1;if("mp4"!==t.video.format)return S(new Error(`video format is ${t.video.format}`),"pid56","silently"),!1;{const e=new URL(t.video.cover),n=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!n||10!==n.length)return S(new Error(`cover url no exp: ${t.video.cover}`),"pid100","silently"),!1}return!0}async function ce(){const t=await async function(){const t=[];let e="0",n=!0,i=0,r=0;await ae.kt();do{await F(1500);const o=new mt("likes").A(e).M(30);let a=[],s={};try{const t=await window.fetch(o.L(),{credentials:"include"});if(s=await t.json(),a=s.itemList,0!==s.statusCode){if("10000"===s.code&&"verify"===s.type)return S(new Error("need to solve recaptcha"),"fl39"),"error";throw new Error(`code: ${s.code} ${s.type}`)}}catch(t){if(i++,i<=3)continue;if(!s.cursor||s.cursor===e)return S(t,"fl53"),"error"}if(i=0,a){let e=a.map(ct);if(e.some((t=>!se(t)))&&(r++,r<=3))continue;if(r=0,e=a.filter(se),0===e.length&&a.length>10)return S(new Error("tiktok api changed, wait for the next patch of this extension to fix"),"fl76"),[];t.push(...e),_(9,{currentTotal:t.length})}if(0===t.length)return[];if(await ae.H(t[t.length-1]))break;if(({cursor:e,hasMore:n}=s),"-1"===String(e)||"0"===String(e)||!e){S(new Error(`weird cursor: ${e}`),"fl76","silently");break}}while(n);return t}();if("error"===t)return;const e=await ae.i(),n=Et(t.concat(e));await ae.o(n)}var ue,le,fe,de,he,we,ye,pe,me;const ve=new(me=class{constructor(){ue.add(this),le.set(this,[]),fe.set(this,!1),de.set(this,0)}async bt(){N(this,fe,!0,"f"),await F(1e3),bt.q.P("paused"),I.p()}async _t(){N(this,fe,!1,"f")}async Tt(){var t;await W(this,ue,"m",we).call(this);try{if(0===W(this,le,"f").length)return void _(10);if(!ot.C)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");I.l.likes.officialList=W(this,le,"f").map((t=>t.id));const{finalDownloadOutcome:e}=await W(this,ue,"m",ye).call(this);if("someUrlExpired"===e)return N(this,de,1+(t=+W(this,de,"f")),"f"),t>3?void S(new Error("Session too long, please reload"),"bl46"):void this.Tt();W(this,ue,"m",pe).call(this,e)}catch(t){S(t,"bl50")}}},le=new WeakMap,fe=new WeakMap,de=new WeakMap,ue=new WeakSet,he=function(){return I.l.likes.downloaded.size>=re()},we=async function(){try{await ce(),I.l.likes.lastRun.collect=Date.now(),N(this,le,await ae.i(),"f")}catch(t){throw S(t,"bl32"),t}},ye=async function(){b(20,"likes"),bt.q.R({total:W(this,le,"f").length,nowAt:0});for(const t of W(this,le,"f")){new Ut(t,"liked").rt()}for(const[t,e]of W(this,le,"f").reverse().entries()){const n=new Ut(e,"liked");if(!n.tt&&!n.et){if(W(this,ue,"m",he).call(this))return{finalDownloadOutcome:"capped"};for(;W(this,fe,"f");)await F(1e3);if(n.nt())return{finalDownloadOutcome:"someUrlExpired"};bt.q.P("downloading"),bt.q.R({total:W(this,le,"f").length,nowAt:t+1}),n.it().catch((t=>S(t,"bl75","silently"))),W(this,fe,"f")||await F(A())}}return{finalDownloadOutcome:"completed"}},pe=async function(t){const e={officialListLength:I.l.likes.officialList.length,numMp4InLocalFolder:I.l.likes.downloaded.size,status:t};I.l.likes.lastRun.download=Date.now(),await F(200),_(12,e),bt.q.P(t),await I.p()},me);function ge(t){_(6,t)}let ke=!1;var be,_e,Te,Se,$e,Ee;const Ce=new(Ee=class{constructor(){be.add(this),_e.set(this,null)}async St(){const t=await g.i("archiveFolderHandle"),e=await showDirectoryPicker({startIn:t});W(this,be,"m",Te).call(this,e)}$t(){_(5)}},_e=new WeakMap,be=new WeakSet,Te=async function(t){if("granted"!==await t.requestPermission({mode:"readwrite"}))return;if(!await async function(t){if(await async function(t){const e=[];for await(const n of t.keys())e.push(n);return 0===e.length}(t))return!!ke||(ke=!0,!ie.gt.behavior.hasCreatedArchiveFolder||(ge({dropResult:"unexpectedly_empty"}),!1));try{await t.getFileHandle("Archive.html");const e=await t.getDirectoryHandle("data"),n=await e.getDirectoryHandle(".appdata");return await n.getFileHandle("app.js"),!0}catch(t){return ge({dropResult:"content_seems_wrong"}),!1}}(t))return;const e=await async function(t){const e=await $(t,"data/.appdata/db.js"),n=await e.getFile(),i=x(await n.text()),{id:r,uid:o,uniqueId:a,nickname:s}=ie.gt.profile;return i.user.id.length>0&&i.user.id!==r?(ge({dropResult:"belongs_to_another_tiktok_account",belongsToUser:i.user.uniqueId}),null):(i.user={uid:o,id:r,uniqueId:a,nickname:s},i)}(t);e&&W(this,be,"m",Se).call(this,t,e)},Se=async function(t,e){ot.C||T("is_resync_ready"),b(7),await I.h(t,e),await Lt.h(),"following"===bt.W?ne.wt():ve.Tt(),W(this,be,"m",$e).call(this)},$e=function(){var t;null===(t=W(this,_e,"f"))||void 0===t||t.remove(),N(this,_e,null,"f")},Ee);function De(t){const{type:n,payload:i}=t.data;if("official_tiktok_likes"===n){const t=new mt("likes").A("0").M(30).L();e.postMessage({type:"compare",payload:{myUrl:t,officialUrl:i.officialUrl}})}if("official_tiktok_followed_authors"===n){const t=new mt("following").B({maxCursor:0,minCursor:0}).M(20).L();e.postMessage({type:"compare",payload:{myUrl:t,officialUrl:i.officialUrl}})}}function xe(){var n;null===(n=document.getElementById("myfaveTT-container"))||void 0===n||n.remove(),document.body.classList.remove("pushed-by-myfaveTT"),window.onmessage=null,t.onmessage=null,t.close(),e.onmessage=null,e.close()}let Ie="";async function je(e){try{const{type:n,payload:i}=e.data;if(0===n)return void t.postMessage({type:1});if(1===n)return xe(),void alert("Not loading myFaveTT sidebar, because it's already running in another tab.");if(100===n)return b(3,i),void Ot.V();if(102===n)return void b(19,i);if(101===n){if(function(t){var e,n;if(pt)return;const i=new URL(t.url).origin,r=(null===(n=null===(e=lt.I)||void 0===e?void 0:e.$domains)||void 0===n?void 0:n.mTApi)||"none";i!==r&&(S(new Error(`captured ${i} but mTApi=${r}`),"url18","silently"),pt=!0)}(i),!Gt.st)return;if(Ie===(Ie=JSON.stringify(e.data)))return void console.error("double listener?!");try{const t=await async function(t){const{url:e,requestHeaders:n}=t,i=n.find((t=>"x-tt-params"===t.name));if(!i)return[];const r={[i.name]:i.value,Accept:"application/json, text/plain, text/csv, */*"};let o=0,a=0;for(;;){await F(1e3);const t=await fetch(e,{headers:r,credentials:"include"}),n=await t.json(),{statusCode:i,itemList:s}=n;if(0!==i){if(o++,o<=3)continue;return S(new Error(`Err in repeat captured request, ${JSON.stringify(n)}`),"bf31","silently"),[]}if(!s)return[];let c=s.map(ct);if(c.some((t=>!se(t)))){if(a++,a<=3)continue;S(new Error("still flawed"),"bf45","silently")}if(c=c.filter(se),s.length>10&&0===c.length)throw S(new Error(JSON.stringify(ct(s[0]))),"rp58","silently"),new Error("tiktok api changed, wait for the next patch of this extension to fix");return c}}(i);await Gt.lt(t)}catch(t){S(t,"om82","silently")}}}catch(t){S(t,"om41")}}async function Oe(e){try{const{origin:n,data:{type:i,payload:r}}=e;if(n!==k)return;switch(i){case"reload":location.href="https://www.tiktok.com";break;case"resync_is_ready":ot.C=!0;break;case"resynced":{const{tempStorageKey:t,arrayBuffer:e}=r;L.S(t,e);break}case 12:Ce.St();break;case 1:try{bt.W="likes",I.u?ve.Tt():Ce.$t()}catch(t){S(t,"om46")}break;case 2:try{bt.W="following",I.u?ne.wt():Ce.$t()}catch(t){S(t,"om55")}break;case 3:xe();break;case 4:I.m(r);break;case 0:if(_(0,"1.2.69"),"initial"===lt.D){if(await lt.j(),"error"===lt.D)break;if(!lt.O())break}_(4,ht()),function(e,n){t.postMessage({type:e,payload:n})}(2);break;case 5:ve.bt();break;case 6:ve._t();break;case 10:qt.ot=!0;break;case 11:qt.ot=!1;break;case 7:ie.o(r);break;case 8:try{ne.yt(r)}catch(t){S(t,"om161")}break;case 9:At(r);break;case 13:location.href="https://www.tiktok.com";break;case 14:location.href="https://chrome.google.com/webstore/detail/myfavett/gmajiifkcmjkehmngbopoobeplhoegad";break;case 15:history.replaceState(null,"","/")}}catch(t){S(t,"om136")}}try{window.onmessage=Oe,t.onmessage=je,e.onmessage=De,t.postMessage({type:0})}catch(t){S(t,"st8")}
