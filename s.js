const t=new BroadcastChannel("myfaveTT"),e="chrome-extension://gmajiifkcmjkehmngbopoobeplhoegad";function i(t,i){ui.postMessage({type:t,payload:i},e)}const n=i;function o(t,i){ui.postMessage({type:t,payload:i},e)}function r(e,i){t.postMessage({type:e,payload:i})}function a(t,e,n){i(1,{err:t,location:e,silently:n})}const s={schemaVersion:1,user:{uid:"",id:"",uniqueId:"",nickname:""},authors:{},videos:{},likes:{downloadStatus:"unset",officialList:[],downloaded:new Set,lastRun:{collect:0,download:0}},following:{officialAuthorList:new Set,started:new Set,notInterested:new Set,downloadLog:{},lastRun:{}}};function c(t){return e=function(t){return JSON.stringify(t,(function(t,e){return e instanceof Set?[...e]:"string"==typeof e?e.replaceAll("`","背𓄹剃").replaceAll("${","⑀⦃"):e}))}(t),"db=String.raw`{}`;".slice(0,"db=String.raw`{}`;".indexOf("{"))+e+"db=String.raw`{}`;".slice("db=String.raw`{}`;".lastIndexOf("}")+1);var e}function l(t){return""===t?s:function(t){const e=JSON.parse(t,(function(t,e){switch(t){case"downloaded":case"notInterested":case"started":case"officialAuthorList":if(Array.isArray(e))return new Set(e)}return"string"==typeof e?e.replaceAll("⑀⦃","${").replaceAll("背𓄹剃","`"):e}));for(const[t,i]of Object.entries(e.following.downloadLog))e.following.downloadLog[t]=new Set(i);return e}(function(t){const e=t.indexOf("{"),i=t.lastIndexOf("}")-t.length+1;return t.slice(e,i)}(t))}async function d(t,e){try{const i=e.split("/"),n=i.pop();let o=t;for(const t of i)o=await o.getDirectoryHandle(t,{create:!0});return await o.getFileHandle(n,{create:!0})}catch(t){throw a(t,"gfh29"),t}}async function u(t,e){const i=await t.createWritable();await i.write(e),await i.close()}const f=new class{constructor(){this.t=null,this.i=null}async o(t,e){this.t=t,this.i=e,i(8)}async l(){u(await d(this.t,"data/.appdata/db.js"),c(this.i))}async u(t){try{const{archiveHtml:e,appJs:i}=t;u(await d(this.t,"Archive.html"),e),u(await d(this.t,"data/.appdata/app.js"),i)}catch(t){a(t,"a58")}}h(t){t.forEach((t=>{const{id:e,uniqueId:i,nickname:n,signature:o}=t.user,{followerCount:r,videoCount:a,heartCount:s}=t.stats,c={uniqueIds:[i],nicknames:[n],followerCount:r,heartCount:s,videoCount:a,signature:o},l=this.i.authors[e];l&&(c.uniqueIds=[...new Set([i,...l.uniqueIds])],c.nicknames=[...new Set([n,...l.nicknames])]),this.i.authors[e]=c})),this.i.following.officialAuthorList=new Set(t.map((t=>t.user.id))),this.l()}async p(t){try{if(!this.i.following.started.has(t)&&!this.i.following.downloadLog[t])return;this.i.following.started.delete(t),delete this.i.following.downloadLog[t],await this.l();let e=await this.t.getDirectoryHandle("data");e=await e.getDirectoryHandle("Following"),e=await e.getDirectoryHandle(t),await e.removeEntry("videos",{recursive:!0})}catch(t){a(t,"purge failed","silently")}}};function h(t,e,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(t):n?n.value:e.get(t)}function w(t,e,i,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(t,i):o?o.value=i:e.set(t,i),i}const p=new Set(["BIF","CLP","DJF","GNF","JPY","KMF","KRW","MGA","PYG","RWF","UGX","VND","VUV","XAF","XOF","XPF"]);function y(t){return new Promise((e=>{setTimeout((()=>{e(t)}),t)}))}function g(t){const e=5e3,i={unlocked:["unlock_0_to_1000_likes(free)"],cap:1e3,nextToBuy:"unlock_1001_to_5000_likes",lineItemDescription:'"Enable downloading more than 1000, up to 5000 videos from your Likes on TikTok."'};if(0===t)return i;const n=[i.unlocked[0]],o=e*t,r=o+e,a=`unlock_${o+1}_to_${r}_likes`,s=`"Enable downloading more than ${o}, up to ${r} videos from your Likes on TikTok."`;for(let e=0;e<t;e++)n.push(g(e)?.nextToBuy);return{unlocked:n,cap:o,nextToBuy:a,lineItemDescription:s}}async function m(t,e){const i=await d(f.t,`data/Following/${e}`),n=await i.getFile();if(n.size>0){const t=6048e5;if(Date.now()-n.lastModified<t)return}const o=await fetch(t),r=o.headers.get("Content-Type");"image/jpeg"!==r&&a(new Error(`avatar type is ${r}`),"daa9");const s=await o.blob(),c=await i.createWritable();await c.write(s),await c.close(),e.includes("avatar_small")&&await y(200),e.includes("avatar_large")&&await y(2e3)}Object.entries({USD:{description:"US Dollar",countryCode:"US",localeCode:"en-us",stripePrice:973,localizedPriceTag:""},EUR:{description:"Euro",countryCode:"EU",localeCode:"en-gb",stripePrice:783,localizedPriceTag:""},GBP:{description:"British Pound",countryCode:"GB",localeCode:"en-gb",stripePrice:683,localizedPriceTag:""},CAD:{description:"Canadian Dollar",countryCode:"CA",localeCode:"en",stripePrice:1170,localizedPriceTag:""},AUD:{description:"Australian Dollar",countryCode:"AU",localeCode:"en",stripePrice:1370,localizedPriceTag:""},KRW:{description:"South Korean Won",countryCode:"KR",localeCode:"ko",stripePrice:11700,localizedPriceTag:""},JPY:{description:"Japanese Yen",countryCode:"JP",localeCode:"ja",stripePrice:1070,localizedPriceTag:""},RUB:{description:"Russian Ruble",countryCode:"RU",localeCode:"ru",stripePrice:67300,localizedPriceTag:""},INR:{description:"Indian Rupee",countryCode:"IN",localeCode:"en-in",stripePrice:67300,localizedPriceTag:""},BRL:{description:"Brazilian Real",countryCode:"BR",localeCode:"pt-br",stripePrice:4400,localizedPriceTag:""},ILS:{description:"Israeli New Shekel",countryCode:"IL",localeCode:"en",stripePrice:2730,localizedPriceTag:""},PHP:{description:"Philippine Piso",countryCode:"PH",localeCode:"en",stripePrice:43700,localizedPriceTag:""},PLN:{description:"Polish Zloty",countryCode:"PL",localeCode:"pl",stripePrice:3730,localizedPriceTag:""},IDR:{description:"Indonesian Rupiah",countryCode:"ID",localeCode:"in",stripePrice:137e5,localizedPriceTag:""},MXN:{description:"Mexican Peso",countryCode:"MX",localeCode:"en",stripePrice:17300,localizedPriceTag:""},CNY:{description:"Chinese Yuan",countryCode:"CN",localeCode:"en",stripePrice:4730,localizedPriceTag:""},HKD:{description:"Hong Kong Dollar",countryCode:"HK",localeCode:"zh-HK",stripePrice:7700,localizedPriceTag:""},TWD:{description:"New Taiwan Dollar",countryCode:"TW",localeCode:"zh",stripePrice:27300,localizedPriceTag:""},MYR:{description:"Malaysian Ringgit",countryCode:"MY",localeCode:"ms",stripePrice:3700,localizedPriceTag:""},NZD:{description:"New Zealand Dollar",countryCode:"NZ",localeCode:"en",stripePrice:1370,localizedPriceTag:""},CHF:{description:"Swiss Franc",countryCode:"CH",localeCode:"en",stripePrice:873,localizedPriceTag:""},SGD:{description:"Singapore Dollar",countryCode:"SG",localeCode:"en",stripePrice:1370,localizedPriceTag:""},UAH:{description:"Ukrainian Hryvnia",countryCode:"UA",localeCode:"uk",stripePrice:23700,localizedPriceTag:""},ARS:{description:"Argentine Peso",countryCode:"AR",localeCode:"es",stripePrice:97700,localizedPriceTag:""},ZAR:{description:"South African Rand",countryCode:"ZA",localeCode:"en",stripePrice:13700,localizedPriceTag:""},NOK:{description:"Norwegian Krone",countryCode:"NO",localeCode:"no",stripePrice:8700,localizedPriceTag:""},SEK:{description:"Swedish Krona",countryCode:"SE",localeCode:"sv",stripePrice:7700,localizedPriceTag:""},DKK:{description:"Danish Krone",countryCode:"DK",localeCode:"da",stripePrice:5700,localizedPriceTag:""},VND:{description:"Vietnamese dong",countryCode:"VN",localeCode:"vi",stripePrice:197300,localizedPriceTag:""}}).forEach((([t,e])=>{const i=p.has(t)?e.stripePrice:e.stripePrice/100;e.localizedPriceTag=new Intl.NumberFormat(e.localeCode,{style:"currency",useGrouping:!1,currency:t}).format(i)}));const v={g:!1},C=t=>e=>{const i={};for(const n of t)i[n]=e[n];return i},k=t=>e=>{const i={};return e.forEach((e=>{i[e[t]]=e})),i};function _(t){const e=C(["id","desc","createTime","itemMute"])(t);return e.video=C(["id","cover","dynamicCover","playAddr","downloadAddr","format"])(t.video),e.stats=C(["diggCount","playCount"])(t.stats),e.author=C(["id","uniqueId","nickname","avatarLarger"])(t.author),e.authorStats=C(["followerCount","heartCount","videoCount"])(t.authorStats),e}function b(t){return C(["id","uniqueId","nickname","avatarLarger","avatarThumb","signature"])(t.user)}const P={m(t,e){i(2,{event:t,params:e})}},T=new class{constructor(){this.v="initial",this.C={}}async k(){if(window.__NEXT_DATA__)try{this.C=window.__NEXT_DATA__.props.initialProps,this.v="next"}catch(t){a(t,"ac26"),this.v="error"}else if(window.SIGI_STATE)try{this.C=window.SIGI_STATE.AppContext.appContext,this.v="sigi"}catch(t){a(t,"ac37"),this.v="error"}else try{const t=await fetch("/node-webapp/api/app-context"),e=await t.json();0===e.statusCode?(this.C=e,this.v="fetched"):(a(new Error(e),"ac49"),this.v="error")}catch(t){a(t,"ac52"),this.v="error"}P.m("app_context",{status:this.v}),this.v}_(){const{$wid:t,$region:e,$os:i,$language:n,$user:o}=this.C;if(!(t&&e&&i&&n))return a(new Error(JSON.stringify({$wid:t,$region:e,$os:i,$language:n})),"ac64"),!1;if(!o)return!0;const{uid:r,region:s,uniqueId:c,secUid:l,nickName:d}=o;return!!(r&&s&&c&&l&&d)||(a(new Error(JSON.stringify({uid:r,region:s,uniqueId:c,secUid:l,nickName:d})),"ac75"),!1)}};var D,S,I;class E{constructor(t){return D.add(this),S.set(this,void 0),w(this,S,"likes"===t?new URL("https://m.tiktok.com/api/favorite/item_list/"):new URL("https://m.tiktok.com/api/user/list/"),"f"),h(this,D,"m",I).call(this),this}P(t){return h(this,S,"f").searchParams.set("cursor",t),this}T({maxCursor:t,minCursor:e}){return h(this,S,"f").searchParams.set("maxCursor",String(t)),h(this,S,"f").searchParams.set("minCursor",String(e)),this}D(t){return h(this,S,"f").searchParams.set("count",String(t)),this}S(){return h(this,S,"f").toString()}}S=new WeakMap,D=new WeakSet,I=function(){const t=Object.assign({},function(){var t;return{aid:"1988",app_name:"tiktok_web",device_platform:"web_pc",referer:document.referrer,cookie_enabled:navigator.cookieEnabled,screen_width:screen.width,screen_height:screen.height,browser_language:navigator.language,browser_platform:navigator.platform,browser_name:navigator.appCodeName,browser_version:navigator.appVersion,browser_online:navigator.onLine,verifyFp:null===(t=document.cookie.match(/s_v_web_id=(\w+)/))||void 0===t?void 0:t[1],timezone_name:Intl.DateTimeFormat().resolvedOptions().timeZone,is_page_visible:!0,focus_state:!0,is_fullscreen:window.matchMedia("(display-mode: fullscreen)").matches,history_len:window.history.length,battery_info:{}}}(),function(){const{$wid:t,$region:e,$language:i,$os:n,$user:o}=T.C;return{device_id:t,region:e,priority_region:o.region,os:n,app_language:i,secUid:o.secUid,language:i}}());Object.entries(t).forEach((([t,e])=>{h(this,S,"f").searchParams.set(t,(null==e?void 0:e.toString())||"")}))};const $=["unset","downloading","paused","capped","completed"],A=["downloading","completed","capped","pausing","paused","resuming"],B={I:"unset",$:{A(t,e){i(16,{authorId:t,progress:e}),r(5,e)},B(){r(4)},N(t){r(6,`${t.current} / ${t.total}`)}},R:{M(t){n(11,{progress:t})},O(t){A.includes(t)&&n(11,{status:t}),$.includes(t)&&(f.i.likes.downloadStatus=t)}}};function z(t){if(!t)return!1;const e=new URL(t),i=e.searchParams.get("expire")||e.searchParams.get("x-expires");if(!i||10!==i.length)throw new Error("url schema changed?");return(Number(i+"000")-Date.now())/1e3/60<10}function N(t){return[t.video.playAddr,t.video.cover,t.video.dynamicCover].some(z)}function x(t){return t.some(N)}let R,M;const O=new WeakMap,j=new WeakMap,L=new WeakMap,W=new WeakMap,U=new WeakMap;let F={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return j.get(t);if("objectStoreNames"===e)return t.objectStoreNames||L.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return V(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function K(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(M||(M=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(q(this),e),V(O.get(this))}:function(...e){return V(t.apply(q(this),e))}:function(e,...i){const n=t.call(q(this),e,...i);return L.set(n,e.sort?e.sort():[e]),V(n)}}function H(t){return"function"==typeof t?K(t):(t instanceof IDBTransaction&&function(t){if(j.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{e(),n()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)}));j.set(t,e)}(t),e=t,(R||(R=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,F):t);var e}function V(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{e(V(t.result)),n()},r=()=>{i(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&O.set(e,t)})).catch((()=>{})),U.set(e,t),e}(t);if(W.has(t))return W.get(t);const e=H(t);return e!==t&&(W.set(t,e),U.set(e,t)),e}const q=t=>U.get(t);const J=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],Y=new Map;function Z(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Y.get(e))return Y.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,o=G.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!J.includes(i))return;const r=async function(t,...e){const r=this.transaction(t,o?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[i](...e),o&&r.done]))[0]};return Y.set(e,r),r}F=(t=>({...t,get:(e,i,n)=>Z(e,i)||t.get(e,i,n),has:(e,i)=>!!Z(e,i)||t.has(e,i)}))(F);const X={j:function(t,e,{blocked:i,upgrade:n,blocking:o,terminated:r}={}){const a=indexedDB.open(t,e),s=V(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(V(a.result),t.oldVersion,t.newVersion,V(a.transaction))})),i&&a.addEventListener("blocked",(()=>i())),s.then((t=>{r&&t.addEventListener("close",(()=>r())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}("myfaveTT",1,{upgrade(t,e,i,n){switch(e){case 0:t.createObjectStore("likesCache"),t.createObjectStore("followingCache")}}})};function Q(t){return{async L(){const e=await X.j,i=await e.get("followingCache",t);return i?x(i)?[]:i.sort(((t,e)=>t.createTime-e.createTime)):[]},W:async e=>(await X.j).put("followingCache",e,t),async U(t){return(await this.L()).map((t=>t.id)).includes(t.id)}}}function tt(t){const e=k("id")(t),i=t.map((t=>t.id));return[...new Set(i)].map((t=>e[t]))}const et={};async function it(){const t=[];Object.entries(et).forEach((async([e,i])=>{const{createTime:n,cover:o,dynamicCover:r,video:s}=i;if(Boolean(o&&r&&s))t.push(async function(t){var e;const{startWritingToDiskTime:i,key:n,likedOrFollowing:o,itemData:{id:r,author:s},cover:c,dynamicCover:l,video:h,size:w}=t;if(0!==i){return Date.now()-i<1e4?void 0:(delete et[n],void P.m("stuck in writing"))}t.startWritingToDiskTime=Date.now();try{const t="liked"===o?"data/Likes":`data/Following/${s.id}`,i=`${t}/covers/${r}.jpg`,a=`${t}/animated-covers/${r}.webp`,p=`${t}/videos/${r}.mp4`,y=d(f.t,i).then((t=>u(t,c))),g=d(f.t,a).then((t=>u(t,l))),m=d(f.t,p).then((t=>u(t,h)));if(await Promise.all([y,g,m]),f.i.videos[r].size=w,"following"===o){const t=f.i.following.downloadLog;t[e=s.id]||(t[e]=new Set),t[s.id].add(r)}else f.i.likes.downloaded.add(r)}catch(t){a(t,"ts71","silently")}finally{delete et[n],Object.keys(et).length}}(i));else{Date.now()-n>3e4&&(delete et[e],P.m("took over 30 seconds"))}})),t.length&&(await Promise.allSettled(t),await f.l())}const nt=new class{addNew(t){et[t.key]=t}F(t,e){et[t].cover=e}K(t,e){et[t].dynamicCover=e}H(t,e){et[t].size=e}V(t,e){et[t]&&(et[t].video=e,it())}};var ot,rt,at,st,ct,lt,dt;class ut{constructor(t,e){this.q=t,this.J=e,ot.add(this),this.G=this.q.id+this.J}get Y(){var t;return"liked"===this.J?Boolean(f.i.likes.downloaded.has(this.q.id)):Boolean(null===(t=f.i.following.downloadLog[this.q.author.id])||void 0===t?void 0:t.has(this.q.id))}Z(){return N(this.q)}async X(){nt.addNew({createTime:Date.now(),startWritingToDiskTime:0,key:this.G,likedOrFollowing:this.J,itemData:this.q}),await h(this,ot,"m",rt).call(this),await h(this,ot,"m",at).call(this),await h(this,ot,"m",st).call(this)}tt(){try{f.i.videos[this.q.id]=function(t,e){const i={authorId:t.author.id,desc:t.desc,createTime:t.createTime,itemMute:t.itemMute,diggCount:t.stats.diggCount,playCount:t.stats.playCount},n=e.videos[t.id];return Object.assign({},n,i)}(this.q,f.i),f.i.authors[this.q.author.id]=function(t,e){const i={uniqueIds:[t.author.uniqueId],nicknames:[t.author.nickname],followerCount:t.authorStats.followerCount,heartCount:t.authorStats.heartCount,videoCount:t.authorStats.videoCount},n=e.authors[t.author.id];n&&(i.uniqueIds=[...new Set([...i.uniqueIds,...n.uniqueIds])],i.nicknames=[...new Set([...i.nicknames,...n.nicknames])]);return Object.assign({},n,i)}(this.q,f.i)}catch(t){a(t,"i77")}}}ot=new WeakSet,rt=async function(){const t=await fetch(this.q.video.cover),e=t.headers.get("Content-Type");if("image/jpeg"!==e)throw new Error(`cover type is ${e}`);const i=await t.arrayBuffer();nt.F(this.G,i)},at=async function(){const t=await fetch(this.q.video.dynamicCover),e=t.headers.get("Content-Type");if("image/webp"!==e)throw new Error(`animated cover is ${e}`);const i=await t.arrayBuffer();nt.K(this.G,i)},st=async function(){const t=await fetch(this.q.video.playAddr),e=t.headers.get("Content-Type");if("video/mp4"!==e)throw new Error(`video type is ${e}`);const i=t.headers.get("Content-Length");nt.H(this.G,(Number(i)/1024/1024).toFixed(1)+"MB");const n=await t.arrayBuffer();o("please_resync_this_video",{tempStorageKey:this.G,arrayBuffer:n})};const ft=new(dt=class{constructor(){ct.set(this,[]),lt.set(this,"unset")}et(t){w(this,lt,t,"f"),w(this,ct,[],"f"),i(15,t)}it(){i(17),w(this,lt,"unset","f"),w(this,ct,[],"f")}async nt(t){const e=function(t){const e=t[0].author.id;if(t.some((t=>t.author.id!==e)))throw new Error("not all videos share the same author");return e}(t);if(e!==h(this,lt,"f"))return;if(h(this,ct,"f").push(...t),B.$.A(h(this,lt,"f"),h(this,ct,"f").length),h(this,ct,"f").length>1e3)return w(this,ct,h(this,ct,"f").slice(0,1e3),"f"),void this.ot();await Q(e).U(h(this,ct,"f")[h(this,ct,"f").length-1])&&this.ot()}async ot(){var t,e;B.$.B(),h(this,ct,"f").length;const i=await Q(h(this,lt,"f")).L(),n=tt(h(this,ct,"f").concat(i));await Q(h(this,lt,"f")).W(n),h(this,lt,"f"),n.length,(t=f.i.following.lastRun)[e=h(this,lt,"f")]||(t[e]={scroll:0,download:0}),f.i.following.lastRun[h(this,lt,"f")].scroll=Date.now(),f.l(),await y(2e3);try{!async function(t){f.i.following.started.add(t);const e=await Q(t).L();for(const[t,i]of e.entries()){const n=new ut(i,"following");n.tt(),n.Y||(B.$.N({total:e.length,current:t+1}),n.X().catch((t=>a(t,"doa22","silently"))),await y(6e3))}f.i.following.lastRun[t].download=Date.now(),vt.rt(t)}(h(this,lt,"f"))}catch(t){a(t,"blf73")}}},ct=new WeakMap,lt=new WeakMap,dt);var ht,wt,pt,yt,gt,mt;const vt=new(mt=class{constructor(){ht.add(this),this.at={st:[],ct:[],lt:[]},wt.set(this,[])}async dt(){const t=await async function(){let t=[],[e,i]=[0,0],o=0;do{await y(1e3);const r=new E("following").T({maxCursor:e,minCursor:i}).D(0===e?10:20);try{const o=await window.fetch(r.S(),{credentials:"include"}),a=await o.json(),{statusCode:s,userList:c}=a;if(0!==s)throw new Error("bad res");if(t=(c||[]).concat(t),({maxCursor:e,minCursor:i}=a),n(13,{currentTotal:t.length}),"number"!=typeof e||"number"!=typeof i)throw new Error("Things have changed? Author cursor is no longer number?")}catch(e){if(o++,o<=3)continue;return a(e,"ff30"),t}if(o=0,0===t.length)return[]}while("-1"!==String(e)&&"-1"!==String(i));return t}();if(!v.g)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");try{f.h(t),async function(t){for(const e of t){const{id:t,avatarThumb:i}=e.user;await m(i,`${t}/avatar_small.jpg`)}for(const e of t){const{id:t,avatarLarger:i}=e.user;await m(i,`${t}/avatar_large.jpg`)}}(t)}catch(t){a(t,"ff27")}const e=t.map(b);i(14,{authorDict:k("id")(e),started:[...f.i.following.started],notInterested:[...f.i.following.notInterested]})}async ut(t){this.at=t,f.i.following.notInterested=new Set(t.lt);const e=[...t.ct,...t.st].sort(((t,e)=>{var i,n;return((null===(i=f.i.following.lastRun[t])||void 0===i?void 0:i.download)||0)-((null===(n=f.i.following.lastRun[e])||void 0===n?void 0:n.download)||0)}));w(this,wt,e.map((t=>({authorId:t,status:"queued"}))),"f"),await f.l(),await h(this,ht,"m",pt).call(this),h(this,ht,"m",yt).call(this)}async rt(t){const e=h(this,wt,"f").find((e=>e.authorId===t));e&&(e.status="finished"),await f.l(),h(this,ht,"m",yt).call(this)}},wt=new WeakMap,ht=new WeakSet,pt=async function(){for(const t of f.i.following.officialAuthorList)this.at.st.includes(t)||this.at.ct.includes(t)||await f.p(t)},yt=function(){const t=h(this,wt,"f").find((t=>"queued"===t.status));t?(t.status="current",ft.et(t.authorId)):h(this,ht,"m",gt).call(this)},gt=function(){console.log("all done!")},mt);function Ct(t){return t.id&&t.video&&t.author?t.video.downloadAddr?t.video.playAddr?t.video.cover?!!t.video.dynamicCover&&(t.id!==t.video.id?(a(new Error(`${t.id} different from ${t.video.id}`),"pid49","silently"),!1):"mp4"!==t.video.format?(a(new Error(`video format is ${t.video.format}`),"pid56","silently"),!1):t.video.downloadAddr!==t.video.playAddr?(a(new Error(`downloadAddr ${t.video.downloadAddr} different from playAddr ${t.video.playAddr}`),"pid65","silently"),!1):t.video.playAddr.includes(".tiktok.com")?t.video.cover.includes("tiktokcdn")?!!t.video.dynamicCover.includes("tiktokcdn")||(a(new Error(`Gif url not in tiktokcdn: ${t.video.dynamicCover}`),"pid86","silently"),!1):(a(new Error(`Cover url not in tiktokcdn: ${t.video.cover}`),"pid79","silently"),!1):(a(new Error(`Video url not in tiktok.com: ${t.video.playAddr}`),"pid72","silently"),!1)):(a(new Error(JSON.stringify(t.video)),"pid39","silently"),!1):(a(new Error(JSON.stringify(t.video)),"pid35","silently"),!1):(console.error("No downloadAddr"),!1):(a(new Error(JSON.stringify(t)),"pid27","silently"),!1)}const kt=new class{constructor(){this.ft={}}W(t){this.ft=t}};function _t(){try{return g(kt.ft.unlocks.likeLevel).cap}catch(t){return a(t,"ud17"),0}}function bt(){return kt.ft.profile.uid}const Pt={async ht(){const t=await X.j;return await t.get("likesCache",bt())||[]},W:async t=>(await X.j).put("likesCache",t,bt()),async wt(){x(await this.ht())&&await this.W([])},async U(t){return(await this.ht()).map((t=>t.id)).includes(t.id)}};async function Tt(){const t=await async function(){const t=[];let e="0",i=!0,o=0,r=0;for(await Pt.wt();i;){await y(1e3);const s=new E("likes").P(e).D(30),c=await window.fetch(s.S(),{credentials:"include"}),l=await c.json(),{statusCode:d,itemList:u}=l;if(0!==d){if(o++,o<=3)continue;a(new Error(`Err fetching likes: ${s.S()}`),"ff30");break}if(o=0,u){if(u.some((t=>!Ct(t)))){if(r++,r<=3)continue;a(new Error("still flawed"),"ff51","silently")}r=0,t.push(...u.map(_).filter(Ct)),n(9,{currentTotal:t.length})}if(0===t.length)return[];if(await Pt.U(t[t.length-1]))break;({cursor:e,hasMore:i}=l)}return t}(),e=await Pt.ht(),i=tt(t.concat(e));await Pt.W(i)}var Dt,St,It,Et,$t,At,Bt,zt,Nt;const xt=new(Nt=class{constructor(){Dt.add(this),St.set(this,[]),It.set(this,!1),Et.set(this,0)}async yt(){w(this,It,!0,"f"),await y(1e3),B.R.O("paused"),f.l()}async gt(){w(this,It,!1,"f")}async vt(){var t;await h(this,Dt,"m",At).call(this);try{if(0===h(this,St,"f").length)return void n(10);if(!v.g)throw new Error("resync is not ready - this should be a one-time error, reload to fix.");f.i.likes.officialList=h(this,St,"f").map((t=>t.id)),B.R.M({total:h(this,St,"f").length,nowAt:0});const{finalDownloadOutcome:e}=await h(this,Dt,"m",Bt).call(this);if("someUrlExpired"===e)return w(this,Et,1+(t=+h(this,Et,"f")),"f"),t>3?void a(new Error("Session too long, please reload"),"bl46"):void this.vt();h(this,Dt,"m",zt).call(this,e)}catch(t){a(t,"bl50")}}},St=new WeakMap,It=new WeakMap,Et=new WeakMap,Dt=new WeakSet,$t=function(){return f.i.likes.downloaded.size>=_t()},At=async function(){try{await Tt(),f.i.likes.lastRun.collect=Date.now(),w(this,St,await Pt.ht(),"f")}catch(t){throw a(t,"bl32"),t}},Bt=async function(){for(const t of h(this,St,"f")){new ut(t,"liked").tt()}for(const[t,e]of h(this,St,"f").reverse().entries()){const i=new ut(e,"liked");if(!i.Y){if(h(this,Dt,"m",$t).call(this))return{finalDownloadOutcome:"capped"};for(;h(this,It,"f");)await y(1e3);if(i.Z())return{finalDownloadOutcome:"someUrlExpired"};B.R.O("downloading"),B.R.M({total:h(this,St,"f").length,nowAt:t+1}),i.X().catch((t=>a(t,"bl75","silently"))),h(this,It,"f")||await y(6e3)}}return{finalDownloadOutcome:"completed"}},zt=async function(t){const e={officialListLength:f.i.likes.officialList.length,numMp4InLocalFolder:f.i.likes.downloaded.size,status:t};f.i.likes.lastRun.download=Date.now(),await y(200),n(12,e),B.R.O(t),await f.l()},Nt);function Rt(t){n(6,t)}let Mt=!1;var Ot,jt,Lt,Wt,Ut,Ft,Kt,Ht,Vt,qt,Jt;const Gt=new(Jt=class{constructor(){Ot.add(this),jt.set(this,null)}Ct(){var t;h(this,Ot,"m",Lt).call(this),n(5),null===(t=document.getElementById("myfaveTT-container"))||void 0===t||t.appendChild(h(this,jt,"f"))}},jt=new WeakMap,Ot=new WeakSet,Lt=function(){w(this,jt,document.createElement("div"),"f"),h(this,jt,"f").id="dropbox",h(this,jt,"f").innerHTML='<svg viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>',h(this,jt,"f").addEventListener("dragover",(t=>{t.preventDefault()})),h(this,jt,"f").addEventListener("dragenter",(()=>{h(this,Ot,"m",Wt).call(this)})),h(this,jt,"f").addEventListener("dragleave",(()=>{h(this,Ot,"m",Ut).call(this)})),h(this,jt,"f").addEventListener("drop",(t=>{try{h(this,Ot,"m",Ft).call(this,t)}catch(t){a(t,"db30","silently")}}))},Wt=function(){var t;null===(t=h(this,jt,"f"))||void 0===t||t.classList.add("dragging-over")},Ut=function(){var t;null===(t=h(this,jt,"f"))||void 0===t||t.classList.remove("dragging-over")},Ft=async function(t){if(t.preventDefault(),h(this,Ot,"m",Ut).call(this),!t.dataTransfer)return void h(this,Ot,"m",Kt).call(this);if(1!==t.dataTransfer.items.length)return void h(this,Ot,"m",Kt).call(this);const e=t.dataTransfer.items[0];if("file"!==e.kind)return void h(this,Ot,"m",Kt).call(this);const i=await e.getAsFileSystemHandle();if(i&&"directory"===i.kind)try{h(this,Ot,"m",Ht).call(this,i)}catch(t){a(t,"db67")}else h(this,Ot,"m",Kt).call(this)},Kt=function(){Rt({dropResult:"not_a_folder"})},Ht=async function(t){if("granted"!==await t.requestPermission({mode:"readwrite"}))return;if(!await async function(t){if(await async function(t){const e=[];for await(const i of t.keys())e.push(i);return 0===e.length}(t))return!!Mt||(Mt=!0,!kt.ft.behavior.hasCreatedArchiveFolder||(Rt({dropResult:"unexpectedly_empty"}),!1));try{await t.getFileHandle("Archive.html");const e=await t.getDirectoryHandle("data"),i=await e.getDirectoryHandle(".appdata");return await i.getFileHandle("app.js"),!0}catch(t){return Rt({dropResult:"content_seems_wrong"}),!1}}(t))return;const e=await async function(t){const e=await d(t,"data/.appdata/db.js"),i=await e.getFile(),n=l(await i.text()),{id:o,uid:r,uniqueId:a,nickname:s}=kt.ft.profile;return n.user.id.length>0&&n.user.id!==o?(Rt({dropResult:"belongs_to_another_tiktok_account",belongsToUser:n.user.uniqueId}),null):(n.user={uid:r,id:o,uniqueId:a,nickname:s},n)}(t);e&&h(this,Ot,"m",Vt).call(this,t,e)},Vt=async function(t,e){v.g||o("is_resync_ready"),i(7),await f.o(t,e),"following"===B.I?vt.dt():xt.vt(),h(this,Ot,"m",qt).call(this)},qt=function(){var t;null===(t=h(this,jt,"f"))||void 0===t||t.remove(),w(this,jt,null,"f")},Jt);function Yt(){var e;null===(e=document.getElementById("myfaveTT-container"))||void 0===e||e.remove(),document.body.classList.remove("pushed-by-myfaveTT"),t.onmessage=null,t.close(),window.removeEventListener("message",Qt)}let Zt="";async function Xt(e){try{const{type:n,payload:o}=e.data;if(0===n)return void t.postMessage({type:1});if(1===n)return Yt(),void alert("Not loading myFaveTT sidebar, because it's already running in another tab.");if(100===n)return void i(3,o);if(103===n)return void i(18,o);if(Zt===(Zt=JSON.stringify(e.data)))return void console.error("double listener?!");if(101===n)return void ft.ot();if(102===n){const t=await async function(t){const e=t.find((t=>"x-tt-params"===t.name));if(!e)return[];const i={[e.name]:e.value,Accept:"application/json, text/plain, text/csv, */*"};let n=0,o=0;for(;;){await y(1e3);const t=await fetch("https://m.tiktok.com/api/post/item_list/",{headers:i,credentials:"include"}),e=await t.json(),{statusCode:r,itemList:s}=e;if(0!==r){if(n++,n<=3)continue;return a(new Error("Error in repeat captured request. "),"bf31"),[]}if(!s)return[];if(s.some((t=>!Ct(t)))){if(o++,o<=3)continue;a(new Error("still flawed"),"bf45","silently")}return s.map(_).filter(Ct)}}(o);await ft.nt(t)}}catch(t){a(t,"om41")}}async function Qt(t){try{const{origin:i,data:{type:o,payload:s}}=t;if(i!==e)return;switch(o){case"resync_is_ready":v.g=!0;break;case"resynced":{const{tempStorageKey:t,arrayBuffer:e}=s;nt.V(t,e);break}case 1:try{B.I="likes",f.t?xt.vt():Gt.Ct()}catch(t){a(t,"om46")}break;case 2:try{B.I="following",f.t?vt.dt():Gt.Ct()}catch(t){a(t,"om55")}break;case 3:Yt();break;case 4:f.u(s);break;case 0:if(n(0,"1.1.9"),"initial"===T.v){if(await T.k(),"error"===T.v)break;if(!T._())break}n(4,function(){const t=T.C.$user;return{id:(null==t?void 0:t.uid)||null,secUid:(null==t?void 0:t.secUid)||null,uniqueId:(null==t?void 0:t.uniqueId)||null,nickname:(null==t?void 0:t.nickName)||null}}()),r(2);break;case 5:xt.yt();break;case 6:xt.gt();break;case 7:kt.W(s);break;case 8:vt.ut(s)}}catch(t){a(t,"om136")}}try{t.onmessage=Xt,window.removeEventListener("message",Qt),window.addEventListener("message",Qt),t.postMessage({type:0})}catch(t){a(t,"st8")}
