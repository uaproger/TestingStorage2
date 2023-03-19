// перевіряємо чи немає прозорості елемента
function isSetStyle(el) {
    el = el.attr('style').split(';')[0]
    return parseInt(el.split(':')[1])
}

// дефолтуємо завантаження екранів на пристроях
function resetDownload() {
    itsContry = 0
    $(".top").remove()
    let leftt = 0
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            if (gadget[j] == 'laptop') {
                leftt = 'calc(var(--index) * 0.15)'
            } else if (gadget[j] == 'smartphone') {
                leftt = 'calc(var(--index) * 0.35)'
            } else if (gadget[j] == 'telephone') {
                leftt = 'calc(var(--index) * 0.35)'
            }
            $('.' + countries[i] + ' .' + gadget[j] + '-mask > .color').css({"transform" : "translateX(-51%)", "transition" : "all 100ms linear"})
        }
    }
}

// встановлюемо підключення до головного сервера
function setGeneral() {
    speed = 0

    // прибираємо всі існуючі підключення
    const line = $('.line')
    for (let l = 0; l < line.length; l++) {
        $(line[l]).css({"opacity" : "0"})
    }

    // отримуємо головний сервер
    const parent = $('#general').parents()
    const block_parent = $(parent[1]).attr('class')
    let first_second = ''
    let genes = 0
    if (block_parent == 'usa') {
        first_second = '.' + $(parent[0]).attr('class').split(' ')[1]
    }
    let general = $('.' + block_parent + ' > .block-server' + first_second + ' > .server')

    // перевіряємо де знаходиться головний сервер
    if (block_parent == 'usa' && first_second == '.second') {
        genes = 1
    } else if (block_parent == 'europe') {
        genes = 2
    } else if (block_parent == 'asia') {
        genes = 3
    }

    // підєднуємо всі існуючі пристрої до головного сервера
    for (let i = 0; i < 3; i++) {
        for (const key in gadgets) {
            if (gadgets[key][gadget[i]].attr('style')) {
                if (isSetStyle(gadgets[key][gadget[i]]) === 1) {
                    lines[key][genes][gadget[i]].css({"opacity" : "1"})
                    general.css({"animation" : "start 0.3s linear"})
                    setSpeed(key, gadget[i], speeds[key][gadget[i]][genes], 2)
                }
            }
        }
    }
    // показуємо результати завантажень у таблиці
    setTimeout( () => {
        $('.report').css({"display" : "flex"})
        $('.alexproger').hide()
        $('.restart').show()
    }, parseInt(speed))
}

/**
 * --- SET CONNECT FOR GADGETS ---
 */
// отримуємо затримку та тривалість завантаження
function setSpeed(cont, gadg, spee, numero) {
    let rand = Math.floor(Math.random() * 9) + 1
    let bigRand = Math.floor(Math.random() * 12) + 7
    let veryBigRand = Math.floor(Math.random() * 23) + 13
    let latency = Math.round((spee / bigRand) + rand)
    let time = 0
    let ultraHD = '4K/2160p Ultra HD'
    let fullHD = '1080p Full HD'
    let itsHD = '740p HD'
    let noneHD = '480p'
    let resolution = ''
    let stars = ''
    let regular = '<i class="fa-regular fa-star"></i>'
    let solid = '<i class="fa-solid fa-star"></i>'

    // форматуємо тривалість завантаження
    if (latency > 50) {
        time = Math.round((spee / 100) + veryBigRand)
    } if (latency > 150) {
        time = Math.round((spee / 100) + (veryBigRand + veryBigRand))
    } else {
        time = Math.round((spee / 100) + rand)
    }

    // визначаємо роздільну здатність та кількість зірок
    if (latency < 51 && time < 50) {
        resolution = ultraHD
        stars = solid + solid + solid + solid + solid
    } else if (latency < 100 && time < 50) {
        resolution = ultraHD
        stars = regular + solid + solid + solid + solid
    } else if (latency < 150 && time < 100) {
        resolution = fullHD
        stars = regular + regular + solid + solid + solid
    } else if (latency < 200 && time < 150) {
        resolution = itsHD
        stars = regular + regular + regular + solid + solid
    } else {
        resolution = noneHD
        stars = regular + regular + regular + regular + solid
    }

    // додаємо затримку та тривалість завантаження
    $('.' + cont + ' .top').remove()
    $('.' + cont + ' .block-gadget').after('<span class="top">latency: ' + latency + '</span>')
    let speee = spee + 100
    setTimeout( () => {
        $('.' + cont + ' .top').remove()
        $('.' + cont + ' .block-gadget').after('<span class="top">time: ' + time + ' sec</span>')
    }, parseInt(speee))

    // визначаємо головний блок таблиці
    let firstBlock = ''
    if (numero == 2) {
        firstBlock = 'object-storage'
    }
    if (numero == 1) {
        firstBlock = 'byte-cloud'
    }

    // додаємо інформацію у таблиці
    if (cont == 'usa') {
        $('.' + firstBlock + ' .stars.' + cont + '_table').html(stars)
        $('.' + firstBlock + ' .left.' + cont + '_table > div:last').text(latency)
        $('.' + firstBlock + ' .center.' + cont + '_table > div:last').text(time + ' сек.')
        $('.' + firstBlock + ' .right.' + cont + '_table > div:last').text(resolution)
    } else if (cont == 'mexica') {
        $('.' + firstBlock + ' .stars.' + cont + '_table').html(stars)
        $('.' + firstBlock + ' .left.' + cont + '_table > div:last').text(latency)
        $('.' + firstBlock + ' .center.' + cont + '_table > div:last').text(time + ' сек.')
        $('.' + firstBlock + ' .right.' + cont + '_table > div:last').text(resolution)
    } else if (cont == 'europe') {
        $('.' + firstBlock + ' .stars.' + cont + '_table').html(stars)
        $('.' + firstBlock + ' .left.' + cont + '_table > div:last').text(latency)
        $('.' + firstBlock + ' .center.' + cont + '_table > div:last').text(time + ' сек.')
        $('.' + firstBlock + ' .right.' + cont + '_table > div:last').text(resolution)
    } else if (cont == 'asia') {
        $('.' + firstBlock + ' .stars.' + cont + '_table').html(stars)
        $('.' + firstBlock + ' .left.' + cont + '_table > div:last').text(latency)
        $('.' + firstBlock + ' .center.' + cont + '_table > div:last').text(time + ' сек.')
        $('.' + firstBlock + ' .right.' + cont + '_table > div:last').text(resolution)
    } else if (cont == 'australia') {
        $('.' + firstBlock + ' .stars.' + cont + '_table').html(stars)
        $('.' + firstBlock + ' .left.' + cont + '_table > div:last').text(latency)
        $('.' + firstBlock + ' .center.' + cont + '_table > div:last').text(time + ' сек.')
        $('.' + firstBlock + ' .right.' + cont + '_table > div:last').text(resolution)
    }

    // демонструємо завантаження на дисплеях пристроїв
    $('.' + cont + ' .' + gadg + '-mask > .color').css({"transform" : "translateX(0)", "transition" : "all " + spee + "ms linear"})
    
    // встановлюемо тривалість затримки між підключеннями серверів
    if (spee > speed) {
        speed = spee + 3000
    }
}


