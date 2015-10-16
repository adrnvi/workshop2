/**
 * Created by adrian on 10/16/15.
 */


$(document).ready(function() {



    var menu = $("#mainMenu");
    var lastPositionTop = 0;
    var menuHeight = menu.height();


    //$(window).on("scroll", function() {});




    $(window).scroll(function(event){

        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top) {
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");

            menu.animate({
                height: (menuHeight/4).toString()+"px"
            }, 500);

            //menu.css("height", "15px")
        }

        if( menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop) {
            menu.removeClass("sticky");

            menu.animate({
                height: (menuHeight).toString()+"px"
        }, 500);
            //menu.removeAttr("style");
        }


    });




});