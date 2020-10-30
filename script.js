window.onload = () => {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        fitWidth: true,
        fitHeight: true
    });
};