// animation span element from p 
var typed = new Typed('#element', {
  strings: [
    'Welcome to My Portolio!',
    'I’m Jatin, a Web Developer who loves clean code and making websites look pixel-perfect.',
    'I believe in working with patience and diligence when I have to code with JavaScript.',
    'Explore, click around, and let’s build something awesome together!'
  ],
  typeSpeed: 100,      // Speed of typing
  loop: true,         // Enables looping
  backSpeed: 100,      // Speed of deleting text
  backDelay: 1000,    // Delay before restarting typing
});

var typed = new Typed('#element1', {
  strings: [
    'Web Developer'
  ],
  typeSpeed: 100,     
  loop: true,         
  backSpeed: 100,      
  backDelay: 1000,    
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.site-nav').classList.toggle('active');
});


let menuIcon = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const url = this.getAttribute('data-url');
    const target = this.getAttribute('data-target');

    if (target === '_blank') {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  });
});

var btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Hi');
});