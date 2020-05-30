$(function() {
// slider
	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: true,
		smartSpeed: 1000,
		loop: true
		
	
	});
// btn-menu
$('.btn-menu').click(function(){
	$(this).toggleClass('on');
	$('.header-nav').slideToggle();
});

// contents-btn
$('.contents-btn').click(function(){
	$('.contents-list__next').slideToggle();
});

// magnific-popup
$('.header-right__btn').magnificPopup();
});


