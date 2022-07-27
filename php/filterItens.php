<?php
$con = mysqli_connect('localhost','root','','pokemart');
$category = filter_var($_REQUEST['category'], FILTER_SANITIZE_STRING);
$sql = "SELECT * FROM product WHERE category LIKE '%".$category."%'";

$resultado = mysqli_query($con, $sql);
    if (!$resultado){
        echo mysqli_error($con);
    }

    $category = [];
    while ($linha = mysqli_fetch_assoc($resultado)){
        $category[] = $linha;
    }


    echo json_encode($category);
?>