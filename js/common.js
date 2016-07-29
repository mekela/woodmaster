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

  $( ".phone > a" ).click(function() {
    $( ".hidden-content" ).slideToggle( "slow");
  });

	 //scroll anchor
    $('.totop').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-1},800);
		return false;
	});

	 // Disable scroll zooming and bind back the click event
	  var onMapMouseleaveHandler = function (event) {
	    var that = $(this);

	    that.on('click', onMapClickHandler);
	    that.off('mouseleave', onMapMouseleaveHandler);
	    that.find('iframe').css("pointer-events", "none");
	  }

	  var onMapClickHandler = function (event) {
	    var that = $(this);

	    // Disable the click handler until the user leaves the map area
	    that.off('click', onMapClickHandler);

	    // Enable scrolling zoom
	    that.find('iframe').css("pointer-events", "auto");

	    // Handle the mouse leave event
	    that.on('mouseleave', onMapMouseleaveHandler);
	  }

	  // Enable map zooming with mouse scroll when the user clicks the map
	  $('.map').on('click', onMapClickHandler);


	

  //filter
  var selectedFilters = {};
  var $products = $(".took_product");
  
  $(".took_select select[data-filter]").each(function(){
    var $this = $(this);
    var filter = $this.attr('data-filter');
    selectedFilters[filter] = [];
    $this.on('change', function(){
      var value = $this.val();
      selectedFilters[filter] = [value];
      applyFilters();
      //console.log(selectedFilters);
    });
  })

  function applyFilters(){
    var $resultsLabels = $(".filter_results");
    var $resultsLabelsList = $resultsLabels.find(".filter_results_list");
    var filters = '';
    
    $resultsLabels.hide();
    $resultsLabelsList.html('');
    $products.hide();
    
    for (var filterName in selectedFilters) {
        if (selectedFilters.hasOwnProperty(filterName)) {
          if(selectedFilters[filterName] && selectedFilters[filterName].length){
            for(var i = 0; i<selectedFilters[filterName].length; i++){
              if(selectedFilters[filterName][i] && selectedFilters[filterName][i].length){
                
                $resultsLabels.show();
                $resultsLabel = $('<span>' + selectedFilters[filterName][i] + ' <i data-filter="' + filterName + '" data-index="' + i + '" class="fa fa-times" aria-hidden="true"></i></span>');
                $resultsLabel.find('i').on('click', function(){
                  selectedFilters[$(this).attr('data-filter')].splice($(this).attr('data-index'), 1);
                  $(".filter_line select[data-filter='" + $(this).attr('data-filter') + "']").val('');
                  applyFilters();
                });
                $resultsLabelsList.append($resultsLabel);
                
                if( selectedFilters[filterName][i].indexOf("'") >= 0 ){
                  filters += '[data-' + filterName + '="' + selectedFilters[filterName][i] + '"]';
                } else {
                  filters += "[data-" + filterName + "='" + selectedFilters[filterName][i] + "']";
                }
                
              }
            }
          }
        }
    }
    
    if(!filters){
      $products.show();
    } else {
      $products.filter(filters).show();
    }
    
  }


});

//fixed header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".header, .totop").addClass("fixed_element");
    } else {
        $(".header, .totop").removeClass("fixed_element");
    }
});