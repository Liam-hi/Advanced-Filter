
// Arrow Function

let myFunction0 = (a,b) => a * b;

console.log(myFunction0(3,2));

let myFunction1 = (x,y) => {
    return x + y;
}

console.log(myFunction1(3,2));

myFunction2 = () => {
    return "Hello World";
}

console.log(myFunction2());

addition = (a,b) => {
    return a + b;
}

console.log(addition(3,2));

// När är Arrow Functions användbara?

window.addEventListener("load", helloWord = () => {
    console.log("Hej!")
});

window.addEventListener("load", x => {
    console.log("Hej!")
});


document.querySelectorAll('.box').forEach(x => {
    x.addEventListener('click', y => {
        console.log("Hej")
        })
    }) 

let circle = document.getElementById('circle');
circle.addEventListener('click', event => {
    console.log("En cirkel!");
})

// ForEach

const array = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach(x => console.log(x * x));

document.querySelectorAll('.box').forEach(x => x.style.background = 'red');

// Map

function square(a) {
    return a * a
}

const numbers = [1, 2, 3, 4, 5];

var numbersMap = numbers.map(square);

console.log(numbersMap);

var numbersNew = numbers.map((x) => x * x + 100 );

console.log(numbersNew);

// Filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter(x => x.length > 6));


    
let products = [
    {name: 'computer', category: 'tech'},
    {name: 'soap', category: 'hygiene'},
    {name: 'bbq', category: 'outdoors'}
]

let filterItems = ['tech', 'outdoors'];

let filterSet = new Set(filterItems);


let filteredProducts = products.filter(x => filterSet.has(x.category))

console.log(filteredProducts)

