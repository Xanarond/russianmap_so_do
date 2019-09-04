Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse+"px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

let total = document.getElementById('total').getContext('2d');
new Chart(total, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 3],
            }
        ],
    },


    options: {
        elements: {
            /*center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }*/
        },
        legend: {
            display: true,
            color: '#ffffff', //Default black
            fontStyle: 'Helvetica', //Default Arial
        },
    }
});


let central_reg = document.getElementById('central_reg').getContext('2d');
new Chart(central_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },


    options: {
        animation : false,
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Central',
            fontColor: '#ffffff',
            fontSize: 14,
        }
    }
});


let south_reg = document.getElementById('south_reg').getContext('2d');
new Chart(south_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});


let caucasian_reg = document.getElementById('caucasian_reg').getContext('2d');
new Chart(caucasian_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});

let privolzh_reg = document.getElementById('privolzh_reg').getContext('2d');
new Chart(privolzh_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});

let crimea_reg = document.getElementById('crimea_reg').getContext('2d');
new Chart(crimea_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});


let northwest_reg = document.getElementById('northwest_reg').getContext('2d');
new Chart(northwest_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});

let ural_reg = document.getElementById('ural_reg').getContext('2d');
new Chart(ural_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 1],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});

let siberia_reg = document.getElementById('siberia_reg').getContext('2d');
new Chart(siberia_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});

let fareastern_reg = document.getElementById('fareastern_reg').getContext('2d');
new Chart(fareastern_reg, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [73, 26, 10, 4, 0],
            }
        ],
    },

    // Configuration options go here
    options: {
        animation : false,
        legend: {
            display: false
        },
    }
});