function setConnect() {
    let servFUSA = 0
    let servSUSA = 0
    let servEurope = 0
    let servAsia = 0
    if (firstServerUSA.attr('style')) {
        servFUSA = isSetStyle(firstServerUSA)
    }
    if (secondServerUSA.attr('style')) {
        servSUSA = isSetStyle(secondServerUSA)
    }
    if (serverEurope.attr('style')) {
        servEurope = isSetStyle(serverEurope)
    }
    if (serverAsia.attr('style')) {
        servAsia = isSetStyle(serverAsia)
    }

    // підєднуємо всі існуючі пристрої до найблищого сервера
    for (let i = 0; i < 3; i++) {
        for (const key in gadgets) {
            if (gadgets[key][gadget[i]].attr('style')) {
                if (isSetStyle(gadgets[key][gadget[i]]) === 1) {
                    // usa
                    if (key == 'usa' && servFUSA === 1) {
                        lines[key][0][gadget[i]].css({"opacity" : "1"})
                        firstServerUSA.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][0], 1)
                    } else if (key == 'usa' && servFUSA === 0) {
                        lines[key][1][gadget[i]].css({"opacity" : "1"})
                        secondServerUSA.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][1], 1)
                    }
                    // mexica
                    if (key == 'mexica' && servSUSA === 1) {
                        lines[key][1][gadget[i]].css({"opacity" : "1"})
                        secondServerUSA.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][1], 1)
                    } else if (key == 'mexica' && servSUSA === 0) {
                        lines[key][0][gadget[i]].css({"opacity" : "1"})
                        firstServerUSA.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][0], 1)
                    }
                    // europe
                    if (key == 'europe' && servEurope === 1) {
                        lines[key][2][gadget[i]].css({"opacity" : "1"})
                        serverEurope.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][2], 1)
                    } else if (key == 'europe' && servEurope === 0) {
                        lines[key][0][gadget[i]].css({"opacity" : "1"})
                        firstServerUSA.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][0], 1)
                    }
                    // asia
                    if (key == 'asia' && servAsia === 1) {
                        lines[key][3][gadget[i]].css({"opacity" : "1"})
                        serverAsia.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][3], 1)
                    } else if (key == 'asia' && servAsia === 0) {
                        lines[key][2][gadget[i]].css({"opacity" : "1"})
                        serverEurope.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][2], 1)
                    }
                    // australia
                    if (key == 'australia' && servAsia === 1) {
                        lines[key][3][gadget[i]].css({"opacity" : "1"})
                        serverAsia.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][3], 1)
                    } else if (key == 'australia' && servAsia === 0) {
                        lines[key][2][gadget[i]].css({"opacity" : "1"})
                        serverEurope.css({"animation" : "start 0.7s linear"})
                        setSpeed(key, gadget[i], speeds[key][gadget[i]][2], 1)
                    }
                }
            }
        }
    }

    // затримка між підключеннями серверів
    setTimeout( () => {
        resetDownload()
        setTimeout( () => {
            setGeneral()
        }, 150)
    }, parseInt(speed))
}

