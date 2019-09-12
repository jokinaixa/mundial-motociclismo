<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM pilotos";
  $result1 = $connect->query($query) or trigger_error($connect->error);

  while($piloto = $result1->fetch_assoc())
  {
    $query = "SELECT * FROM equipos WHERE id_equipo = $piloto[id_equipo]";
	  $result2 = $connect->query($query) or trigger_error($connect->error);
	  
	  if ($equipo = $result2->fetch_assoc())
	  {
	    $piloto["equipo"] = $equipo;
	  }

    $pilotos[] = $piloto;
  }

  $salida = json_encode($pilotos);
	echo $salida;

  header('Content-Type: application/json');
?>