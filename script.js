const question = document.querySelector(".question")
const answer = document.querySelector(".answer")

const numBtn = document.querySelectorAll("#num")
const opeBtn = document.querySelectorAll('.ope')
const CBtn = document.querySelector('#clear')
let display = ''

function operate() {

}

numBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let numcontent = btn.textContent
        display += numcontent
        question.textContent = display
    })
})

opeBtn.forEach((btn2) => {
    btn2.addEventListener('click', () => {
        let opecontent = btn2.textContent
        display += opecontent
        question.textContent = display
    })
})

CBtn.addEventListener('click', () => {
    display = ''
    question.textContent =display
})
