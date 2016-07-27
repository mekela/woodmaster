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

	//show menu
	$( ".logo_drop" ).click(function() {
	  $( ".logo_menu" ).slideToggle( "slow");
	});
	$( ".menu_trigger i" ).click(function() {
	  $( ".head_menu ul" ).slideToggle( "slow");
	});

	 //scroll anchor
    $('.totop').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-1},800);
		return false;
	});
});

//fixed header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".header").addClass("fixed_element");
    } else {
        $(".header").removeClass("fixed_element");
    }
});