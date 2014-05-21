/* The function to be called on successful body load */
/*.$(function () {
	
});*/

$(document).ready(function () {
	//$('header').fadeIn(2000);
});


function fadeIn(obj) {
	$(obj).fadeIn(1000,loadTitles);
	
	function loadTitles() {
		$('#text_et').fadeIn(500,function() {
			$('#text_wd').fadeIn(500)});
	}
}

