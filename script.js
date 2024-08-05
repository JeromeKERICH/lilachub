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

//hero section

document.addEventListener("DOMContentLoaded", function() {
    const moreInfoBtn = document.getElementById("moreInfoBtn");
    const hiddenSection = document.getElementById("hiddenSection");

    moreInfoBtn.addEventListener("click", function() {
        hiddenSection.classList.toggle("active");
    });

    let isHeadlineVisible = true;
    const headline = document.getElementById("headline");
    const subheadline = document.getElementById("subheadline");

    setInterval(function() {
        if (isHeadlineVisible) {
            headline.style.opacity = 0;
            subheadline.style.opacity = 1;
        } else {
            headline.style.opacity = 1;
            subheadline.style.opacity = 0;
        }
        isHeadlineVisible = !isHeadlineVisible;
    }, 3000);
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
          }, index * 100); 
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

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const whatsappHeading = document.querySelector('.whatsapp-heading');

    if (!heroSection || !whatsappHeading) {
        return; 
    }

    const heroSectionHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 768) {
        if (scrollPosition > heroSectionHeight) {
            whatsappHeading.style.display = 'block'; 
        } else {
            whatsappHeading.style.display = 'none'; 
        }
    } else {
        whatsappHeading.style.display = 'block'; 
    }
});


//reviews


document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');
    const arrowIndicators = document.querySelectorAll('.arrow-indicator');
    const statistics = document.querySelector('.statistics');

    function animateCount(element, max) {
        let count = 0;
        const interval = setInterval(() => {
            count += Math.ceil(max / 100);
            if (count >= max) {
                count = max;
                clearInterval(interval);
            }
            element.textContent = count;
        }, 20);
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const max = parseInt(counter.getAttribute('data-max'), 10);
                animateCount(counter, max);
                observer.unobserve(counter); // Stop observing once the counter has been animated
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Adjust this value as needed
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    statistics.addEventListener('scroll', function() {
        const maxScrollLeft = statistics.scrollWidth - statistics.clientWidth;
        if (statistics.scrollLeft >= maxScrollLeft) {
            arrowIndicators.forEach(arrow => arrow.style.display = 'none'); // Hide arrows when scrolled to end
        } else {
            arrowIndicators.forEach(arrow => arrow.style.display = 'block'); // Show arrows when not at end
        }
    });
});
