
let button=document.querySelectorAll(".button");
let img=document.querySelectorAll(".img");
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      
        btn.nextElementSibling.classList.toggle("active");
        btn.lastChild.classList.toggle("rotate");
        
    });
  
});







 



