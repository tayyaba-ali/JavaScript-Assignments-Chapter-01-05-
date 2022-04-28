// ----------- Chapter 5 MATH EXPRESSIONS ----------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var firstNum = +prompt("Enter first number");
// var secondNum = +prompt("Enter second number");
// var add = firstNum + secondNum;
// document.write("Sum of " + firstNum + " and " + secondNum + " is " + add + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// Subtraction
// var sub = firstNum - secondNum;
// document.write("Subtraction of " + firstNum + " and " + secondNum + " is " + sub + "<br>");
// // Multiplication
// var mul = firstNum * secondNum;
// document.write("Multiplication of " + firstNum + " and " + secondNum + " is " + mul + "<br>");
// // Division
// var div = firstNum / secondNum;
// document.write("Division of " + firstNum + " and " + secondNum + " is " + div + "<br>");
// // Modulus
// var mod = firstNum % secondNum;
// document.write("Modulus of " + firstNum + " and " + secondNum + " is " + mod + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

// var number;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number.

// number = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.

// document.write("Initial value: " + number + "<br>");

// e. Increment the variable.
// number++;
// f. Show the value of variable in your browser like “Value after increment is: 6”.

// document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable.

// number += 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.

// document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable.

// number--;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.

// document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.

// number = number % 3;
// l. Output : “The remainder is : 0”.
// document.write("The remainder is: " + number + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable &
// calculate the cost of buying 5 tickets to a movie. Example output:

// var ticketPrice = 600;
// var total = ticketPrice * 5;
// document.write("The total cost to buy 5 tickets to a movie is " + total + "PKR" + "<br>");

// 5. Write a script to display multiplication table of any number in your browser. 

// document.write('Table of '+5+'<br>')
// for(var i=1;i<=10;i++){
//     document.write('5 X '+i+' ='+5*i+"<br>")
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.

// var celsius = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

// var fahrenheit = (celsius * 9 / 5) + 32;

// c. Now store a Fahrenheit temperature into a variable.

// fahrenheit = 77;

// d. Convert it to Celsius & output “NNoF is NNoC”.

// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(celsius + "C is " + fahrenheit + "F" + "<br/>"); 
// document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables
// // a. Price of item 1
// var itemprice1 = 150;
// // b. Price of item 2
// var itemprice2 = 350;
// // c. Ordered quantity of item 1
// var quantityItem1 = 2; 
// // d. Ordered Quantity of item 2
// var quantityItem2 = 4;
// // e. Shipping charges
// var shippingCharges = 100;
// // Compute the total cost & show the receipt in your browser.
// var total = (itemprice1 * quantityItem1) + (itemprice2 * quantityItem2) + shippingCharges;
// document.write("Price of Item 1 is " + itemprice1 + "<br/>");
// document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>");
// document.write("Price of Item 2 is " + itemprice2 + "<br/>");
// document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>");
// document.write("Shipping Charges " + shippingCharges + "<br/>");
// document.write("<br/>");
// document.write("Total cost of your order is " + total);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// var totalMarks = 1100;
// var marksObtained = 910;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h3>" + "Marks Sheet" + "</h3>");
// document.write("Total Marks: " + totalMarks + "<br/>");
// document.write("Marks Obtained: " + marksObtained + "<br/>");
// document.write("Percentage: " + percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// var pkr = (10 * 104.80) + (25 * 28);
// document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
// document.write("Total Currency in PKR: " + pkr);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var num = 5;
// num = (((num + 5) * 10) / 2);
// document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
// document.write("Output: " + num);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// var year = 2022;
// // b. Store their birth year in a variable.
// var birthYear = 2001;
// // c. Calculate their 2 possible ages based on the stored values.
// var age = year - birthYear;
// // Output them to the screen like so: “They are either NN or NN years old”.
// document.write("<h3>" + "Age Calculator" + "</h3>"); 
// document.write("Current Year: " + year + "<br/>");
// document.write("Birth Year: " + birthYear + "<br/>");
// document.write("Your age is: " + age);

// 12. The Geometrizer: Calculate properties of a circle.

// document.write("<h3>" + "The Geometrizer" + "</h3>");

// // a. Store a radius into a variable.

// var radius = 7;

// document.write("Radius of a Circle: " + radius + "<br/>");

// // b. Calculate the circumference based on the radius, and output “The circumference is NN”.

// var  circumference = 2 * 3.142 * radius;

// document.write("The circumference is: " + circumference + "<br/>");

// // (Hint : Circumference of a circle = 2 π r , π = 3.142)

// // Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var area = 3.142 * radius * radius;
// document.write("The area is: " + area);


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?Wonder no more.

// document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");
// // a. Store your favorite snack into a variable
// var snack = "Chocalate Chip";
// // b. Store your current age into a variable.
// var age = 20;
// // c. Store a maximum age into a variable.
// var maxAge = 50;
// // d. Store an estimated amount per day (as a number).
// var amount = 3;
// // e. Calculate how many would you eat total for the rest of your life.
// var eat = (60 - 20) * (365 * 3);
// // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// document.write("Favorite Snack: " + snack + "<br/>");
// document.write("Current Age: " + age + "<br/>");
// document.write("Estimated Maximum Age: " + maxAge + "<br/>");
// document.write("Amount of snacks per day: " + amount + "<br/>");
// document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);

// ----------- End of Chapter 5 ----------
