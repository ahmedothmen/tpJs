var mydv=document.createElement('div');
mydv.setAttribute('id','test');
mydv.innerHTML="<p style='color:red'> ahmed </p>"
document.body.append(mydv);
var mainDiv=document.getElementById('main');
if(mainDiv.classList.contains('cool')){
    console.log('yes it s found');
}
console.log(mainDiv.classList.item(1));