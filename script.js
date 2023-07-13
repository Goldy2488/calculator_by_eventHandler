const display=document.getElementById("display");
const buttons=document.getElementById("btn");

buttons.addEventListener("click",(event)=>{
    let target = event.target;
    // console.log(target.classList.contains("number"));
    if (target.innerHTML==="C") display.value="";
    else if (target.classList.contains("number")){
        display.value+=target.innerHTML
    } 
    else if  (target.classList.contains("operator")){
        let lastChar = display.value[display.value.lenth-1];//for the last character of string 
        if (["+","-","*","/","**","%","(",")"].includes(lastChar)){
            display.value=display.value.slice(0,-1)+target.innerHTML; //for eliminates  repeated operators
        }else{
            display.value+=target.innerHTML;
        }}
    else if(target.innerHTML==="="){
        if (display.value.lenth !==0){
            //handling unexpected syntax expressions
            try{
                display.value=eval(display.value);
            } catch(error){
                display.value ="syntax Error!";
            }
        }else display.value = "";
    }
})