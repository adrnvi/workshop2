/**
 * Created by adrian on 10/16/15.
 */


$(document).ready(function() {


    var paragraphs = $("p");
    var links = $(".nav a")

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


        paragraphs.each(function( index ){
           if(index + 1 >= this.length){
               if ( ( paragraphs.eq(index) ).offset().top() < $(window).scrollTop() ) {

                   links.eq(index).addClass("active");

               }
               else {
                   links.eq(index).removeClass("active");
               }



           }
           else {

               if ( paragraphs.eq(index).offset().top < $(window).scrollTop() &&
                    paragraphs.eq(index + 1).offset().top > $(window).scrollTop()) {

                    links.eq(index).addClass("active");

                }
                else {
                    links.eq(index).removeClass("active");
                }
            }
         });


    });




});