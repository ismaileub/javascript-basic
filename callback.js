function greeting(parameter, name) {
    parameter(name);
}

function greetingHandler(name) {
    console.log('Good morning', name);
}

function greetEvening(name) {
    console.log('Good evening', name);
}

greeting(greetingHandler, 'Tom');
greeting(greetEvening, 'Jarry');

function submitHandler() {
    console.log('Submit button clicked');

}
document.getElementById('btn-submit').addEventListener('click', submitHandler)
