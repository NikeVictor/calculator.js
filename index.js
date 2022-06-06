const num1 = prompt ('Enter the first number: ');  
const operator = prompt('Enter operator ( either +, -, *, / or % ):');
const num2 = prompt ('Enter the second number: '); 
if (operator == '+') { 
    result = num1 + num2;
  console.log(result);
}  
else if (operator == '-') { 
    result = num1 - num2; 
  console.log(result);
}  
else if (operator == '*') { 
    result = num1 * num2; 
  console.log(result);
}  
else if (operator == '%') { 
    result = num1 % num2; 
  console.log(result);
}  
else if (operator == "/"){  
    result = num1 / num2;
  console.log(result);
}  
else {
  console.log ("please choose an operator")
}