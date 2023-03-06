                         Chapter 9 - 11


Question No 1
var name = prompt("In which city do you live?").toUpperCase()
if(name === "KARACHI"){
    alert("Welcome to city of lights")
}
else{
    alert("Input incorrect")
}

Question No 2
var gen = prompt("Enter your gender").toUpperCase()
if(gen === "MALE"){
    alert("Good Morning Sir.")
}
else if(gen === "FEMALE"){
    alert("Good Morning Ma'am.")
}
else{
    alert("Input incorrect")
}

Question No 3
var sig = prompt("Enter signal color").toUpperCase()
if(sig === "RED"){
    alert("Must Stop")
}
else if(sig === "YELLOW"){
    alert("Ready to move")
}
else if(sig === "GREEN"){
    alert("Move now")
}
else{
    alert("Input incorrect")
}

Question No 4
var amo = +prompt("Enter your remaining fuel in liters")
if(amo < 0.25){
    alert("Please refill the fuel in your car")
} 
else{
    alert("Sufficent petrol! Don't need to refill.")
}

Question No 5
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False")
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

Question No 6

var num1 = +prompt("How many marks you obtained in math")
var num2 = +prompt("How many marks you obtained in english")
var num3 = +prompt("How many marks you obtained in urdu")

var sum = num1 + num2 + num3;
var per = (sum/300) * 100;
if(per >= 80){
    document.write("<h1>Mark Sheet</h1>\nTotal marks: 300\nMarks obtained: " + sum + "\nPercentage: " + per + "%\nGrade: A-one\nRemarks: Excellent")
}
else if(per < 80 && per >=70){
    document.write("<h1>Mark Sheet</h1>\nTotal marks: 300\nMarks obtained: " + sum + "\nPercentage: " + per + "%\nGrade: A\nRemarks: GOOD")
}
else if(per < 70 && per >=60){
    document.write("<h1>Mark Sheet</h1>\nTotal marks: 300\nMarks obtained: " + sum + "\nPercentage: " + per + "%\nGrade: B\nRemarks: You need to improve")
}
else if(per < 60){
    document.write("<h1>Mark Sheet</h1>\nTotal marks: 300\nMarks obtained: " + sum + "\nPercentage: " + per + "%\nGrade: Fail\nRemarks: Sorry")
}
else{
    document.write("<h1>Mark Sheet</h1>\nInput incorrect")
}


Question 7

var sec = 7;
var num = +prompt("Guess the number between 1 to 10")
if(num === sec){
    document.write("Bingo! Correct answer.")
}
else if(num === ++sec){
    document.write("Close enough to the correct answer")
}
else{
    document.write("Sorry try again!")
}

Question 8
var num = +prompt("Enter any num")
if(num % 3 === 0){
    document.write("Number is divisble by 3")
}
else{
    document.write("Number isn't divisible by 3")
}

Question 9
var num = +prompt("Enter any num")
if(num % 2 === 0){
    document.write("Number is even")
}
else{
    document.write("Number is odd")
}

Question 10
var temp = +prompt("How's tha temperature today")
if(temp > 40){
    document.write("“It is too hot outside.”")
}
else if(temp > 30 && temp == 40){
    document.write("“The Weather today is Normal.”")
}
else if(temp > 20 && temp == 30){
    document.write("“Today's Weather is cool.”")
}
else if(temp > 10 && temp == 20){
    document.write("“OMG! Today's weather is so Cool.”")
}

Question NO 11
var num1 = +prompt("Enter num 1")
var num2 = +prompt("Enter num 1")
var op = prompt("Which operation do you like to do. E.g('+, x, /, -, %')")
var result;
if(op === "+"){
    result = num1 + num2;
    document.write("<h1>Calculator</h1>\n" + num1 + " + " + num2 + " is equal to " + result + ".")
}
else if(op === "-"){
    result = num1 - num2;
    document.write("<h1>Calculator</h1>\n " + num1 + " - " + num2 + " is equal to " + result + ".")
}
else if(op === "x"){
    result = num1 * num2;
    document.write("<h1>Calculator</h1>\n" + num1 + " X " + num2 + " is equal to " + result + ".")
}
else if(op === "/"){
    result = num1 / num2;
    document.write("<h1>Calculator</h1>\n" + num1 + " / " + num2 + " is equal to " + result + ".")
}
else if(op === "%"){
    result = num1 % num2
    document.write("<h1>Calculator</h1>\n" + num1 + " % " + num2 + " is equal to " + result + ".")
}



                         Chapter 12 - 13

Question No 1
var opt = prompt("Write a num or letter")
var str = (opt.charCodeAt(0))
var str1 = parseInt(str)
if(str1 > 96){
    document.write(opt + " is in lower case")
}
else if(str1 > 64){
    document.write(opt + " is in Upper case")
}
else if(opt > 0){
    document.write(opt + " is a number")
}

Question No 2
var num1 = +prompt("Enter number 1")
var num2 = +prompt("Enter number 2")
if(num1 > num2){
    document.write("<h1>Which number is greater</h1>\n " + num1 + " is greater than " + num2)
}
else if(num1 < num2){
    document.write("<h1>Which number is greater</h1>\n " + num2 + " is greater than " + num1)
}
else if(num1 === num2){
    document.write("<h1>Which number is greater</h1>\n " + num1 + " is equal to " + num2)
}

Question No 3
var num = +prompt("Enter any number")
if(num < 0){
    document.write("Your input is a negative")
}
else if(num > 0){
    document.write("Your input is a positive")
}
else if(num === 0){
    document.write("Your input is equal to zero")
}

Question No 4
var ch = prompt("Enter a character").toUpperCase()
if(ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
    document.write(ch + " is a vowel")
}
else{
    document.write(false)
}

Question No 5
var pass = "1234basit"
var pass1 = "basit1234"
var ente = prompt("Enter you passwor1")
var ente1 = prompt("Enter you password2")
if(pass != ente || pass1 != ente1){
    ente = prompt("“Please enter your password1”")
    ente1 = prompt("“Please enter your password2”")
    if(pass != ente || pass1 != ente1){
        document.write("“Incorrect password”")
    }
    else if(pass === ente || pass1 === ente1){
        document.write("“Correct! The password you entered matches the original password”.")
    }
}

Question No 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}

else{
    greeting = "Good evening";
}
document.write(greeting)

Question No 7
var tim = +prompt("What is the time now (Enter time in 24 hours format)")
var tim1 = tim - 12
if(tim1 < 0){
    document.write(tim + "am.")
}
else if(tim1 === 12){
    document.write(tim1 + "am.")
}
else if(tim1 > 0){
    document.write(tim1 + "pm.")
}
else if(tim === 12){
    document.write(tim + "pm")
}