console.log("jav4 script Work Temen Temen")
 
 // Mobile menu toggle
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.nav-menu');
 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
 });

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
         const targetElement = document.querySelector(targetId);
         
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });

console.log("jav4 script Work Temen Temen")