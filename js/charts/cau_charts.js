let cau_total = document.getElementById('cau_total').getContext('2d');
new Chart(cau_total, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["В транзите", "Доставка сегодня", "Доставлено в контрактный срок", "Опоздало", "Под вопросом"],
        datasets: [
            {
                backgroundColor: ['rgb(255,248,0)', 'rgb(146,208,80)', 'rgb(0,176,80)',
                    'rgb(255,0,0)', 'rgb(255,192,0)'],
                data: [100, 100, 100, 100, 100],
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


let stv_area = document.getElementById('stv_area').getContext('2d');
new Chart(stv_area, {
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
        animation: false,
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
            text: 'Stavropol Krai',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let k_h_area = document.getElementById('k-h').getContext('2d');
new Chart(k_h_area, {
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
        animation: false,
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
            text: 'Karachay-Cherkess',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let k_b_area = document.getElementById('k-b').getContext('2d');
new Chart(k_b_area, {
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
        animation: false,
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
            text: 'Kabardino-Balkar',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let nosetia = document.getElementById('nosetia').getContext('2d');
new Chart(nosetia, {
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
        animation: false,
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
            text: 'North Ossetia-Alania',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let ingus = document.getElementById('ingus').getContext('2d');
new Chart(ingus, {
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
        animation: false,
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
            text: 'Ingushetia',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let chechen = document.getElementById('chechen').getContext('2d');
new Chart(chechen, {
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
        animation: false,
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
            text: 'Chechen Republic',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let dag = document.getElementById('dag').getContext('2d');
new Chart(dag, {
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
        animation: false,
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
            text: 'Dagestan',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});
