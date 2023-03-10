const sizes = ['sm', 'md', 'lg']
const countries = ["usa", "mexica", "europe", "asia", "australia"]
const gadget = ['laptop', 'smartphone', 'telephone']
const block_wh = 'calc(var(--index) * 2'

// позиції пристроїв на мапі
const continent = {
    'usa' : {
        'laptop' : {
            'top' : 'calc(var(--index) * 0.2)',
            'left' : 'calc(var(--index) * 2.5)'
        },
        'smartphone' : {
            'top' : 'calc(var(--index) * 2.2)',
            'left' : 'calc(var(--index) * -0.2)'
        },
        'telephone' : {
            'top' : 'calc(var(--index) * 0.5)',
            'left' : 'calc(var(--index) * -2.7)'
        }
    },
    'mexica' : {
        'laptop' : {
            'top' : 'calc(var(--index) * 0.5)',
            'left' : 'calc(var(--index) * 2.3)'
        },
        'smartphone' : {
            'top' : 'calc(var(--index) * 3.5)',
            'left' : 'calc(var(--index) * 0.8)'
        },
        'telephone' : {
            'top' : 'calc(var(--index) * -1)',
            'left' : 'calc(var(--index) * -1.1)'
        }
    },
    'europe' : {
        'laptop' : {
            'top' : 'calc(var(--index) * 1)',
            'left' : 'calc(var(--index) * -1.5)'
        },
        'smartphone' : {
            'top' : 'calc(var(--index) * 3',
            'left' : 'calc(var(--index) * -5.8)'
        },
        'telephone' : {
            'top' : 'calc(var(--index) * -0.5)',
            'left' : 'calc(var(--index) * 2.3)'
        }
    },
    'asia' : {
        'laptop' : {
            'top' : 'calc(var(--index) * 1.5)',
            'left' : 'calc(var(--index) * 4.3)'
        },
        'smartphone' : {
            'top' : 'calc(var(--index) * 2.8)',
            'left' : 'calc(var(--index) * -1.3)'
        },
        'telephone' : {
            'top' : 'calc(var(--index) * -1.8)',
            'left' : 'calc(var(--index) * 6.8)'
        }
    },
    'australia' : {
        'laptop' : {
            'top' : 'calc(var(--index) * 1)',
            'left' : 'calc(var(--index) * 3.7)'
        },
        'smartphone' : {
            'top' : 'calc(var(--index) * 1.1)',
            'left' : 'calc(var(--index) * 1)'
        },
        'telephone' : {
            'top' : 'calc(var(--index) * 1)',
            'left' : 'calc(var(--index) * -1.5)'
        }
    }
}
let isClick = 0
let isClickPosition = 0
const text = [
    "Оберіть місце для системи Object Storage",
    "Оберіть ще мінімум два додаткові місця для ByteCloud і натисніть \"почати\""
]
let soundButton = document.querySelector('.soundbutton')
let audio = document.querySelector('.audio')
let isSetServer = {
    "block" : '',
    "rank" : 0
}

// servers
// сервери
const firstServerUSA = $('.usa > .block-server.first > .server')
const secondServerUSA = $('.usa > .block-server.second > .server')
const serverEurope = $('.europe > .block-server > .server')
const serverAsia = $('.asia > .block-server > .server')

// gadgets
// блоки пристроїв
const gadgets = {
    "usa" : {
        "laptop" : $('.usa > .block-gadget > .block-gadget__laptop'), 
        "smartphone" : $('.usa > .block-gadget > .block-gadget__smartphone'), 
        "telephone" : $('.usa > .block-gadget > .block-gadget__telephone')
    }, 
    "mexica" : {
        "laptop" : $('.mexica > .block-gadget > .block-gadget__laptop'), 
        "smartphone" : $('.mexica > .block-gadget > .block-gadget__smartphone'), 
        "telephone" : $('.mexica > .block-gadget > .block-gadget__telephone')
    }, 
    "europe" : {
        "laptop" : $('.europe > .block-gadget > .block-gadget__laptop'), 
        "smartphone" : $('.europe > .block-gadget > .block-gadget__smartphone'),
        "telephone" : $('.europe > .block-gadget > .block-gadget__telephone')
    }, 
    "asia" : {
        "laptop" : $('.asia > .block-gadget > .block-gadget__laptop'), 
        "smartphone" : $('.asia > .block-gadget > .block-gadget__smartphone'),
        "telephone" : $('.asia > .block-gadget > .block-gadget__telephone')
    }, 
    "australia" : {
        "laptop" : $('.australia > .block-gadget > .block-gadget__laptop'), 
        "smartphone" : $('.australia > .block-gadget > .block-gadget__smartphone'),
        "telephone" : $('.australia > .block-gadget > .block-gadget__telephone')
    }
}

