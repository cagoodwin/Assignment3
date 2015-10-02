//*************************************************************
//***********************PART 1********************************
//*************************************************************

//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
/*
var movies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
console.log(movies[1]);
*/

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

/*
var movies = new Array();
movies[0] = "Harry Potter";
movies[1] = "Waiting for Guffman";
movies[2] = "Best in Show";
movies[3] = "Grease";
movies[4] = "Pitch Perfect";
console.log(movies[0]);
*/

//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
/*
var movies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
var cut = movies.splice(2,5);
movies[2] = "Top Gun";
console.log(movies.concat(cut));
*/

//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

/*
var movies = new Array();
movies[0] = "Harry Potter";
movies[1] = "Waiting for Guffman";
movies[2] = "Best in Show";
movies[3] = "Grease";
movies[4] = "Pitch Perfect";
delete movies[0];
console.log(movies);
*/

//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

/*
var movies = new Array();
movies[0] = "Harry Potter";
movies[1] = "Waiting for Guffman";
movies[2] = "Best in Show";
movies[3] = "Grease";
movies[4] = "Pitch Perfect";
movies[5] = "Top Gun";
movies[6] = "Lion King";
for (var i = 0; i< movies.length; i++){
    console.log(movies[i]);
};
*/

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

/*
var movies = new Array();
movies[0] = "Harry Potter";
movies[1] = "Waiting for Guffman";
movies[2] = "Best in Show";
movies[3] = "Grease";
movies[4] = "Pitch Perfect";
movies[5] = "Top Gun";
movies[6] = "Lion King";
for (var index in movies){
    console.log(movies[index]);
};
*/

//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

/*
var movies = new Array();
movies[0] = "Harry Potter";
movies[1] = "Waiting for Guffman";
movies[2] = "Best in Show";
movies[3] = "Grease";
movies[4] = "Pitch Perfect";
movies[5] = "Top Gun";
movies[6] = "Lion King";
movies.sort();
for (var index in movies){
    console.log(movies[index]);
};
*/

//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window 

/*
var movies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
var leastFavMovies = ["Grown-Ups 2", "Hercules", "Jurrasic Shark"];
console.log("\nMovies I like:" +"\n\n");
for (var index in movies){
    console.log(movies[index]);
};

console.log("\nMovies I regret watching:\n\n");
for (var index in leastFavMovies){
    console.log(leastFavMovies[index]);
};
*/

//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

/*
var goodMovies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
var leastFavMovies = ["Grown-Ups 2", "Hercules", "Jurrasic Shark"];
var movies = goodMovies.concat(leastFavMovies);
console.log(movies.sort().reverse());
*/

//10.	Return just the last item in the array and display it within the console window.
/*
var goodMovies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
var leastFavMovies = ["Grown-Ups 2", "Hercules", "Jurrasic Shark"];
var movies = goodMovies.concat(leastFavMovies);
console.log(movies[movies.length -1]);
*/

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
/*
var goodMovies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
var leastFavMovies = ["Grown-Ups 2", "Hercules", "Jurrasic Shark"];
var movies = goodMovies.concat(leastFavMovies);
console.log(movies[0]);
*/

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
/*
var goodMovies = ["Harry Potter", "Waiting for Guffman", "Best in Show", "Grease", "Pitch Perfect"];
var leastFavMovies = ["Grown-Ups 2", "Hercules", "Jurrasic Shark"];
var movies = goodMovies.concat(leastFavMovies);
movies.splice(5, 7, "Pitch Perfect 2", "Batman", "Juno");
console.log(movies);
*/

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
/*
var employee1 = [];
employee1["id"] = 35;
employee1["name"] = "Marsha";
employee1["title"] = "Designer";
employee1["department"] = "Web Marketing";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 21;
employee2["name"] = "Jan";
employee2["title"] = "Developer";
employee2["department"] = "Web Marketing";
employee2["isCurrent"] = true;

var employees =[employee1, employee2];
console.log(employees[1]["name"]);
*/

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
/*
var employee1 = [];
employee1["id"] = 35;
employee1["name"] = "Marsha";
employee1["title"] = "Designer";
employee1["department"] = "Web Marketing";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 21;
employee2["name"] = "Jan";
employee2["title"] = "Developer";
employee2["department"] = "Web Marketing";
employee2["isCurrent"] = true;

var employees =[employee1, employee2];
for (var i = 0; i < employees.length; i++){
    console.log(employees[i]["name"]);
}
*/

