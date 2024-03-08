import{a as B,i as p,S as C}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",P="42691654-856ee9298c14d5c2eed97729f",R=" https://pixabay.com/api/";document.querySelector(".loader");document.querySelector(".load-more-btn");async function m(r,t,a){try{const o=await B.get(`${R}?key=${P}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${a}&page=${t}`);return o.data.hits.length===0?p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:y}):o.data}catch(o){p.error({title:"",message:`Error${o}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:y})}}const v=document.querySelector(".gallery");function h(r){const t=r.hits.map(({largeImageURL:a,webformatURL:o,tags:e,likes:s,views:i,comments:E,downloads:w})=>`<li class="gallery-item" >
      <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${o}" alt="${e}"/>
      </a>
      <div class="gallery-info-container">
          <p class="gallery-info">
              <span class="gallery-info-span">Likes: <span class="numbers-span">${s}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Views: <span class="numbers-span">${i}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Comments: <span class="numbers-span">${E}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Downloads: <span class="numbers-span">${w}</span>
              </span>    
          </p>
      </div>
  </li>`).join("");v.insertAdjacentHTML("beforeend",t)}const U={captionsData:"alt",captionDelay:250},g=new C(".gallery-item a",U);g.on("show.simplelightbox");const d=document.querySelector(".form"),A=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let c,f=15,b,S,u;d.addEventListener("submit",Q);function Q(r){r.preventDefault(),c=1,n.style.display="none";const t=d.elements.query.value.trim();if(A.innerHTML="",l.style.display="block",t===""){alert("Please enter a keyword to search for an image");return}m(t,c,f).then(a=>{b=t,S=Math.ceil(a.totalHits/f),h(a),n.style.display="block",g.refresh()}).catch(()=>{n.style.display="none",l.style.display="none"}).finally(()=>{d.reset(),l.style.display="none"})}n.addEventListener("click",L);async function L(){if(n.style.display="none",l.style.display="block",c+=1,c===S)return n.style.display="none",l.style.display="none",p.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const r=await m(b,c,f);h(r),O(),g.refresh(),l.style.display="none",n.style.display="block"}catch(r){p.error({title:"",message:`Error${r}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:y})}}function O(){u=A.firstElementChild.getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
