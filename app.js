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
    document.getElementById("buttons-group__copiar").style.display = "block";
}

async function copiarContenido() {
    let otro = document.getElementById("input-group__two").value;
    try {
        await navigator.clipboard.writeText(otro);
        console.log('Contenido copiado en el portapapeles');
        console.log(otro);
    } catch (error) {
        console.error('Error al copiar el contenido', error);
    }
}

function desencriptarTexto() {
    console.log('hola');
}
