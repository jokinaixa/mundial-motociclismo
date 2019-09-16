<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM circuitos WHERE id = $_GET[id]";
  $resultado = $connect->query($query) or trigger_error($connect->error);

  if ($circuito = $resultado->fetch_assoc())  
  {  
    $salida = json_encode($circuito);
    echo $salida;
  }

  header('Content-Type: application/json');
?>