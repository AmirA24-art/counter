const btnDec=document.querySelector(".decrease");
const btnRes=document.querySelector(".reset");
const btnInc=document.querySelector(".increase");
const val=document.getElementById("value");
let count=0;

btnDec.addEventListener('click',function(){
count--;
val.textContent=count;
});
btnRes.addEventListener('click',function(){
    count=0;
    val.textContent=count;
});
btnInc.addEventListener('click',function(){
    count++;
    val.textContent=count;
});
