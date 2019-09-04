<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM games";
  $result = $connect->query($query);

  while($row = $result->fetch_array())
  {
    $vec[] = $row;
  }

  $cad = json_encode($vec);
  echo $cad;

  header('Content-Type: application/json');
?>