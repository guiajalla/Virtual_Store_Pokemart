<?php
    $con = mysqli_connect('localhost','root','','pokemart');
    $sql = "SELECT * FROM product WHERE highlight LIKE '%".$_REQUEST['carrega']."%'";

    $resultado = mysqli_query($con, $sql);
    if (!$resultado){
        echo mysqli_error($con);
    }

    $highLightProducts = [];
    while ($linha = mysqli_fetch_assoc($resultado)){
        $highLightProducts[] = $linha;
    }

    echo json_encode($highLightProducts);
?>