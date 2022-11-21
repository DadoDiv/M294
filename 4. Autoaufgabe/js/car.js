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
    console.log("test");
    // DOCUMENT READY
    var template = $('#template').html();
    var hb_template = Handlebars.compile(template);
    // console.log(template);
    /* JSON holen */ 
    $.getJSON("api.php",
    // $.getJSON("data/daten.json",
        function (response) {
            // console.log(response);
            // console.log(hb_template(response));
            $('#table1 tbody').html(hb_template(response));
            $('#table1 .tanke').click(function (e) { 
                e.preventDefault();
                var id = $(this).parent().parent().attr("data-id");
                $.ajax({
                    type: "GET",
                    url: "api.php?id=" + id,
                    data: "data",
                    dataType: "json",
                    success: function (response) {
                        $.ajax({
                            type: "POST",
                            url: "api.php?id=" + response.data[0].id,
                            data: {
                                name: response.data[0].name,
                                kraftstoff: response.data[0].kraftstoff,
                                farbe: response.data[0].farbe,
                                bauart: response.data[0].bauart,
                                tank: parseInt(response.data[0].tank) + 1,
                                date: response.data[0].date
                            },
                            dataType: "json",
                            success: function () {
                                showlist();
                            }
                        });
                    }
                });
                console.log("tanke:" + id);
            });
            $('#table1 .edit').click(function (e) { 
                e.preventDefault();
                var id = $(this).parent().parent().attr("data-id");
                console.log("edit:" + id);
                $('#mod_content').load("pages/form.html", function() {
                    $.getScript("js/form.js");
                    // Daten holen und Felder füllen
                    $.getJSON("api.php?id=" + id, function (response) {
                        $('#id').val(response.data[0].id);
                        $('#id').addClass("valid");
                        $('#name').val(response.data[0].name);
                        $('#name').addClass("valid");
                        $('#kraftstoff').val(response.data[0].kraftstoff);
                        $('#kraftstoff').addClass("valid");
                        $('#farbe').val(response.data[0].farbe);
                        $('#farbe').addClass("valid");
                        $('#bauart').val(response.data[0].bauart);
                        $('#bauart').addClass("valid");
                        $('#tank').val(response.data[0].tank);
                        $('#tank').addClass("valid");
                        $('#date').val(response.data[0].date);
                        $('#date').addClass("valid");
                        if (response.data[0].status == 'checked') {
                            $('#status').prop("checked", true)
                        }
                        M.updateTextFields();
                        $('select').formSelect();
                    })
                    var mymodal = M.Modal.getInstance($('.modal'));
                    mymodal.open();
                })
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
