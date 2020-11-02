const navButton = document.querySelector('#nav-btn');
const closeButton = document.querySelector('#close-btn');
const menuBar = document.querySelector('.menu');

navButton.addEventListener('click', ()=>{
  menuBar.style.right = '0';
  menuBar.style.animation = "mymove .7s 1";
  
})
closeButton.addEventListener('click', ()=>{
  location.reload();
})

