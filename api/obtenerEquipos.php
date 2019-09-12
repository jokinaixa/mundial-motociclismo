<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM equipos";
  $result1 = $connect->query($query) or trigger_error($connect->error);

  while($equipo = $result1->fetch_assoc())
  {
    $query = "SELECT * FROM pilotos WHERE id_equipo = $equipo[id_equipo]";
    $result2 = $connect->query($query) or trigger_error($connect->error);
    
    while($pilotos = $result2->fetch_assoc())
    {
      $equipo["pilotos"][] = $pilotos;
    }

    $equipos[] = $equipo;
  }

  $salida = json_encode($equipos);
  echo $salida;

  header('Content-Type: application/json');
?>