parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VACp":[function(require,module,exports) {
class e extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let t=this.querySelector(".lty-playbtn");if(this.playLabel=t&&t.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.posterUrl=`https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`,e.addPrefetch("preload",this.posterUrl,"image"),this.style.backgroundImage=`url("${this.posterUrl}")`),t||((t=document.createElement("button")).type="button",t.classList.add("lty-playbtn"),this.append(t)),!t.textContent){const e=document.createElement("span");e.className="lyt-visually-hidden",e.textContent=this.playLabel,t.append(e)}this.addEventListener("pointerover",e.warmConnections,{once:!0}),this.addEventListener("click",e=>this.addIframe())}static addPrefetch(e,t,a){const n=document.createElement("link");n.rel=e,n.href=t,a&&(n.as=a),document.head.append(n)}static warmConnections(){e.preconnected||(e.addPrefetch("preconnect","https://www.youtube-nocookie.com"),e.addPrefetch("preconnect","https://www.google.com"),e.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),e.addPrefetch("preconnect","https://static.doubleclick.net"),e.preconnected=!0)}addIframe(){const e=new URLSearchParams(this.getAttribute("params")||[]);e.append("autoplay","1");const t=document.createElement("iframe");t.width=560,t.height=315,t.title=this.playLabel,t.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",t.allowFullscreen=!0,t.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${e.toString()}`,this.append(t),this.classList.add("lyt-activated"),this.querySelector("iframe").focus()}}customElements.define("lite-youtube",e);
},{}]},{},["VACp"], null)
//# sourceMappingURL=/lite-yt-embed.a1092bde.js.map