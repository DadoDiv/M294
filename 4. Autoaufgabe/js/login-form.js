console.log('login-form.js loaded');

$('#send2').click(function (e) { 
    e.preventDefault();
    var username = $('#username').val();
    var passwort = $('#passwort').val();
    $.ajax({
        type: "LOGIN",
        url: "api.php?username=" + username + "&password=" + passwort,
        dataType: "json",
        success: function (response) {
            if(username == "admin") {
                if(passwort == "1234") {
                    var modal = M.Modal.getInstance($('#modal2'));
                    modal.close();
                    console.log("admin");
                    M.toast({ html: "Welcome, admin!", classes: "rounded green" });
                    $('#logout').show();
                    $('#login').hide();
                } else {
                    send = false;
                    M.toast({ html: 'Passwort ist falsch!', classes: 'red darken-4 white-text' });
                    $('#passwort').addClass('red');
                }
            } else if(passwort == "1234") {
                send = false;
                M.toast({ html: 'Username ist falsch!', classes: 'red darken-4 white-text' });
                $('#username').addClass('red');
            } else {
                send = false;
                M.toast({ html: 'Username und Passwot sind falsch!', classes: 'red darken-4 white-text' });
                $('#username').addClass('red');
                $('#passwort').addClass('red');
            }
        }
    });
});