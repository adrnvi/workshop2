/**
 * Created by adrian on 10/16/15.
 */


$(document).ready(function() {


    var allBoxes = $(".box");
    var elementText = "<div class='tooltip'></div>";
    var tooltip = null;

    allBoxes.on("mouseenter", function(event) {
        tooltip = $(elementText);
        tooltip.text( $(this).data("text") );
        tooltip.addClass( $(this).data("position") )
        tooltip.appendTo( $(this) );
    });

    allBoxes.on("mouseleave", function(event) {
        if (tooltip != null) {
            tooltip.remove();
            tooltip = null;
        }
    });









});