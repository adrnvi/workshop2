/**
 * Created by adrian on 10/16/15.
 */

$(document).ready(function() {

    var list1 = $(".main1");
    var list2 = $(".main2");
    var list3 = $(".main3");

    var firstUl = $(".firstUl")

    var dropdown1 = $(".dropdown1");
    var dropdown2 = $(".dropdown2");
    var dropdown3 = $(".dropdown3");

    console.log(dropdown1);

    list1.on("mouseenter", function(event){
        dropdown1.removeClass("dropdown1");
    });

    list2.on("mouseenter", function(event){
        dropdown2.removeClass("dropdown2");
    });


    list3.on("mouseenter", function(event){
        dropdown3.removeClass("dropdown3");
    });

    firstUl.on("mouseleave", function(event){
        dropdown1.addClass("dropdown1");
        dropdown2.addClass("dropdown2");
        dropdown3.addClass("dropdown3");

    });

});