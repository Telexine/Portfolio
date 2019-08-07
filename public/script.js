

$('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});




// Scroll to top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    //  Animate Scroll

    (function($){


        $.fn.visible = function(partial){

            var $t				= $(this),
                $w				= $(window),
                viewTop			= $w.scrollTop(),
                viewBottom		= viewTop + $w.height(),
                _top			= $($(this).attr('context')).offset(),
                _bottom			= _top + $t.height(),
                compareTop		= partial === true ? _bottom : _top,
                compareBottom	= partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        };

    })(jQuery);

    $(window).scroll(function(){
        if( $('.skills-wrapper').visible(true) ) {
            $('.skills-wrapper').addClass('enabled');
        }
        else {
            $('.skills-wrapper').removeClass('enabled');
        }
    });
});


