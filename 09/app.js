//firts task
//const number=prompt("Enter a number");
//if(number%2==0)
//{
  //  console.log("The number " + number + " you wrote is even");
//}
//else{
  //  console.log("The number " + number + " you wrote is odd");
//}
//second task
//var i;
//for(i=10;i<=100;i++){
  //  if(i%2==0 && i%3==0){
 //       console.log(i);
  //  }
//}
//third task
const number1=prompt("Enter the first number");
const number2=prompt("Enter the second number");
const number3=prompt("Enter the third number");
let largest;
let smallest;
let prime=true;
if(number1>=number2 && number1>=number3){
  largest=number1;
}
else if(number2>=number1 && number2>=number3){
  largest=number2;
}
else{
  largest=number3;
}
console.log("The largest number is " + largest);
if(number1<=number2 && number1<=number3){
  smallest=number1;
}
else if(number2<=number1 && number2<=number3){
  smallest=number2;
}
else{
  smallest=number3;
}
console.log("The smallest number is " + smallest);
