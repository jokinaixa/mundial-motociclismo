<?php
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');


  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $pilotos = [];

  $query = "SELECT *, TIMESTAMPDIFF(YEAR, fecha, CURDATE()) AS edad FROM pilotos WHERE equipo = $_GET[equipo]";
  $resultado = $connect->query($query) or trigger_error($connect->error);
  
  while($row = $resultado->fetch_assoc())
  {
    $pilotos[] = $row;
  }
  
  $salida = json_encode($pilotos);
  echo $salida;
?>