document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from(".manga-frame", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)"
    });

    // Typed Text Effect for About Me section
    const typedTextElement = document.querySelector('.typed-text');
    const bioText = "Greetings, I'm Abam. A passionate frontend developer with a love for creating beautiful and interactive web experiences. My journey is fueled by a passion for anime-style UI and micro-interactions.";

    function typeWriter(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Trigger typing when the about section is visible
    ScrollTrigger.create({
        trigger: "#about",
        start: "top 80%",
        onEnter: () => typeWriter(typedTextElement, bioText, 50),
        once: true
    });

    // Animate skill bars on scroll
    gsap.utils.toArray('.skill-item').forEach(item => {
        const skillLevel = item.querySelector('.skill-level');
        const level = item.querySelector('span').textContent.toLowerCase();
        let width;

        // Set width based on skill level (example values)
        switch (level) {
            case 'html': width = '95%'; break;
            case 'css': width = '90%'; break;
            case 'javascript': width = '85%'; break;
            case 'react': width = '75%'; break;
            default: width = '50%';
        }

        gsap.to(skillLevel, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            width: width,
            duration: 1.5,
            ease: "power2.out"
        });
    });

    // ... more JS animations for other sections ...
});