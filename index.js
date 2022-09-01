const btns = document.querySelectorAll(".btn")
const answerSection = document.querySelector(".answer-section")


btns.forEach(function(btn){
    btns.addEventListener("clcik", function(e){
        if (btns.classList.contains("show-answer")){
            btns.classList.remove("hide-answer")
        }else{
            btns.classList.add("show-answer")
        }
    })
})                       