// Document ready
$(function () {
    $("#in").hide();

    $("main").prepend("text <hr>");
    $("main").after("OOOOO");
    $("main").before("XXXXX");

    $("main").click(function (e) { 
        e.preventDefault();
        console.log("main-click");
        // $("main").addClass("blue");
        // if ($("main").hasClass("blue")) {
        //     $("main").removeClass("blue");
        //     $("#in").fadeOut();
        // } else {
        //     $("main").addClass("blue");
        //     $("#in").fadeIn();
        // }

        $("main").toggleClass("blue");
    });

    $('.liste li').click(function (e) { 
        e.preventDefault();
        var id = $(this).attr("data-id");
        console.log(id);
    });

});