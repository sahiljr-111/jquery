$(document).ready(function(){
    $("button").click(function(){
        var div = $("#div");
        div.animate({height:"300px", borderColor:"blue"},"slow");
        div.animate({width:"300px", borderColor:"blue"},"slow");
        div.animate({height:"100px", borderColor:"blue"},"slow");
        div.animate({width:"100px", borderColor:"blue"},"slow");
    })
})