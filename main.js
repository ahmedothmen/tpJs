var input=document.querySelector('input');
var reslt=document.querySelector('.reslt');
input.addEventListener('keyup',()=>{
  reslt.innerHTML=input.value;
});