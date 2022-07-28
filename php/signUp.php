<?php
    $con = mysqli_connect('localhost','root','','pokemart');
    $user = $_REQUEST['user'];
    $data = json_decode($user, true);

    $data['password'] = md5($data['password']);
    $sql = "INSERT INTO users (id, name, email, password) 
    VALUES (NULL, '" . $data['name'] . "', '" . $data['email'] . "', '" . $data['password'] . "')";

    $sqlCheck = "SELECT count(email) FROM users WHERE email LIKE '%" . $data['email'] . "%'";
    //$sqlCheck = "SELECT count(email) FROM users WHERE email LIKE '%guiajalla@gmail.com%'";
    
    $resultado = mysqli_query($con, $sqlCheck);
    if (!$resultado){
        echo mysqli_error($con);
    }

    $check = [];
    while ($linha = mysqli_fetch_assoc($resultado)){
        $check[] = $linha;
    }
    $check = array_column($check, 'count(email)');
    $data['check'] = implode(" ", $check);

    if($data['check']=='0'){
        $resultado = mysqli_query($con, $sql);
        if (!$resultado){
            echo mysqli_error($con);
        }
        echo json_encode($data);
    } else {
        echo json_encode($data);
    }
?>