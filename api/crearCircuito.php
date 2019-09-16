<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    $circuito = json_decode($postdata);
   
    $query = "INSERT INTO circuitos (nombre, pais, longitud, imagen) VALUES ('$circuito->nombre', '$circuito->pais', $circuito->longitud, '$circuito->imagen')";
    $connect->query($query) or trigger_error($connect->error);
  }
  
  header('Content-Type: application/json');
?>