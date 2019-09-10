<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
    <script type="text/javascript" src="js/raphael-min.js"></script>
    <script type="text/javascript" src="js/russian-map.js"></script>
    <script>
        // запрос на получение json регионов
        window.onload = function () {
            fetch('./js/data/central_reg.json').then(function (response) {
                response.json().then(function (data) {
                    new RussianMap({
                        viewPort: data.viewPort,
                        mapId: 'central_region',
                        width: 1500,
                        height: 1000,
                        // дефолтовые атрибуты для контуров регионов
                        defaultAttr: {
                            fill: '#615dff', // цвет которым закрашивать
                            stroke: '#ffffff', // цвет границы
                            'stroke-width': 1, // ширина границы
                            'stroke-linejoin': 'round' // скруглять углы
                        },
                        mouseMoveAttr: {
                            fill: '#25669e'
                        },
                        /*onMouseMove: function (event) {
                            console.log('mouse on ' + this.region.name);
                        },
                        onMouseOut: function (event) {
                            console.log('out on ' + this.region.name);
                        },*/
                        onMouseClick: function (event) {
                            console.log('clicked on ' + this.region.name);
                        }
                    }, data.regions);
                });
            });
        };
    </script>
    <title>Document</title>
</head>
<body>
<div class="row p-5">
    <div class="col-md-6">
        <div id="current_date">
            <?php echo date('d.m.Y') ?>
        </div>
    </div>
    <div class="col-md-6">
        <canvas id="cr_total"></canvas>
    </div>
</div>
<div class="col-md-12">
    <div class="row justify-content-center ">
        <div id="central_region">
        </div>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="msk"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="msk_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="sml_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="tver_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="kaluga_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="bryansk_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="tula_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="oryol_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="kursk_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="belgorod_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="voronezh_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="lipetsk_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="tambov_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="ryasan_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="vladimir_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="ivanovo_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="kostroma_area"></canvas>
    </div>
</div>
<div class="col-2">
    <div class="row">
        <canvas id="yaroslavl_area"></canvas>
    </div>
</div>
<object src="img/cr.svg"></object>
</body>
<script src="js/charts/cr_charts.js"></script>
</html>
