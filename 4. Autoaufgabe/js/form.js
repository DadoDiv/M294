console.log('form.js loaded');
$('#date').datepicker();
$('select').formSelect();

$('#send').click(function (e) { 
    e.preventDefault();
    // Feld lesen
    var name = $('#name').val();
    var kraftstoff = $('#kraftstoff').val();
    var farbe = $('#farbe').val();
    var bauart = $('#bauart').val();
    var tank = $('#tank').val();
    var date = $('#date').val();
    console.log("Name: " + name);
    console.log("Kraftstoff: " + kraftstoff);
    console.log("Farbe: " + farbe);
    console.log("Bauart: " + bauart);
    console.log("Tank: " + tank);
    console.log("Date: " + date);


    if (name.length < 3) {
        send = false;
        M.toast({ html: 'Name zu kurz', classes: 'red darken-4 white-text' });
        $('#name').addClass('red');
    }
    if(name.length > 255) { send = false; }
    if(name.indexOf('.')) { send = false; }
    if(name.indexOf(':')) { send = false; }

    var id = $('#id').val();
    $.ajax({
        type: "POST",
        url: id ? "api.php?id=" + id : "api.php",
        data: {
            name: $('#name').val(),
            kraftstoff: $('#kraftstoff').val(),
            farbe: $('#farbe').val(),
            bauart: $('#bauart').val(),
            tank: $('#tank').val(),
            date: $('#date').val()
        },
        dataType: "json",
        success: function () {
            var mymodal = M.Modal.getInstance($('.modal'));
            mymodal.close();
            showlist();
        }
    });
});


$('#name').keyup(function (e) { 
    var name = $('#name').val();
    if (name.length > 3) { $('#name').removeClass('red'); }
});



M.updateTextFields(); // Zum updaten

// Feld schreiben
// $('#vorname').val('Testwert'); //Setzt Standardwert
// $('#vorname').addClass("valid"); //Macht das Feld grün Unterstrichen

// Textarea
// $('#textarea1').val('New Text');
// M.textareaAutoResize($('#textarea1'));