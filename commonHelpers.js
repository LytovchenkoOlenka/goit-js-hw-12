import{a as B,i as y,S as C}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",P="42691654-856ee9298c14d5c2eed97729f",R=" https://pixabay.com/api/";async function m(o,t,r){try{const a=await B.get(`${R}?key=${P}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${r}&page=${t}`);return a.data.hits.length===0?y.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:f}):a.data}catch(a){y.error({title:"",message:`Error${a}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:f})}}const v=document.querySelector(".gallery");function h(o){const t=o.hits.map(({largeImageURL:r,webformatURL:a,tags:e,likes:s,views:l,comments:S,downloads:w})=>`<li class="gallery-item" >
      <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${a}" alt="${e}"/>
      </a>
      <div class="gallery-info-container">
          <p class="gallery-info">
              <span class="gallery-info-span">Likes: <span class="numbers-span">${s}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Views: <span class="numbers-span">${l}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Comments: <span class="numbers-span">${S}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Downloads: <span class="numbers-span">${w}</span>
              </span>    
          </p>
      </div>
  </li>`).join("");v.insertAdjacentHTML("beforeend",t)}const U={captionsData:"alt",captionDelay:250},d=new C(".gallery-item a",U);d.on("show.simplelightbox");const g=document.querySelector(".form"),A=document.querySelector(".gallery"),i=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let c,p=15,b,E,u;g.addEventListener("submit",Q);function Q(o){o.preventDefault(),c=1,n.style.display="none";const t=g.elements.query.value.trim();if(A.innerHTML="",i.style.display="block",t===""){alert("Please enter a keyword to search for an image");return}m(t,c,p).then(r=>{b=t,E=Math.ceil(r.totalHits/p),h(r),d.refresh(),r.totalHits<p?n.style.display="none":n.style.display="block"}).catch(r=>{console.log(`Error:${r}`)}).finally(()=>{g.reset(),i.style.display="none"})}n.addEventListener("click",$);async function $(){if(n.style.display="none",i.style.display="block",c+=1,c===E)return n.style.display="none",i.style.display="none",y.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const o=await m(b,c,p);h(o),L(),d.refresh(),i.style.display="none",n.style.display="block"}catch(o){y.error({title:"",message:`Error${o}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:f})}}function L(){u=A.firstElementChild.getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
