// Advanced DOM

// Styling Elements using query selector

const h1 = document.querySelector('h1');
if (h1) {
    h1.style.color = 'red';
}

// Creating and Adding Elements

const div = document.querySelector('div');
if (div) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello World!!';
    div.append(h1)
    div.append(h1)
} 

// JS Functions

function favouriteAnimal(animal) {
    console.log(animal + " is my favourite animal");
}

favouriteAnimal('pika')

function add7(number) {
    console.log(number + 7)
}

function multiplyTwoNumbers(number1, number2) {
    let result = number1 * number2;
    console.log(result);
}
add7(10);
add7(7);
multiplyTwoNumbers(1, 5);

// FizzBuzz

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//     if ((i % 3 === 0 && i % 5 === 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
//     }

// Modifying text in the DOM 

const h1modifiedTextContent = document.querySelector<HTMLElement>('h1');
if (h1) {
    console.log(h1.textContent);
    h1.textContent = 'hello h2!';

}

// Modifying Elements Classes

const h1ModifyingElementsClasses = document.querySelector<HTMLElement>('h1');
if (h1ModifyingElementsClasses) {
    h1.classList.add('small');
}

const removingElements = document.querySelector<HTMLElement>('h2'); 
if (removingElements) {
    h2.remove();
}

const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', (e) => {
        console.log(e); // < Event
        console.log(e.target); // Event target (HTML Element)
        console.log('Button click successful')
        alert('Clicked!')
    });
}

let colorChangeButton = document.querySelector('.color-test-button');
if (colorChangeButton) {
    colorChangeButton.addEventListener('click', (e) => {
        colorChangeButton.style.backgroundColor = 'red';
    })}