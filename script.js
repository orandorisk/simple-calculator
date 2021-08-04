const btn = document.querySelector('.tombol');
const display = document.querySelector('.teks');
//this function to reset result
let clearResult = () => {
    display.value = '';
}
//this function to change value at result
let inputResult = (x) => {
    display.value += x;
}
// this function to get eval value
let evaluasi = () => {
    display.value = eval(display.value);
}

btn.addEventListener('click', function (el) {
    //x declaration get value all target
    let x = el.target.value; 
    if (el.target.value === 'Del') {
        clearResult();
    } else if (el.target.value === '='){
        evaluasi();
    } else if (el.target.className !== 'btn') {
        display.value = display.value;
    } else {
        inputResult(x);
    }
})




