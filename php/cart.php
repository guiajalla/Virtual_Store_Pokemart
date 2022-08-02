<?php
    session_start();

    $initial = $_REQUEST['load'];

    switch($initial){
        case 1:
            $con = mysqli_connect('localhost','root','','pokemart');
            
            $cart = [];

            foreach ($_SESSION['cart'] as $key => $value) {
                $sql = "SELECT * FROM product WHERE id LIKE '%".$value['id']."%'";
                $resultado = mysqli_query($con, $sql);
                if (!$resultado){
                    echo mysqli_error($con);
                }
                foreach ($_SESSION['cart'] as $key => $value) {
                    $resultado = mysqli_query($con, $sql);
                    if (!$resultado){
                        echo mysqli_error($con);
                    }
                    
                    while ($row = mysqli_fetch_assoc($resultado)){
                        $cart[] = $row;
                    }
                }
                
            }
            echo json_encode($cart);
        break;

        case 2:
            $email = filter_var($_REQUEST['email'], FILTER_SANITIZE_STRING);
            $subject = 'Recibo Pokemart';
            $message = $_REQUEST['message'];

            if(mail($email, $subject, $message, 'From: Aluno <guiajalla@gmail.com>')){
                echo 'Email enviado';
            } else {
                echo 'Email não enviado';
            }
            session_destroy();
        break;
    }
?>