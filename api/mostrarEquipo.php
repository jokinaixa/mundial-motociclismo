<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM equipos WHERE id = $_GET[id]";
  $result1 = $connect->query($query) or trigger_error($connect->error);
  
  if ($equipo = $result1->fetch_assoc())  
  {
    $query = "SELECT * FROM pilotos WHERE equipo = $equipo[id]";
    $result2 = $connect->query($query) or trigger_error($connect->error);
    
    while($piloto = $result2->fetch_assoc())
    {
      $equipo["pilotos"][] = $piloto;
    }
  }
  
  $salida = json_encode($equipo);
  echo $salida;

  header('Content-Type: application/json');
?>
