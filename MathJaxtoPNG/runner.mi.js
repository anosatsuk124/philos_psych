!function(a,b,c){Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1}),"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a){"use strict";if(null===this||void 0===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var b,c,d=Object(this),e=d.length>>>0,f=!1;for(1<arguments.length&&(c=arguments[1],f=!0),b=0;e>b;++b)b in d&&(f?c=a(c,d[b],b,d):(c=d[b],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return c}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d;if(null==this)throw new TypeError(" this is null or not defined");var e=Object(this),f=e.length>>>0;if("[object Function]"!={}.toString.call(a))throw new TypeError(a+" is not a function");for(b&&(c=b),d=0;d<f;){var g;d in e&&(g=e[d],a.call(c,g,d,e)),d++}}),"".trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(a){var b=obj.__proto__||obj.constructor.prototype;return a in this&&(!(a in b)||b[a]!==this[a])}),Date.now||(Date.now=function(){return+new Date}),function(){for(var b=0,c=["ms","moz","webkit","o"],d=0;d<c.length&&!a.requestAnimationFrame;++d)a.requestAnimationFrame=a[c[d]+"RequestAnimationFrame"],a.cancelAnimationFrame=a[c[d]+"CancelAnimationFrame"]||a[c[d]+"CancelRequestAnimationFrame"];a.requestAnimationFrame||(a.requestAnimationFrame=function(c,d){var e=Date.now(),f=Math.max(0,16-(e-b)),g=a.setTimeout(function(){c(e+f)},f);return b=e+f,g}),a.cancelAnimationFrame||(a.cancelAnimationFrame=function(a){clearTimeout(a)})}(),function(){function a(){}var b=[].slice;Function.prototype.bind||(Function.prototype.bind=function(c){var d=this;if("function"!=typeof d)throw new TypeError("Function.prototype.bind called on incompatible "+d);var e=b.call(arguments,1),f=function(){if(this instanceof f){var a=d.apply(this,e.concat(b.call(arguments)));return Object(a)===a?a:this}return d.apply(c,e.concat(b.call(arguments)))};return d.prototype&&(a.prototype=d.prototype,f.prototype=new a,a.prototype=null),f})}(),Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;g<d;g++)a.call(e,c[g])&&h.push(c[g]);return h}}()),Array.prototype.map||(Array.prototype.map=function(a){"use strict";if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=new Array(c),e=arguments.length>=2?arguments[1]:void 0,f=0;f<c;f++)f in b&&(d[f]=a.call(e,b[f],f,b));return d});var d=function(){var a=function(a,b){return a.toLowerCase()<b.toLowerCase()?-1:1},b=function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};return function c(d,e,f){var g,h,i="",j=[];if(f=f||"",e=e||[],null===d)return"null";if(void 0===d)return"undefined";try{i={}.toString.call(d)}catch(a){i="[object Object]"}if("[object Number]"==i)return""+d;if("[object Boolean]"==i)return d?"true":"false";if("[object Function]"==i)return d.toString().split("\n  ").join("\n"+f);if("[object String]"==i)return'"'+b(d.replace(/"/g,'\\"'))+'"';for(h=0;h<e.length;h++)if(d===e[h])return"[circular "+i.slice(1)+("outerHTML"in d?" :\n"+b(d.outerHTML).split("\n").join("\n"+f):"");if(e.push(d),"[object Array]"==i){for(g=0;g<d.length;g++)j.push(c(d[g],e));return"["+j.join(", ")+"]"}if(i.match(/Array/))return i;var k=i+" ",l=f+"  ";if(f.length/2<2){var m=[];try{for(g in d)m.push(g)}catch(a){}for(m.sort(a),g=0;g<m.length;g++)try{j.push(l+m[g]+": "+c(d[m[g]],e,l))}catch(a){}}return j.length?k+"{\n"+j.join(",\n")+"\n"+f+"}":k+"{ ... }"}}(),e=function(a,b){a.insertBefore(b,a.firstChild)},f=function(b,c,d){b.addEventListener?b.addEventListener(c,d,!1):b.attachEvent("on"+c,function(){return d.call(b,a.event)})};a.location.origin||(a.location.origin=a.location.protocol+"//"+a.location.host);var g=function(a,b){var c=function(){var d=this,e=arguments;c.cancel(),c.timer=setTimeout(function(){a.apply(d,e)},b)};return c.cancel=function(){clearTimeout(c.timer)},c},h=function(a){return a.contentWindow||a.contentDocument.parentWindow};!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b(a)):"object"==typeof exports?module.exports=b(a):a.loopProtect=b(a)}(this,function(a){"use strict";function b(a,b){if(0===a)return!1;var c=a,d=1,e=-1,f=-1;do{if(e=b[c].indexOf("*/"),f=b[c].indexOf("/*"),-1!==e&&d++,e===b[c].length-2&&-1!==f&&d--,-1!==f&&0===--d)return!0;c-=1}while(0!==c);return!1}function c(a,b){for(var c;--a>-1;){if('"'===(c=b.substr(a,1))||"'"===c||"."===c)return!0;if(("/"===c||"*"===c)&&(--a,"/"===c))return!0}return!1}function d(a,b,c){h.lastIndex=0,i.lastIndex=0;var d=!1,e=c.slice(b).join("\n").substr(a).replace(i,"");return e.replace(h,function(a,b,c){0===e.substr(0,c).replace(j,"").trim().length&&(d=!0)}),d}function e(a,e){function f(a,b,c){return b.slice(0,c)+"{;"+m+"({ line: "+a+", reset: true }); "+b.slice(c)}var h=[],j=a.split("\n"),l=!1,m=k.alias+".protect",n={},o={},p=null;return e||(e=0),j.forEach(function(a,k){if(g.lastIndex=0,i.lastIndex=0,!l){-1!==a.toLowerCase().indexOf("noprotect")&&(l=!0);var q=-1,r=-1,s=k,t=k-e+1,u="",v=!1,w=!1,x=a.match(g)||[],y=x.length?x[0]:"",z=a.match(i)||[],A=0,B=0,C=!1;if(z.length&&(q=a.indexOf(z[1]),c(q,a)||b(k,j)||d(q,k,j)&&(p=k)),!n[k]){if(o[k])return void h.push(a);if(y&&1===x.length&&-1===a.indexOf("jsbin")){if(v="do"===y,r=q=a.indexOf(y),c(q,a))return void h.push(a);if(b(k,j))return void h.push(a);for((q=a.indexOf(y)+y.length)===a.length&&q===a.length&&k<j.length-1&&(h.push(a),k++,a=j[k],n[k]=!0,q=0);q<a.length;){if(u=a.substr(q,1),"("===u&&A++,")"===u&&0===--A&&!1===w&&(w=q),"{"===u&&B++,"}"===u&&B--,0===A&&(";"===u||"{"===u)){if(";"===u)k!==s?(h[s]=h[s].substring(0,w+1)+"{\nif ("+m+"({ line: "+t+" })) break;\n"+h[s].substring(w+1),a+="\n}}\n"):a=a.substring(0,w+1)+"{\nif ("+m+"({ line: "+t+" })) break;\n"+a.substring(w+1)+"\n}}\n",C=!0;else if("{"===u){var D=";\nif ("+m+"({ line: "+t+" })) break;\n";a=a.substring(0,q+1)+D+a.substring(q+1),q+=D.length}if(k===s&&null===p?(a=f(t,a,r),q+=(";"+m+"({ line: "+k+", reset: true }); ").length):null===p?h[s]=f(t,h[s],r):(void 0===h[p]&&(p--,r=0),h[p]=f(t,h[p],r),p=null),v){for(!1;q<a.length;){if(u=a.substr(q,1),"{"===u&&B++,"}"===u&&B--,0===B&&-1!==a.indexOf("while"))return a+="}",h.push(a),void(n[k]=!0);++q===a.length&&k<j.length-1&&(h.push(a),n[k]=!0,k++,a=j[k],q=0)}return}if(C)return void h.push(a);for(;null!==a;){if(u=a.substr(q,1),"{"===u&&B++,"}"===u&&0===--B)return a=a.substring(0,q+1)+"}"+a.substring(q+1),h.push(a),void(n[k]=!0);++q>=a.length&&(h.push(a),n[k]=!0,k++,a=j[k],q=0)}return}++q===a.length&&k<j.length-1&&(h.push(a),k++,a=j[k],n[k]=!0,q=0)}}else h.push(a)}}}),l?a:h.join("\n")}var f=null,g=/\b(for|while|do)\b/g,h=/\b(for|while|do)\b/,i=/\b(?!default:)([a-z_]{1}\w+:)/i,j=/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,k=e;return k.counters={},k.debug=function(a){f=a?function(){console.log.apply(console,[].slice.apply(arguments))}:function(){}},k.debug(!1),k.alias="loopProtect",k.protect=function(a){k.counters[a.line]=k.counters[a.line]||{};var b=k.counters[a.line],c=(new Date).getTime();return a.reset&&(b.time=c,b.hit=0,b.last=0),b.hit++,c-b.time>100?(k.hit(a.line),!0):(b.last++,!1)},k.hit=function(b){var c="Exiting potential infinite loop at line "+b+'. To disable loop protection: add "// noprotect" to your code';a.proxyConsole?a.proxyConsole.error(c):console.error(c)},k.reset=function(){k.counters={}},k});var i=function(){"use strict";try{a.console.log("d[ o_0 ]b")}catch(a){!1}var b=function(){},c=function(a){for(var b,c=[],e=0,f=a.length;e<f;e++)b=a[e],void 0===b?c.push("undefined"):c.push(d(b));return c};return(b.prototype.methods=["debug","clear","error","info","log","warn","dir","props","_raw","group","groupEnd","dirxml","table","trace","assert","count","markTimeline","profile","profileEnd","time","timeEnd","timeStamp","groupCollapsed"]).forEach(function(d){b.prototype[d]=function(){var b=[].slice.call(arguments),e=c(b);l.postMessage("console",{method:"_raw"===d?b.shift():d,args:"_raw"===d?e.slice(1):e}),a.console&&(console[d]||(d="log"),a.console&&"_raw"!==d&&("clear"!==d||"clear"===d&&console.clear)&&console[d].apply(console,b))}}),new b}(),j=function(){var a={};return a.blockingMethods={kill:'<script>(function(){window.__blocked={methods:["open","print","alert","prompt","confirm"],old:{}};for(var m in __blocked.methods){try {__blocked.old[m]=window[m];window[m]=function(){};}catch(e){}}})()<\/script>',restore:"\x3c!--jsbin live harness--\x3e<script>(function(){for(var m in __blocked.methods){try{window[m]=__blocked.old[m];delete __blocked;}catch(e){}};})()<\/script>"},a.getDoctype=function(){var a=/<!doctype [\s\S]*?>/i;return function(b){var c=(b.match(a)||[""])[0];return{doctype:c,tail:b.substr(c.length)}}}(),a.debug=function(a){return"<pre>"+a.replace(/[<>&]/g,function(a){return"<"==a?"&lt;":">"==a?"&gt;":"&"==a?"&amp;":void 0})+"</pre>"},a.render=function(b,c){c=c||{},b=b||"";var d=[],e=!0!==c.requested,f=!1===c.includeJsInRealtime;e&&f&&(b=b.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")),b=b.replace(/(<.*?\s)(autofocus)/g,"$1");var g=a.getDoctype(b),h=g.doctype;return b=g.tail,d.push(h),e&&c.includeJsInRealtime&&d.push(a.blockingMethods.kill),d.push(b),e&&c.includeJsInRealtime&&d.push(a.blockingMethods.restore),c.debug?a.debug(d.join("\n")):d.join("\n")},a}();"undefined"!=typeof exports&&(module.exports=j);var k=function(){var a={};return a.target=null,a.old=null,a.active=null,a.state={},a.guid=+new Date,a.create=function(){var c=b.createElement("iframe");return c.setAttribute("sandbox","allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"),c.setAttribute("frameBorder","0"),c.setAttribute("allow","geolocation; midi; camera; microphone; speaker;"),c.setAttribute("name","JS Bin Output "),c.id=a.guid++,c},a.use=function(b,c){if(!a.target)throw new Error("Sandbox has no target element.");a.old=a.active,a.saveState(a.old),a.active=b,e(a.target,b),setTimeout(function(){c&&c();for(var b,d=a.target.getElementsByTagName("iframe"),e=d.length,f=0,g=a.active.id;b=d[f],f<e;f++)b.id!==g&&(b.parentNode.removeChild(b),e--)},0)},a.restoreState=function(a,b){if(!a)return{};var c=h(a);if(!c)return{};b.scroll&&c.scrollTo(b.scroll.x,b.scroll.y)},a.saveState=function(a){if(!a)return{};var b=h(a);return b?{scroll:{x:b.scrollX,y:b.scrollY}}:{}},a.wrap=function(b,c){b&&(c=c||{},f(b,"resize",g(function(){l.postMessage("resize",a.getSizeProperties(b))},25)),l.postMessage("resize",a.getSizeProperties(b)),f(b,"focus",function(){l.postMessage("focus")}))},a.getSizeProperties=function(a){return{width:a.innerWidth||a.document.documentElement.clientWidth,height:a.innerHeight||a.document.documentElement.clientHeight,offsetWidth:a.document.documentElement.offsetWidth,offsetHeight:a.document.documentElement.offsetHeight}},a.eval=function(b){if(!a.active)throw new Error("sandbox.eval: has no active iframe.");var c=/(^.|\b)console\.(\S+)/g;if(c.test(b)){b=b.replace(c,function(a,b,c){return"window.runnerWindow.proxyConsole."+c})}var d=a.active.contentWindow,e=null,f="log";try{e=d.eval(b)}catch(a){e=a.message,f="error"}return i[f](e)},a.injectScript=function(b,c){if(!a.active)throw new Error("sandbox.injectScript: has no active iframe.");var d=a.active.contentWindow,e=d.document,f=e.createElement("script");f.src=b,f.onload=function(){c()},f.onerror=function(){c('Failed to load "'+b+'"')},e.body.appendChild(f)},a.injectDOM=function(b,c){if(!a.active)throw new Error("sandbox.injectDOM: has no active iframe.");var d=a.active.contentWindow,e=d.document;try{e.body.innerHTML=b}catch(a){c("Failed to load DOM.")}c()},a}(),l=function(){"use strict";var b={};return loopProtect.hit=function(a){console.warn("Exiting potential infinite loop at line "+a+'. To disable loop protection: add "// noprotect" to your code'),b.postMessage("loopProtectHit",a)},b.parent={},b.parent.origin="*",b.error=function(){var b=["Runner:"].concat([].slice.call(arguments));if(!("console"in a))return alert(b.join(" "))},b.handleMessage=function(a){if(a.origin){var c=a.data;try{c="string"==typeof a.data?JSON.parse(a.data):a.data}catch(a){return b.error("Error parsing event data:",a.message)}if("function"!=typeof b[c.type])return b.error("No matching event handler:",c.type);b.parent.source=a.source;try{b[c.type](c.data)}catch(a){b.error(a.message)}}},b.postMessage=function(a,c){if(!b.parent.source)return b.error("No postMessage connection to parent window.");b.parent.source.postMessage(JSON.stringify({type:a,data:c}),b.parent.origin)},b.render=function(a){if(a.options.injectCSS&&k.active){var c=k.active.contentDocument.getElementById("jsbin-css");if(c)return void(c.innerHTML=a.source)}var d=k.create(a.options);k.use(d,function(){var c=d.contentDocument,e=h(d);c||(c=e.document),i.methods.forEach(function(a){delete i[a]});var f=j.render(a.source,a.options);c.open(),c.write(""),e.runnerWindow={proxyConsole:i,protect:loopProtect},e.console=i,loopProtect.reset(),e.onerror=function(a,b,c,d,e){i._raw("error",e&&e.stack?e.stack:a+" (line "+c+")")},c.write(f),c.close(),b.postMessage("complete"),k.wrap(e,a.options)})},b["console:run"]=function(a){k.eval(a)},b["console:load:script"]=function(a){k.injectScript(a,function(c){if(c)return b.postMessage("console:load:script:error",c);b.postMessage("console:load:script:success",a)})},b["console:load:dom"]=function(a){k.injectDOM(a,function(a){if(a)return b.postMessage("console:load:dom:error",a);b.postMessage("console:load:dom:success")})},b}();a.onload=function(){if(!a.postMessage){var c=b.createElement("iframe");return c.setAttribute("sandbox","allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"),c.setAttribute("frameBorder","0"),b.body.appendChild(c),void(c.src=a.name)}k.target=b.getElementById("sandbox-wrapper"),f(a,"message",l.handleMessage)}}(window,document);
