<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM clasificaciones WHERE anio = $_GET[anio] AND circuito = $_GET[circuito] GROUP BY tipo ORDER BY posicion";
  $result1 = $connect->query($query) or trigger_error($connect->error);
  
  while($clasificacion = $result1->fetch_assoc())
  {
    $query = "SELECT * FROM pilotos WHERE id = $clasificacion[piloto]";
    $result2 = $connect->query($query) or trigger_error($connect->error);
    
    $clasificacion[]["piloto"] = $result2->fetch_assoc();
  }
  
  $salida = json_encode($clasificacion);
  echo $salida;

  header('Content-Type: application/json');
?>