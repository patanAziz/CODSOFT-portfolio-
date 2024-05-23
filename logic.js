console.log('Lets write java script!!!!!');
let a= document.querySelector(".hamburg");
a.addEventListener("click",myfunction);
function myfunction(){
    document.querySelector("#h").style.top='0';
}


let b= document.querySelector(".contentdev");
b.addEventListener("click",myfunction1);
function myfunction1(){
    document.querySelector("#h").style.left="-600px";
}
