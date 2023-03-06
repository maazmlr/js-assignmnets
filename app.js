q1
a=+prompt("Enter an integer");
document.writeln("RESULT");
document.write("<br>");
document.writeln("tHE value of a is "+a);
document.write("<br>");
document.write("a is "+(++a));
document.write("<br>");

document.writeln("tHE value of a is "+a);
document.write("<br>");
document.write("a is "+(a++));
document.write("<br>");

document.writeln("tHE value of a is "+a);
document.write("<br>");
document.write("a is "+(--a));
document.write("<br>");

document.writeln("tHE value of a is "+a);
document.write("<br>");
document.write("a is "+(a--));


Q2

var a =+prompt("Enter an integer");
var b =+prompt("Enter an integer");
document.writeln("a is "+a+" b is "+b);
document.write("<br>");
document.write("--a is"+(--a));
document.write("<br>");
document.write("--a - --b is "+(--a - --b));
document.write("<br>");
document.write("--a - --b + ++b is "+(--a - --b + ++b));
document.write("<br>");
document.write("--a - --b + ++b + b--; is "+(--a - --b + ++b + b--));

q3
var str=prompt("Enter your name ");
document.writeln("hy "+str);

q4
var num1 = +prompt("Enter table No")
document.write("Table of " + num1 + "<br><br>" + num1 + " X 1 = "  + (num1*1) + "<br>" + "<br>" + num1 + " X 2 = " + (num1*2) + "<br>"+ "<br>" + num1 + " X 3 = "  + (num1*3) + "<br>"+ "<br>" + num1 + " X 4 = " + (num1*4) + "<br>"+ "<br>" + num1 + " X 5 = " + (num1*5) + "<br>"+ "<br>" + num1 + " X 6 = " + (num1*6) + "<br>"+ "<br>" + num1 + " X 7 = " + (num1*7) + "<br>"+ "<br>" + num1 + " X 8 = " + (num1*8) + "<br>"+ "<br>" + num1 + " X 9 = " + (num1*9) + "<br>"+ "<br>" + num1 + " X 10 = " + (num1*10) + "<br>")

q5
var sub1=prompt("Enter name of subject ");
var sub2=prompt("Enter name of subject ");
var sub3=prompt("Enter name of subject ");
var total =100;
var subobt1=+prompt("enter the "+sub1+" marks");
var subobt2=+prompt("enter the "+sub2+" marks");
var subobt3=+prompt("enter the "+sub3+" marks");
document.writeln("your percentage in "+sub1+" is "+(((subobt1/total))*100)+"%");
document.write("<br>");
document.writeln("your percentage in "+sub2+" is "+(((subobt2/total))*100)+"%");
document.write("<br>");
document.writeln("your percentage in "+sub3+" is "+(((subobt3/total))*100)+"%");
document.write("<br>");