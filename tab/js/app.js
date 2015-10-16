/**
 * Created by adrian on 10/16/15.
 */



$(document).ready(function(){

    var links = $("ul a");
    var divs = $("div");

    console.log(divs.first().data( "id" ));


    links.first().on("click", function() {

        if(divs.first().hasClass("hide")) {
            divs.first().removeClass("hide");

            if(divs.eq(1).hasClass("hide") === false) {
                divs.eq(1).addClass("hide");
            }

            if(divs.eq(2).hasClass("hide") === false) {
                divs.eq(2).addClass("hide");
            }
        }

    });


    links.eq(1).on("click", function() {

        if (divs.eq(1).hasClass("hide")) {
            divs.eq(1).removeClass("hide");

            if(divs.first().hasClass("hide") === false) {
                divs.first().addClass("hide");
            }

            if(divs.eq(2).hasClass("hide") === false) {
                divs.eq(2).addClass("hide");
            }
        }

    });

    links.eq(2).on("click", function() {
        if(divs.eq(2).hasClass("hide")) {
            divs.eq(2).removeClass("hide");

            if(divs.first().hasClass("hide") === false) {
                divs.first().addClass("hide");
            }

            if(divs.eq(1).hasClass("hide") === false) {
                divs.eq(1).addClass("hide");
            }
        }
    });



    /*

     var tabs = $(".tabs li");
     var paragraphs = $(".tabs p");
     var activeParagraph = 0;

     paragraphs.eq(activeParagraph).show();

     tabs.click(function(event) {

     var order = $(this).data("order");

     if(activeParagraph !== order) {
     paragraphs.eq(activeParagraph).fadeOut(1000, function() {
     paragraphs.eq(order).fadeIn(1000;
     activeParagraph = order,
     });
     }

     });

     */

});