import{a as C,i as p,S as P}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",R="42691654-856ee9298c14d5c2eed97729f",v=" https://pixabay.com/api/";async function m(o,t,r){try{const a=await C.get(`${v}?key=${R}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${r}&page=${t}`);return a.data.hits.length===0?p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:g}):a.data}catch(a){p.error({title:"",message:`Error${a}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:g})}}const U=document.querySelector(".gallery");function h(o){const t=o.hits.map(({largeImageURL:r,webformatURL:a,tags:e,likes:s,views:n,comments:w,downloads:B})=>`<li class="gallery-item" >
      <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${a}" alt="${e}"/>
      </a>
      <div class="gallery-info-container">
          <p class="gallery-info">
              <span class="gallery-info-span">Likes: <span class="numbers-span">${s}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Views: <span class="numbers-span">${n}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Comments: <span class="numbers-span">${w}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Downloads: <span class="numbers-span">${B}</span>
              </span>    
          </p>
      </div>
  </li>`).join("");U.insertAdjacentHTML("beforeend",t)}const Q={captionsData:"alt",captionDelay:250},u=new P(".gallery-item a",Q);u.on("show.simplelightbox");const y=document.querySelector(".form"),A=document.querySelector(".gallery"),l=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let i,c=15,b,E,d;y.addEventListener("submit",$);function $(o){o.preventDefault(),i=1;const t=y.elements.query.value.trim();if(A.innerHTML="",l.style.display="block",t===""){alert("Please enter a keyword to search for an image");return}m(t,i,c).then(r=>{b=t,E=Math.ceil(r.totalHits/c),h(r),u.refresh(),r.totalHits<=c?(S(),f.style.display="none"):f.style.display="block"}).catch(r=>{console.log(`Error:${r}`)}).finally(()=>{y.reset(),l.style.display="none"})}f.addEventListener("click",I);async function I(){l.style.display="block",i+=1,i===E&&(S(),f.style.display="none",l.style.display="none");try{const o=await m(b,i,c);h(o),L(),u.refresh(),l.style.display="none"}catch(o){p.error({title:"",message:`Error${o}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:g})}}function L(){d=A.firstElementChild.getBoundingClientRect().height,window.scrollBy({top:d*2,behavior:"smooth"})}function S(){p.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
