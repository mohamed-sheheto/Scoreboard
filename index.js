const homeBtn1 = document.getElementById('home-score-btn-1')
const homeBtn2 = document.getElementById('home-score-btn-2')
const homeBtn3 = document.getElementById('home-score-btn-3')
const guestBtn1 = document.getElementById('guest-score-btn-1')
const guestBtn2 = document.getElementById('guest-score-btn-2')
const guestBtn3 = document.getElementById('guest-score-btn-3')
const homeScoreEl = document.getElementById('home-score-el')
const guestScoreEl = document.getElementById('guest-score-el')

let homeScore = 0;
const increaseHomeScoreOne = () => {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

const increaseHomeScoreTwo = () => {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

const increaseHomeScoreThree = () => {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

let guestScore = 0

guestBtn1.addEventListener('click', () => {
    guestScore += 1
    guestScoreEl.innerText = guestScore
})

guestBtn2.addEventListener('click', () => {
    guestScore += 2
    guestScoreEl.innerText = guestScore
})

guestBtn3.addEventListener('click', () => {
    guestScore += 3
    guestScoreEl.innerText = guestScore
})



