
$(function () {

    "use strict";

    $('.search_div label').on('click', function(){
        $('.search_div label').removeClass('active');
        $(this).addClass('active');
    });

    // show map in search pagr
    $('.filter_form .show_map').click(function (e) { 
        e.preventDefault();
        $('.map_hidden').hide();
        $('.map_visible').show();
        $(this).hide();
        $('.filter_form .hide_map').show();
    });
    $('.filter_form .hide_map').click(function(e){
        e.preventDefault();
        $('.map_hidden').show();
        $('.map_visible').hide();
        $(this).hide();
        $('.filter_form .show_map').show();
    });

    $(window).scroll(function () { 
        if($(window).scrollTop() >= $('.navbar.main').height()){
            $('.navbar.main').css('background', '#333259');
        }else {
            if($(window).width() < 769){
                $('.navbar.main').css('background', '#fff');
            }else{
                $('.navbar.main').css('background', 'transparent');
            }
        }
    });
});

