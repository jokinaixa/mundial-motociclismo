<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "DELETE FROM equipos where id = $_GET[id]";
  $result = $connect->query($query) or trigger_error($connect->error);

  echo $result;

  header('Content-Type: application/json');
?>
