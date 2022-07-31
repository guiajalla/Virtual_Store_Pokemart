<?php
    $email= filter_var($_REQUEST['email'], FILTER_SANITIZE_STRING);
    $subject = filter_var($_REQUEST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_REQUEST['body'], FILTER_SANITIZE_STRING);

    mail('guiajalla@gmail.com', $subject, $message, 'From: Aluno <' . $email. '>');
    echo 'Email enviado';
?>