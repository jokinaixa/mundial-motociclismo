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
    $equipo = json_decode($postdata);
   
    $query = "INSERT INTO equipos (nombre, moto, imagen, categoria) VALUES ('$equipo->nombre', '$equipo->moto', '$equipo->imagen', '$equipo->categoria')";
    $connect->query($query) or trigger_error($connect->error);
  }
?>