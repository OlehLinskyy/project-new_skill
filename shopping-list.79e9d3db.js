function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},t.parcelRequired7c6=i),i.register("kyEFX",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("kyEFX").register(JSON.parse('{"hdJAh":"shopping-list.79e9d3db.js","8Hiik":"amazon.b8fa90cb.png","cxZE2":"amazon@2x.edefe29e.png","2rnXQ":"book.5a9f17e3.png","7Omd8":"book@2x.54474d7d.png","jjmXE":"book-shop.91914384.png","amSWg":"book-shop@2x.fbbde057.png","lksyF":"books.4abada78.png","4rMP8":"books@2x.434ca15d.png","i9zAK":"basket.d8f64c6c.png","a7BTK":"basket@2x.ee4d598c.png","70fHZ":"shopping-list.258455e0.js","8EQcy":"shopping-list.af841197.css"}')),i("7Th1V"),i("iYLt5");var s={};s=new URL(i("kyEFX").resolve("8Hiik"),import.meta.url).toString();var a={};a=new URL(i("kyEFX").resolve("cxZE2"),import.meta.url).toString();var l={};l=new URL(i("kyEFX").resolve("2rnXQ"),import.meta.url).toString();var c={};c=new URL(i("kyEFX").resolve("7Omd8"),import.meta.url).toString();var p={};p=new URL(i("kyEFX").resolve("jjmXE"),import.meta.url).toString();var d={};d=new URL(i("kyEFX").resolve("amSWg"),import.meta.url).toString();var u={};u=new URL(i("kyEFX").resolve("lksyF"),import.meta.url).toString();var f={};f=new URL(i("kyEFX").resolve("4rMP8"),import.meta.url).toString();var g={};g=new URL(i("kyEFX").resolve("i9zAK"),import.meta.url).toString();var m={};m=new URL(i("kyEFX").resolve("a7BTK"),import.meta.url).toString();const b=document.querySelector(".gallery"),k=document.querySelector(".shopping-list-empty"),v=localStorage.getItem("shopping_list");let _=[];function E(e){const n=e.target.closest(".button"),t=_.map((e=>e._id)).indexOf(n.id);_.splice(t,1),h()}function h(){if(removeEventListener("click",E),_.length){const e=_.map((e=>H(e))).join("");b.innerHTML=e,document.querySelectorAll(".button").forEach((e=>{e.addEventListener("click",E)}))}else k.innerHTML=`\n    <p>This page is empty, add some books and proceed to order.</p>\n    <img srcset=" ${n(u)} 1x, ${n(f)} 2x" src="${n(u)}" alt="books">\n  `,b.innerHTML=""}function H({book_image:e,title:t,list_name:o,description:r,author:i,_id:u,buy_links:f}){let b="",k="",v="";if(f){const e=f.map((e=>e.name));b=f[e.indexOf("Amazon")].url;k=f[e.indexOf("Apple Books")].url;v=f[e.indexOf("Bookshop")].url}return`\n  <li class="border shopping-list-item">\n    <img src="${e}" alt="${t}" class="book_image">\n    <div class = "book-info">\n        <div>\n            <div class="shopping-list-item-action">\n                <div>\n                    <h3 class = "book-tittle">${t}</h3>\n                    <p class = "list-name">${o}</p>\n                </div>\n                <button id="${u}" class="button">\n                    <img srcset=" ${n(g)} 1x, ${n(m)} 2x"   src="${n(g)}" alt="basket" class = "basket">\n                </button>\n            </div>\n        <div  class="description-info">\n            <p class = "description">${r}</p>\n        </div>\n    </div>\n    <div class="shopping-list-item-buy">\n        <p class = "author">${i}</p>\n        <ul class="list-buy">\n          <li>\n            <a target="_blank" href="${b}">\n              <img srcset="${n(s)} 1x, ${n(a)} 2x" src="${n(s)}" alt="amazon" class="link-amazon">\n            </a>\n          </li>\n          <li>\n            <a target="_blank" href="${k}">\n              <img srcset="${n(l)} 1x, ${n(c)} 2x" src="${n(l)}" alt="applebooks" class="link-applebooks">\n            </a>\n          </li>\n          <li>\n            <a target="_blank" href="${v}">\n              <img srcset="${n(p)} 1x, ${n(d)} 2x" src="${n(p)}" alt="bookshop" class="link-bookshop">\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </li>\n  `}v&&(_=JSON.parse(v)),h(),H(_),i("5nbIJ");
//# sourceMappingURL=shopping-list.79e9d3db.js.map