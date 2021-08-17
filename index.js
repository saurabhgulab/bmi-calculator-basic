var x = prompt("Enter your height in 'cm'");
var y = prompt("Enter your weight in 'kg'");
var comment = 0;
var BMI = (y/(x*x)*10000);
if(BMI<18.5){
  comment = " You are Underweight!";
} else if(BMI>=18.5 && BMI <25){
  comment = " You are Normal Weight!";
} else {
  comment = " You are Overweight!";
}
alert("Your BMI is: " + BMI + comment);
