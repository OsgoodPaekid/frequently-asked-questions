const btns = document.querySelectorAll(".btn")
const answerSection = document.querySelector(".answer-section")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("show-answer") 
    })
})