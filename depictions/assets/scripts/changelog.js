var more = document.getElementById("more");
var log = document.getElementById("log");

function moreVersions() {
	more.style.display = "none";
	log.style.display = "block";
}

more.addEventListener("touchstart", moreVersions);
