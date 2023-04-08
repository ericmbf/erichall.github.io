$(document).ready(function() {
    $(".navbar a").click(function() {
        var selected = $(this).attr("href");
        $(".navbar a").removeClass("active");
        $(this).addClass("active");
        $(".content.active").removeClass("active").hide();
        $(selected).addClass("active").show();
    });
});