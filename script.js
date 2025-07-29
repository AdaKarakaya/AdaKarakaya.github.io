document.addEventListener('DOMContentLoaded', function() {

    // Helper function for Intersection Observer
    const createObserver = (targetSelector, classNameToAdd, options = { threshold: 0.1 }) => {
        const elements = document.querySelectorAll(targetSelector);
        if (elements.length === 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(classNameToAdd);
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, options);

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // 1. Fade-in-up animations
    createObserver('.fade-in-up', 'appear');

    // 2. Typewriter Effect
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = "veri analizi ve otomasyon konularına meraklıyım.";
        let i = 0;
        let deleting = false;
        let charIndex = 0;
        let currentText = '';

        function type() {
            if (deleting) {
                currentText = text.substring(0, charIndex--);
            } else {
                currentText = text.substring(0, charIndex++);
            }

            typewriterElement.textContent = currentText;

            let typeSpeed = 100; // Typing speed
            if (deleting) {
                typeSpeed /= 2; // Deleting faster
            }

            if (!deleting && charIndex === text.length + 1) {
                typeSpeed = 2000; // Pause after typing
                deleting = true;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                typeSpeed = 500; // Pause before retyping
            }

            setTimeout(type, typeSpeed);
        }
        type(); // Start the typewriter effect
    }


    // 3. Skill bar animations
    const skillSection = document.getElementById('skills');
    if (skillSection) {
        const skillBars = document.querySelectorAll('.skill-level span');
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = width; // Re-apply width to trigger animation
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        skillObserver.observe(skillSection);
    }


    // 4. Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Remove 'active' from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' to clicked button
            this.classList.add('active');

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex'; // Show relevant cards
                } else {
                    card.style.display = 'none'; // Hide irrelevant cards
                }
            });
        });
    });

    // 5. Burger Menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body; // Reference to the body element

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
        body.classList.toggle('no-scroll'); // Add/remove no-scroll class
    });

    // Close menu when a nav link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burgerMenu.classList.remove('toggle');
                body.classList.remove('no-scroll');
            }
        });
    });

    // Add CSS for no-scroll on body to style.css
    // This is a reminder to add the following CSS to style.css for mobile menu overlay
    /*
    body.no-scroll {
        overflow: hidden;
    }
    */


    // 6. Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});