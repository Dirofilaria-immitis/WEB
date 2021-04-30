    <?php
      require_once('common\head.php');
    ?>

    <?php
      require_once('common\aside.php');
    ?>

    


    
  <?php
    if (isset($_GET["id"])) {
      $basename = str_replace("$","",$_GET['id']);
      $location = "contents/".$basename."/".$basename.".php";
      require_once($location);
    } else {
      require_once("contents/0/0_main.php");
    }
  ?>



    <?php
      require_once('common\navbar.php');
    ?>


    <?php
      require_once('common\footer.php');
    ?>


