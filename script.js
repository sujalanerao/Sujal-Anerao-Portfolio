// 1. Typing Effect for the Hero Section

const textElement = document.querySelector('.typing-text');

const words = ["Front End Developer...", "Web Developer...", "UI/UX Designer...", "Python Enthusiast...", "Full Stack Developer..."];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;



function typeEffect() {

    const currentWord = words[wordIndex];

   

    if (isDeleting) {

        textElement.textContent = currentWord.substring(0, charIndex--);

    } else {

        textElement.textContent = currentWord.substring(0, charIndex++);

    }



    if (!isDeleting && charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 2000); // Pause at end of word

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(typeEffect, 500);

    } else {

        setTimeout(typeEffect, isDeleting ? 100 : 200);

    }

}

document.addEventListener('DOMContentLoaded', typeEffect);





// 2. Scroll Reveal Animation (Fade Up)

const observerOptions = {

    threshold: 0.2

};



const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, observerOptions);



const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));





// 3. Mobile Menu Toggle

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');



menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});



// Close menu when link is clicked

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });

});





// 4. Tilt Effect for Cards (Vanilla JS logic)

const cards = document.querySelectorAll('.project-card');



cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

       

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

       

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg

        const rotateY = ((x - centerX) / centerX) * 10;



        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });



    card.addEventListener('mouseleave', () => {

        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';

    });

});


