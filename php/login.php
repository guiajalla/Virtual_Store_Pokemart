<?php
    $con = mysqli_connect('localhost','root','','pokemart');
    $email = filter_var($_REQUEST['email'], FILTER_SANITIZE_STRING);
    $password = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING);

    // $email = 'guiajalla@gmail.com';
    // $password = '1';

    $sql = "SELECT name, email FROM users WHERE (email = '" . $email . "') AND (password = '" . md5($password) . "')";
    

    $query = mysqli_query($con, $sql);
    if (!$query){
        echo mysqli_error($con);
    }
    
    $login = [];
    while ($row = mysqli_fetch_assoc($query)){
        $login[] = $row;
    }

    if(empty($login)){
        echo json_encode($login);
        exit;
    } 
    echo json_encode($login);
?>