var numbers = document.querySelectorAll(".num");
let string = "";
let string1;
let string2;
Array.from(numbers).forEach((num)=>{
    num.addEventListener("click",(e)=>{
       if(e.target.innerHTML == "="){
        string = math.evaluate(string);
        document.querySelector("#screen").innerHTML = string;
       }else if(e.target.innerHTML == "%"){
        string = math.evaluate(string);
        string = string/100;
        document.querySelector("#screen").innerHTML = string;
       }else if(e.target.innerHTML == "//"){
        string = math.evaluate(string);
        string = math.floor(string);
        document.querySelector("#screen").innerHTML = string;
       }else if(e.target.innerHTML == "del"){
          string = string.slice(0,string.length-1);
          string1 = math.evaluate(string);
          if(string1==undefined){
             string1 = "";
             document.querySelector("#screen").innerHTML = string1;
          }else{
             document.querySelector("#screen").innerHTML = string1;
          }
       }else{
        string = string + e.target.innerHTML;
        document.querySelector("#screen").innerHTML = string;
       }
    })
})
c.addEventListener("click",() => {
     document.querySelector("#screen").innerHTML = "";
     string = "";
})
