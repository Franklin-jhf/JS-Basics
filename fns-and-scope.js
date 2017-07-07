//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(name) {
    return name === "Tyler";
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName(){
    return prompt('What\'s your name fam?');
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
    var name = getName();
    alert("Welcome, " + name);
    return;
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
//parameters are specified variables that are expected inputs into a function.
//arguments are values passed int oa function

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//NaN, false, '', [], undefined, 0,null



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here

function myName() {
    return 'Franklin';
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName

var newMyName = myName;
newMyName();

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var anonName = function () {
    return 'Franklin';
}

function outerFn() {
    return anonName;
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
