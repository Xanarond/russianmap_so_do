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
        <canvas id="fe_total"></canvas>
    </div>
</div>
<div class="col-md-12">
    <div class="row">
        <img src="img/fe.svg" alt="" id="img_full">
        <div class="col-2">
            <canvas id="sakha_rep"></canvas>
        </div>
        <div class="col-2">
            <canvas id="amur_area"></canvas>
        </div>
        <div class="col-2">
            <canvas id="jewish"></canvas>
        </div>
        <div class="col-2">
            <canvas id="prima"></canvas>
        </div>
        <div class="col-2">
            <canvas id="saha"></canvas>
        </div>
        <div class="col-2">
            <canvas id="khab"></canvas>
        </div>
        <div class="col-2">
            <canvas id="mag"></canvas>
        </div>
        <div class="col-2">
            <canvas id="kam"></canvas>
        </div>
    </div>
</div>
<object src="img/cr.svg"></object>
</body>
<script src="js/charts/fe_charts.js"></script>
</html>
