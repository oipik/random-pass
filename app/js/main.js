'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let valueRange = document.querySelector('.inner__range'),
    number = document.querySelector('.inner__number'),
    numbers = document.querySelector('.inner__numbers'),
    symbols = document.querySelector('.inner__symbols'),
    pass = document.querySelector('.inner__password'),
    btn = document.querySelector('.inner__btn');
    
    number.textContent = valueRange.value;

    valueRange.addEventListener('change', (e) => {
        number.textContent = e.target.value;
    });

    let array = (min, max) => {
        let arr = [];
        for(let i = min; i <= max; i++) {
            arr.push(String.fromCharCode(i));
        }
        return arr;
    }

    

    let arrayWords = array(65, 90).concat(array(97, 122)),
        arrayNumbers = array(48, 57),
        arraySymbols = array(33, 47).concat(array(58, 64));

    btn.addEventListener('click', () => {
        if(numbers.checked && symbols.checked) {
            randomNumbers(numbers.checked, symbols.checked, valueRange.value);
        } else if(numbers.checked) {
            randomNumbers(numbers.checked, false, valueRange.value);
        } else if(symbols.checked) {
            randomNumbers(false, symbols.checked, valueRange.value);
        } 
    });

    function randomNumbers(numbers, symbols, length) {
        pass.textContent = '';
        let all = [];

        if(numbers && symbols) {
            all = arrayWords.concat(arrayNumbers, arraySymbols);

            console.log(all)
            console.log(length)

            for(let i = 1; i <= length; i++) {
                pass.textContent += all[Math.floor(Math.random() * all.length)];
            }
        }

        if(numbers) {
            all = arrayWords.concat(arrayNumbers);

            for(let i = 1; i <= length; i++) {
                pass.textContent += all[Math.floor(Math.random() * all.length)];
            }
        }

        if(symbols) {
            all = arrayWords.concat(arraySymbols);

            for(let i = 1; i <= length; i++) {
                pass.textContent += all[Math.floor(Math.random() * all.length)];
            }
        }

        
    }
});