(function () {
    const els = document.querySelectorAll('[data-parallax-speed]');

    function update() {
        const viewportCenter = window.innerHeight / 2;

        els.forEach((el) => {
            const speed = parseFloat(el.dataset.parallaxSpeed);
            const rect = el.getBoundingClientRect();
            const offset = (viewportCenter - (rect.top + rect.height / 2)) * speed;

            if (el.dataset.parallaxTarget === 'background') {
                el.style.backgroundPositionY = `calc(50% + ${offset}px)`;
            } else {
                el.style.transform = `translateY(${offset}px)`;
            }
        });

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
})();
