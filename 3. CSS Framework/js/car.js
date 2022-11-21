$(function () {

    $('.modal').modal();
    // $.getJSON("api.php?id=1", function (response) {
    //     console.log(response);
    // })



    // schreiben von Daten (id=update !id=insert)
    // $.ajax({
    //     type: "POST",
    //     url: "api.php?id=99",
    //     data: {
    //         name: "haraldddddd",
    //         kraftstoff: "diesel"
    //     },
    //     dataType: "json",
    //     success: function (response) {
    //         console.log(response)
    //     }
    // });



    showlist();



    $("#add").click(function (e) { 
        e.preventDefault();
        console.log("ADD...");
        $('#mod_content').load("pages/form.html", function(){
            $.getScript("js/form.js");
        });
    });

});













function showlist() {
    // DOCUMENT READY
    var template = $('#template').html();
    var hb_template = Handlebars.compile(template);
    // console.log(template);
    /* JSON holen */ 
    $.getJSON("api.php",
    // $.getJSON("data/daten.json",
        function (response) {
            //console.log(response);
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
                $.ajax({
                    type: "POST",
                    url: "api.php?id=" + id,
                    data: ,
                    dataType: "json",
                    success: function (response) {
                        showlist();
                    }
                });
                console.log("edit:" + id);
            });
            $('#table1 .delete').click(function (e) { 
                e.preventDefault();
                var id = $(this).parent().parent().attr("data-id");
                if (confirm("Möchten Sie diesen Datensatz wirklich löschen?")) {
                    $.ajax({
                        type: "DELETE",
                        url: "api.php?id=" + id,
                        dataType: "json",
                        success: function (response) {
                            showlist();
                        }
                    });
                    console.log("delete:" + id);
                  }
            });
        }
    );
}

