const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// TASK 1
console.log(randomNumber);
if (randomNumber >= 0.7){
    alert(`The ${randomNumber} is greater than 0.7`);
} else {
    alert(`The ${randomNumber} is not greater than 0.7`);
}

// TASK 2
let array = [1,2,3,4,5,6,7,8,9,10];

for (const arr of array){
    console.log(arr);
}

let i = 0;
while(i < array.length){
    console.log(array[i]);
    i++;
}

// TASK 3
i = array.length;
while(i >= 0){
    console.log(array[i]);
    i--;
}

// TASK 4
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if((randomNumber > 0.7 && randomNumber2 > 0.7) || (randomNumber < 0.2 || randomNumber2 < 0.2)){
    alert(`Both random number ${randomNumber} and ${randomNumber2} are greater 0.7 OR at least one of the two is NOT greater than 0.2.`);
}
