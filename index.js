const btns = document.querySelectorAll(".btn")
const answerSection = document.querySelector(".answer-section")
const questionItself = document.querySelectorAll(".question-itself")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("show-answer") 
    })
})