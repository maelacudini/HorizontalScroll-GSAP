// Function to apply GSAP horizontal scroll when the display width is over 800px
function applyHorizontalScroll() {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + (sections.length - 1) * window.innerWidth,
        },
    });
}

// Check the window width and apply the effect if it's over 800px
if (window.innerWidth > 800) {
    applyHorizontalScroll();
}

// Lenis initialization (always active)
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
