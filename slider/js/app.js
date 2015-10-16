/**
 * Created by adrian on 10/16/15.
 */


$(document).ready(function(){



    var images = $(".slider li");

    var visibleImage = 0;
    images.eq(visibleImage).show();



    images.click(function(event){
        images.eq(visibleImage).hide(0);
        if(event.offsetX < $(this).width()/2) {
            visibleImage --;

        } else {
            visibleImage++;
        }

        if(visibleImage >= images.length ) {
            visibleImage = 0;

        }

        if (visibleImage < 0) {
            visibleImage = images.length-1;
        }

        images.eq(visibleImage).show(0);

    });


    /*
    buttons way
        images.click(function(){
            images.eq(visibleImage).hide(0);
            visibleImage ++;

            if(visibleImage >= images.length) {
                visibleImage = 0;
            }

            images.eq(visibleImage).show(0);
        })

        $(".right").click(function(){
            images.eq(visibleImage).hide(0);
            visibleImage ++;

            if(visibleImage >= images.length) {
                visibleImage = 0;
            }

            images.eq(visibleImage).show(0);
        })

        $(".left").click(function(){
            images.eq(visibleImage).hide(0);
            visibleImage --;

            if(visibleImage < 0) {
                visibleImage = images.length-1;
            }

            images.eq(visibleImage).show(0);
        })

        */

});