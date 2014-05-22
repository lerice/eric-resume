/* The function to be called on successful body load */
/*.$(function () {
	
});*/

$(document).ready(function () {
	//$('header').fadeIn(2000);
	$('header').addClass('headeronload');
	$('footer').addClass('footeronload');
});


function fadeIn(obj) {
	$(obj).fadeIn(1000, loadTitles);
	
	function loadTitles() {
		$('#text_et').fadeIn(500,function() {
			$('#text_wd').fadeIn(500)});
	}
	
	$("a.transition").click(function(event) {
		event.preventDefault();
		linkLocation = this.href;
		
		$('header').removeClass('headeronload');
		$('footer').removeClass('footeronload');
		
		setTimeout(function() {
			redirectPage();
		}, 1500);
	});
	
	function redirectPage() {
		window.location = linkLocation;
	}
}
