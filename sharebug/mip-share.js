(window.MIP=window.MIP||[]).push({name:"mip-share",func:function(){define("mip-share/share/aio",[],function(){!function(e,n){function i(e,n){return l.cleanObj.toString.call(e).slice(8,-1)===n}function o(e){var n=p[e];if(n)return n.exports;throw"module "+e+" is undefined"}function t(e,n){for(var i,t,r=e.split(":"),s=r.pop().split("/"),a=l;i=s.shift();)"bdbox"!==i&&(t=i,s.length&&(a=a[i]=a[i]||{}));var c=p[e]={exports:{}},u=l.isFunction(n)?n.apply(c,[o,c.exports,c,l]):n;u&&(c.exports=u),a[t]=c.exports}function r(){m.forEach(function(e){e()}),m.length=0,h=!0}function s(e){var n;return null==e?n=String(e):(n=Object.prototype.toString.call(e).toLowerCase(),n=n.substring(8,n.length-1)),n}function a(n){var i=n.success||g,o={imageUrl:"",mediaType:"all",title:"",content:"",linkUrl:location.href},t=n.error||g;return l.isFunction(n.success)&&(i="_xSHARE_SUCCESS_"+l.getId(),e[i]=n.success,o.success=i),l.isFunction(n.error)&&(t="_xSHARE_FAIL_"+l.getId(),e[t]=n.error,o.error=t),l.each(n,function(e,i){"success"!==i&&"error"!==i&&(i in v?i=v[i]:"content"!==i||n.title||(o.title=e),o[i]=e)}),l.isArray(o.mediaType)&&(o.mediaType="all"),e.BoxShareData||(e.BoxShareData={successcallback:i,errorcallback:t,options:o}),o}var c=+new Date,u=(c+"").slice(-3),d=navigator.userAgent,l={isBox:/ baiduboxapp\//i.test(d),isIOS:/(iPhone|iPod|iPad)/.test(d),isAndroid:/(Android);?[\s\/]+([\d.]+)?/.test(d),getId:function(){return u++},emptyArr:[],emptyFn:function(){},cleanObj:{},byId:function(e){return l.isString(e)?n.getElementById(e):e},toArray:function(e){return l.emptyArr.slice.call(e)},$:function(e,i){return i=i&&1===i.nodeType?i:n,l.toArray(i.querySelectorAll(e))}};"Function,String,Array,Number,RegExp".replace(/[^, ]+/g,function(e){l["is"+e]=function(n){return i(n,e)}}),l.isBoolean=function(e){return!0===e||!1===e},l.isObject=function(e){return"object"==typeof e},l.isUndefined=function(e){return void 0===e},l.isWindow=function(e){return null!=e&&e==e.window},l.isPlainObject=function(e){return l.isObject(e)&&!l.isWindow(e)&&Object.getPrototypeOf(e)==Object.prototype};var p={};l.define=t;var f=function(e,n,i){for(var o,t,r=e.split("."),s=i||f;o=r.shift();)"Box"!==o&&(t=o,r.length&&(s=s[o]=s[o]||{}));return s[t]=n||{},s[t]},m=[],h=!1;if(f.init=function(e){return"function"!=typeof e?this:(h?e():m.push(e),this)},"complete,loaded,interactive".indexOf(n.readyState)>-1&&n.body?r():n.addEventListener("DOMContentLoaded",r,!1),t("common:bdbox/utils/getVersion",function(n,i,o){var t=function(){var n=0;if(e.baiduboxapp_version)n=e.baiduboxapp_version;else{var i,o=navigator.userAgent;(i=/([\d+.]+)_(?:diordna|enohpi)_/.exec(o))?(i=i[1].split("."),n=i.reverse().join(".")):(i=/baiduboxapp\/([\d+.]+)/.exec(o))&&(n=i[1])}return t=function(){return n},n};o.exports=t}),t("common:bdbox/utils/version_compare",function(e,n,i){var o=function(e,n){n+="",e+="";for(var i=e.split("."),o=n.split("."),t=0,r=Math.max(i.length,o.length);r>t;t++){if(i[t]&&!o[t]&&parseInt(i[t])>0||parseInt(i[t])>parseInt(o[t]))return 1;if(o[t]&&!i[t]&&parseInt(o[t])>0||parseInt(i[t])<parseInt(o[t]))return-1}return 0};i.exports=o}),t("common:bdbox/ios/invokeApp",function(i,o,t,r){t.exports=function(i,o,t){if(i&&r.isBox){var s=[];if(r.isFunction(o))t=o;else for(var a in o)s.push(a+"="+o[a]);if(r.isFunction(t)){var c="_bdbox_js_"+r.getId();e[c]=function(){t.apply(e,[].slice.call(arguments,0))},s.push("func="+c)}else t&&s.push("func="+t);s="baiduboxapp://"+i+"?"+s.join("&");var u="_bdbox_ios_jsbridge",d=n.getElementById(u);d?d.src=s:(d=n.createElement("iframe"),d.style.display="none",d.id=u,d.src=s,(n.body||n.getElementsByTagName("body")[0]).appendChild(d))}}}),t("common:bdbox/android/invokeApp",function(n,i,o,t){function r(n,i,o){if(o&&!t.isArray(o)&&(o=Array.prototype.slice.call(arguments,0).slice(2)),e[n]&&e[n][i]){return{error:0,result:e[n][i].apply(e[n],o),__from:"js"}}var r=c();if(a(r,4.8)>=0){var u=s(n,i,o);return u=u?JSON.parse(u):{},u.__from="app",u}if("4.7.1"===r||"4.7"==r){return{error:0,result:s(n,i,o),__from:"app4.7"}}return{error:200}}function s(n,i,o){if(!t.isBox)return{error:201};if(!t.isAndroid)return{error:202};var r={obj:n,func:i,args:o?o:[]};try{return e.prompt("BdboxApp:"+JSON.stringify(r))}catch(e){return{error:201}}}var a=n("common:bdbox/utils/version_compare"),c=n("common:bdbox/utils/getVersion");o.exports=r}),t("common:bdbox/utils/detect",function(n,i,o,t){function r(n){var i={name:"unknown",version:0};this===e||this.os||(this.os=i),n=n||navigator.userAgent;var o={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var t in o)o.hasOwnProperty(t)&&(i["is"+t]=o[t].test(n));i.isUC=n.match(/UC/)||e.ucweb||e.ucbrowser;var r=n.match(/(Android);?\s+([\d.]+)?/);if(r)return i.android=!0,i.version=r[2],i.name="android",i;var s=n.match(/(iPad).*OS\s([\d_]+)/),a=n.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&n.match(/(iPhone\sOS)\s([\d_]+)/);return c&&!a?(i.ios=i.iphone=!0,i.version=c[2].replace(/_/g,"."),i.name="ios",i):s?(i.ios=i.ipad=!0,i.name="ios",i.version=s[2].replace(/_/g,"."),i):a?(i.name="ios",i.ios=i.ipod=!0,i.version=a[3]?a[3].replace(/_/g,"."):null,i):i}r.apply(t),o.exports=r}),t("common:bdbox/each",function(e,n,i){function o(e){var n;return null==e?n=String(e):(n=Object.prototype.toString.call(e).toLowerCase(),n=n.substring(8,n.length-1)),n}i.exports=function(e,n,i){if("object"==typeof e){var t,r,s=o(e);if(i=i||e,"array"===s||"arguments"===s||"nodelist"===s){for(t=0,r=e.length;r>t;t++)if(!1===n.call(i,e[t],t,e))return}else for(t in e)if(e.hasOwnProperty(t)&&!1===n.call(i,e[t],t,e))return}}}),t("common:bdbox/client/nativeShare",function(i,o,t,r){function s(n){var i={wechatIcon:location.protocol+"//m.baidu.com/static/search/logo300.png",type:"url",mediaType:"all",linkUrl:location.href,title:c.title,success:"console.log",error:"console.log"};each(n||{},function(e,n){i[n]=e}),i.image&&(i.imageUrl=i.image),i.iconUrl&&!i.imageUrl&&"url"===i.type&&(i.imageUrl=i.iconUrl);var o={};["success","error"].forEach(function(n){var t=n;r.isFunction(i[n])&&(t="_xSHARE_SUCCESS_"+r.getId(),e[t]=i[n]),o[n+"callback"]=t,delete i[n]}),o.options=i,o.options.imageUrl&&r.isAndroid&&a(r.version,"6.5")<0&&delete o.options.imageUrl,e.BoxShareData=o;var t=i.wechatIcon;if(/micromessenger\//i.test(navigator.userAgent)&&t&&t.length>20){var s=c.createElement("div");s.id="wa-generalevent-wx-logo",s.style.display="none",s.innerHTML='<img src="'+t+'"/>';var u=c.body.firstChild;u?c.body.insertBefore(s,u):c.body.appendChild(s)}}var a=i("common:bdbox/utils/version_compare"),c=n;t.exports=s}),t("common:bdbox/utils/ready",function(e,i,o){function t(){s.forEach(function(e){e()}),s.length=0,a=!0}function r(e){"function"==typeof e&&(a?e():s.push(e))}var s=[],a=!1;"complete,loaded,interactive".indexOf(n.readyState)>-1&&n.body?t():n.addEventListener("DOMContentLoaded",t,!1),o.exports=r}),l.version=l.utils.getVersion(),l.version_compare=l.utils.version_compare,each=l.each,l.nativeShare=l.client.nativeShare,l.type=s,l.canI=function(e,n,i){return l.version_compare(l.version,e)>=0?l.isFunction(n)&&n():l.isFunction(i)&&i(),l},t("common:bdbox/client/o2o",function(e,n,i,o){var t=e("common:bdbox/android/invokeApp"),r=e("common:bdbox/ios/invokeApp"),s=encodeURIComponent,a=e("common:bdbox/each"),c=o.isAndroid?function(e,n){o.isObject(e)&&(n=e,e=e.url,delete n.url);var i=["S.bdsb_light_start_url="+s(e)];if(o.isObject(n)){var r={color:"i.extra_actionbar_color_id",appid:"S.bdsb_wallet_appid"};a(n,function(e,n){"color"===n&&(e=4278190080|parseInt("0x"+e)),n=r[n]||n,i.push(n+"="+e)})}i=i.join(";"),t("Bdbox_android_utils","command",[JSON.stringify({intent:"intent:#Intent;"+i+";end",class:"com.baidu.searchbox.wallet.WalletServiceActivity",min_v:"16783629",mode:"0"})])}:function(e,n){o.isObject(e)&&(n=e,e=e.url,delete n.url);var i={openurl:s(e),minver:"5.3.0.0",isla:0,opentype:1,append:0,rbtnstyle:2};if(o.isObject(n)){var t={color:"barcolor"};a(n,function(e,n){n=t[n]||n,i[n]=e})}i.appid&&(i.isla=1),r("easybrowse",i)};i.exports=c}),l.o2o=l.client.o2o,"android"===l.os.name?f("card",{query:function(e,n){if(f.version_compare(f.version,"5.0")<0)return this;var i,o;f.isArray(e)?i=[JSON.stringify(e)]:(o=f.toArray(arguments),n=o.pop(),f.isFunction(n)?i=o:(i=f.toArray(arguments),n=null),i=[JSON.stringify(i)]);var t=f.android.invokeApp("Bdbox_android_card","mquery",i);return t=0===t.error&&t.result?JSON.parse(t.result):!1,f.isFunction(n)&&n(t),t},add:function(n,i){if(f.version_compare(f.version,"5.0")<0)return this;var o,t;f.isString(n)?o=[n]:f.isArray(n)?o=[JSON.stringify(n)]:(t=f.toArray(arguments),i=t.pop(),f.isFunction(i)?o=t:(o=f.toArray(arguments),i=null),o=[JSON.stringify(o)]);var r=null;if(f.version_compare(f.version,"5.5")>=0){var s="";f.isFunction(i)&&(s="__box_card_"+f.getId(),e[s]=function(e){var n=JSON.parse(e),o=!1;for(var t in n){o=n[t].st;break}i(o)}),r=f.android.invokeApp("Bdbox_android_card","madd",o.concat([s,0]))}else r=f.android.invokeApp("Bdbox_android_card","madd",o);return r}}):f("card",{query:function(e,n){if(f.version_compare(f.version,"5.0")<0)return this;var i,o;f.isArray(e)?i=[JSON.stringify(e)]:(o=f.toArray(arguments),n=o.pop(),f.isFunction(n)?i=o:(i=f.toArray(arguments),n=null),i=[JSON.stringify(i)]);var t=function(e){f.isFunction(n)&&n(JSON.parse(e)),t=null};f.ios.invokeApp("cardMquery",{params:encodeURIComponent(i)},t)},add:function(e,n){if(f.version_compare(f.version,"5.0")<0)return this;var i,o;f.isString(e)?i=[e]:f.isArray(e)?i=[JSON.stringify(e)]:(o=f.toArray(arguments),n=o.pop(),f.isFunction(n)?i=o:(i=f.toArray(arguments),n=null),i=[JSON.stringify(i)]);var t=function(e){var i=JSON.parse(e),o=!1;for(var r in i){o=i[r].st;break}f.isFunction(n)&&n(o),t=null};return f.ios.invokeApp("cardMadd",{params:encodeURIComponent(i),gohome:"0"},t),!0}}),t("common:bdbox/utils/jsonToQuery",function(e,n,i,o){i.exports=function(e){if(o.isString(e))return e;var n=[];for(var i in e)n.push(i+"="+e[i]);return n.join("&")}}),t("common:bdbox/io/loadJS",function(i,o,t,r){function s(i,o,t){var s,u,d,l=n.createElement("script");r.isString(i)?(s=i,r.isFunction(o)&&(t=o,o=null)):(s=i.url,o=i.data,t=i.success,u=i.error||r.emptyFn,d=i.timeout),r.isObject(o)&&(o=c(o)),o&&(s+=(-1===s.indexOf("?")?"?":"&")+o),s=s.replace(/[&?]{1,2}/,"?");var p;/=\?/.test(s)&&(p="_box_jsonp"+r.getId(),s=s.replace(/=\?/,"="+p));var f=a();d=d||2e4,l.type="text/javascript",l.src=s;var m,h=!0,b=function(){p&&delete e[p],m&&clearTimeout(m),l.onload=l.onreadystatechange=l.onerror=null,l=null},v=function(){!l||l.readyState&&!/loaded|complete/.test(l.readyState)||(b(),h&&r.isFunction(t)&&t.apply(null,r.toArray(arguments)),h=!1)},g=function(e){b(),h&&u(e),h=!1};p&&(e[p]=v),m=setTimeout(function(){b(),h&&u("timeout"),h=!1},d),l.onload=l.onreadystatechange=l.onerror=v,l.onerror=g,f.appendChild(l)}function a(){return n.head||n.getElementsByTagName("head")[0]||n.documentElement}var c=i("common:bdbox/utils/jsonToQuery");r.emptyFn,t.exports=s}),t("common:bdbox/utils/queryToJson",function(e,n,i){i.exports=function(e){try{e=e?decodeURIComponent(e):""}catch(n){e=""}var n=e.split("?"),i=n[1]?n[1]:n[0],o=i.split("&"),t={};return o.forEach(function(e){e=e.split("="),e[0].length>0&&(t[e[0]]=e[1]||"")}),t}}),t("common:bdbox/extend",function(e,n,i,o){function t(e,n,i){for(var o in n)i&&(r(n[o])||s(n[o]))?(r(n[o])&&!r(e[o])&&(e[o]={}),s(n[o])&&!s(e[o])&&(e[o]=[]),t(e[o],n[o],i)):c(n[o])||(e[o]=n[o])}var r=o.isPlainObject,s=o.isArray,a=o.isBoolean,c=o.isUndefined;i.exports=function(e){var n,i=o.emptyArr.slice.call(arguments,1);return a(e)&&(n=e,e=i.shift()),i.forEach(function(i){t(e,i,n)}),e}}),t("common:bdbox/utils/ready",function(e,i,o){function t(){s.forEach(function(e){e()}),s.length=0,a=!0}function r(e){"function"==typeof e&&(a?e():s.push(e))}var s=[],a=!1;"complete,loaded,interactive".indexOf(n.readyState)>-1&&n.body?t():n.addEventListener("DOMContentLoaded",t,!1),o.exports=r}),t("common:bdbox/utils/detect",function(n,i,o,t){function r(n){var i={name:"unknown",version:0};this===e||this.os||(this.os=i),n=n||navigator.userAgent;var o={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var t in o)o.hasOwnProperty(t)&&(i["is"+t]=o[t].test(n));i.isUC=n.match(/UC/)||e.ucweb||e.ucbrowser;var r=n.match(/(Android);?\s+([\d.]+)?/);if(r)return i.android=!0,i.version=r[2],i.name="android",i;var s=n.match(/(iPad).*OS\s([\d_]+)/),a=n.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&n.match(/(iPhone\sOS)\s([\d_]+)/);return c&&!a?(i.ios=i.iphone=!0,i.version=c[2].replace(/_/g,"."),i.name="ios",i):s?(i.ios=i.ipad=!0,i.name="ios",i.version=s[2].replace(/_/g,"."),i):a?(i.name="ios",i.ios=i.ipod=!0,i.version=a[3]?a[3].replace(/_/g,"."):null,i):i}r.apply(t),o.exports=r}),t("common:bdbox/schema",function(e,i,o,t){function r(e,i){if(e){if(i=i||t.emptyFn,!t.isBox&&t.isIOS&&c(a.version,"9.0")>=0)return void u(function(){s(e,i)});var o=Date.now(),r=n.createElement("IFRAME");r.src=e,r.style.position="absolute",r.style.left="-2000px",r.style.top="-1000px",r.style.width="1px",r.style.height="1px",r.style.webkitTransition="all 0.9s",r.style.transition="all 0.9s",n.body.appendChild(r);var d=function(){n.body.removeChild(r),i(Date.now()-o<1500?!0:!1)};r.addEventListener("webkitTransitionEnd",d,!1),r.addEventListener("transitionEnd",d,!1),setTimeout(function(){r.style.left="-1000px"},20)}}function s(e,n){location.href=e,d&&clearTimeout(d),d=setTimeout(function(){n(!0)},1200)}var a=e("common:bdbox/utils/detect")(),c=e("common:bdbox/utils/version_compare"),u=e("common:bdbox/utils/ready"),d=null;o.exports=r}),t("common:bdbox/monitor",function(n,i,o,t){var r=encodeURIComponent,s=function(e,n){e+=e.indexOf("?")<0?"?":"&",this.url=e,this.options=n};s.prototype.report=function(n){n=n||"";var i=new Image(1,1),o=[];if(t.isObject(n)){for(var s in n)o.push(s+"="+r(String(n[s])));n=o.join("&")}var a="_box_mt"+t.getId();e[a]=i,i.onload=i.onerror=i.onabort=function(){i.onload=i.onerror=i.onabort=null,e[a]=i=null};var c=this.url+n;return t.isFunction(this.options.customHandler)&&(c=this.options.customHandler(c)),i.src=c+"&_rnd="+Math.floor(2147483648*Math.random()),this},s.prototype.main=function(e,n){return e&&t.isFunction(this[e])&&this[e].apply(this,t.toArray(n||[])),this},o.exports=function(e,n){return new s(e,n)}}),t("common:bdbox/clone",function(e,n,i){var o=Object.prototype.toString,t=function(e,n,i){var o=0;for(var t in e)if(e.hasOwnProperty(t))if(i)n[t]=e[t];else if(n(t,e[t],o++))break},r=function(e){var n;switch(o.call(e)){case"[object Object]":n={},t(e,function(e,i){n[e]=r(i)});break;case"[object Array]":n=[],e.forEach(function(e){n.push(r(e))});break;default:n=e}return n};i.exports=r}),t("common:bdbox/monitor/pblog",function(e,n,i,o){var t=e("common:bdbox/monitor"),r=e("common:bdbox/extend"),s=e("common:bdbox/utils/queryToJson"),a=e("common:bdbox/utils/getVersion"),c=e("common:bdbox/clone"),u=s(location.search),d=navigator.userAgent,l="//m.baidu.com/tcbox",p={service:"bdbox",action:"pblog",ctv:2,cen:"uid_ua_ut",data:{appid:"1",dataid:"2",actiontype:"1",actionid:"2",actiondata:{ref:u.ref||"",gmv:u.vmgdb||"",source:u.from||u.ref||"",boxVersion:a(),boxPlatform:d.match(/(iPad|iPhone|iPod)/gim)?"ios":"android"}}},f=encodeURIComponent;u.uid&&u.osname&&["osname","ua","ut","from","cfrom","uid","pkgname"].forEach(function(e){u[e]&&(p[e]=u[e])});var m,h=t(l,{customHandler:function(e){var n=[];if(m)for(var i in m)if(m.hasOwnProperty(i)){var t=m[i];o.isPlainObject(t)&&(t=JSON.stringify(t)),n.push(i+"="+f(t))}return n.length&&(e+=n.join("&")),e}});h.init=function(e,n){o.isPlainObject(n)&&(p=r(p,n)),p.data.cateid=e},h.pv=function(e,n){m=c(p);var i=m.data;i.actionid="1";var o={};return o.url=e||location.href,n&&(o.u=n),i.actiondata=r(i.actiondata,o),h.report()},h.event=function(e,n,i){if(!e)throw"monitor.tc.event need a evtName";if(o.isPlainObject(n)&&!i){var t={evtName:e};for(var s in n)t[s]=n[s]}else var t={evtName:e,evtType:n||"",evtTag:i||""};m=c(p);var a=m.data;return a.actionid="2",a.actiondata=r(a.actiondata,t),h.report()},i.exports=function(){h.main.apply(h,arguments)}}),t("common:bdbox/moplus",function(e,n,i,o){var t=e("common:bdbox/utils/jsonToQuery"),r=e("common:bdbox/io/loadJS"),s=e("common:bdbox/utils/version_compare"),a=e("common:bdbox/monitor/pblog"),c=e("common:bdbox/schema"),u="com.baidu.searchbox",d="http://127.0.0.1:6259/",l="http://127.0.0.1:40310/",p="inapp_boxserver",f="https:"===location.protocol,m=null,h="__moplus_host__",b={isSendPv:!1,isHit:!1,parseUA:function(){var e,n,i=navigator.userAgent,o={uc:/UCBrowser\/(\S*) \S*/g,bd:/baidubrowser\/(\S*) \(Baidu/g,qq:/MQQBrowser\/(\S*) Mobile/g,chr:/Chrome\/(\S*) Mobile/g,qh:/360 Aphone Browser \((\S*)\)/g,sg:/SogouMobileBrowser\/(\S*)/g,mi:/MiuiBrowser\/(\S*)/g};for(var t in o){var r=o[t].exec(i);if(r){e=t,n=r[1];break}}return e=e?e:"other",n=n?n:"0",{t:e,v:n}},parseHost:function(){return v.curHost===l?1:0},sendEvt:function(e,n,i,o){this.isHit&&this.send(e,n,i,o)},send:function(e,n,i,o){var t=this.parseUA(),r=t.t,s=t.v,c=f?0:1,u=this.parseHost();a("event",[e,{evtType:n||"",brName:r,brVer:s,isHttp:c,isNew:u,source:i||"",intent:o||""}])},init:function(){this.isHit=Date.now()%100==1,a("init",[2])}},v=function(e,n,i){this.version="2.0",this.isHttps=f,this.curHost=i||"",this.newHost=l,this.oldHost=this.isHttps?l:d,this.MCMDF=n||p,this._infoFuncs=[],this._verFuncs=[],this.minVersion=e?e:0,this.pkgName=u,b.init()},g=function(e,n){try{sessionStorage.setItem(e,n)}catch(e){}},x=function(e){var n;try{n=sessionStorage.getItem(e)}catch(e){}return n};v.prototype={constructor:v,setMcmdf:function(e){return this.MCMDF=e,this},setHost:function(e){return this.curHost=e,g(h,e),this},getHost:function(){if(this.isHttps)return this.curHost=this.newHost,this.newHost;var e=x(h);return e?(this.curHost=e,this.curHost):void 0},api:function(e,n,i,r){if(!e)throw"Moplus.api need an action";o.isFunction(n)&&(r=i,i=n,n={});var s=e+(~e.indexOf("?")?"&":"?")+t(n);return~s.indexOf("mcmdf")||(s+="&mcmdf="+this.MCMDF),b.sendEvt("api","send:"+e,this.MCMDF,s),this.request(s,function(n){b.sendEvt("api",(o.isPlainObject(n)&&0==n.error?"success:":"fail:")+e,this.MCMDF,s),i(n)},r)},getInfo:function(e,n){if(m)return e(m);if(this._infoFuncs.push(e),!(this._infoFuncs.length>1)){var i=this,t=function(e,n){!n&&o.isPlainObject(e)&&(m=e);var t;for(n&&(e={error:33});t=i._infoFuncs.shift();)t(e)},s="getsearchboxinfo?mcmdf="+this.MCMDF;if(this.getHost()){var a={url:this.curHost+s+"&callback=?",success:t,error:function(){t(null,!0)},timeout:n};r(a)}else this.request(s,function(e){return 33===e.error?t(null,!0):void t(e)},n);return this}},getHVersion:function(e,n){this._verFuncs.push(e);var i=this;if(!(this._verFuncs.length>1)){var o=function(e){var n;for(e=i.parseInfo(e);n=i._verFuncs.shift();)n(e)};return this.getInfo(o,n),this}},parseInfo:function(e,n){e=e||m,n=n||this.minVersion;var i=e.package_infos;if(!i||0===i.length)return!1;var o=u,t={offic:{name:u,version:0},oem:{version:0}};return i.forEach(function(e){var i=e.version_name,r=e.package_name;s(i,n)>=0&&(r===o?1===s(i,t.offic.version)&&(t.offic={version:i,name:u}):1===s(i,t.oem.version)&&(t.oem={version:i,name:r}))}),0===t.oem.version&&0===t.offic.version?!1:0!==t.offic.version?t.offic:0!==t.oem.version?t.oem:void 0},schema:function(e,n){if(!e.intent)throw"schema intent is empty";e.mcmdf||(e.mcmdf=this.MCMDF);var i=function(){b.send("schema","success",e.source,e.intent),o.isFunction(n)&&n({error:0,from:"schema"})},t=function(){b.send("schema","fail",e.source,e.intent),o.isFunction(n)&&n({error:20,from:"schema"})},r=e.schema||"";if(e.intent&&!e.schema)-1==e.intent.indexOf(u)&&(b.sendEvt("defaultPKGName","fail",e.source||"",e.intent),e.minver=e.minver?e.minver:"6.9.1");r||(r="baiduboxapp://utils?action=sendIntent&params="+encodeURIComponent(JSON.stringify(e))+"&minver="+(e.minver?e.minver:"6.9")),c(r,function(e){e?t():i()})},sendIntent:function(e,n,i){var t={};if(e&&o.isString(e)){var r,s=this,a=!0;return o.isPlainObject(i)?(t=i,r=i.source||"",i.needlog?b.isHit=i.needlog:t.needlog=b.isHit?1:0,i=i.timeout):o.isBoolean(i)&&(a=i),t.intent=e,b.send("sendintent","send",r,e),this.api("sendintent",{intent:encodeURIComponent(e)},function(i){!i||i&&33===i.error||!o.isPlainObject(i)?(b.send("sendintent","fail",r,e),a?s.schema(t,n):(i=i||{},i.from="moplus",n(i))):(b.send("sendintent","success",r,e),n(i))},i)}return this},request:function(e,n,i){var t,s,a=this,c={timeout:i};o.isFunction(n)&&!~e.indexOf("callback=")&&(e+="&callback=?");var u=function(e){t="success",o.isFunction(n)&&n(e)},d=function(){o.isFunction(n)&&n({error:33})};if(a.getHost())c.url=a.curHost+e,c.success=u,c.error=d,r(c);else if(c.url=a.newHost+e,c.success=function(e){"success"!==t&&(s&&clearTimeout(s),a.setHost(a.newHost),u(e))},c.error=function(){a.isHttps?(t="error",d()):"error"===t&&d(),t="error"},r(c),!a.isHttps){var l={timeout:i,url:a.oldHost+e,error:c.error};l.success=function(e){"success"!==t&&("error"===t?(a.setHost(a.oldHost),u(e)):s=setTimeout(function(){a.setHost(a.oldHost),u(e)},500))},r(l)}return this}},i.exports=function(e,n){return new v(e,n)},i.exports.Moplus=v}),l.version_compare(l.version,"5.3.5")>=0){var b,v={image:"imageUrl",url:"linkUrl",order:"mediaType"},g="";e[g]=l.emptyFn,l.isAndroid?(b=function(e){if(e.id&&l.byId(e.id)){var n=e.eventType||"touchstart";l.byId(e.id).addEventListener(n,function(){i(e)},!0)}var i=function(n){n=a(n||e);var i=n.error,o=n.success;n.iconUrl&&n.imageUrl&&delete n.imageUrl,l.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(n),o||"console.log",i||"console.log"])};return i},f("share",b)):(b=function(e){if(e.id&&l.byId(e.id)){var n=e.eventType||"touchstart";l.byId(e.id).addEventListener(n,function(){i(e)},!0)}var i=function(n){n=a(n||e);var i=n.error,o=n.success;n.iconUrl&&!n.imageUrl&&(n.imageUrl=n.iconUrl),n=JSON.stringify(n),l.ios.invokeApp("callShare",{options:encodeURIComponent(n),errorcallback:i||"console.log",successcallback:o||"console.log"})};return i},f("share",b))}else{var x=[],w=function(){f._socShare&&f._socShare.init?x.forEach(function(e){f._socShare.init(e)}):setTimeout(w,3e3)};l.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2",w);var y={source:"client_id",id:"dom_id",image:"pic_url",success:"afterRender"},b=function(e){var n={content:"",client_id:"ZVEpDSsmZ0qxa1gmgDAh1Fje",theme:"native",dom_id:"share",animate:!0,pic_url:"",url:encodeURIComponent(location.href)};return l.isObject(e)&&l.each(e,function(e,i){if(i in y&&(i=y[i]),"order"===i&&l.isArray(e)){var o=[];e.forEach(function(e){"email"===e&&(e="mail"),o.push(e)})}n[i]=e}),delete n.success,delete n.error,delete n.afterRender,"all"===n.order?n.order=["qqdenglu","sinaweibo","renren","kaixin","mail","sms"]:l.isString(n.order)&&(n.order=n.order.split(",")),f._socShare&&f._socShare.init?f._socShare.init(n):x.push(n),function(){f._socShare.ui._shareBtnClickHandler()}};f("share",b)}if(t("common:bdbox/distribute",function(e,n,i,o){var t=e("common:bdbox/schema");e("common:bdbox/utils/detect");var r=e("common:bdbox/each"),s=e("common:bdbox/moplus"),a=o.emptyFn,c={qqDownloadUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox",androidDownloadUrl:"",iosDownloadUrl:"",iosFailCallback:a,androidFailCallback:a,iosSchema:"",androidSchema:"",androidIntent:"",inBoxCallback:a},u=function(e){var n=this;e&&r(c,function(n,i){e[i]=e[i]||n});var i=this.url=e.url;i&&""!==i?(this.androidIntent="intent://"+i.replace(/^http[s]?:\/\//,"")+"#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end",this.iosSchema="baiduboxapp://easybrowse?openurl="+encodeURIComponent(i)+"&opentype=0&isla=0&append=0&minver=5.3.0.0"):["androidIntent","iosSchema","androidSchema"].forEach(function(i){n[i]=e[i]}),this.options=e,this.fail=function(){if(console.log(o.os.name+" fail"),o.isFunction(e[o.os.name+"FailCallback"])){var n=e[o.os.name+"FailCallback"]();if(o.isBoolean(n)&&!n)return}var i=e[o.os.name+"DownloadUrl"];i&&""!==i&&(location.href=e[o.os.name+"DownloadUrl"])},this.success=function(){return console.log(o.os.name+" success"),o.isFunction(e[o.os.name+"SuccessCallback"])?e[o.os.name+"SuccessCallback"]():void 0}};u.prototype.wechat=function(){var e=this.options;if(o.isFunction(e.wechatCallback)){var n=e.wechatCallback();if(o.isBoolean(n)&&!n)return}e.qqDownloadUrl&&""!==e.qqDownloadUrl&&(location.href=e.qqDownloadUrl)},u.prototype.run=function(){var e=this,n=(e.url,e.options);return o.os.isWechat?e.wechat():o.isBox&&o.isFunction(n.inBoxCallback)?n.inBoxCallback():void this.invoke()},u.prototype.invoke=function(){var e=this;if(o.os.android){var n=s();n.getHVersion(function(i){i?n.sendIntent(e.androidIntent,function(n){0==n.error?e.success():e.fail()},1e3):e.androidSchema?t(e.androidSchema,function(n){n?e.fail():e.success()}):e.fail()})}else t(e.iosSchema,function(n){n?e.fail():e.success()})},i.exports=function(e){return new u(e)}}),each(l,function(e,n){f[n]=e}),e.Box&&e.Box.$)for(var _ in f)e.Box[_]=e.Box[_]||f[_];else e.Box=f}(window,document)}),define("mip-share/share/detect",["require","zepto"],function(e){function n(){if(t){var e,n="";if(o&&o.os){if(o.os.ios)e="ios";else if(o.os.android)e="android"}else if(t.indexOf("iphone")>-1||t.indexOf("ipod")>-1)e="ios";else e="android";return{n:e,v:n}}}function i(){if(t){var e,n="";if(-1!=t.indexOf("baiduboxapp/"))e="zbios";else if(-1!=t.indexOf("baidubrowser/"))e="bmbadr",n=t.match(/baidubrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:"";else if(-1!=t.indexOf("mqqbrowser/"))e="qq",n=t.match(/mqqbrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:"";else if(-1!=t.indexOf("micromessenger/"))e="wechat",n=t.match(/micromessenger\/([\d\.]*)/),n=n&&n[1]?n[1]:"";else if(-1!=t.indexOf("ucbrowser/"))e="uc",n=t.match(/ucbrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:"";else if(-1!=t.indexOf("sogoumobilebrowser/"))e="sogou",n=t.match(/sogoumobilebrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:"";else if(-1!=t.indexOf("crios/"))e="chrome",n=t.match(/crios\/([\d\.]*)/),n=n&&n[1]?n[1]:"";else e="other";return{n:e,v:n}}}var o=e("zepto"),t=navigator.userAgent.toLowerCase();return{os:n(),browser:i()}}),define("mip-share/share/share",["require","zepto","util","viewer","./aio","./detect"],function(e){function n(e,n,i){r.sendMessage("mip_share",{key:e,opt:n,app:i})}var i=e("zepto"),o=e("util"),t=o.platform,r=e("viewer");e("./aio");var s,a={url:window.location.href,title:"百度搜索有惊喜",content:"百度搜索有惊喜",iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg",custom:[]},c=e("./detect"),u=c.os,d=c.browser,l="zbios"==d.n?1:0,p="uc"==d.n?1:0,f=t.isQQ()&&d.v&&d.v>"5.4"?1:0,m=t.isWechatApp()?1:0,h=new Promise(function(e,n){if(f){var o=document.createElement("script");o.type="text/javascript",o.onload=o.onreadystatechange=function(){if(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)e()},o.src="//jsapi.qq.com/get?api=app.share",i("head").append(o)}}),b=function(e,n){if(n)e.url=encodeURIComponent(e.url),e.linkUrl=encodeURIComponent(e.url);if(Box.os.android)Box.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(e),window.successFnName||"console.log",window.errorFnName||"console.log"]);else Box.ios.invokeApp("callShare",{options:encodeURIComponent(JSON.stringify(e)),errorcallback:"onFail",successcallback:"onSuccess"})},v=function(e,i){var o={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]},t=i.url,s=i.title,a="";i.content;if(e=""==e?"":"ios"==u.n?o[e][0]:o[e][1],r.isIframed)return void n(e,i,"uc");if("undefined"!=typeof ucweb)ucweb.startRequest("shell.page_share",[s,s,t,e,"","@"+a,""]);else if("undefined"!=typeof ucbrowser)ucbrowser.web_share(s,s,t,e,"","@"+a,"")},g=function(e,i){var o=e,t={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]};e=""==e?"":t[e][2];var s={url:i.url,title:i.title,description:i.content,img_url:"",img_title:"",to_app:e,cus_txt:"请输入此时此刻想要分享的内容"};if(s=""==e?"":s,r.isIframed)return void n(o,s,"qq");h.then(function(){if("undefined"!=typeof browser&&void 0!==browser.app)browser.app.share(s)})},x=function(){if(i(".c-share-wechat-tips").length)i(".c-share-wechat-tips").show();else i("body").append(i('<div class="c-share-wechat-tips"></div>')),i(".c-share-wechat-tips").on("click",function(){i(this).hide(),clearTimeout(s)});s=setTimeout(function(){i(".c-share-wechat-tips").hide(),clearTimeout(s)},2e3)},w={key:"pyq",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/pyq.png",title:"朋友圈",cb:function(){var e;if(l)e=function(e){e.mediaType="weixin_timeline",b(e,!1)};else if(p)e=function(e){v("pyq",e)};else if(f)e=function(e){g("pyq",e)};else if(m)e=function(e){x()};return e}()},y={key:"wxfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend.png",title:"微信好友",cb:function(){var e;if(l)e=function(e){e.mediaType="weixin_friend",b(e,!1)};else if(p)e=function(e){v("wxfriend",e)};else if(f)e=function(e){g("wxfriend",e)};else if(m)e=function(e){x()};return e}()},_={key:"qqfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend.png",title:"QQ好友",cb:function(){var e;if(l)e=function(e){e.mediaType="qqfriend",b(e,!1)};else if(p)e=function(e){v("qqfriend",e)};else if(f)e=function(e){g("qqfriend",e)};return e}()},S={key:"qzone",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qzone.png",title:"QQ空间",cb:function(){var e;if(l)e=function(e){e.mediaType="qqdenglu",b(e,!1)};else if(p&&"ios"==u.n)e=function(e){v("qzone",e)};else if(f)e=function(e){g("qzone",e)};else e=function(e){var n="url="+encodeURIComponent(e.url)+"&successurl="+encodeURIComponent(window.location.href)+"&summary="+e.content+"&title="+e.title+"&pics="+encodeURIComponent(e.iconUrl);window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+n)};return e}()},k={key:"sinaweibo",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo.png",title:"新浪微博",cb:function(){var e;if(l)e=function(e){e.mediaType="sinaweibo",b(e,!1)};else if(p)e=function(e){v("sinaweibo",e)};else if(f)e=function(e){g("sinaweibo",e)};else e=function(e){window.open("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(e.url)+"&title="+encodeURIComponent(e.title))};return e}()},q={key:"more",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/more.png",title:"更多",cb:function(){var e;if(l)e=function(e){e.mediaType="all",b(e,!1)};else if(p)e=function(e){v("",e)};else if(f)e=function(e){g("",e)};return e}()},O=function(e){if(this.opt=i.extend({},a,e),!this.opt.content)this.opt.content=this.opt.title;if(/^\/\/.+/.test(this.opt.url))this.opt.url="http:"+this.opt.url;this.opt.linkUrl=this.opt.url,this._init()};return O.prototype={version:"1.0.0",_init:function(){var e=this;e.isRender=!1,e._initShareList()},_initShareList:function(){var e=this,n=[];if(l||p||f||m)n.push(w,y);if(l||p||f)n.push(_);if(n.push(S,k),l||p||f&&"ios"==u.n)n.push(q);n=n.concat(e.opt.custom),e.list=n;var o="";if("array"==i.type(n)&&n.length>0){o+='<div class="c-share-list">';for(var t=n.length,r=Math.ceil(t/4),s=0;s<r;s++){o+='<div class="c-row c-gap-bottom">';for(var a=0;a<4;a++){var c=4*s+a,d=n[c];if(d)o+='<div class="c-span3 c-share-btn c-share-btn-'+d.key+'">',o+='<div class="c-img c-img-s">',o+='<img src="'+d.icon+'" />',o+="</div>",o+='<div class="c-line-clamp1">'+d.title+"</div>";else o+='<div class="c-span3 c-share-btn">';o+="</div>"}o+="</div>"}o+="</div>"}e.$dom_shareList=i(o),e._bindEvent()},_bindEvent:function(){var e=this;e.$dom_shareList.find(".c-share-btn").each(function(n){if(e.list[n])i(this).on("click",function(){e.list[n].cb(e.opt),e._sendLog(e.list[n].key)})})},_sendLog:function(e){var n=this,o={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(e&&o[e]&&"object"==typeof B&&B.log&&B.log.send){var t=o[e];if(n.opt&&"object"==typeof n.opt.loginfo)t=i.extend(t,n.opt.loginfo);B.log.send(t)}},render:function(e,n){var o=this;if(e&&i(e).length){var t=i(e);if(n&&n.customClassName)o.$dom_shareList.addClass(n.customClassName);if(t.append(o.$dom_shareList),o.isRender=!0,n&&"function"==typeof n.onRender)n.onRender()}},popup:function(n){var o=this,n=n||{};if(o.isRender)o.$dom_shareList=o.$dom_shareList.clone(),o._bindEvent();if(n&&n.customClassName)o.$dom_shareList.addClass(n.customClassName);var t=i('<div class="c-row c-gap-top-large"><div class="c-span12"><div class="c-btn c-share-cancel-btn">取消</div></div></div>');e(["pmd/popup/popup"],function(e){o.sharePopup=new e({content:o.$dom_shareList.add(t),customClassName:"c-share-popup-modal",onOpen:n.onOpen||function(){},onClose:n.onClose||function(){}}),o.sharePopup.$popupContent.css({"max-width":o._horizontalHack()+"px"}),t.on("click",function(){o.sharePopup.closePopup(),o._sendLog("close")})})},close:function(){var e=this;if(e.sharePopup)e.sharePopup.closePopup()},_horizontalHack:function(){var e;if(void 0!=window.orientation){if(0==window.orientation||180==window.orientation)e=Math.min(window.screen.width,i(window).width());else if(90==window.orientation||-90==window.orientation)e=Math.min(window.screen.width,window.screen.height),e=e*i(window).width()/Math.max(window.screen.width,window.screen.height)}else e=Math.min(window.screen.width,window.screen.height);return e},constructor:O},O}),define("mip-share/share",["require","zepto","./share/share"],function(e){function n(e,n){e=i.extend({},t,e);var r=new o(e);r.render(n,{onRender:function(){}}),this.share=r}var i=e("zepto"),o=e("./share/share");o.prototype._sendLog=function(e){var n=this,o={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(e&&o[e]){var t=o[e];if(n.opt&&"object"==typeof n.opt.loginfo)t=i.extend(t,n.opt.loginfo)}};var t={iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg"};return n}),define("mip-share/mip-share",["require","zepto","customElement","./share"],function(e){var n=e("zepto"),i=e("customElement").create(),o=e("./share");return i.prototype.build=function(){var e=this.element;new o({title:e.getAttribute("title")||document.title,url:e.getAttribute("url")||location.href,content:e.getAttribute("content")||"",iconUrl:e.getAttribute("icon")||""},n(e));var i=n(e).children().not("mip-i-space")[0];this.applyFillContent(i)},i}),define("mip-share",["mip-share/mip-share"],function(e){return e}),function(){function e(e,n){e.registerMipElement("mip-share",n,".c-share-list{background:#fff;padding:17px 21px;margin-top:13px}.c-share-list .c-flexbox,.c-share-list .c-row{width:auto;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-webkit-box-align:stretch;-webkit-box-lines:single;display:-webkit-flex;-webkit-flex-direction:row;-webkit-justify-content:space-between;-webkit-align-items:stretch;-webkit-align-content:flex-start;-webkit-flex-wrap:nowrap}.c-share-list .c-row{margin-right:-1.81818182%;margin-left:-1.81818182%}.c-share-list .c-row-tight{margin-right:-1px;margin-left:0}.c-share-list .c-row-tile{position:relative;margin:0 -0.21rem}.c-share-list .c-row-tile .c-row{padding:0 .21rem}.c-share-list .c-row-top{position:relative;margin-top:-0.1rem}.c-share-list .c-row-top .c-row:first-child{padding-top:.1rem}.c-share-list .c-row-bottom{position:relative;margin-bottom:-0.08rem}.c-share-list .c-row-bottom .c-row:last-child{padding-bottom:.08rem}.c-share-list .c-row *,.c-share-list .c-row-tile *,.c-share-list .c-row-top *,.c-share-list .c-row-bottom *{-webkit-box-sizing:border-box;box-sizing:border-box}.c-share-list .c-span1,.c-share-list .c-span2,.c-share-list .c-span3,.c-share-list .c-span4,.c-share-list .c-span5,.c-share-list .c-span6,.c-share-list .c-span7,.c-share-list .c-span8,.c-share-list .c-span9,.c-share-list .c-span10,.c-share-list .c-span11,.c-share-list .c-span12{position:relative;min-height:1px;padding-right:1.81818182%;padding-left:1.81818182%}.c-share-list .c-span3{width:25%;-webkit-box-flex:3;-webkit-flex:3 3 auto}.c-share-list .c-img{display:block;width:100%;height:0;border:0 none;background:#f7f7f7 url(//m.baidu.com/static/search/image_default.png) center center no-repeat;margin:.04rem 0}.c-share-list .c-img img{width:100%}.c-share-list .c-img-s{padding-bottom:100%}.c-share-list{overflow:hidden;margin-top:0;-webkit-box-sizing:border-box;box-sizing:border-box}.c-share-list .c-line-clamp1{line-height:30px}.c-share-list .c-share-btn{color:#333;text-align:center;font-size:12px}.c-share-list .c-share-btn .c-img{background:#fff;border:1px solid #f0f0f0;border-radius:50%}.c-share-cancel-btn{border-color:#f0f0f0}.c-share-wechat-tips{position:fixed;top:0;left:0;z-index:9999999;width:100%;height:100%;background:rgba(0,0,0,0.6) url(//m.baidu.com/se/static/pmd/pmd/share/images/wxtips.png) right 10px top 10px no-repeat;background-size:50%}.c-popup-wrapper .c-share-popup-modal{background-color:#f0f0f0}.c-share-popup-modal .c-popup-head{display:none}.c-share-popup-modal .c-popup-content{margin:0 auto;padding:21px}")}if(window.MIP)require(["mip-share"],function(n){e(window.MIP,n)});else require(["mip","mip-share"],e)}()}});