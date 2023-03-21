let cargo = 'Supervisor';
let salario = 2000;

switch (cargo){
    case 'Gerente':
        salario *= 1.15;
        document.write(salario+'<br>');

    break

    case 'Supervisor':
        salario *= 1.10;
        document.write(salario+'<br>');

    break

    default:
        salario *= 1.05;
        document.write(salario+ '<br>');

    break
    
}
document.write('<br><br>');
document.write('Fução sem parametro' + '<br>');

function imprimioConsole(){
    document.write('Olá Mundo' + '<br>');
};
 
imprimioConsole();

document.write('Função com Parametro' + '<br>');

function calc(n1, n2){
    return (n1+n2)/2;
}

let resultado = calc(9, 8);
document.write(resultado + '<br><br><br>')

document.write('Função por variavel' + '<br>');

const textPorParametro = function(texto){
    document.write(texto);
}

textPorParametro('Teste'+ '<br><br><br>')

document.write('Escopo' + '<br>');
let y = 10;

function imprimir(){
    let y = 15;
    document.write(y+ '<br>');
}

imprimir();

document.write(y + '<br><br><br>');

document.write('Função Arrow Function' + '<br>');
let teste = () =>{
    document.write('Testando Arrow Function');
}

teste();

document.write('<br><br>');
document.write('Array' + "<br>");

let num = [1,2,5,7];
let nomes = ['A','B','C'];
let bool = [true, false];
let misc = [1, "0", true];

let matriz = [[1,2,3],[4,5,6],[7,8,9]]

document.write(num[2]+'<br>');
document.write(matriz[0][1]+'<br>');

document.write('<br><br>');

document.write('Propriedade'+'<br>');
let nome = 'J C';
document.write(nome.length+'<br>');

let marca = 'Nike';

document.write(marca.toLocaleUpperCase()+'<br>')
document.write(marca.toLocaleLowerCase()+'<br>')