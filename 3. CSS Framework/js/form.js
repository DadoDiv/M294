console.log('form.js loaded');
$('#datepicker').datepicker();
$('#timepicker').timepicker();
$('.dropdown-trigger').dropdown();

$('#send').click(function (e) { 
    e.preventDefault();
    // Feld lesen
    var vorname = $('#vorname').val();
    var nachname = $('#nachname').val();
    var textarea = $('#textarea1').val();
    var datum = $('#datepicker').val();
    var zeit = $('#timepicker').val();
    var color = $('#colorpicker').val();
    var cb1 = $('#cb1').val();
    var cb2 = $('#cb2').val();
    var cb3 = $('#cb3').val();
    var cb4 = $('#cb4').val();
    console.log("Vorname: " + vorname);
    console.log("Nachname: " + nachname);
    console.log("Textarea:\n" + textarea);
    console.log("Datum: " + datum);
    console.log("Zeit: " + zeit);
    console.log("Farbe: " + color);
    console.log("Checkbox1: " + $('#cb1').is(":checked"));
    console.log("Checkbox2: " + $('#cb2').is(":checked"));
    console.log("Checkbox3: " + $('#cb3').is(":checked"));
    console.log("Checkbox4: " + $('#cb4').is(":checked"));
});

$('#dd1').click(function (e) { 
    e.preventDefault();
    $('#ddinput').val($('#dd1').text());
});

$('#dd2').click(function (e) { 
    e.preventDefault();
    $('#ddinput').val($('#dd2').text());
});

$('#dd3').click(function (e) { 
    e.preventDefault();
    $('#ddinput').val($('#dd3').text());
    
});
// Feld schreiben
// $('#vorname').val('Testwert'); //Setzt Standardwert
// $('#vorname').addClass("valid"); //Macht das Feld grün Unterstrichen

M.updateTextFields(); // Zum updaten

// Textarea
// $('#textarea1').val('New Text');
// M.textareaAutoResize($('#textarea1'));