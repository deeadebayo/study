// while loops - annoyomatic exercise
// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
//     console.log("hmm");
// }

// alert("Yay we made it!!");

// function doSomething() {
//     console.log("Hello World");
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// function factorial(num) {
//     var result = 1 ;
//     for (var i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// function kebabToSnake(str) {
//     return str.replace("-", "_");
// }

//write the printReverse() function here
function printReverse(array) {
    //while a variable is less than the length of the array
    var arrayLength = array.length;
    //print out the value of length minus 1 until at zero index
    for(var i = arrayLength - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}


//write the isUniform() function here
function isUniform(array) {
    var mainNum = array[0];
    for(var i = 1; array[i] < array.length; i++){
        if(array[i] !== mainNum){ //array[i] !== mainNum ? return false;
            return false;
        }
    }
    return true;
    
    
    // array.forEach(function(num) {
    //     if(num !== mainNum) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }); 
}



//write the sumArray() function here
// function sumArray(array) {
//     var total = 0;
//     var arrayLength = array.length;
//     array.forEach(function(num, i) {
//         total += num;
//     });
//     console.log(total);
// }


// //write the max() function here
// function max(array) {
//     console.log(Math.max.apply(null, array));
// }

// function otherMax (array){
//     var max = array[0];
//     for(var i = 1; i < array.length; i++){
//         if(array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }

// getElementById - singular
// getElementsByClassName - but not an array but a node list (javascript objects, not html strings)
// getElementsByTagName - can return multiple elements, node list
// querySelector - only selects the first match. Only returns one element
// querySelecterAll - same as above, returns all matching elements

// document.getElementById("first");
// document.getElementsByTagName("p");
// document.querySelector("#first")
// document.querySelectorAll(".special")[0];

// document.querySelector("button").addEventListener("click", function () {
//     document.querySelector("body").classList.toggle("background");
// });