<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM pilotos WHERE id = $_GET[id]";
  $result1 = $connect->query($query) or trigger_error($connect->error);
  
  if ($piloto = $result1->fetch_assoc())  
  {
    $query = "SELECT * FROM equipos WHERE id = $piloto[equipo]";
    $result2 = $connect->query($query) or trigger_error($connect->error);
    
    if ($equipo = $result2->fetch_assoc())  
    {
      $piloto["equipo"] = $equipo;
    }

    $salida = json_encode($piloto);
    echo $salida;
  }
?>