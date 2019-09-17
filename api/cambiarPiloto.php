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
 
    $query = "UPDATE pilotos SET nombre = '$piloto->nombre', equipo = $id_equipo, edad = $piloto->edad, imagen = '$piloto->imagen' WHERE id = $_GET[id]";
    $connect->query($query) or trigger_error($connect->error);
  }
?>