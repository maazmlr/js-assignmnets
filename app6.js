Q1
var F_name=prompt("Enter your First Name");
var L_name=prompt("Enter your Last Name");
var full_name=F_name+L_name;
document.write(full_name);

Q2
var i=prompt("Enter your Fav mobile name");
document.write("My Fav mobile name is "+i);
document.write(" the String contain "+i.length+" characters");

q3
var str="pakistan";
var s="hello wrold"
document.write("n index is:"+str.indexOf("n"));
document.write("<br>l index is:"+str.indexOf("l"));

q4
var str="Pakistan";
document.write("the character at index 3 is "+str.charAt(3));

q5
var F_name=prompt("Enter your First Name");
var L_name=prompt("Enter your Last Name");
var full_name=F_name.concat(L_name);
document.write(full_name);

q6
var str="Hyderabad";
var st=str.replace("Hyder","Islam");
document.write("The String is "+str+" and updated string is "+st);

q7
var message = "Ali and Sami are best friends. They play cricket and football together.";
var a=message.split(" ")
for(var i=0;i<a.length;i++) {
  a[i]= a[i].replace("and","&");
}
document.write(a.join(" "));

q8
var str="472";
var a=parseInt(str);
document.write("Value:"+str+"<br>type :"+typeof(str)+"<br>value :"+a+"<br>type :"+typeof(a));

q9
var str=prompt("Enter a string");
document.write(str.toUpperCase());

q10
var str=prompt("Enter a string");
document.write(str[0].toUpperCase()+str.slice(1))

q11
var str=35.36;
str=str.toString();
str=str.replace(".","");
document.write(str);

q12
var user_name=prompt("Enter your Username");
for(var i=0;i<user_name.length;i++) {
    if(user_name.charCodeAt(i)==33||user_name.charCodeAt(i)==44||user_name.charCodeAt(i)==46||user_name.charCodeAt(i)==64)
{
    alert("incorrect username");
}
}

q13
var a=["cake","apple pie","cookie","chips","paties"];
var v=prompt("Enter a sweet dish for search if its available or not").toLocaleLowerCase();
var bool=true;
for(var i=0;i<a.length;i++) {
    if (a[i]==v)
    {
        document.write("yes its availbale at index"+i);
        bool=false;
    }
}
if (bool) {
    alert("its not avialable")
}

q15
var inp=prompt("Enter your password");
if(inp.length<6)
{
    alert("incorrect password: password length must be at least 6 characters")
}
if(inp.charCodeAt(0)>=48 && inp.charCodeAt(0)<=57)
{
    alert("incorrect password: password cannot start with number");
}
if(!(inp.charCodeAt(0)>=48 && inp.charCodeAt(0)<=57)&&((inp.charCodeAt(0)>=65 && inp.charCodeAt(0)<=90)||(inp.charCodeAt(0)>=97 && inp.charCodeAt(0)<=122)))
{
    alert("incorrect password: password must have numbers & alphabet")
}

document.write(inp)

q16
var university = "University of Karachi";
university.split("")
for(var i=0;i<university.length;i++)
{
    document.write(university[i]+"<br>")
}

q17
var a="pakistan"
document.write("the last index is "+a[a.length-1])

q18

var str="The quick brown fox jumps over the lazy dog".toLowerCase()
str=str.split(" ");
var ind=prompt("enter the word to find occurence ");
var occurence=0;
for(var i=0;i<str.length;i++){
if(ind==str[i]){
    occurence++;
}
}
console.log(str)
document.write("the "+ind+" is occured "+occurence+" times")
