document.querySelectorAll('.suoyin .scroll-to').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});