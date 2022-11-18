console.log('form.js loaded');

$('#send').click(function (e) { 
    e.preventDefault();
    console.log('senden');
    // Feld lesen 
    var name = $('#name').val();
    var vorname = $('#vorname').val();
    var textarea = $('#textarea1').val();
    var datum = $('#datepicker').val();
    var zeit = $('#timepicker').val();
    var farbe = $('#colorpicker').val();
    console.log("Name: " + name);
    console.log("Vorname: " + vorname);
    console.log("Textarea:\n" + textarea);
    console.log("Datum: " + datum);
    console.log("Uhrzeit: " + zeit);
    console.log("Farbe: " + farbe);
    console.log("Box1 " + $('#cb1').is(":checked"));
    console.log("Box2 " + $('#cb2').is(":checked"));
    console.log("Box3 " + $('#cb3').is(":checked"));
    console.log("Box4 " + $('#cb4').is(":checked"));
});

// Text Input
$('#name').val('Bing');
$('#vorname').val('Chilling');
M.updateTextFields();

// Picker
$('#datepicker').datepicker();
$('#timepicker').timepicker();

// Dropdown
$('.dropdown-trigger').dropdown();

$('#click1').click(function (e) { 
    e.preventDefault();
    $('#ddinput').val($('#click1').text());
    M.updateTextFields();
});

$('#click2').click(function (e) { 
    e.preventDefault();
    $('#ddinput').val($('#click2').text());
    M.updateTextFields();
});

$('#click3').click(function (e) { 
    e.preventDefault();
    $('#ddinput').val($('#click3').text()); 
    M.updateTextFields();
});
