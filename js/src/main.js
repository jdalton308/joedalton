
$(function(){

	// When mobile, hide the nav menu on scroll event
	//------------------------------------------------
	var width = window.innerWidth;

	if (width < 768) {
		var nav = $('.mainNav');
		var menuButton = $('.mobileMenuButton');
		var topBar = $('.topBar');

		var showMenu = function(){
			topBar.addClass('open');
			menuButton.addClass('open');
		}
		var hideMenu = function(){
			topBar.removeClass('open');
			menuButton.removeClass('open');
		}

		$(window).scroll(function(){
			// console.log('SCROLL!');
			if ($(this).scrollTop() <= 10) {
				showMenu();
			} else {
				hideMenu();
			}
		});

		// Show mobile menu and the animation on initial page load
		showMenu();

		// Show mobile menu on click
		menuButton.click(function(){
			topBar.toggleClass('open');
			$(this).toggleClass('open');
		});
	}


	//----------------------------------------

}); // end doc ready