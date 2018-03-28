
$(document).ready(function(){
    $(".menu").click(function(){
        $('.menu-links').slideToggle();
        $(this).toggleClass('menu-open');
        //$(this).toggleClass('menu')
    });
    $("main").click(function(){
        $('.menu-links').slideUp();
        $('.menu').removeClass('menu-open');
        //$(this).toggleClass('menu')
    });
    $('.gallery-photo img').click(function(){
    	$('.photo-large').slideDown();
    	var img = $(this);
		var src = img.attr('src');
		$('.photo-large').css('background-image','url(' + src + ')');
    })
    $('.photo-large').click(function(){
    	$(this).hide();
    })
});