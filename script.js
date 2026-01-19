let progress=0;
const bar=document.getElementById('bar');
const dots=document.getElementById('dots');
const img=document.querySelector('.loading-img');

setInterval(()=>{
  dots.textContent=dots.textContent.length<3?dots.textContent+'.':'';
},500);

const loading=setInterval(()=>{
  progress+=Math.floor(Math.random()*10)+5;
  if(progress>=100){
    progress=100;
    clearInterval(loading);
    img.style.animation='none';
  }
  bar.style.width=progress+'%';
  img.style.animationDuration=`${1.6-progress/100}s`;
},450);