// лінії підключень до пристроїв
const lines = {
    "usa" : {
        0 : {
            "laptop" : $('.eunas'),
            "smartphone" : $('.eunam'),
            "telephone" : $('.eunal')
        },
        1 : {
            "laptop" : $('.wunas'),
            "smartphone" : $('.wunam'),
            "telephone" : $('.wunal')
        },
        2 : {
            "laptop" : $('.gnas'),
            "smartphone" : $('.gnam'),
            "telephone" : $('.gnal')
        },
        3 : {
            "laptop" : $('.snas'),
            "smartphone" : $('.snam'),
            "telephone" : $('.snal')
        }
    },
    "mexica" : {
        0 : {
            "laptop" : $('.eusas'),
            "smartphone" : $('.eusam'),
            "telephone" : $('.eusal')
        },
        1 : {
            "laptop" : $('.wusas'),
            "smartphone" : $('.wusam'),
            "telephone" : $('.wusal')
        },
        2 : {
            "laptop" : $('.gsas'),
            "smartphone" : $('.gsam'),
            "telephone" : $('.gsal')
        },
        3 : {
            "laptop" : $('.ssas'),
            "smartphone" : $('.ssam'),
            "telephone" : $('.ssal')
        }
    },
    "europe" : {
        0 : {
            "laptop" : $('.eues'),
            "smartphone" : $('.euem'),
            "telephone" : $('.euel')
        },
        1 : {
            "laptop" : $('.wues'),
            "smartphone" : $('.wuem'),
            "telephone" : $('.wuel')
        },
        2 : {
            "laptop" : $('.ges'),
            "smartphone" : $('.gem'),
            "telephone" : $('.gel')
        },
        3 : {
            "laptop" : $('.ses'),
            "smartphone" : $('.sem'),
            "telephone" : $('.sel')
        }
    },
    "asia" : {
        0 : {
            "laptop" : $('.euas'),
            "smartphone" : $('.euam'),
            "telephone" : $('.eual')
        },
        1 : {
            "laptop" : $('.wuas'),
            "smartphone" : $('.wuam'),
            "telephone" : $('.wual')
        },
        2 : {
            "laptop" : $('.gas'),
            "smartphone" : $('.gam'),
            "telephone" : $('.gal')
        },
        3 : {
            "laptop" : $('.sas'),
            "smartphone" : $('.sam'),
            "telephone" : $('.sal')
        }
    },
    "australia" : {
        0 : {
            "laptop" : $('.euos'),
            "smartphone" : $('.euom'),
            "telephone" : $('.euol')
        },
        1 : {
            "laptop" : $('.wuos'),
            "smartphone" : $('.wuom'),
            "telephone" : $('.wuol')
        },
        2 : {
            "laptop" : $('.gos'),
            "smartphone" : $('.gom'),
            "telephone" : $('.gol')
        },
        3 : {
            "laptop" : $('.sos'),
            "smartphone" : $('.som'),
            "telephone" : $('.sol')
        }
    }
}
let speed = 0
// швидкість завантаженнь з різних серверів
const speeds = {
    "usa" : {   // [east, west, euro, asia]
        "laptop" : [220, 520, 1010, 2270], // Chicago
        "smartphone" : [480, 330, 1230, 2050], // Dallas
        "telephone" : [560, 160, 1320, 1890] // Salt Lake City
    },
    "mexica" : {
        "laptop" : [1400, 1820, 1750, 3680], // Brasillia
        "smartphone" : [1660, 2120, 1670, 3370], // Bogota
        "telephone" : [880, 1070, 2500, 4080] // Buenos Aires
    },
    "europe" : {
        "laptop" : [980, 1710, 200, 1820], // Warsaw
        "smartphone" : [830, 1420, 320, 2510], // Madrid
        "telephone" : [1190, 1830, 410, 1790] // pidorstan
    },
    "asia" : {
        "laptop" : [2950, 2280, 1830, 510], // Dhaka
        "smartphone" : [3270, 2560, 1570, 660], // New Delhi
        "telephone" : [2330, 1440, 2960, 710] // Seoul
    },
    "australia" : {
        "laptop" : [2080, 1800, 2550, 930], // Sidney
        "smartphone" : [2200, 1910, 2530, 830], // Melbourne
        "telephone" : [2610, 2130, 2150, 1190] // Perth
    }
}