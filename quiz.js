const form=document.querySelector(".quiz-form");
const button=document.querySelector(".btn");
const output=document.querySelector(".output");

const correctAnswer=["180°","12cm","Not possible","three","60°"];

function checkAnswer(){
    let score=0;
    let index=0;
    const formResult= new FormData(form);
    for(let value of formResult.values()){
        if(value===correctAnswer[index]){
            score=score+1;
        }
        index=index+1;
    }
    output.innerText="your total score is:"+score;
}

button.addEventListener("click",checkAnswer);