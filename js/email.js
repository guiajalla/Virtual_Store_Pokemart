function sendEmail(){
    let type = document.getElementById('sendQuestion').value;

    if (type == 'Enviar') {
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let body = document.getElementById('needToKnow').value;

        $.get('../php/contactUs.php', {email: email, subject: subject, body: body}, function(){
            alert('Email enviado!');
        });
    }
}