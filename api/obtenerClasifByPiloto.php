<?php
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');


  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $clasificaciones = [];

  $query = "SELECT b.id, b.pais, b.nombre, a.posicion FROM clasificaciones a, circuitos b WHERE a.circuito = b.id AND a.piloto = 1 ORDER BY b.fecha ASC, a.posicion ";
  $resultado = $connect->query($query) or trigger_error($connect->error);
  
  while($clasificacion = $resultado->fetch_assoc())
  {
    $clasificaciones[] = $clasificacion;
  }
  
  $salida = json_encode($clasificaciones);
  echo $salida;
?>