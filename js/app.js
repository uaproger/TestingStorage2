/**
 * --- HOVER PEOPLE ---
 */
function getPeople(block, people, action) {
    // демонтсрація концентрації клієнтів при наведенні миші
    for (let i = 0; i < people; i++) {
        $('.' + block + ' > .block-people > .people-' + sizes[i]).attr('src', '/img/man_' + action + '.png')
    }
}
            
function onClick(block, people) {
    isClick += 1
    if (isClick == 1) {
        $('.next').show()
        $('.alexproger').hide()
    } else if (isClick == 5) {
        $('.next').hide()
        $('.alexproger').show()
        showPosition()
    }

    if (people == 1) {
        setGadget(block, people)
    } else if (people == 2) {
        setGadget(block, people)
    } else if (people == 3) {
        setGadget(block, people)
    }
}

/**
 * --- POSITIONS, SERVERS ---
 */
// демонстрація позицій серверів
function showPosition() {
    $('.mess').text(text[0])
    $('.next').hide()
    $('.alexproger').show()
    $('.position').css({"opacity" : "1"})
}

// виділення позиції сервера при наведенні миші
function getPosition(block, rank, action) {
    if (block == 'usa' && rank == 1) {
        $('.' + block + ' > .block-server.first > .position').attr('src', '/img/circle_' + action + '.png')
    } else if (block == 'usa' && rank == 2) {
        $('.' + block + ' > .block-server.second > .position').attr('src', '/img/circle_' + action + '.png')
    } else {
        $('.' + block + ' > .block-server > .position').attr('src', '/img/circle_' + action + '.png')
    }
}

// реєстрація серверів
function setServer(num, block, isRank) {
    // визначення головного сервера
    if (num == 1) {
        $('.mess').text(text[1])
        $('.' + block + ' > .block-server' + isRank + ' > .server')
            .attr('src', '/img/server.png')
            .addClass(block + ' block-server ' + isRank)
            .attr('id', 'general')
    }

    // демонстрація сервера
    $('.' + block + ' > .block-server' + isRank + ' > .position').css({"opacity" : "0"})
    $('.' + block + ' > .block-server' + isRank + ' > .server').css({"opacity" : "1", "animation" : "show 0.5s ease-in"})
    if (num == 4) {
        setTimeout( () => {
            // запуск підрахунку затримки та тривалості завантаження
            startCalc()
        }, 100)
    }
}


function onClickPosition(block, rank) {
    let isRank = ''
    
    // запобігання початку підрахунку з кількістю серверів меньше 3-х
    if (block != isSetServer['block'] || rank != isSetServer['rank']) {
        
        isClickPosition += 1
        // демонстрація кнопки "почати"
        if (isClickPosition == 3) {
            $('.alexproger').hide()
            $('.start').show()
        } else if (isClickPosition == 4) {
            $('.start').hide()
            $('.alexproger').show()
        }

        // виявлення рангу сервера та його реєстрація
        if (block == 'usa' && rank == 1) {
            isRank = '.first'
            setServer(isClickPosition, block, isRank)
        } else if (block == 'usa' && rank == 2) {
            isRank = '.second'
            setServer(isClickPosition, block, isRank)
        } else {
            isRank = ''
            setServer(isClickPosition, block, isRank)
        }

        // змінна для виявлення кількості серверів
        isSetServer = {
            "block" : block,
            "rank" : rank
        }
    }
}

// запуск підрахунку затримки та тривалості завантаження по натисненню кнопки "почати"
function startCalc() {
    $('.start').hide()
    $('.alexproger').show()
    $('.position').css({"opacity" : "0"})
    setConnect()
}

function setGadget(block, people) {
    let its_contry = ''
    if (block == 'usa') {
        its_contry = 'Північна Америка' // North America
    } else if (block == 'mexica') {
        its_contry = 'Південна Америка' // South America
    } else if (block == 'europe') {
        its_contry = 'Європа' // Europe
    } else if (block == 'asia') {
        its_contry = 'Азія' // Asia
    } else if (block == 'australia') {
        its_contry = 'Австралія' // Oceania
    }
    // додаємо таблиці
    $('.table').append('<div class="its-table ' + block + '_table"></div>')
    // створюємо шапку та тіло таблиці
    $('.its-table.' + block + '_table')
        .append('<div class="header ' + block + '_table"></div>')
        .append('<div class="main ' + block + '_table"></div>')
    // створюємо поле з назвою та поле з зірками
    $('.header.' + block + '_table')
        .append('<span class="contry ' + block + '_table"></span>')
        .append('<span class="stars ' + block + '_table"></span>')
    // додаємо назву таблиці
    $('.contry.' + block + '_table').text(its_contry)
    // додаємо пусті зірки
    $('.stars.' + block + '_table')
        .append('<i class="fa-regular fa-star"></i>')
        .append('<i class="fa-regular fa-star"></i>')
        .append('<i class="fa-regular fa-star"></i>')
        .append('<i class="fa-regular fa-star"></i>')
        .append('<i class="fa-regular fa-star"></i>')
    // додаємо три блока до тіла таблиці
    $('.main.' + block + '_table')
        .append('<span class="left ' + block + '_table"></span>')
        .append('<span class="center ' + block + '_table"></span>')
        .append('<span class="right ' + block + '_table"></span>')
    // заповнюємо блоки тіла таблиці
    $('.left.' + block + '_table').append('<div>Затримка</div>').append('<div></div>') // Latency
    $('.center.' + block + '_table').append('<div>Тривалість завантаження</div>').append('<div></div>') // Download time
    $('.right.' + block + '_table').append('<div>Відео трансляція</div>').append('<div></div>') // Video streaming


    

    // визначення які пристрої активні та де знаходяться
    $('.' + block + ' > .block-people').css({"opacity" : "0"})
    setTimeout( () => {
        $('.' + block + ' > .block-people').css({"display" : "none"})
    }, 100)
    for (let i = 0; i < people; i++) {
        $('.' + block + ' > .block-gadget > .block-gadget__' + gadget[i]).css({
            "opacity" : "1",
            "top" : continent[block][gadget[i]]['top'],
            "left" : continent[block][gadget[i]]['left'],
            "width" : block_wh,
            "height" : block_wh
        })
    }
}


/**
 * --- SOUND ---
 */
soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')
    soundButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
    if (audio.paused)
    audio.play()
    else {
    audio.pause()
    soundButton.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
})

window.onfocus = function() {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
    audio.pause()
}