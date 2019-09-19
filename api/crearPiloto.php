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
    $piloto = json_decode($postdata);
    
    $id_equipo = $piloto->equipo->id;
   
    $query = "INSERT INTO pilotos (nombre, apellido, equipo, dorsal, fecha, imagen, pais) VALUES ('$piloto->nombre', '$piloto->apellido', $id_equipo, $piloto->dorsal, '$piloto->fecha', '$piloto->imagen', '$piloto->pais')";
    $connect->query($query) or trigger_error($connect->error);
  }
?>