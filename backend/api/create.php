<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->name));
    
  echo($name);
    
    
  // Create.
  $sql = "INSERT INTO list (`id`,`name`,`flag`) VALUES (null,'{$name}','0')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $list = [
      'name' => $name,
      'flag' => "0",
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($list);
  }
  else
  {
    http_response_code(422);
  }
}