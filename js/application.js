/* The function to be called on successful body load */
$(document).ready(function() {	
	//Slide in the header and footer on page load:
	$('header').addClass('headeronload');
	$('footer').addClass('footeronload');
	
	//Save the current page title:
	var currentPage = $('#hovertext').html();
	
	//Setting the individual text changes for the footer navigation:
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
	
	//And setting text to default on mouseexit:
	$('.botnavimg').hover(function() {
	}, function() {
		$('#hovertext').html(currentPage);
	});
	
	//Slide out the header and footer bars on page exit:
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
});

// 'Fade' in the home page circle logo, with titles following
function fadeIn(obj) {
	$(obj).fadeIn(1000, loadTitles);
	
	function loadTitles() {
		$('#text_et').fadeIn(500,function() {
			$('#text_wd').fadeIn(500,function() {
				$('#downarrowdiv').fadeIn(500)
			});
		});
	}
}
