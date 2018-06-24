$(document).ready(function() {
	$('#fullpage').fullpage({
		 navigation: true,
		 scrollOverflow: true,
		 scrollOverflowReset: true,
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
		//$(this).closest('.gallery').find("img").css("opacity","0.2");
		
		// function change(arrow){
		// 	(arrow.closest('.gallery').find("img").attr("src","img/"+(n)+".png"))
		// }
		// var i = $(this)
		// setTimeout(change(i), 1000);
		//$(this).closest('.gallery').find("img").css("opacity","1");
	});
});