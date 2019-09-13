let sr_total = document.getElementById('sr_total').getContext('2d');
new Chart(sr_total, {
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

let volg_area = document.getElementById('volg_area').getContext('2d');
new Chart(volg_area, {
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
            text: 'Volgograd Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let rost_area = document.getElementById('rost_area').getContext('2d');
new Chart(rost_area, {
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
            text: 'Rostov Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let krasnodar_area = document.getElementById('krn_area').getContext('2d');
new Chart(krasnodar_area, {
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
            text: 'Krasnodar Krai',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let ad_rep = document.getElementById('ad_rep').getContext('2d');
new Chart(ad_rep, {
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
            text: 'Republic of Adygea',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let kal_rep = document.getElementById('kal_rep').getContext('2d');
new Chart(kal_rep, {
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
            text: 'Republic of Kalmykia',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let ast_area = document.getElementById('ast_area').getContext('2d');
new Chart(ast_area, {
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
            text: 'Astrakhan Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let crim_area = document.getElementById('crim_area').getContext('2d');
new Chart(crim_area, {
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
            text: 'Crimea',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});
