<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    $circuito = json_decode($postdata);
   
    $query = "INSERT INTO circuitos (nombre, pais, localidad, longitud, imagen, fecha) VALUES ('$circuito->nombre', '$circuito->pais', '$circuito->localidad', $circuito->longitud, '$circuito->imagen', '$circuito->fecha')";
    $connect->query($query) or trigger_error($connect->error);
  }
?>