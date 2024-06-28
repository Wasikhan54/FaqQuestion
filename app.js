const ans = document.querySelectorAll('.answere')
let ques = document.querySelectorAll('.question').forEach((question)=>{
    question.addEventListener("click",()=>{
        console.log('hellworld')
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');

    })
}
)