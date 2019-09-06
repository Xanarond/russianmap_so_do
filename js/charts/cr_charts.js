let cr_total = document.getElementById('cr_total').getContext('2d');
new Chart(cr_total, {
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


let msk = document.getElementById('msk').getContext('2d');
new Chart(msk, {
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
            text: 'Moscow',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});


let msk_area = document.getElementById('msk_area').getContext('2d');
new Chart(msk_area, {
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
            text: 'Moscow Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});


let sml_area = document.getElementById('sml_area').getContext('2d');
new Chart(sml_area, {
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
            text: 'Smolensk Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let tver_area = document.getElementById('tver_area').getContext('2d');
new Chart(tver_area, {
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
            text: 'Tver Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let kaluga_area = document.getElementById('kaluga_area').getContext('2d');
new Chart(kaluga_area, {
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
            text: 'Kaluga Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});


let bryansk_area = document.getElementById('bryansk_area').getContext('2d');
new Chart(bryansk_area, {
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
            text: 'Bryansk Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let tula_area = document.getElementById('tula_area').getContext('2d');
new Chart(tula_area, {
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
            text: 'Tula Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let oryol_area = document.getElementById('oryol_area').getContext('2d');
new Chart(oryol_area, {
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
            text: 'Oryol Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let kursk_area = document.getElementById('kursk_area').getContext('2d');
new Chart(kursk_area, {
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
            text: 'Kursk Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let belgorod_area = document.getElementById('belgorod_area').getContext('2d');
new Chart(belgorod_area, {
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
            text: 'Belgorod Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let voronezh_area = document.getElementById('voronezh_area').getContext('2d');
new Chart(voronezh_area, {
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
            text: 'Voronezh Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let lipetsk_area = document.getElementById('lipetsk_area').getContext('2d');
new Chart(lipetsk_area, {
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
            text: 'Lipetsk Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let tambov_area = document.getElementById('tambov_area').getContext('2d');
new Chart(tambov_area, {
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
            text: 'Tambov Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let ryasan_area = document.getElementById('ryasan_area').getContext('2d');
new Chart(ryasan_area, {
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
            text: 'Ryasan Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let vladimir_area = document.getElementById('vladimir_area').getContext('2d');
new Chart(vladimir_area, {
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
            text: 'Vladimir Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let ivanovo_area = document.getElementById('ivanovo_area').getContext('2d');
new Chart(ivanovo_area, {
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
            text: 'Ivanovo Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let kostroma_area = document.getElementById('kostroma_area').getContext('2d');
new Chart(kostroma_area, {
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
            text: 'Kostroma Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});

let yaroslavl_area = document.getElementById('yaroslavl_area').getContext('2d');
new Chart(yaroslavl_area, {
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
            text: 'Yaroslavl Oblast',
            fontColor: '#000000',
            fontSize: 14,
        }
    }
});
