<?php 
    $con = mysqli_connect('localhost','root','','pokemart');
    $sql = "SELECT * FROM product WHERE id LIKE '%".$_REQUEST['id']."%'";

    $result = mysqli_query($con, $sql);
    if (!$result){
        echo mysqli_error($con);
    }

    $aboutProduct = [];
    while ($row = mysqli_fetch_assoc($result)){
        $aboutProduct[] = $row;
    }


    echo json_encode($aboutProduct);
?>