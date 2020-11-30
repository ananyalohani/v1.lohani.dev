window.onload = () => {
	const grid = document.querySelector(".grid");
	const msnry = new Masonry(grid, {
		itemSelector: ".grid-item",
		gutter: 5,
		fitWidth: true,
		fitHeight: true,
	});
};
