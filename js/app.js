console.log("Tamagotchi")
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0, 
    hunger: 0,
    sleepiness: 0,
}
let timer 
let gameOver

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector("#play")
const feedBtnEl = document.querySelector("#feed")
const sleepBtnEl = document.querySelector("#sleep")

const gameMessageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#restart')

/*-------------------------------- Functions --------------------------------*/
const getRandomInt = () => {
    return Math.floor(Math.random() * 4)
}

const render = () => {
    // if the game is not over 
    // display the updated stats in the browser
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepStatEl.textContent = state.sleepiness

    if(gameOver) {
        resetBtnEl.classList.remove("hidden")
        gameMessageEl.classList.remove("hidden")
        clearInterval(timer)
    }
}

const playBtnClick = () => {
    state.boredom = 0
    render()
}

const feedBtnClick = () => {
    state.hunger = 0
    render()
}

const sleepBtnClick = () => {
    state.sleepiness = 0
    render()
}

const updateStates = () => {
    // increment each of the stats by a random number 
    state.boredom += getRandomInt()
    state.hunger += getRandomInt()
    state.sleepiness += getRandomInt()
}

const checkGameOver = () => {
    // check if each stat is greater than 9 if so then set gameOver to true
    if(
        state.boredom > 9 ||
        state.hunger > 9 ||
        state.sleepiness > 9
    ){
        gameOver = true
    }

}

const runGame = () => {
    updateStates() 
    checkGameOver() 
    render()
}

const init = () => {
    resetBtnEl.classList.add("hidden")
    gameMessageEl.classList.add("hidden")
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    timer = setInterval(runGame, 2000)
    gameOver = false
    render()
}

init()

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)

resetBtnEl.addEventListener('click', init)