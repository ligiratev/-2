const extractNumbers = (str) => {
    return [...str].filter(char => /\d/.test(char)).map(Number);
};

console.log(extractNumbers("162723gn1325sdfsd0ld"));


function fibonacciWithDelay(prev = 0, curr = 1) {
    if (prev > 144) return; 

    console.log(prev);

    setTimeout(() => {
        fibonacciWithDelay(curr, prev + curr); 
    }, 1000);
}

fibonacciWithDelay();

const fetchProductTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); 
        }
        
        const products = await response.json(); 
        products.forEach(product => console.log(product.title)); 
    } catch (error) {
        console.error('Error fetching products:', error.message); 
    }
};


fetchProductTitles();


document.getElementById('color-buttons').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent; 
        document.body.style.backgroundColor = color; 
    }
});

const square = document.getElementById('square');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block'; 
        toggleButton.textContent = 'Невидимка'; 
    } else {
        square.style.display = 'none'; 
        toggleButton.textContent = 'Показать блок'; 
    }
});

let count = 0; 
const counterElement = document.getElementById('counter');

const interval = setInterval(() => {
    counterElement.textContent = count;
    count++; 

    if (count > 100) {
        clearInterval(interval); 
    }
}, 1); 

async function fetchData() {
    try {
        
        const url = 'https://fakestoreapi.com/products';
        
        
        const response = await fetch(url);

        
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        
        const data = await response.json();

        
        console.log(data);
    } catch (error) {
        
        console.error('Ошибка при получении данных:', error);
    }
}


const button = document.getElementById('fetchDataButton');
button.addEventListener('click', fetchData);