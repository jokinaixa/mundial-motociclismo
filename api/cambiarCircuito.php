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
 
    $query = "UPDATE circuitos SET nombre = '$circuito->nombre', pais = '$circuito->pais', longitud = $circuito->longitud, imagen = '$circuito->imagen' WHERE id = $_GET[id]";
    $connect->query($query) or trigger_error($connect->error);
  }
?>