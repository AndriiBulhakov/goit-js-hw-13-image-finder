(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO");var a,r,o=n("WdyH"),l=n.n(o),s=(n("JBxO"),n("FdtR"),{searchQuery:"",page:1,fetchImage:function(){var e=this,t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searchQuery+"&page="+this.page+"&per_page=12&key=16253629-1b53dd346b59703300910ca9d";return fetch(t,{headers:{Accept:"application/json"}}).then((function(t){return t.json().then((function(t){var n=t.hits;return e.page+=1,n}))}))},resetPage:function(){this.page=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}});document.body.append(function(e){var t=document.createElement("form");t.classList.add("search-form"),t.setAttribute("id","search-form");var n=document.createElement("input");return n.setAttribute("type","text"),n.setAttribute("name","query"),n.setAttribute("autocomplete","off"),n.setAttribute("placeholder","Search images..."),t.appendChild(n),t}()),document.body.append(((a=document.createElement("ul")).classList.add("gallery"),a)),document.body.append(((r=document.createElement("button")).classList.add("load-more__btn"),r.classList.add("is-hidden"),r.setAttribute("type","button"),r.setAttribute("data-action","load-more"),r.textContent="Load more",r));var i={input:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),button:document.querySelector(".load-more__btn"),img:document.querySelector(".photo-card > img")};function c(){s.fetchImage().then((function(e){var t,n;t=e,n=l()(t),i.gallery.insertAdjacentHTML("beforeend",n),i.button.classList.remove("is-hidden"),window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}))}i.input.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget;s.query=t.elements.query.value,t.reset(),i.gallery.innerHTML="",s.resetPage(),i.button.classList.remove("is-hidden"),c()})),i.button.addEventListener("click",c)},WdyH:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li>\r\n<div class="photo-card">\r\n  <img src="'+c(typeof(o=null!=(o=u(n,"webformatURL")||(null!=t?u(t,"webformatURL"):t))?o:s)===i?o.call(l,{name:"webformatURL",hash:{},data:r,loc:{start:{line:4,column:12},end:{line:4,column:28}}}):o)+'" alt="" />\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">thumb_up</i>\r\n      '+c(typeof(o=null!=(o=u(n,"likes")||(null!=t?u(t,"likes"):t))?o:s)===i?o.call(l,{name:"likes",hash:{},data:r,loc:{start:{line:8,column:6},end:{line:8,column:15}}}):o)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">visibility</i>\r\n      '+c(typeof(o=null!=(o=u(n,"views")||(null!=t?u(t,"views"):t))?o:s)===i?o.call(l,{name:"views",hash:{},data:r,loc:{start:{line:12,column:6},end:{line:12,column:15}}}):o)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">comment</i>\r\n      '+c(typeof(o=null!=(o=u(n,"comments")||(null!=t?u(t,"comments"):t))?o:s)===i?o.call(l,{name:"comments",hash:{},data:r,loc:{start:{line:16,column:6},end:{line:16,column:18}}}):o)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">cloud_download</i>\r\n      '+c(typeof(o=null!=(o=u(n,"downloads")||(null!=t?u(t,"downloads"):t))?o:s)===i?o.call(l,{name:"downloads",hash:{},data:r,loc:{start:{line:20,column:6},end:{line:20,column:19}}}):o)+"\r\n    </p>\r\n  </div>\r\n</div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:25,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.bf7873697ea7fa37327f.js.map