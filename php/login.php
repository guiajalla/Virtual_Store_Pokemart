<?php
  $con = mysqli_connect('localhost','root','','pokemart');
  $email = filter_var($_REQUEST['email'], FILTER_SANITIZE_STRING);
  $password = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING);
  //$sql = "SELECT * FROM product WHERE category LIKE '%".$category."%'";
  
  echo json_encode($email);
?>