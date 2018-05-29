
$(document).ready(function(){
    $(".menu-hamburger").click(function(){
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('menu-open');
    });
    $("main").click(function(){
        $('.mobile-menu').slideUp();
        $('.menu-hamburger').removeClass('menu-open');
    });
});