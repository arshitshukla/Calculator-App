let string="";

let buttons=document.getElementsByClassName("button");

Array.from(buttons).forEach((button) => 
{
    button.addEventListener("click",a =>  
    {
    if(a.target.innerHTML=="=")
    {
        string=eval(string);
        document.querySelector("input").value=string;
    }
    
    else if(a.target.innerHTML=="C")
    {
        string="";
        document.querySelector("input").value=string;
    }
    
    else if(a.target.innerHTML=="Delete")
    {
        string=string.substring(0,string.length-1);
        document.querySelector("input").value=string;
    }
    
    else if(a.target.innerHTML=="+/-")
    {
        string=string*-1;
        document.querySelector("input").value=string;
    }
    
    else{
        string=string+a.target.innerHTML;
        document.querySelector("input").value=string;
    }
});
});
// function delet(){
//     string=string.substring(0,string.length-1);

// }