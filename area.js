const input=document.querySelectorAll(".enter-input");
const button=document.querySelector("#area-btn");
const output=document.querySelector(".message");

function calculateSemiPerimeter(side1,side2,side3){
    const semiPeri=0.5*(side1+side2+side3);
    const q=semiPeri*(semiPeri-side1)*(semiPeri-side2)*(semiPeri-side3);
    const totalArea=Math.sqrt(q);
    return totalArea;    
}

function calculateArea(){
    const totalArea=calculateSemiPerimeter(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(Number(input[0].value)&&Number(input[1].value)&&Number(input[2].value)){
        output.innerText="Area of ∆ using Heron's formula is:"+totalArea.toFixed(2) +" cm²";
    }else{
        output.innerText="Please enter all fields";
    }
}

button.addEventListener("click",calculateArea);