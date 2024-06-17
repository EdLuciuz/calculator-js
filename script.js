const question = document.querySelector(".question")
const answer = document.querySelector(".answer")

const numBtn = document.querySelectorAll("#num")
const opeBtn = document.querySelectorAll('.ope')
const CBtn = document.querySelector('#clear')
const equBtn = document.querySelector("#operate")
let display = ''

function operate() {
    if (display == '') {
        result = 0
    }

    if (display.includes('+')) {
        displayArray = display.split('+')
        result = parseFloat(displayArray[0]) + parseFloat(displayArray[1])
    }
    if (display.includes('-')) {
        displayArray = display.split('-')
        result = displayArray[0] - displayArray[1]
    }
    if (display.includes('×')) {
        displayArray = display.split('×')
        result = displayArray[0] * displayArray[1]
    }
    if (display.includes('÷')) {
        displayArray = display.split('÷')
        result = displayArray[0] / displayArray[1]
    }

    if (result == "Infinity") {
        result = 'Math Error'
    }

    else if (isNaN(result)) {
        result = 'Syntax Error'
    }
    console.log(result)
}

numBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let numcontent = btn.textContent
        display += numcontent
        question.textContent = display
        answer.textContent = ''
    })
})

opeBtn.forEach((btn2) => {
    btn2.addEventListener('click', () => {
        if (display == '') {
            display = continueAns
        }
        let opecontent = btn2.textContent
        display += opecontent
        question.textContent = display
        answer.textContent = ''
    })
})

CBtn.addEventListener('click', () => {
    display = ''
    question.textContent = display
    answer.textContent = ''
})

equBtn.addEventListener('click', () => {
    operate()
    if (isFinite(result)) {
        answer.textContent = parseFloat(result.toFixed(7))
        continueAns = result
    }

    else if (!isFinite(result)) {
        answer.textContent = result
        continueAns = 0
    }
    display = ''
})