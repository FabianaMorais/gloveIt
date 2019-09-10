<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

echo('AQUI');
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $name = mysqli_real_escape_string($con, trim($request->name));
  $flag = mysqli_real_escape_string($con, (int)$request->flag);
  

  if($flag == 0){
      echo("selected");
      $newFlag = 1;
  }else{
      echo ("unselected");
      $newFlag = 0;
      }
  

  // Update.
  $sql = "UPDATE `list` SET `flag`='$newFlag' WHERE `id` = '{$id}'";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}