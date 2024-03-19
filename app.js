const encriptarMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptarTexto() {
    let texto = document.getElementById("input-group__one").value;
    let outputText = "";
    for (let char of texto) {
        if (encriptarMap[char]) {
            outputText += encriptarMap[char];
        } else {
            outputText += char;
        }
    }
    document.getElementById("input-group__two").value = outputText;
    mostrarCopiar();
}

function desencriptarTexto() {
    let texto = document.getElementById("input-group__one").value;
    let outputText = "";
    let i = 0;
    while (i < texto.length) {
        let charCode = texto[i];
        if (charCode == "e") {
            if (texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
                charCode = "e";
                i += 4;
            }
        } else if (charCode == "i") {
            if (texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
                charCode = "i";
                i += 3;
            }
        } else if (charCode == "a") {
            if (texto[i + 1] == "i") {
                charCode = "a";
                i++;
            }
        } else if (charCode == "o") {
            if (texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
                charCode = "o";
                i += 3;
            }
        } else if (charCode == "u") {
            if (texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
                charCode = "u";
                i += 3;
            }
        }
        outputText = outputText + charCode;
        i++;
    }
    document.getElementById("input-group__two").value = outputText;
}

async function copiarContenido() {
    let otro = document.getElementById("input-group__two").value;
    try {
        await navigator.clipboard.writeText(otro);
    } catch (error) {
        console.error('Error al copiar el contenido', error);
    }
}

function mayus(event) {
    event.value = event.value.toLowerCase();
}

function mostrarCopiar() {
    document.getElementById("buttons-group__copiar").style.display = "block";
}

function limpiarContenido() {
    document.getElementById("input-group__one").value = "";
    document.getElementById("input-group__two").value = "";
    document.getElementById("buttons-group__copiar").style.display = "none";
}