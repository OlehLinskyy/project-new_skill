!function(){function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},r.parcelRequired7c6=i),i.register("iE7OH",(function(n,r){var t,o;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)i[n[r]]=e[n[r]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,r){var t;e(n.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),i("iE7OH").register(JSON.parse('{"eMUNn":"shopping-list.25af6c62.js","eI5Nn":"amazon.b8fa90cb.png","cM0OA":"amazon@2x.edefe29e.png","d752U":"book.5a9f17e3.png","lubPl":"book@2x.54474d7d.png","lEgPn":"book-shop.91914384.png","lS2x3":"book-shop@2x.fbbde057.png","f2fBm":"books.4abada78.png","6n4rs":"books@2x.434ca15d.png","lh2Ji":"books.15c3c113.png","knaUF":"books@2x.6292faab.png","jJagq":"basket.d8f64c6c.png","gwSB5":"basket@2x.ee4d598c.png","7nZsR":"shopping-list.3489cf1c.js","8EQcy":"shopping-list.af841197.css"}')),i("bWgPh"),i("j8hkN");var s={};s=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("eI5Nn");var a={};a=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("cM0OA");var l={};l=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("d752U");var c={};c=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("lubPl");var d={};d=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("lEgPn");var u={};u=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("lS2x3");var f={};f=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("f2fBm");var p={};p=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("6n4rs");i("aNJCr").getBundleURL("eMUNn"),i("iE7OH").resolve("lh2Ji");i("aNJCr").getBundleURL("eMUNn"),i("iE7OH").resolve("knaUF");var g={};g=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("jJagq");var b={};b=i("aNJCr").getBundleURL("eMUNn")+i("iE7OH").resolve("gwSB5");const v=document.querySelector(".gallery"),H=document.querySelector(".shopping-list-empty"),_=localStorage.getItem("shopping_list");let h=[];function m(e){const n=e.target.closest(".button"),r=h.map((e=>e._id)).indexOf(n.id);h.splice(r,1),E()}function E(){if(removeEventListener("click",m),h.length){const e=h.map((e=>k(e))).join("");v.innerHTML=e,document.querySelectorAll(".button").forEach((e=>{e.addEventListener("click",m)}))}else H.innerHTML=`\n    <p>This page is empty, add some books and proceed to order.</p>\n    <img srcset=" ${n(f)} 1x, ${n(p)} 2x" src="${n(f)}" alt="books">\n  `,v.innerHTML=""}function k({book_image:e,title:r,list_name:t,description:o,author:i,_id:f,buy_links:p}){let v="",H="",_="";if(p){const e=p.map((e=>e.name));v=p[e.indexOf("Amazon")].url;H=p[e.indexOf("Apple Books")].url;_=p[e.indexOf("Bookshop")].url}return`\n  <li class="border shopping-list-item">\n    <img src="${e}" alt="${r}" class="book_image">\n    <div class = "book-info">\n        <div>\n            <div class="shopping-list-item-action">\n                <div>\n                    <h3 class = "book-tittle">${r}</h3>\n                    <p class = "list-name">${t}</p>\n                </div>\n                <button id="${f}" class="button">\n                    <img srcset=" ${n(g)} 1x, ${n(b)} 2x"   src="${n(g)}" alt="basket" class = "basket">\n                </button>\n            </div>\n        <div  class="description-info">\n            <p class = "description">${o}</p>\n        </div>\n    </div>\n    <div class="shopping-list-item-buy">\n        <p class = "author">${i}</p>\n        <ul class="list-buy">\n          <li>\n            <a target="_blank" href="${v}">\n              <img srcset="${n(s)} 1x, ${n(a)} 2x" src="${n(s)}" alt="amazon" class="link-amazon">\n            </a>\n          </li>\n          <li>\n            <a target="_blank" href="${H}">\n              <img srcset="${n(l)} 1x, ${n(c)} 2x" src="${n(l)}" alt="applebooks" class="link-applebooks">\n            </a>\n          </li>\n          <li>\n            <a target="_blank" href="${_}">\n              <img srcset="${n(d)} 1x, ${n(u)} 2x" src="${n(d)}" alt="bookshop" class="link-bookshop">\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </li>\n  `}_&&(h=JSON.parse(_)),E(),k(h),i("hWvCD")}();
//# sourceMappingURL=shopping-list.25af6c62.js.map
