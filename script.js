window.onload = () => {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 20,
        fitWidth: true,
        fitHeight: true
    });
};