'use strict'
var gCurrQuestIdx=0
var sentece1 = []

var gQuests = [
    {id: 1, opts:['Spongebob is jellyfishing!', 'Spongebob is making a Krabby Patty!'], correctOptIndex:0 },
    {id: 2, opts:['Patrick Star is dancing!', 'Patrick Star is blowing bubbles'], correctOptIndex:0 },
    {id: 3, opts:['Squidward is playing the clarinet.', 'Squidward is mad at Spongebob.'], correctOptIndex:1 },
    {id: 4, opts:['Gary is sleeping.', 'Gary is eating.'], correctOptIndex:1 }
]

function init(){
    renderQuest(gCurrQuestIdx)
}

function goToNextQuest(){
    if(gCurrQuestIdx===gQuests.length-1){
        var again = confirm('You Won!! Would you like to play again?')
        if(again){
            gCurrQuestIdx=0
            init()
            return
        } 
        document.body.innerHTML = ''
        return
    }
    gCurrQuestIdx++
    init()
}

function wrongAnswer(optionIdx){
    var elWrong = document.querySelector(`#answer${optionIdx}`)
    elWrong.classList.add('wrong')
    setTimeout(()=>{
        elWrong.classList.remove('wrong')
    }, 500)
}

function checkAnswer(optionIdx){
    var currQuest = gQuests[gCurrQuestIdx]
    console.log(currQuest)
    console.log(gQuests)
    if(optionIdx===currQuest.correctOptIndex){
        goToNextQuest()
    } else{
        wrongAnswer(optionIdx)
    }
}

function renderImg(imgIdx){
    var elImgContainer = document.querySelector('.img-container')
    elImgContainer.innerHTML = `<img src= "img/${imgIdx + 1}.gif">`

}
function renderQuest(questIdx){
    renderImg(questIdx)
    var elQuest = document.querySelector('.quest')
    var strHTML =''
    var options = gQuests[questIdx].opts
    for (var j = 0; j < options.length; j++){
        strHTML += `<button id="answer${j}" class="option" onclick="checkAnswer(${j})">${options[j]}</button>`
    }
    strHTML += '<br>'
    elQuest.innerHTML = strHTML
}

