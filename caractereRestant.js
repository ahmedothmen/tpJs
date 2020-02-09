var myinp=document.querySelector('input')
var res=document.getElementById('conteur');
let conteur=Number(res.textContent);
myinp.addEventListener('keyup',()=>{

  res.textContent=conteur-myinp.value.length


})