let button = document.getElementById('button');
let fundo_azul = false;
function mudar_fundo(){
    if (fundo_azul== false){
        fundo_azul= true;
    document.body.style.background = '#40E0D0';
    button.style.background= 'black';
    button.style.color= 'white';
    }
    else{
        fundo_azul=false;
        document.body.style.background= 'white';
        button.style.background= 'white';
    button.style.color= 'black';
    }
    
}