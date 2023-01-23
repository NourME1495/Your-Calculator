function Your_Calculator1(ope) {
    if(ope == 'a')
    window.result.innerHTML = eval(window.num1.value) + eval(window.num2.value);
}
function Your_Calculator2(ope) {
    if(ope == 's')
    window.result.innerHTML = eval(window.num1.value) - eval(window.num2.value);
}
function Your_Calculator3(ope) {
    if(ope == 'm')
    window.result.innerHTML = eval(window.num1.value) * eval(window.num2.value);
}
function Your_Calculator4(ope) {
    if(ope == 'd')
    window.result.innerHTML = eval(window.num1.value) / eval(window.num2.value);
}