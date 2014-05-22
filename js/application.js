/* The function to be called on successful body load */
/*.$(function () {
	
});*/

$(document).ready(function() {
	$('header').addClass('headeronload');
	$('footer').addClass('footeronload');
	
	//Setting the individual text changes:
	$('#nav_skills').hover(function() {
		$('#hovertext').html('technical skills');
	});
	$('#nav_education').hover(function() {
		$('#hovertext').html('education & training');
	});
	$('#nav_achievements').hover(function() {
		$('#hovertext').html('achievements');
	});
	$('#nav_workexp').hover(function() {
		$('#hovertext').html('work experience');
	});
	$('#nav_portfolio').hover(function() {
		$('#hovertext').html('portfolio');
	});
	$('#nav_github').hover(function() {
		$('#hovertext').html('my github');
	});
	
	//And setting text to blank on mouseexit:
	$('.botnavimg').hover(function() {
	}, function() {
		$('#hovertext').html('');
	});
});


function fadeIn(obj) {
	$(obj).fadeIn(1000, loadTitles);
	
	function loadTitles() {
		$('#text_et').fadeIn(500,function() {
			$('#text_wd').fadeIn(500)});
	}
	
	$('a.transition').click(function(event) {
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
