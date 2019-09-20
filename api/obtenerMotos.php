<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $motos = [];

  $query = "SELECT DISTINCT(moto) FROM equipos WHERE categoria = '$_GET[categoria]'";
  $result = $connect->query($query) or trigger_error($connect->error);

  while($moto = $result->fetch_assoc())
  {
    $motos[] = $moto;
  }

  $salida = json_encode($motos);
  echo $salida;
?>