//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
/*
var employee1 = [];
employee1["id"] = 35;
employee1["name"] = "Marsha";
employee1["title"] = "Designer";
employee1["department"] = "Web Marketing";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 21;
employee2["name"] = "Jan";
employee2["title"] = "Developer";
employee2["department"] = "Web Marketing";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 18;
employee3["name"] = "Peter";
employee3["title"] = "Programmer";
employee3["department"] = "Web Marketing";
employee3["isCurrent"] = false;

var employees =[employee1, employee2, employee3];
employees.forEach(function(employees){
    if (employees["isCurrent"]){
        console.log(employees["name"]);
    }
});
*/

//**********************************************************
//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

/*
var movies = [["Harry Potter", 1], ["Waiting For Guffman", 2], ["Best in Show", 3], ["Juno", 4], ["Pitch Perfect", 5]];

var movieTitles = movies.filter(function(item) {
  return typeof item == "string";
});

console.log(movieTitles);
*/


//***********************************************************
//***************Practice with Functions*********************

//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
/*
function displayMessage(param){
    console.log(param);
};
displayMessage("blue");
*/


//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

/*
function calculate(param1, param2){
    console.log(param1 % param2);
};

calculate("18", "4");
*/

//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result 

/*
var employees = ["Marsha", "Jan", "Peter", "Greg"];
function showEmployee(param){
    console.log("Employees:\n\n")
    for (var index in employees){
        console.log(employees[index]);
    }
};
showEmployee(employees);
*/


//*************************************************************
//***********************PART 2********************************
//*************************************************************

//************The Rock, Paper, Scissors Game (10 points)*******
/*
var userChoice = prompt("rock, paper, scissors?");
if (userChoice != "rock" || userChoice != "paper" || userChoice != "scissor"){
    var userChoice = prompt("Sorry, you have to pick rock, paper, or scissors");
}

var compChoice = Math.random();
if (compChoice < 0.33){
    compChoice = "rock";
}else if (compChoice <.66){
        compChoice = "paper";
    }else{
        compChoice = "scissors";
    }   
console.log(userChoice);
console.log(compChoice);



if (userChoice == compChoice){
    alert("Tie game!")
}else if(userChoice == "rock"){
        if (compChoice =="scissors"){
            alert("You picked " + userChoice +", computer picked " + compChoice + ". YOU WIN!");
        }else{
            alert("You picked " + userChoice +", computer picked " + compChoice + ". You lose.")
        }
}else if(userChoice == "paper"){
        if (compChoice = "rock"){
            alert("You picked " + userChoice +", computer picked " + compChoice + ". YOU WIN!");
        }else{
            alert("You picked " + userChoice +", computer picked " + compChoice + ". You lose.")
        }
}else{
    if (compChoice = "paper"){
            alert("You picked " + userChoice +", computer picked " + compChoice + ". YOU WIN!");
        }else{
            alert("You picked " + userChoice +", computer picked " + compChoice + ". You lose.")
        }
};
*/

//************The Basic Calculator (10 points)*******

/*
var x = window.prompt("What is the first number?");
var y = window.prompt("What is the second number?");
var op = window.prompt("What operation would you like to preform? (add, subtract, multiply, divide)");
x = Number(x);
y = Number(y);

function calculate(number1, number2, operation) {
    switch (operation) {
            case "add":
                window.alert(number1 + number2);
                break;
            case "subtract":
                window.alert(number1 - number2);
                break;
            case "multiply":
                window.alert(number1 * number2);
                break;
            default:
                window.alert(number1 / number2);
    }
};

calculate(x, y, op); 
*/


//************Death by JavaScript (4 points each for 20 points total)*******

/*
var newWord = window.prompt("Pick a word, any word!");
function alpha(word){
    word = word.split("");
    word = word.sort();
    word = word.join("");
    console.log(word)
};

alpha(newWord);

*/





















