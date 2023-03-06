ASSIGNMNET 5


Question 1
var students =[];
var str=["maaz","basit"];
var num=[1,2,3];
var bool=[true,false];
var mix=["maaz",89,false];
var degree=["SSC","hSC","BCS","BS","BCOM","MS","M.PHIL","PHD"];
console.log(degree);

Question 2
var stu=["maaz","basit","haziq"];
total=500;
var score=[320,230,480];
document.write("score of "+stu[0]+" is "+score[0]+" ,percentage is "+((score[0]/500)*100)+"% <br>"+
"score of "+stu[1]+" is "+score[1]+" ,percentage is "+((score[1]/500)*100)+"% <br>"+
"score of "+stu[2 ]+" is "+score[2]+" ,percentage is "+((score[2]/500)*100)+"% <br>"
);

var colors=["blue","green","yellow","red","purple"];
console.log(colors)
 colors[0]=prompt("enter the color to add at the begning of array");
console.log(colors);
colors[4]=prompt("enter the color to add at the ending of an arrray ")
console.log(colors);
colors[0]=["white","black"];
console.log(colors);
colors.shift();
console.log(colors);
colors.pop();
var ind=+prompt("enter the index ");
var name=prompt("enter the color name");
colors[ind]=name;
var inp=+prompt("enter the index to dlt element ");
var rang=+prompt ("enter hpw many elements tou want to delelte at that position");
colors.splice(ind.rang);


QUestion 3
var score=[89,67,363,25,43];
console.log(score);
score.sort;
console.log(score);

question no 4
var cities = ["karachi","lahore","islamabad","quetta","peshawar"];
var sel=cities.slice(2,4);
console.log(sel);

question 5

var arr = ["This", " is",  "my" , "cat" ];
var text=arr.join(",");
console.log(text);

QUESTION 6
var num=["keyboard","mouse","printer","monitor"];
console.log(num);
num.shift();
console.log(num);
num.shift();
console.log(num);
num.shift();
console.log(num);
num.shift();
console.log(num);

QUESTION 7
var num=["keyboard","mouse","printer","monitor"];
console.log(num);
num.pop();
console.log(num);
num.pop();
console.log(num);
num.pop();
console.log(num);
num.pop();
console.log(num);

question 8
var arr=["apple ","Samsung ","Motorola ","nokia"];
for (var i=0; i<arr.length; i++) {
    document.write("* "+arr[i]);
}


chap 17 -20
question 1 
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

question 2 
for(let i=1; i<=10;i++){
    document.write(i+"<br>");
}

question 3
var i=+prompt("enter a number to print that number table");
var y=+prompt("enter a lenght of table ");
for(let j=0;j<=y;j++) {
    document.write(i+" * "+j+" = "+(i*j)+"<br>");
}
question 4
var friuts=["apple","banana","mango","orange","strawberry"];
for (let i=0; i<friuts.length;i++) {
    document.write(friuts[i]+"<br>");
    document.write("element at "+i+" is "+friuts[i]+"<br>   ")
}


question 5
for (let i=1; i<=15; i++)
{

    document.write(i+" ");
}
document.write("<br>");
for(let i=10; i>0;i--)
{
    document.write(i+" ");  
}
document.write("<br>");
for(let i=1; i<20;i+=2)
{
    document.write(i+" ");
}
document.write("<br>");
for(let i=0; i<20;i+=2)
{
    document.write(i+" ");
}
document.write("<br>");
for(let i=0; i<=20;i+=2)
{
    document.write(i+"k ");
}

question 7
var a =["cake","apple pie","cookie","chips","paties"];
var se=prompt("enter to search a word");
var flag;
for(let i=0; i<a.length;i++){
    if(se==a[i])
    {
        flag= true;
        break;
    }
    else{
        false;
    }
}
if(flag){
    document.write("yes its available ");
}
else{
    document.write("no it's not available'");
}

question 8 
var A = [24, 53, 78, 91, 12];
var a=0;
for(let i=0; i<A.length;i++){
if (A[i]>a)
{
    a=A[i];
}
}
document.write("the largest frim array is " + a);

question 9
var A = [24, 53, 78, 91, 12];
var a=A[0];
for(let i=0; i<A.length;i++){
    if (A[i]<a)
    {
        a=A[i];
    }

}
document.write("the smallest frim array is " + a);

question 10
for (let i=5; i<=100;i+=5)
{
    document.write(i+" ,");
}


var a=[1,2,3,4,5,6,7,8,10];
var b=a[0];
for (let i=0; i<a.length;i++){
    if (a[i]!=b){
        a.splice(i,0,b)
    }
    b++
}
document.write(a)


