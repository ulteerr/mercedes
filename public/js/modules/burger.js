const burgerBtn=document.querySelector(".humburger-menu"),menuElem=document.querySelector(".menu"),burger=()=>{burgerBtn.addEventListener("click",()=>{menuElem.classList.toggle("menu-active"),burgerBtn.classList.toggle("humburger-menu-active")}),menuElem.addEventListener("click",e=>{const t=e.target;t.classList.contains("menu-list__link")&&(menuElem.classList.remove("menu-active"),burgerBtn.classList.remove("humburger-menu-active"))})};export{burger};