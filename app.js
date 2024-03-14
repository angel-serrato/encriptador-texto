function mayus(event) {
    event.value = event.value.toLowerCase();
}

function encriptarTexto() {
    let texto = document.getElementById("input-group__one").value;
    let outputText = "";
    for (let i = 0; i < texto.length; i++) {
        charCode = texto[i];
        if (charCode == "e") {
            charCode = charCode + "nter";
        } else if (charCode == "i") {
            charCode = charCode + "mes";
        } else if (charCode == "a") {
            charCode = charCode + "i";
        } else if (charCode == "o") {
            charCode = charCode + "ber";
        } else if (charCode == "u") {
            charCode = charCode + "fat";
        }
        outputText = outputText + charCode;
    }
    document.getElementById("input-group__two").value = outputText;
}

function desencriptarTexto() {
    console.log('hola');
}
