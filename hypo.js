const input=document.querySelectorAll(".enter-input");
const button=document.querySelector("#btn-hypo");
const outputMessage=document.querySelector(".message");

function calculateHypo(base1,base2){
    const baseSum=Math.pow(base1,2)+Math.pow(base2,2);
    const totalHypo=Math.pow(baseSum,1/2);
    return totalHypo;
}

function checkHypotenuse(){
    const totalHypo=calculateHypo(input[0].value,input[1].value)
    if(input[0].value&&input[1].value){
        outputMessage.innerText="The Hypotenuse is:"+totalHypo;
    }else{
        outputMessage.innerText="please enter both fields";
    }
}

button.addEventListener("click",checkHypotenuse);