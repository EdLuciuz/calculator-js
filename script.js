const question = document.querySelector(".question")
const answer = document.querySelector(".answer")

const numBtn = document.querySelector("#num")

numBtn.addEventListener('click', () => {
    let content = numBtn.textContent
    console.log(content)
})