// let nome = prompt("informe o seu nome: ");
// console.log("Tu come bosta "+ nome);

let a = 10;
let b = 5;

console.log(a + b);

const PI = 3.1416;

function copia_cola(){
    let n = document.getElementById('name').value; 
    let res = "<h3>" + n + "</h3>";
    console.log(res);
    document.getElementById('contato_img').innerHTML += res;
    console.log(n);
}