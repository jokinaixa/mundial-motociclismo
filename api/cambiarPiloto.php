<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");
  echo $postdata;

  if(isset($postdata) && !empty($postdata))
  {
    $piloto = json_decode($postdata);
 
    $query = "UPDATE pilotos SET nombre = '$piloto->nombre', edad = $piloto->edad, equipo = $piloto->equipo, imagen = '$piloto->imagen' WHERE id = $_GET[id]";
    echo $query;
    $result = $connect->query($query) or trigger_error($connect->error);

    echo $result;
  }
  
  header('Content-Type: application/json');
?>