<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM circuitos";
  $resultado = $connect->query($query) or trigger_error($connect->error);

  while($circuito = $resultado->fetch_assoc())
  {
    $circuitos[] = $circuito;
  }

  $salida = json_encode($circuitos);
	echo $salida;

  header('Content-Type: application/json');
?>