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
function fadeInHome() {
	$('#logo').fadeIn(1000,function() {
		$('#text_et').fadeIn(500,function() {
			$('#text_wd').fadeIn(500,function() {
				$('#downarrowdivhome').fadeIn(500)
			});
		});
	});
}

// 'Fade' in the timeline entries one by one
function fadeInWorkExp() {
	$('#timeline_bg').fadeIn(1000,function() {
		$('#timeline_grad').fadeIn(1000,function() {
			$('#timeline_tutor').fadeIn(1000,function() {
				$('#timeline_myer').fadeIn(1000,function() {
					$('#timeline_crown').fadeIn(1000,function() {
						$('#timeline_next').fadeIn(1000)
					});
				});
			});
		});
	});
}
