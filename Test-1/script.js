$(document).ready(function() {
	$('#fullpage').fullpage({
		 navigation: true,
		 scrollOverflow: true,
		 //scrollOverflowReset: true,
		 scrollingSpeed: 900,
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
	var n = 1;
	$(".left").click(function(){
		n--;
		if(n<1)n=3;
		$(this).closest('.gallery').find("img").attr("src","img/"+(n)+".png");
		$(this).closest(".gallery").find('.counter-number').html(n)
	});

	$(".right").click(function(){
		n++;
		if(n>3)n=1;

		$(this).closest('.gallery').find("img").attr("src","img/"+(n)+".png")
		$(this).closest(".gallery").find('.counter-number').html(n)
	});
	$(".how-works").click(function(){
		$(".video").show(400);
	})
	$(document).on('click', function(e) {
		  if (!$(e.target).closest(".how-works").length) {
		    $('.video').slideUp();
		  }
		  e.stopPropagation();
		});
	$(".backcall").click(function(){
		$("form").slideToggle(400);
	});
	$(document).on('click', function(e) {
		  if (!$(e.target).closest(".phone").length) {
		    $('form').slideUp();
		  }
		  e.stopPropagation();
		});
});