<?php
    session_start();

    $idProduct = (int) $_REQUEST['id'];

    if(isset($_SESSION['cart'][$idProduct ])){
        $_SESSION['cart'][$idProduct]['amount']++;
    } else {
        $_SESSION['cart'][$idProduct] = array('id' => $idProduct,'amount'=>1);
    }
?>