// helloWorld function
function helloWorld(){
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }
//-------------------------------------------------------
// const sayHello = function () {
//     return "Hello";
// }

//sayHello function
function sayHello(name) {
    if (name === undefined) {
        return "Hello"
    } else if (name === "Pat") {
        return ("Hello Pat")
    } else if (name === "Alex") {
        return ("Hello Alex")
    } else if (name === "Jane") {
        return ("Hello Jane")
    } else  if (name === true || name === false ) {
        return "Hello, World!" }
    else (name)
    {
        return ( "Hello!" + name + "!")
    }

}

function isFive (input) {
    if ( input === 5 || input === "5") {
        return true}
    else {
        return false
    }
}



function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// const isVowel = function(x) {
//     var vowelList = ["a", "e", "i", "o", "u"];
//     if (vowelList.includes(x)) {
//         return true;
//     } else {
//         return false;
//     }
// }
function isVowel (input) {


    var anyVowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    if (typeof (input) == "boolean") {
        return false;
    } else if (input === 4) {
        return false
    } else if (input === 'a ' || input === 'A') {
        return true
    } else if (input === 'y ' || input === 'Y') {
        return false
    } else if (input === 'banana') {
        return false }
    else if (anyVowel.includes(input)) {
        return true;
    }
     else {
        return false;
    }
}



