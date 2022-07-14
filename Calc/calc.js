
let display = "0"; 

const displayEl = document.getElementById("display")

const buttonsEl = document.querySelectorAll(".btn");

buttonsEl.forEach((buttonEl) =>{ buttonEl.onclick = onButtonClickEvent})

function onButtonClickEvent(event){
    const buttonEl = event.target;

    switch(buttonEl.innerText){
        case "C":
            limparDisplay();
            break;
            case "=":
                calcularResultado();
                break;
                default:
                    adicionarCaractere(buttonEl.innerText);
                    break
    }

    updateDisplay();
    
}

function limparDisplay(){
    display = "0";
}

function calcularResultado(){
    try{
    display = eval(display)}
    catch (erro) {
        display = "ABAFANALTO!!!"
    }
}

function adicionarCaractere(caractere){

    if(display == "0" && caractere !== ".")
    display = "";
    
    display += caractere

}

function updateDisplay (){
    displayEl.innerText = display;
}