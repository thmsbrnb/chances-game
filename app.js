$('.screen__initialize').hide()
$('.screen__play').hide()

// ENTER
$('a:first').on('click', function(e){
    $('.screen__home').fadeOut(100)
    $('.screen__initialize').fadeIn(100)
})

// GO TO PLAYER
$('button:eq(0)').on('click', function (e) {
    $('.screen__initialize').fadeOut(100)
    $('.screen__play').fadeIn(100)

    $('.player-name1').text($('input:eq(0)').val())
    $('.player-name2').text($('input:eq(1)').val())

    if ($('input:eq(0)').val() == 0) {
        $('.player-name1').text('Player #1')
        $('.player-name2').text('Player #2')
    }
})

// CHANGE PLAYERS
$('a:eq(1)').on('click', function (e) {
    $('.screen__play').fadeOut(100)
    $('.screen__initialize').fadeIn(100)

    $('input:eq(0)').val('')
    $('input:eq(1)').val('')

    $('.player-name1').css('color','rgba(255,255,255,0.95)')
    $('.player-name2').css('color','rgba(255,255,255,0.95)')
    
    countOne = 1
    $('.player-score1').text(`Score: 0`)
    countTwo = 1
    $('.player-score2').text(`Score: 0`)
    countRound = 2
    $('button:eq(1)').text(`Play`)
})

// PLAY
const diceOne = document.querySelectorAll('img')[0]
const diceTwo = document.querySelectorAll('img')[1]
const scoreOne = document.querySelectorAll('h3')[0]
const scoreTwo = document.querySelectorAll('h3')[1]

let countOne = 1
let countTwo = 1
let countRound = 2

$('button:eq(1)').on('click', function (e) {
    const randomOne = Math.floor(Math.random() * 6) + 1
    const randomTwo = Math.floor(Math.random() * 6) + 1

    const faceOne = `img/dice${randomOne}.png`
    const faceTwo = `img/dice${randomTwo}.png`

    diceOne.setAttribute('src', faceOne)
    diceTwo.setAttribute('src', faceTwo)

    let countPlays = countRound++
    $('button:eq(1)').text(`Round ${countPlays}`)

    $('img:first').fadeOut(10)
    $('img:last').fadeOut(10)
    $('img:first').fadeIn(225)
    $('img:last').fadeIn(225)

    $('.player-name1').css('color','rgba(255,255,255,0.95)')
    $('.player-name2').css('color','rgba(255,255,255,0.95)')

    if(faceOne === faceTwo){
        // $('.player-name1').css('color','rgba(34,34,34,.7')
        // $('.player-name2').css('color','rgba(34,34,34,.7')
        $('.player-name1').fadeOut()
        $('.player-name1').fadeIn(75)
        $('.player-name2').fadeOut()
        $('.player-name2').fadeIn(75)
    }
    else if(faceOne > faceTwo){
        $('.player-name1').css('color','#d4af37')
        $('.player-name1').fadeOut()
        $('.player-name1').fadeIn(75)
        let scoreOne = countOne++
        $('.player-score1').text(`Score: ${scoreOne}`)
    }
    else{
        $('.player-name2').css('color','#d4af37')
        $('.player-name2').fadeOut()
        $('.player-name2').fadeIn(75)
        let scoreTwo = countTwo++
        $('.player-score2').text(`Score: ${scoreTwo}`)
    }
})

// RESET
$('button:eq(2)').on('click', function (e) {
    
    $('.player-name1').css('color','rgba(255,255,255,0.95)')
    $('.player-name2').css('color','rgba(255,255,255,0.95)')
    
    countOne = 1
    $('.player-score1').text(`Score: 0`)
    countTwo = 1
    $('.player-score2').text(`Score: 0`)
    countRound = 2
    $('button:eq(1)').text(`Play`)
})
