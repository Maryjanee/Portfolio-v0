const navButton = document.querySelector('#nav-btn');
const closeButton = document.querySelector('#close-btn');
const menuBar = document.querySelector('.menu');


navButton.addEventListener('click', ()=>{
  menuBar.style.right = '0';
  menuBar.style.animation = "mymove .7s 1";
  
})

menuBar.addEventListener('click', ()=>{
  menuBar.style.right = '-1400px';
  
})
closeButton.addEventListener('click', ()=>{
  menuBar.style.right = '-1400px';
})

