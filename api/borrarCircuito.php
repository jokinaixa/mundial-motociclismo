<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

  $query = "DELETE FROM circuitos where id = $_GET[id]";
  $connect->query($query) or trigger_error($connect->error);

  header('Content-Type: application/json');
?>
