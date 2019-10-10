<?php

ob_start();

for($i=0;$i<10;$i++){

 
    ob_flush();
   echo$i.'<br />';

 

   flush();

 

   sleep(1);

 

}

 

?>