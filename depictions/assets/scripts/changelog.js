var more = document.getElementById("more");
var log = document.getElementById("log");
var status = 1;

function toggle() {
	if (status == 1) {
		showMore();
	} else {
		showLess();
	}
}

function showMore() {
	setTimeout(function() {
		status = 0;
	}, 100);
	log.style.display = "block";
	more.innerHTML = "Show Less"
}

function showLess() {
	setTimeout(function() {
		status = 1;
	}, 100);
	log.style.display = "none";
	more.innerHTML = "More Versions";
	window.location.top = window.location.top;
}

more.addEventListener("click", toggle);
