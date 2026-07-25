
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-container')) {
                    const bars = entry.target.querySelectorAll('.progress');
                    bars.forEach(bar => { bar.style.transform = 'scaleX(1)'; });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) observer.observe(skillsContainer);
});
