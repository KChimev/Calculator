let buttons=document.querySelectorAll("[data-calculator-button]");
let numArr=[];
const oldNumber=document.querySelector("[data-output-back]");
const newNumber=document.querySelector("[data-output-front]");
let input=0;

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",()=>{
        if(buttons[i].hasAttribute("data-clear")){
            newNumber.textContent="";
            oldNumber.textContent="";
            document.getElementById("clicked").removeAttribute("id");
            input=0;
        }
        else if(buttons[i].hasAttribute("data-delete")){
            newNumber.textContent=newNumber.textContent.slice(0,newNumber.textContent.length-1);
        }
        else  if(buttons[i].hasAttribute("data-number")===true){
        numArr.push(buttons[i].value);
        updateInterface();
        }
        else if(buttons[i].hasAttribute("data-root")===true){
            newNumber.textContent=Math.sqrt(parseFloat(newNumber.textContent,10)).toFixed(5);
        }
        else if(buttons[i].hasAttribute("data-square")===true){
            if(document.getElementById("clicked")==null){
                input=1;
            }
            if(document.getElementById("clicked")!=null){
                document.getElementById("clicked").removeAttribute("id");
            }
            updateInterface();
            buttons[i].setAttribute("id","clicked");
        }
        else if(buttons[i].hasAttribute("data-factorial")===true){
            let result=parseInt(newNumber.textContent,10);
            for(let i=result-1;i>0;i--){
                result=result*i;
            }
            newNumber.textContent=result.toFixed(5);
        }
        else if(buttons[i].hasAttribute("data-ln")===true){
            newNumber.textContent=Math.log(parseFloat(newNumber.textContent,10)).toFixed(5);
        }
        else if(buttons[i].hasAttribute("data-operation")===true){
            if(document.getElementById("clicked")==null){
                input=1;
            }
            if(document.getElementById("clicked")!=null){
                document.getElementById("clicked").removeAttribute("id");
            }
            console.log(input);
            buttons[i].setAttribute("id","clicked");
            updateInterface();
        }
        else if(buttons[i].hasAttribute("data-result")===true){
            if(document.getElementById("clicked")!=null){
                let numberOne=parseFloat(oldNumber.textContent,10);
                let numberTwo=parseFloat(newNumber.textContent,10);
                let result;
                let operation=document.getElementById("clicked").value;
                switch(operation) {
                    case `+`:result=(numberOne+numberTwo);
                    break;
                    case`-`:result=(numberOne-numberTwo);
                    break;
                    case`*`:result=(numberOne*numberTwo);
                    break;
                    case`÷`:result=(numberOne/numberTwo);
                    break;
                    case`^`:result=Math.pow(numberOne,numberTwo);
                    break;
                }
                oldNumber.textContent="";
                newNumber.textContent=result.toFixed(5);
                document.getElementById("clicked").removeAttribute("id");
                input=0;
            }
        }
    })
}
function updateInterface(){
    if(input==1){
        oldNumber.textContent=newNumber.textContent;
        numArr=[];
        newNumber.textContent="";
        input=0;
    }
    else{
        newNumber.textContent=newNumber.textContent+numArr.splice(",");
    }
}
