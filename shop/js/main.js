$(document).ready(function () {
	
	$('.header-action-close').click(function(){
		$('.header-action').slideUp();
	})
	$('.hamburger').click(function(){
		$(this).next().toggleClass('open');
		$(this).toggleClass('hamburger-open')
	})
})