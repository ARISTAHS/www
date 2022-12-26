<?
    $connect=mysql_connect( "localhost", "jhs0907", "paran0907!") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("jhs0907",$connect);
?>
