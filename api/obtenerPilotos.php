<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM pilotos";
  $result1 = $connect->query($query) or trigger_error($connect->error);

  while($piloto = $result1->fetch_array())
  {
    $pilotos[] = $piloto;

	  $query = "SELECT * FROM equipos WHERE id_equipo = $piloto[id_equipo]";
	  $result2 = $connect->query($query) or trigger_error($connect->error);
	  
	  if ($equipo = mysqli_fetch_array($result2))  
	  {
	    $pilotos[]["equipo"] = $equipo;
	  }
  }

  $cad = json_encode($pilotos);

  $pilotos2 = array(
    "id_piloto" => 34,
    "nombre" => "Aleix Espargaro",
    "edad" => 32,
    "equipo" => array(
         "id_equipo" => 56,
         "nombre" => "Aprilia"
		)
  );

	$cad = json_encode($pilotos2);
	echo $cad;

  header('Content-Type: application/json');
?>