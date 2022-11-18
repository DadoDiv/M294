$(function () {

    $('.modal').modal();

    $.getJSON("api.php", function (response) {
        console.log(response);
    })

    // DOCUMENT READY
    var template = $('#template').html();
    var hb_template = Handlebars.compile(template);
    // console.log(template);
    /* JSON holen */ 
    $.getJSON("api.php",
        function (response) {
            console.log(response);

            // console.log(hb_template(response));
            $('#table1 tbody').html(hb_template(response));

            $('#table1 .tanke').click(function (e) { 
                e.preventDefault();
                var id = $(this).parent().parent().attr("data-id");
                console.log("tanke:" + id);
            });
        
            $('#table1 .edit').click(function (e) { 
                e.preventDefault();
                var id = $(this).parent().parent().attr("data-id");
                console.log("edit:" + id);
            });
        
            $('#table1 .delete').click(function (e) { 
                e.preventDefault();
                var id = $(this).parent().parent().attr("data-id");
                console.log("delete:" + id);
            });
        }
    );



    $("#add").click(function (e) { 
        e.preventDefault();
        console.log("ADD...");
        $('#mod_content').load("pages/form.html", function(){
            $.getScript("js/form.js");
        });
    });

});