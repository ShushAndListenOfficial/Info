(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/nW0":function(e,t,n){},"1r2b":function(e,t,n){},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=(n("1r2b"),function(){return a.a.createElement("a",{href:"https://www.facebook.com/ShushAndListenOfficial/",className:"fbSVG",target:"_blank",rel:"noreferrer"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50%",height:"30px",viewBox:"0 0 56 55"},a.a.createElement("title",null,"Facebook"),a.a.createElement("path",{d:"M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0 -1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"})))}),o=function(){return a.a.createElement("a",{href:"https://www.instagram.com/shushandlistenofficial/",target:"_blank",className:"igSVG",rel:"noreferrer"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50%",height:"30px",viewBox:"0 0 54 54"},a.a.createElement("title",null,"instagram"),a.a.createElement("path",{d:"M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z"})))},c=function(){return a.a.createElement("div",{className:"topView"},a.a.createElement("img",{className:"topImg",src:"./images/top.jpg",alt:""}),a.a.createElement("div",{className:"socialBtn"},a.a.createElement(i,null),a.a.createElement(o,null)))},l=(n("/nW0"),function(){return a.a.createElement("div",{className:"bottomView"},a.a.createElement("h3",{className:"title"},"惦惦嘛聽 Shush & Listen"),a.a.createElement("div",{className:"socialBtn"},a.a.createElement(i,null),a.a.createElement(o,null)),a.a.createElement("p",{className:"email"},"ShushAndListenOfficial@gmail.com"))}),s=n("qhky");t.default=function(){return a.a.createElement("div",null,a.a.createElement(s.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"惦惦嘛聽 Shush & Listen ─ 倔強的心聲"),a.a.createElement("meta",{name:"description",content:"惦惦嘛聽 Shush & Listen 職人們用手作，呈現妳的心聲。首發作品─倔強的心聲"}),a.a.createElement("link",{rel:"canonical",href:"https://shushandlistenofficial.github.io/Info/"})),a.a.createElement(c,null),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"topSection"},a.a.createElement("div",{className:"topLeftText"},a.a.createElement("h1",{className:"title"},"惦惦嘛聽",a.a.createElement("br",null),"Shush & Listen"),"尋遍台灣各地手作職人",a.a.createElement("br",null),"找出作充滿情感、故事的在地選物",a.a.createElement("br",null),"用選物盛裝故事，將故事交到妳手上",a.a.createElement("br",null),"職人們用手作，呈現妳的心聲")),a.a.createElement("img",{className:"mainImg",src:"./images/name.jpg",alt:""}),a.a.createElement("div",{className:"downText"},"人生終究會一直過，但也會邁入下一個階段，這時的心聲是什麼呢？",a.a.createElement("br",null),"哩丟惦惦嘛聽，加欸聽丟嘎底欸心聲(你就靜靜地聽，才會聽到自己的心聲)",a.a.createElement("br",null),"─是倔強的聲音",a.a.createElement("br",null),"手工職人耳機-城市人系列",a.a.createElement("br",null),"首發作品─倔強的心聲",a.a.createElement("br",null),"鑑賞級耳機，屬於您坐著細細品味的好聲音"),a.a.createElement("hr",{className:"splitLine"}),a.a.createElement("div",{className:"pointSection"},a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"前腔材質－"),"鋁鎂合金電鍍上色，金屬前腔可以抑制震動，也可以傳遞更好品質的高音。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"前腔洩壓－"),"有洩壓小洞，可以讓耳壓更低，可以保護聽力，也可以增加空間感。如果沒有洩壓，可能會造成頭暈，表示已經傷害到聽力。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"後腔材質─"),"黑檀木，木質結構的共振產生特殊的箱子音，在人聲上會更加有感情。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"分線滑塊─"),"黑檀木，木質有吸收摩擦衣服聲音的功能，有效降低聽診器效應。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"插頭木殼－"),"一樣是黑檀木，添加整體性，木質上攻出細膩的螺牙，只有緩慢才能做出。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"插頭材質─"),"採用無雜質無磁感純銅插頭，擁有更好的訊息傳遞。焊接好後，使用環氧樹脂固"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"線材材質－"),"採用台灣製單晶銅線(OCC)，高低音都有非常好的傳輸，四股獨立線材絕緣，手工編織正負極交錯讓電場效應降低，讓音質更純淨，背景更黑。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"焊錫採用－"),"採用名貴丹麥JENSEN銀錫，讓高音更加華麗、人聲細膩。"),a.a.createElement("div",{className:"pointInfo"},a.a.createElement("b",null,"L、R分辨－"),"有別傳統在腔體上標示L、R，一方面維持木質的美感，一方面教導使用者養成分好線再聆聽的習慣。若沒分好線就直接戴，容易使線材折到，產生損傷。")),a.a.createElement("div",{className:"infoSection"},a.a.createElement("div",{className:"infoLeft"},a.a.createElement("b",null,"規格"),a.a.createElement("br",null),"尺寸:8mm",a.a.createElement("br",null),"材質:複合震膜單體( PET+PEEK鍍鈦)",a.a.createElement("br",null),"阻抗:20 Ohms",a.a.createElement("br",null),"靈敏度:110 dB (1kHz/1Vrms)",a.a.createElement("br",null),"頻率響應:15Hz-40000Hz",a.a.createElement("br",null),"線長:130cm"),a.a.createElement("div",{className:"infoRight"},a.a.createElement("del",null,"售價:2000 NTD"),a.a.createElement("br",null),"8/15、8/16 開賣特惠",a.a.createElement("br",null),"售價",a.a.createElement("span",{className:"price"}," 1500 "),"NTD",a.a.createElement("br",null),a.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/ShushAndListenOfficial/posts/145190377256795"},"詳情請點我"))),a.a.createElement("div",{className:"imgSection"},a.a.createElement("div",{className:"block"},a.a.createElement("img",{src:"./images/main.jpg",alt:""}),a.a.createElement("p",null,"職人手作")),a.a.createElement("div",{className:"block"},a.a.createElement("img",{src:"./images/bag.jpg",alt:""}),a.a.createElement("p",null,"質感呈現")),a.a.createElement("div",{className:"block"},a.a.createElement("img",{src:"./images/airHole.jpg",alt:""}),a.a.createElement("p",null,"黑檀木質")),a.a.createElement("div",{className:"block"},a.a.createElement("img",{src:"./images/plug.jpg",alt:""}),a.a.createElement("p",null,"純銅插頭")),a.a.createElement("div",{className:"block"},a.a.createElement("img",{src:"./images/split.jpg",alt:""}),a.a.createElement("p",null,"分線滑塊")),a.a.createElement("div",{className:"block"},a.a.createElement("img",{src:"./images/line.jpg",alt:""}),a.a.createElement("p",null,"單晶銅線")))),a.a.createElement(l,null))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(l=c;0!=l--;)if(!e(t[l],o[l]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(l=c;0!=l--;)if(t[l]!==o[l])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],o[s[l]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,i,o,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("ZhWT"),m=n.n(f),p=n("q1tI"),d=n.n(p),h=n("6qGY"),b=n.n(h),y="bodyAttributes",E="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",A="href",S="http-equiv",O="innerHTML",C="itemprop",N="name",j="property",k="rel",L="src",I="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",R="encodeSpecialCharacters",B="onChangeClientState",_="titleTemplate",q=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,g.TITLE),n=X(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,P);return t||r||void 0},G=function(e){return X(e,B)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==w&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=b()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(g.BODY,r),le(g.HTML,a),ce(f,m);var p={baseTag:se(g.BASE,n),linkTags:se(g.LINK,i),metaTags:se(g.META,o),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(g.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case E:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(g.BASE,t,r),bodyAttributes:me(y,n,r),htmlAttributes:me(E,a,r),link:me(g.LINK,i,r),meta:me(g.META,o,r),noscript:me(g.NOSCRIPT,c,r),script:me(g.SCRIPT,l,r),style:me(g.STYLE,s,r),title:me(g.TITLE,{title:f,titleAttributes:m},r)}},de=u()((function(e){return{baseTag:Z([A,I],e),bodyAttributes:J(y,e),defer:X(e,M),encode:X(e,R),htmlAttributes:J(E,e),linkTags:$(g.LINK,[k,A],e),metaTags:$(g.META,[N,T,S,j,C],e),noscriptTags:$(g.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:$(g.SCRIPT,[L,O],e),styleTags:$(g.STYLE,[w],e),title:W(e),titleAttributes:J(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=de,o=i=function(e){function t(){return z(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case g.TITLE:return V({},a,((t={})[r.type]=o,t.titleAttributes=V({},i),t));case g.BODY:return V({},a,{bodyAttributes:V({},i)});case g.HTML:return V({},a,{htmlAttributes:V({},i)})}return V({},a,((n={})[r.type]=V({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),i.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-1b2f56699867c157ff4b.js.map