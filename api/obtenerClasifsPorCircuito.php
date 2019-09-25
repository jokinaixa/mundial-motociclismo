<?php
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');


  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $clasificaciones = [];

  $query = "SELECT * FROM clasificaciones WHERE circuito = $_GET[circuito] ORDER BY posicion";
  $result1 = $connect->query($query) or trigger_error($connect->error);
  
  while($clasificacion = $result1->fetch_assoc())
  {
    $query = "SELECT *, TIMESTAMPDIFF(YEAR, fecha, CURDATE()) AS edad FROM pilotos WHERE id = $clasificacion[piloto]";
    $result2 = $connect->query($query) or trigger_error($connect->error);

    if ($piloto = $result2->fetch_assoc())  
    {
      $clasificacion["piloto"] = $piloto;

      $query = "SELECT * FROM equipos WHERE id = $piloto[equipo]";
      $result21 = $connect->query($query) or trigger_error($connect->error);

      if ($equipo = $result21->fetch_assoc())  
      {
        $clasificacion["piloto"]["equipo"] = $equipo;
      }
    }


    $query = "SELECT * FROM circuitos WHERE id = $clasificacion[circuito] ORDER BY fecha ASC";
    $result3 = $connect->query($query) or trigger_error($connect->error);

    if ($circuito = $result3->fetch_assoc())  
    {
      $clasificacion["circuito"] = $circuito;
    }    

    $clasificaciones[] = $clasificacion;
  }
  
  $salida = json_encode($clasificaciones);
  echo $salida;
?>