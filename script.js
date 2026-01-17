console.log("jav4 script Work");
 
 // Mobile menu toggle
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.nav-menu');
 hamburger.addEventListener('click', () => {
     alert("clicked")
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
 });

console.log(hamburger);
console.log(navMenu);

 // close mobile menu when clicking on a link
 document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', () => {
         hamburger.classList.remove('active');
         navMenu.classList.remove('active');
     });
 });

 // smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId && targetId !== '#') {
             const targetElement = document.querySelector(targetId);
             
             if (targetElement) {
                 window.scrollTo({
                     top: targetElement.offsetTop - 80,
                     behavior: 'smooth'
                 });
             }
         }
     });
 });
