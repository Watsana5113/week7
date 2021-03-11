const number = prompt("Enter a number:");
if(number >= 0){
    console.log("You entered number : "+ number);
    document.getElementById("demo").innerHTML="You entered number : "+ number;
}
else{
    console.log("You entered a positive  number : "+ number);
    document.getElementById("demo").innerHTML="You entered a positive number : "+ number;
}
else{
    console.log("You entered a negative  number : "+ number);
    document.getElementById("demo").innerHTML="You entered a negative number : "+ number;
}