import{a as w,i as c,S as B}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",P="42691654-856ee9298c14d5c2eed97729f",R=" https://pixabay.com/api/",v=document.querySelector(".loader");async function m(r,t,o){try{const a=await w.get(`${R}?key=${P}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${o}&page=${t}`);return a.data.hits.length===0&&c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:p}),v.style.display="none",a.data}catch(a){c.error({title:"",message:`Error${a}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:p})}}const U=document.querySelector(".gallery");function h(r){const t=r.hits.map(({largeImageURL:o,webformatURL:a,tags:e,likes:s,views:i,comments:S,downloads:C})=>`<li class="gallery-item" >
      <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${a}" alt="${e}"/>
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
              <span class="gallery-info-span">Comments: <span class="numbers-span">${S}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Downloads: <span class="numbers-span">${C}</span>
              </span>    
          </p>
      </div>
  </li>`).join("");U.insertAdjacentHTML("beforeend",t)}const $={captionsData:"alt",captionDelay:250},d=new B(".gallery-item a",$);d.on("show.simplelightbox");const g=document.querySelector(".form"),A=document.querySelector(".gallery"),f=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let l,y=15,b,E,u;g.addEventListener("submit",Q);function Q(r){r.preventDefault(),l=1,n.style.display="none";const t=g.elements.query.value.trim();if(A.innerHTML="",f.style.display="block",t===""){alert("Please enter a keyword to search for an image");return}m(t,l,y).then(o=>{b=t,E=Math.ceil(o.totalHits/y),h(o),d.refresh(),console.log(l)}).catch(o=>{c.error({title:"",message:`Error${o}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:p})}).finally(()=>{g.reset(),n.style.display="block",f.style.display="none"})}n.addEventListener("click",L);async function L(){if(n.style.display="none",f.style.display="block",l+=1,l===E)return n.style.display="none",c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const r=await m(b,l,y);h(r),O(),d.refresh(),f.style.display="none",n.style.display="block"}catch(r){c.error({title:"",message:`Error${r}`,backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",iconUrl:p})}}function O(){u=A.firstElementChild.getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
