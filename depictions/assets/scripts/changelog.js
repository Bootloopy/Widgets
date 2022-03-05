var more = document.getElementById("more");
var log = document.getElementById("log");

window.onload = function() {
	log.style.display = "none";

	function loadMore() {
		log.style.display = "block";
		more.style.display = "none";
    }

    more.addEventListener("click", loadMore);
}