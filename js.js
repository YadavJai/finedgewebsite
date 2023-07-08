//set time o for the loader section
let loader=document.querySelector("#loader");
window.addEventListener("load",()=>{
setTimeout(()=>{
  loader.style.display="none";
},3000)
});
//for login page
let login=document.querySelector("#login");
let open=document.querySelectorAll(".open");
let close=document.querySelector(".close");

open.forEach((element)=>{
  element.addEventListener("click",()=>{
  login.style.right="0";
})
})

close.addEventListener("click",()=>{
  login.style.right="-120%";
})
