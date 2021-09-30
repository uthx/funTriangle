const angleInput=document.querySelectorAll(".angle-input");
const button=document.querySelector("#btn");
const message=document.querySelector(".message");

function checkSumOfAngles(angle1,angle2,angle3){
    const angleSum=angle1+angle2+angle3;
    return angleSum;
}

function istriangle(){
        const angleSum=checkSumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));
        if(angleInput[0].value&&angleInput[1].value&&angleInput[2].value){
            if(angleSum===180){
                message.innerText="yes the entered angles form a triangle.";
            }else{
                message.innerText="no the entered angles don't form a triangle.";
            }
        }else{
            message.innerText="Please enter all the fields.."
        }
     
 
}

button.addEventListener("click",istriangle);