 // Typing animation
 const text = "Hello, my name is ";
 let i = 0;
 function typeWriter() {
   const introHeader = document.getElementById("intro-header");
   if (i < text.length) {
     introHeader.innerHTML = text.slice(0, i + 1) + '<span id="name" style="color: var(--highlight);">Ivana</span>';
     i++;
     setTimeout(typeWriter, 100);
   } else {
     introHeader.innerHTML = text + '<span id="name" style="color: var(--highlight);">Ivana</span>';
   }
 }
 
 window.addEventListener("DOMContentLoaded", function() {
   // Start typing animation immediately after DOM is loaded
   document.getElementById("intro-header").innerHTML = '';
   setTimeout(typeWriter, 100);
 });

 // Scroll fade-in animation
 const sections = document.querySelectorAll("section");
 function showOnScroll() {
   const trigger = window.innerHeight * 0.85;
   sections.forEach(section => {
     const top = section.getBoundingClientRect().top;
     if (top < trigger) section.classList.add("visible");
   });
 }
 window.addEventListener("scroll", showOnScroll);
 window.addEventListener("load", showOnScroll);

 // Theme toggle
 const themeBtn = document.getElementById("themeBtn");
 const body = document.body;

 function setTheme(mode) {
   if (mode === "dark") {
     body.classList.add("dark-mode");
     themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
   } else {
     body.classList.remove("dark-mode");
     themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
   }
   localStorage.setItem("theme", mode);
 }

 themeBtn.addEventListener("click", () => {
   const isDark = body.classList.contains("dark-mode");
   setTheme(isDark ? "light" : "dark");
 });

 // Load stored theme
 const savedTheme = localStorage.getItem("theme") || "light";
 setTheme(savedTheme);

 // CV download
 function downloadCV() {
   window.open("Ivana-Tukic-CV.pdf", "_blank");
 }

 // Contact shake
 document.addEventListener("DOMContentLoaded", function() {
   window.addEventListener("scroll", function() {
     var contactBox = document.querySelector(".contact-box");
     var boxPosition = contactBox.getBoundingClientRect().top;
     var windowHeight = window.innerHeight;

     if (boxPosition < windowHeight - 100) { // Starts animation when box enters viewport
       contactBox.classList.add("shake");
     }
   });

   // Mobile menu toggle
   const menuBtn = document.getElementById("menuBtn");
   const navLinks = document.getElementById("navLinks");
   
   menuBtn.addEventListener("click", function() {
     navLinks.classList.toggle("active");
     menuBtn.innerHTML = navLinks.classList.contains("active") ? 
       '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
   });

   // Close menu when clicking on a link
   const links = document.querySelectorAll(".nav-links a");
   links.forEach(link => {
     link.addEventListener("click", function() {
       if (window.innerWidth <= 600) {
         navLinks.classList.remove("active");
         menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
       }
     });
   });

   // Adjust tooltip position on smaller screens
   function adjustTooltipPosition() {
     const tooltips = document.querySelectorAll(".tooltip");
     tooltips.forEach(tooltip => {
       const preview = tooltip.querySelector(".preview");
       if (window.innerWidth <= 768) {
         preview.style.bottom = "120%";
       }
     });
   }
   
   window.addEventListener("resize", adjustTooltipPosition);
   adjustTooltipPosition();
 });