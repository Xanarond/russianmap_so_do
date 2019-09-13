<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
    <script type="text/javascript" src="js/raphael-min.js"></script>
    <script type="text/javascript" src="js/russian-map.js"></script>
    <title>Document</title>
</head>
<body>
<div class="row p-5">
    <div class="col-md-2">
        <div id="current_date">
            <?php echo date('d.m.Y') ?>
        </div>
    </div>
    <div class="col-md-6">
        <canvas id="sr_total"></canvas>
    </div>
</div>
<div class="col-md-12">
    <div class="row justify-content-center ">
        <img src="img/south.svg" id="img_full" alt="SOUTH">
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="volg_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="rost_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="krn_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="ad_rep"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="kal_rep"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="ast_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="crim_area"></canvas>
    </div>
</div>
</body>
<script src="js/charts/sr_charts.js"></script>
</html>
