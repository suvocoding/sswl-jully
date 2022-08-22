const hambarger=document.querySelector('.hambarger');
const navList=document.querySelector('.nav-list');
hambarger.addEventListener('click',()=>{
navList.classList.toggle('show');
});