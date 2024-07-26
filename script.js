const navbar = document.querySelector('.navbar')
const hamb = document.querySelector('.hamb')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')
const workItems = document.querySelectorAll('.work')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamb.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamb.classList.toggle('active')
})



navLinksLi.forEach(li =>li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))

    hamb.classList.remove('active')
    navLinks.classList.remove('active')
}))



document.addEventListener('DOMContentLoaded', () => {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const hiddenSection = document.getElementById('hiddenSection');

    moreInfoBtn.addEventListener('click', () => {
        hiddenSection.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (hiddenSection.classList.contains('show')) {
            hiddenSection.classList.remove('show');
        }
    });
});



// script.js

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      serviceBoxes.forEach((box, index) => {
        if (isElementInViewport(box)) {
          setTimeout(() => {
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
          }, index * 200); // Delay based on the index
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
  });
  