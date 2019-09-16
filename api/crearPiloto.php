<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    $piloto = json_decode($postdata);
    
    $id_equipo = $piloto->equipo->id;
   
    $query = "INSERT INTO pilotos (nombre, equipo, edad, imagen) VALUES ('$piloto->nombre', $id_equipo, $piloto->edad, '$piloto->imagen')";
    $connect->query($query) or trigger_error($connect->error);
  }
  
  header('Content-Type: application/json');
?>