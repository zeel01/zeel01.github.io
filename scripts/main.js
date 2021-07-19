// Add mouseover and mouseout event listeners to links with data-preview attribute
document.querySelectorAll("[data-preview]")
	.forEach((element) => {
		element.addEventListener("mouseover", showPreview);
		element.addEventListener("mouseout", hidePreview);
	});

// Add click event to all images
document.querySelectorAll("img[data-lightbox]")
	.forEach((element) => {
		element.addEventListener("click", showLightbox);
	});

// Add clich event to close lightbox
document.querySelector("#lightbox")
	.addEventListener("click", hideLightbox);

// Show preview image on hover
function showPreview(event) {
	const el = event.currentTarget;
	const src = el.dataset.preview;
	const preview = document.querySelector("#preview");

	preview.style.backgroundImage = `url(${src})`;
}

// Hide preview image on mouseout
function hidePreview() {
	const preview = document.querySelector("#preview");
	preview.style.backgroundImage = "";
}

// Dsiplay lightbox on click
function showLightbox(event) {
	const el = event.currentTarget;
	const src = el.src;
	const lightbox = document.querySelector("#lightbox");
	const figure = document.querySelector("#lightbox figure");

	figure.style.backgroundImage = `url(${src})`;
	lightbox.style.display = "grid";
}

// Hide lightbox on click
function hideLightbox(event) {
	const lightbox = event.currentTarget;
	lightbox.style.display = "none";
}