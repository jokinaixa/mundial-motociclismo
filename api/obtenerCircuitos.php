<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $circuitos = [];

  $query = "SELECT * FROM circuitos";
  $resultado = $connect->query($query) or trigger_error($connect->error);

  while($circuito = $resultado->fetch_assoc())
  {
    $circuitos[] = $circuito;
  }

  $salida = json_encode($circuitos);
	echo $salida;
?>