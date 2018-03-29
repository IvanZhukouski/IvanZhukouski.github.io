
$(document).ready(function(){
    $(".menu").click(function(){
        $('.menu-links').slideToggle();
        $(this).toggleClass('menu-open');
    });
    $("main").click(function(){
        $('.menu-links').slideUp();
        $('.menu').removeClass('menu-open');
    });


    $('.gallery-photo img').click(function(){
    	$('.photo-large').slideDown();
    	var img = $(this);
        $(img).parent().addClass('currentImage')
		var src = img.attr('src');
		$('.photo-large').css('background-image','url(' + src + ')');
    })
    var nextImgSrc = 1;
    $('.photo-large').click(function(){
        
        var nextImgDiv = $('.currentImage  + div');
        $('.currentImage').removeClass('currentImage');
        $(nextImgDiv).addClass('currentImage')
        var nextImg = $(nextImgDiv).children();
        nextImgSrc = nextImg.attr('src');
        if(nextImgSrc){
        $('.photo-large').css('background-image','url(' + nextImgSrc + ')');
        }
        else{
            //nextImgDiv = $('.currentImage  + div');
            $('.photo-large').slideUp();
        }
     })
    $('.closeGallery').click(function(){
        $('.photo-large').slideUp();
    })
});