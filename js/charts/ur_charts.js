let ur_total = document.getElementById('ur_total').getContext('2d');
new Chart(ur_total, {
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
            text: 'Central',
            fontColor: '#000000',
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
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Southern',
            fontColor: '#000000',
            fontSize: 14,
        }
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
        elements: {
            center: {
                text: '100',
                color: '#000000', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'North Caucasian',
            fontColor: '#000000',
            fontSize: 14,
        }
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
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Volga',
            fontColor: '#000000',
            fontSize: 14,
        }
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
        elements: {
            center: {
                text: '100',
                color: '#000000', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
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
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Northwestern',
            fontColor: '#000000',
            fontSize: 14,
        }
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
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Ural',
            fontColor: '#000000',
            fontSize: 14,
        }
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
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Siberian',
            fontColor: '#000000',
            fontSize: 14,
        }
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
        elements: {
            center: {
                text: '100',
                color: '#ffffff', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 20 //Default 20 (as a percentage)
            }
        },
        animation: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Far Eastern',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});
