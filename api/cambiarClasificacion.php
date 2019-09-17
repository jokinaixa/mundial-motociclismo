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
    $clasificacion = json_decode($postdata);
 
    $query = "UPDATE clasificaciones SET circuito = $clasificacion->circuito, categoria = '$clasificacion->categoria', posicion = '$clasificacion->posicion', piloto = $clasificacion->piloto WHERE id = $_GET[id]";
    $connect->query($query) or trigger_error($connect->error);
  }
?>