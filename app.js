// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you! We will get back to you shortly.');
//     this.reset();
// });

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    section.classList.add('fade-in');
    observer.observe(section);
});


// Mobile Menu Logic
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu'); 
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active'); 
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Remove class to hide
});

// Also close when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});