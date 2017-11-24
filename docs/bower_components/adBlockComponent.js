!function(t,e,i){var n=!0,o=function(){var t=this,e={};this.errors={throwError:function(t,e,i){throw'Argument "'+t+'" of method "'+e+'" is not an "'+i+'"'},isObject:function(t,e,i){"object"==typeof t&&!0!==Array.isArray(t)&&null!==t||this.throwError(e,i,"object")},isArray:function(t,e,i){!1===Array.isArray(t)&&this.throwError(e,i,"array")},isFunction:function(t,e,i){"function"!=typeof t&&this.throwError(e,i,"function")},isString:function(t,e,i){"string"!=typeof t&&this.throwError(e,i,"string")},isBoolean:function(t,e,i){"boolean"!=typeof t&&this.throwError(e,i,"boolean")}},this.options={set:function(i){t.errors.isObject(i,"optionsList","options.set");for(var n in i)e[n]=i[n],t.debug.log("options.set",'Set "'+n+'" to "'+i[n]+'"');return t},get:function(t){return e[t]}},this.debug={set:function(e){return n=e,t.debug.log("debug.set",'Set debug to "'+n+'"'),t},isEnable:function(){return n},log:function(e,i){!0===n&&(t.errors.isString(e,"method","debug.log"),t.errors.isString(i,"message","debug.log"),console.log("[FuckAdBlock]["+e+"] "+i))}},this.versionToInt=function(t){for(var e="",i=0;i<3;i++){var n=t[i]||0;1===(""+n).length&&(n="0"+n),e+=n}return parseInt(e)}},s=function(){o.apply(this);var t=null,e=null;this.setDetected=function(e){return t=e,this},this.callDetected=function(){return null!==t&&(t(),t=null,!0)},this.setUndetected=function(t){return e=t,this},this.callUndetected=function(){return null!==e&&(e(),e=null,!0)}},r=function(){o.apply(this),this.options.set({timeout:200});var t=this,e=[4,0,0,"beta",3],i={},n={};this.getVersion=function(t){if(!0!==t)return e;this.versionToInt(e)},this.addEvent=function(t,e){return this.errors.isString(t,"name","addEvent"),this.errors.isFunction(e,"callback","addEvent"),void 0===i[t]&&(i[t]=[]),i[t].push(e),this.debug.log("set",'Event "'+t+'" added'),this},this.on=function(t,e){return this.errors.isBoolean(t,"detected","on"),this.errors.isFunction(e,"callback","on"),this.addEvent(!0===t?"detected":"undetected",e)},this.onDetected=function(t){return this.errors.isFunction(t,"callback","onDetected"),this.addEvent("detected",t)},this.onNotDetected=function(t){return this.errors.isFunction(t,"callback","onNotDetected"),this.addEvent("undetected",t)};this.check=function(e,o){e instanceof Array==!1&&void 0===o&&(o=e,e=void 0),void 0===e&&(e=Object.keys(n)),void 0===o&&(o={}),this.errors.isArray(e,"pluginsList","check"),this.errors.isObject(o,"optionsList","check"),this.debug.log("check","Starting check");var s={},r=e.length,l=0,c=function(e,n,o){if(l++,t.debug.log("check",(!0===n?"Positive":"Negative")+'" check of plugin "'+e+'"'),!0===o||!0===n||l===r){clearTimeout(h);for(var c in s)s[c].instance.stop();!function(e){var n=i[e];if(!0===t.debug.isEnable()){var o=void 0!==n?n.length:0;t.debug.log("dispatchEvent",'Starts dispatch of events "'+e+'" (0/'+o+")")}if(void 0!==n)for(var s in n)!0===t.debug.isEnable()&&t.debug.log("dispatchEvent",'Dispatch event "'+e+'" ('+(parseInt(s)+1)+"/"+o+")"),n[s]()}(!0===n?"detected":"undetected")}};if(this.debug.log("check","Starting loading plugins (0/"+r+") ("+e.join()+")"),0===r)return c("#NoPlugin",!1,!0),this;for(var a=0;a<r;a++){d=e[a];this.debug.log("check",'Load plugin "'+d+'" ('+(parseInt(a)+1)+"/"+r+")");var u=s[d]={name:d,instance:new n[d],detected:null};void 0!==o[d]&&u.instance.options.set(o[d]),function(t,e){e.instance.setDetected(function(){e.detected=!0,t(e.name,!0)}).setUndetected(function(){e.detected=!1,t(e.name,!1)})}(c,u)}for(var d in s)s[d].instance.start();var h=setTimeout(function(){c("#Timeout",!1,!0)},this.options.get("timeout"));return this},this.registerPlugin=function(t){if(this.errors.isFunction(t,"pluginClass","registerPlugin"),this.errors.isString(t.pluginName,"pluginClass.pluginName","registerPlugin"),this.errors.isArray(t.versionMin,"pluginClass.versionMin","registerPlugin"),3!==t.versionMin.length&&this.errors.throwError("pluginClass.versionMin","registerPlugin","array with 3 values"),void 0===n[t.pluginName]){if(this.versionToInt(e)>=this.versionToInt(t.versionMin))return n[t.pluginName]=t,this.debug.log("registerPlugin",'Plugin "'+t.pluginName+'" registered'),!0;throw'The plugin "'+t.pluginName+'" ('+t.versionMin.join(".")+") is too recent for this version of FuckAdBlock ("+e.join(".")+")"}throw'The plugin "'+t.pluginName+'" is already registered'},this.registerPlugin(l),this.registerPlugin(c)};r.getPluginClass=function(){return s};var l=function(){r.getPluginClass().apply(this,arguments),this.options.set({loopTime:10,baitElement:null,baitClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",baitStyle:"width:1px!important;height:1px!important;position:absolute!important;left:-10000px!important;top:-1000px!important;",baitParent:null});var e={};this.start=function(){console.log("html start");var i=this;if(null===this.options.get("baitElement")){console.log("create bait"),e.bait=this.createBait({class:this.options.get("baitClass"),style:this.options.get("baitStyle")});var n=this.options.get("baitParent");null===n?t.document.body.appendChild(e.bait):n.appendChild(e.bait)}else e.bait=this.options.get("baitElement");var o=function(){console.log("html check"),!0===i.checkBait(e.bait,!0)&&i.callDetected()};return e.loopTimeout=setTimeout(o,1),e.loopInterval=setInterval(o,this.options.get("loopTime")),this},this.stop=function(){clearInterval(e.loopTimeout),clearInterval(e.loopInterval);var i=this.options.get("baitParent");return null===i?(console.log("html stop"),t.document.body.contains(e.bait)&&(console.log("real delete"),t.document.body.removeChild(e.bait))):i.removeChild(e.bait),this},this.createBait=function(e){var i=t.document.createElement("div");return i.setAttribute("class",e.class),i.setAttribute("style",e.style),i.offsetParent,i.offsetHeight,i.offsetLeft,i.offsetTop,i.offsetWidth,i.clientHeight,i.clientWidth,i},this.checkBait=function(e,i){var n=!1;if(!0===i&&null!==t.document.body.getAttribute("abp")||null===e.offsetParent||0==e.offsetHeight||0==e.offsetLeft||0==e.offsetTop||0==e.offsetWidth||0==e.clientHeight||0==e.clientWidth)console.log("v1"),console.log("offsetParent=null"+(null===e.offsetParent)),console.log("offsetHeight=0"+(0==e.offsetHeight)),console.log("offsetLeft=0"+(0==e.offsetLeft)),console.log("offsetTop=0"+(0==e.offsetTop)),console.log("offsetWidth=0"+(0==e.offsetWidth)),console.log("clientHeight=0"+(0==e.clientHeight)),console.log("clientWidth=0"+(0==e.clientWidth)),n=!0;else{var o=t.getComputedStyle(e);"none"!=o.getPropertyValue("display")&&"hidden"!=o.getPropertyValue("visibility")||(console.log("v1"),console.log("display-none"+("none"==o.getPropertyValue("display"))),console.log("visibility-hidden"+("hidden"==o.getPropertyValue("visibility"))),n=!0)}return n}};l.pluginName="html",l.version=[1,0,0],l.versionMin=[4,0,0];var c=function(){r.getPluginClass().apply(this,arguments),this.options.set({baitMode:"ajax",baitUrl:"/ad/banner/_adsense_/_adserver/_adview_.ad.json?adzone=top&adsize=300x250&advid={RANDOM}"});var e={};this.start=function(){var t=this;e.end=!1;var i=this.options.get("baitUrl").replace(/\{RANDOM\}/g,function(){return parseInt(1e8*Math.random())});return this._urlCheck(i,this.options.get("baitMode"),function(){!1===e.end&&(e.end=!0,t.callDetected())},function(){!1===e.end&&(e.end=!0,t.callUndetected())}),this},this.stop=function(){return e.end=!0,this},this._urlCheck=function(e,i,n,o){var s=!1,r=function(t){!1===s&&(s=!0,!0===t?n():o())};if("ajax"===i){var l=[!1,!1,!1,!1],c=null,a=function(t){if(void 0!==t)r(t);else{if(0===c)return void r(!0);for(var e=0;e<4;e++)if(!1===l[e])return void r(!0);r(!1)}},u=new XMLHttpRequest;u.onreadystatechange=function(){l[u.readyState-1]=!0;try{c=u.status}catch(t){}4===u.readyState&&a()};try{u.open("GET",e,!0),u.send()}catch(t){"2153644038"==t.result&&a(!0)}}else if("import"===i){var d=document.createElement("script");d.src=e,d.onerror=function(){r(!0),t.document.body.removeChild(d)},d.onload=function(){r(!1),t.document.body.removeChild(d)},t.document.body.appendChild(d)}else r(!1)}};c.pluginName="http",l.version=[1,0,0],c.versionMin=[4,0,0],t.FuckAdBlock=r}(window),function(){"use strict";angular.module("adBlockModule",[]).service("adBlockChecker",["$window","$timeout","$interval",function(t,e,i){return{isAdblockEnabled:!1,isCheckerActive:void 0,check:function(n){var o=this;if(void 0===s){var s=new t.FuckAdBlock;s.onDetected(function(){e(function(){o.isAdblockEnabled=!0},0)}),s.onNotDetected(function(){e(function(){o.isAdblockEnabled=!1},0)}),s.check()}else s.check();return n&&void 0==o.isCheckerActive&&(o.isCheckerActive=i(function(){try{s.check()}catch(t){}},n)),this.isAdblockEnabled},stop:function(){return!!angular.isDefined(this.isCheckerActive)&&(i.cancel(this.isCheckerActive),this.isCheckerActive=void 0,!0)}}}])}();