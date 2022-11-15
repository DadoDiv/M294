$(function () {
    // DOCUMENT READY

    $.getJSON("data/daten.json",
        function (response) {
            console.log(response);
        }
    );

    $('.tanke').click(function (e) { 
        e.preventDefault();
        var id = $(this).attr("data-id");
        console.log("tanke:" + id);
    });

    $('.edit').click(function (e) { 
        e.preventDefault();
        var id = $(this).attr("data-id");
        console.log("edit:" + id);
    });

    $('.delete').click(function (e) { 
        e.preventDefault();
        var id = $(this).attr("data-id");
        console.log("delete:" + id);
    });

    $(".rounded").click(function (e) { 
        e.preventDefault();
        console.log("ADD...");
    });
});