$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.reviews_slider ul').bxSlider();

	//tel
	$("[type='tel'").mask("+7 (999) 999-9999");
});