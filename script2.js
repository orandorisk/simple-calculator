//TEKNIK DOM TRAVERSAL
const btn = document.querySelector('section');
//this function get previous node element
const dmtrvrsl = btn.firstElementChild.firstElementChild;
//this function get after node element
const dmtrvrsl2 = btn.firstElementChild.nextElementSibling;
//this function get parent section
const see = btn.parentElement;
//this function to reset result
let clearResult = () => {
    dmtrvrsl.value = '';
}
//this function to change value at result
let inputResult = (x) => {
    dmtrvrsl.value += x;
}
// this function to get eval value
let evaluasi = () => {
    dmtrvrsl.value = eval(dmtrvrsl.value);
}
//this function to ignore not target
let valueIgnore = () => {
    dmtrvrsl.value = dmtrvrsl.value;
}
//this function delete one by one
let hapus = () => {
    dmtrvrsl.value = dmtrvrsl.value.slice(0,-1);
}
//this function change background color
let theme = () => {
    see.classList.toggle('dark-theme');
    if(see.classList.contains('dark-theme')) {
        dmtrvrsl2.src = 'img/sun.png'
    } else {
        dmtrvrsl2.src = 'img/moon.png'
    }
}

btn.addEventListener('click', function (el) {
    //x declaration get value all target
    let x = el.target.value; 
    if (el.target.value === 'Clear') {
        clearResult();
    } else if (el.target.value === '='){
        evaluasi();
    } else if (el.target.className === 'theme') {
        theme();
    } else if (el.target.className !== 'btn') {
        valueIgnore();
    } else if (el.target.value === 'Del') {
        hapus();
    }  else {
        inputResult(x);
    }
})




