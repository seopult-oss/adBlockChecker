!function(t,e,i){var n=!1,o=function(){var t=this,e={};this.errors={throwError:function(t,e,i){throw'Argument "'+t+'" of method "'+e+'" is not an "'+i+'"'},isObject:function(t,e,i){"object"==typeof t&&!0!==Array.isArray(t)&&null!==t||this.throwError(e,i,"object")},isArray:function(t,e,i){!1===Array.isArray(t)&&this.throwError(e,i,"array")},isFunction:function(t,e,i){"function"!=typeof t&&this.throwError(e,i,"function")},isString:function(t,e,i){"string"!=typeof t&&this.throwError(e,i,"string")},isBoolean:function(t,e,i){"boolean"!=typeof t&&this.throwError(e,i,"boolean")}},this.options={set:function(i){t.errors.isObject(i,"optionsList","options.set");for(var n in i)e[n]=i[n],t.debug.log("options.set",'Set "'+n+'" to "'+i[n]+'"');return t},get:function(t){return e[t]}},this.debug={set:function(e){return n=e,t.debug.log("debug.set",'Set debug to "'+n+'"'),t},isEnable:function(){return n},log:function(e,i){!0===n&&(t.errors.isString(e,"method","debug.log"),t.errors.isString(i,"message","debug.log"),console.log("[FuckAdBlock]["+e+"] "+i))}},this.versionToInt=function(t){for(var e="",i=0;i<3;i++){var n=t[i]||0;1===(""+n).length&&(n="0"+n),e+=n}return parseInt(e)}},r=function(){o.apply(this);var t=null,e=null;this.setDetected=function(e){return t=e,this},this.callDetected=function(){return null!==t&&(t(),t=null,!0)},this.setUndetected=function(t){return e=t,this},this.callUndetected=function(){return null!==e&&(e(),e=null,!0)}},s=function(){o.apply(this),this.options.set({timeout:200});var t=this,e=[4,0,0,"beta",3],i={},n={};this.getVersion=function(t){if(!0!==t)return e;this.versionToInt(e)},this.addEvent=function(t,e){return this.errors.isString(t,"name","addEvent"),this.errors.isFunction(e,"callback","addEvent"),void 0===i[t]&&(i[t]=[]),i[t].push(e),this.debug.log("set",'Event "'+t+'" added'),this},this.on=function(t,e){return this.errors.isBoolean(t,"detected","on"),this.errors.isFunction(e,"callback","on"),this.addEvent(!0===t?"detected":"undetected",e)},this.onDetected=function(t){return this.errors.isFunction(t,"callback","onDetected"),this.addEvent("detected",t)},this.onNotDetected=function(t){return this.errors.isFunction(t,"callback","onNotDetected"),this.addEvent("undetected",t)};this.check=function(e,o){e instanceof Array==!1&&void 0===o&&(o=e,e=void 0),void 0===e&&(e=Object.keys(n)),void 0===o&&(o={}),this.errors.isArray(e,"pluginsList","check"),this.errors.isObject(o,"optionsList","check"),this.debug.log("check","Starting check");var r={},s=e.length,a=0,l=function(e,n,o){if(a++,t.debug.log("check",(!0===n?"Positive":"Negative")+'" check of plugin "'+e+'"'),!0===o||!0===n||a===s){clearTimeout(h);for(var l in r)r[l].instance.stop();!function(e){var n=i[e];if(!0===t.debug.isEnable()){var o=void 0!==n?n.length:0;t.debug.log("dispatchEvent",'Starts dispatch of events "'+e+'" (0/'+o+")")}if(void 0!==n)for(var r in n)!0===t.debug.isEnable()&&t.debug.log("dispatchEvent",'Dispatch event "'+e+'" ('+(parseInt(r)+1)+"/"+o+")"),n[r]()}(!0===n?"detected":"undetected")}};if(this.debug.log("check","Starting loading plugins (0/"+s+") ("+e.join()+")"),0===s)return l("#NoPlugin",!1,!0),this;for(var u=0;u<s;u++){d=e[u];this.debug.log("check",'Load plugin "'+d+'" ('+(parseInt(u)+1)+"/"+s+")");var c=r[d]={name:d,instance:new n[d],detected:null};void 0!==o[d]&&c.instance.options.set(o[d]),function(t,e){e.instance.setDetected(function(){e.detected=!0,t(e.name,!0)}).setUndetected(function(){e.detected=!1,t(e.name,!1)})}(l,c)}for(var d in r)r[d].instance.start();var h=setTimeout(function(){l("#Timeout",!1,!0)},this.options.get("timeout"));return this},this.registerPlugin=function(t){if(this.errors.isFunction(t,"pluginClass","registerPlugin"),this.errors.isString(t.pluginName,"pluginClass.pluginName","registerPlugin"),this.errors.isArray(t.versionMin,"pluginClass.versionMin","registerPlugin"),3!==t.versionMin.length&&this.errors.throwError("pluginClass.versionMin","registerPlugin","array with 3 values"),void 0===n[t.pluginName]){if(this.versionToInt(e)>=this.versionToInt(t.versionMin))return n[t.pluginName]=t,this.debug.log("registerPlugin",'Plugin "'+t.pluginName+'" registered'),!0;throw'The plugin "'+t.pluginName+'" ('+t.versionMin.join(".")+") is too recent for this version of FuckAdBlock ("+e.join(".")+")"}throw'The plugin "'+t.pluginName+'" is already registered'},this.registerPlugin(a),this.registerPlugin(l)};s.getPluginClass=function(){return r};var a=function(){s.getPluginClass().apply(this,arguments),this.options.set({loopTime:50,baitElement:null,baitClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",baitStyle:"width:1px!important;height:1px!important;position:absolute!important;left:-10000px!important;top:-1000px!important;",baitParent:null});var e={};this.start=function(){var i=this;if(null===this.options.get("baitElement")){e.bait=this.createBait({class:this.options.get("baitClass"),style:this.options.get("baitStyle")});var n=this.options.get("baitParent");null===n?t.document.body.appendChild(e.bait):n.appendChild(e.bait)}else e.bait=this.options.get("baitElement");var o=function(){!0===i.checkBait(e.bait,!0)&&i.callDetected()};return e.loopTimeout=setTimeout(o,1),e.loopInterval=setInterval(o,this.options.get("loopTime")),this},this.stop=function(){clearInterval(e.loopTimeout),clearInterval(e.loopInterval);var i=this.options.get("baitParent");return null===i?t.document.body.contains(e.bait)&&t.document.body.removeChild(e.bait):i.removeChild(e.bait),this},this.createBait=function(e){var i=t.document.createElement("div");return i.setAttribute("class",e.class),i.setAttribute("style",e.style),i.offsetParent,i.offsetHeight,i.offsetLeft,i.offsetTop,i.offsetWidth,i.clientHeight,i.clientWidth,i},this.checkBait=function(e,i){var n=!1;if(!0===i&&null!==t.document.body.getAttribute("abp")||null===e.offsetParent||0==e.offsetHeight||0==e.offsetLeft||0==e.offsetTop||0==e.offsetWidth||0==e.clientHeight||0==e.clientWidth)n=!0;else{var o=t.getComputedStyle(e);"none"!=o.getPropertyValue("display")&&"hidden"!=o.getPropertyValue("visibility")||(n=!0)}return n}};a.pluginName="html",a.version=[1,0,0],a.versionMin=[4,0,0];var l=function(){s.getPluginClass().apply(this,arguments),this.options.set({baitMode:"ajax",baitUrl:"/ad/banner/_adsense_/_adserver/_adview_.ad.json?adzone=top&adsize=300x250&advid={RANDOM}"});var e={};this.start=function(){var t=this;e.end=!1;var i=this.options.get("baitUrl").replace(/\{RANDOM\}/g,function(){return parseInt(1e8*Math.random())});return this._urlCheck(i,this.options.get("baitMode"),function(){!1===e.end&&(e.end=!0,t.callDetected())},function(){!1===e.end&&(e.end=!0,t.callUndetected())}),this},this.stop=function(){return e.end=!0,this},this._urlCheck=function(e,i,n,o){var r=!1,s=function(t){!1===r&&(r=!0,!0===t?n():o())};if("ajax"===i){var a=[!1,!1,!1,!1],l=null,u=function(t){if(void 0!==t)s(t);else{if(0===l)return void s(!0);for(var e=0;e<4;e++)if(!1===a[e])return void s(!0);s(!1)}},c=new XMLHttpRequest;c.onreadystatechange=function(){a[c.readyState-1]=!0;try{l=c.status}catch(t){}4===c.readyState&&u()};try{c.open("GET",e,!0),c.send()}catch(t){"2153644038"==t.result&&u(!0)}}else if("import"===i){var d=document.createElement("script");d.src=e,d.onerror=function(){s(!0),t.document.body.removeChild(d)},d.onload=function(){s(!1),t.document.body.removeChild(d)},t.document.body.appendChild(d)}else s(!1)}};l.pluginName="http",a.version=[1,0,0],l.versionMin=[4,0,0],t.FuckAdBlock=s}(window),function(){"use strict";angular.module("adBlockModule",[]).service("adBlockChecker",["$window",function(t){return{isAdblockEnabledVal:!1,isAdblockEnabled:function(){var e=this;if(void 0===i){var i=new t.FuckAdBlock;console.log(i),i.onDetected(function(){e.isAdblockEnabledVal=!0}),i.onNotDetected(function(){e.isAdblockEnabledVal=!1}),i.check()}else i.check();return this.isAdblockEnabledVal}}}])}();