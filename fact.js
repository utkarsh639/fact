let btn = document.getElementById("btn");
btn.addEventListener('click',function(){
    let num = document.getElementById("text").value;
    let result = fact(num);
    let output = document.getElementById("demo");
    output.innerText = result;

});

function fact(num){
    if(num == 0){
        return 1;
    }
    else{
        return num * fact(num-1);
    }
}