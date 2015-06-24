$(document).ready(function(){

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
			height = $('.header__top').height();
			card = $('.js-ch-card');
			cardPar = $('.js-ch-card').parent();
			cardWidth = $('.js-ch-card').width();
			scrollTopBtn = $('.scroll-top');

		if (scroll <= height) {
			cardPar.width('auto');
			card.removeClass('is-fixed');
			scrollTopBtn.hide();
		} else {
			cardPar.width(cardWidth);
			card.addClass('is-fixed');
			scrollTopBtn.show();
		}
	});
	$('.js-slick').slick({
		dots: false,
		infinite: true,
		speed: 200,
		cssEase: 'linear',
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.js-add-anketa').on('click', function() {
		$('.js-anketa-col').toggleClass('is-active');
		return false;
	});
});