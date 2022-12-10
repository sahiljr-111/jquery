$(document).ready(function () {
    $("#in").click(function () {
        $("div").animate({ left: "200px", width: "300px", height: "100px", borderWidth: "10px", fontSize: "5em" }, 2000)
    })
    $("#out").click(function () {
        $("div").animate({ left: "10px", width: "100px", height: "50px", borderWidth: "1px", fontSize: "1em" }, 2000)
    })
})