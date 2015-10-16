/**
 * Created by adrian on 10/16/15.
 */


$(document).ready(function() {



    var menu = $("#mainMenu");
    var lastPositionTop = 0;


    //$(window).on("scroll", function() {});




    $(window).scroll(function(event){

        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top) {
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }

        if( menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop) {
            menu.removeClass("sticky");
        }


    });




});