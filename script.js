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






document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more');
    const moreContent = document.querySelector('.more-content');

    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'inline';
            readMoreBtn.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
});




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
          }, index * 200); 
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
  

  //visuals

  document.addEventListener("DOMContentLoaded", function () {
    const visualBoxes = document.querySelectorAll(".visual-box");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    let currentIndex = 0;

    function showVisual(index) {
        visualBoxes.forEach((box, i) => {
            box.classList.toggle("active", i === index);
        });
    }

    prevArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + visualBoxes.length) % visualBoxes.length;
        showVisual(currentIndex);
    });

    nextArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % visualBoxes.length;
        showVisual(currentIndex);
    });

    showVisual(currentIndex); 
});


// Whats App Float

document.querySelector('.whatsapp-float').addEventListener('click', function () {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
});