$(document).ready(function(){
	$('.menu').click(function(){
		$('.menu-link').slideToggle();
	})
	var currentDiv = 1
	$('.img-container').click(function(){
		$('.photo-large').slideDown();
		currentDiv = this;
		var img = $(this);
		var url = img.css('background-image');
		console.log(url);
		var ur = $(this).css('background-image');
		console.log(ur);
		$('.photo-large').css('background-image',url);
	})
	$('.photo-large').click(function(){
		var nextDiv = (currentDiv + 'div');
		var url = this.css('background-image');
		console.log('url');
	})
	$('.closeGallery').click(function(){
        $('.photo-large').slideUp();
    })
})
