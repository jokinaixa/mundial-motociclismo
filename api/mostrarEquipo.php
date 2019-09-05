<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "SELECT * FROM equipos WHERE id_equipo = $_GET[id]";
  $registros = $connect->query($query) or trigger_error($connect->error);
  

  if ($reg = mysqli_fetch_array($registros))  
  {
    $vec = $reg;
  }
  
  $cad = json_encode($vec);
  echo $cad;

  header('Content-Type: application/json');
?>