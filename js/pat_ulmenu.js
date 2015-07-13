//************************//
//      Pat Ul Menu       //
//      Version 1.0       //
//************************//

;( function ( $ ) {

	$.pat_ulmenu = function ( options ) {

		var settings = $.extend( {
			hasPullRight: true, // find pull right to toggle arrow class
			subMenuMarginLeft: 10, // sub menu margin
			mainLinkColor : '#666' // main link color
		}, options );

		//init element variable
		var $pat_ulmenu = $('.pat_ulmenu');
		var $pat_ulmenu_ul = $('.pat_ulmenu ul ');
		var $pat_ulmenu_hassub = $('.pat_ulmenu .has-sub');
		var $pat_ulmenu_sub_ul_a = $('.pat_ulmenu li ul.sub-ul li a');
		var $pat_ulmenu_a = $('.pat_ulmenu li a:not(.pat_ulmenu li.logoff a)');
		var $pat_ulmenu_tap_a = $('.pat_ulmenu li.tap ul li a');

		//init function
	    function initPatULMenu()
	    {
	    	$pat_ulmenu_sub_ul_a.css('margin-left', settings.subMenuMarginLeft + 'px');
	    	$pat_ulmenu_a.css('color', settings.mainLinkColor);
	    	$pat_ulmenu_tap_a.css('color', settings.mainLinkColor);

            $pat_ulmenu_hassub.on('click', function(e) {
                e.preventDefault();

                $(this).toggleClass('tap');

                if ( settings.hasPullRight )
                	$(this).find('.pull-right').toggleClass('fa-angle-down fa-angle-up');
            });
	    }

      	initPatULMenu();
		
	}; // End Pat ULMenu function.

} ) ( jQuery );