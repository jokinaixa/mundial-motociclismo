<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    $clasificacion = json_decode($postdata);

    $id_circuito = $clasificacion->circuito->id;
    $id_piloto = $clasificacion->piloto->id;
   
    $query = "INSERT INTO clasificaciones (circuito, anio, tipo, categoria, posicion, piloto) VALUES ($id_circuito, $clasificacion->anio, '$clasificacion->tipo', '$clasificacion->categoria', $clasificacion->posicion, $id_circuito)";
    $connect->query($query) or trigger_error($connect->error);
  }
  
  header('Content-Type: application/json');
?>