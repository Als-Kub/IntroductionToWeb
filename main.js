// alert("Hello Nikita!");
// let num = 5;
// console.log(num);
// num = 15;
// console.log(num);

// const num1 = Number.parseFloat(prompt("Enter first number"));
// const num2 = Number.parseFloat(prompt("Enter second number"));
// function sum(num1, num2){
// sum = num1 + num2;
// return sum; 
// }
// alert("result of sum of numbers " + num1 + " and " + num2 + " is equal to " + sum); 
// alert(`result of sum of numbers ${num1} and ${num2} is equal to ${sum(num1, num2)}`); 

// const result = confirm("Do you live well?")
// if (result) {
//     alert("Then we go to you")
// }
// else {
//     alert("Well, you take care there")
// } 
// confirm("Do you live well?") 
//     ? alert("Then we go to you") 
//     : alert("Well, you take care there");

// let product = prompt("Enter what fruits do you want?").toLowerCase;
// switch (product){
//     case "Tangarins":
//         alert("Tangarins cost 100 rubles") 
//         break; 
//     case "Bananas":
//         alert("Pears and bananas cost 70 rubles") 
//         break;         
//         case "Pears":
//         alert("Pears and bananas cost 70 rubles") 
//         break;          
//     default: 
//     alert("No such product")     
//     }

// console.log(getMaxEvenElement([5, 7, -2, 12, 3, 0, 100, 200]))
// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 2; i < arr.length; i+= 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// } 

console.log(f([54.1, 20.0, 18.51, 97.75, 35.2, 76.42], 89.3));
function f(clockArr, money) {
    for (let i = 0; i < clockArr.length - 1; i++) {
        for (let j = 1; j < clockArr.length; j++) {
            if (Math.floor((clockArr[i] + clockArr[j]) * 100) / 100 == money) {
                return true;
            }
        }
        return false;
    }
}

