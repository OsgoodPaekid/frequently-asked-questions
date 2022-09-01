const btns = document.querySelectorAll(".btn")
const answerSection = document.querySelector(".answer-section")


btns.forEach(function(btn){
   btn.addEventListener("clcik", function(e){
    const question = e.currentTarget
    question.classList.toggle("show-answer")
    console.log(question)
   })
})