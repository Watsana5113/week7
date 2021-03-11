let mark = 79;
if(mark >=80 && mark <= 100){
    console.log("Grade A");
    document.getElementById("demo").innerHTML="Grade A";
}
else if(mark>=70 && mark<80){
    console.log("Grade B");
    document.getElementById("demo").innerHTML="Grade B";
}
else if(mark>=60 && mark<70){
    console.log("Grade C");
    document.getElementById("demo").innerHTML="Grade C";
}
else if(mark>=50 && mark<60){
    console.log("Grade D");
    document.getElementById("demo").innerHTML="Grade D";
}
else if(mark>=0 && mark<50){
    console.log("Grade F");
    document.getElementById("demo").innerHTML="Grade F";
}
else{
    console.log("ERROR");
    document.getElementById("demo").innerHTML="ERROR";
}