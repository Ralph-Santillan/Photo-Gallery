function update(previewPic) {
	document.getElementById('image').innerHTML = previewPic.alt;
	document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
	document.getElementById('image').style.backgroundImage = "none";
	document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
