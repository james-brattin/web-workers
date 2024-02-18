const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
    const myWorker = new Worker("worker.js");

    first.onchange = function () {
        myWorker.postMessage([first.value, second.value]);
    }

    second.onchange = function () {
        myWorker.postMessage([first.value, second.value]);
    }

    myWorker.onmessage = function (e) {
        result.textContent = e.data;
    }
} else {
    console.log('Your browser doesn\'t support web workers.');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}