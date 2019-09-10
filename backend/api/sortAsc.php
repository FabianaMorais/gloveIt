<?php

require 'database.php';

$list = [];
$sql = "SELECT * FROM list ORDER BY id ASC";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$i]['id']    = $row['id'];
    $list[$i]['name'] = $row['name'];
    $list[$i]['flag'] = $row['flag'];
    $i++;
  }

  echo json_encode($list);
}
else
{
  http_response_code(404);
}