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

function media_notas(){
    //let nota1 = Number(prompt("Informe a primeira nota do aluno: "));
    //let nota2 = Number(prompt("Informe a segunda nota do aluno: "));
    //let nota3 = Number(prompt("Informe a terceira nota do aluno: "));

    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);

    console.log(nota1, nota2, nota3);

    let notamed = (nota1 + nota2 + nota3) / 3;

    alert(notamed);

    if (notamed >= 6){
        alert("aluno aprovado");
    } else if (notamed < 6 || notamed >= 4){
        alert("aluno em recuperação");
    } else if (notamed < 4){
        alert("aluno reprovado");
    }
    
    let resultado = '<h2>A média é: ' + notamed + '</h2>';
    document.getElementById('contato_img').innerHTML += resultado;
}