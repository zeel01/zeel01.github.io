document.querySelectorAll("[data-preview]")
	.forEach((element) => {
		element.addEventListener("mouseover", onMouseOver);
		element.addEventListener("mouseout", onMouseOut);
	});

function onMouseOver(event) {
	const el = event.currentTarget;
	const src = el.dataset.preview;
	const preview = document.querySelector("#preview");

	preview.style.backgroundImage = `url(${src})`;
}
function onMouseOut() {
	const preview = document.querySelector("#preview");
	preview.style.backgroundImage = "";
}