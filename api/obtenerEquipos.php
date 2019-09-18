<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $equipos = [];

  $query = "SELECT * FROM equipos";
  $result1 = $connect->query($query) or trigger_error($connect->error);

  while($equipo = $result1->fetch_assoc())
  {
    $query = "SELECT *, TIMESTAMPDIFF(YEAR, fecha, CURDATE()) AS edad FROM pilotos WHERE equipo = $equipo[id]";
    $result2 = $connect->query($query) or trigger_error($connect->error);
    
    while($piloto = $result2->fetch_assoc())
    {
      $equipo["pilotos"][] = $piloto;
    }

    $equipos[] = $equipo;
  }

  $salida = json_encode($equipos);
  echo $salida;
?>