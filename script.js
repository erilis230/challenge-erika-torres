// Función para encriptar el texto
function encriptar() {
    var inputText = document.getElementById("inputText").value;

    // Validar si el texto contiene mayúsculas o caracteres especiales
    if (/[A-ZÁÉÍÓÚÑ]/.test(inputText) || /[^a-z\s]/.test(inputText)) {
        alert("Por favor, usa solo letras minúsculas y sin acentos.");
        return;
    }

    // Reemplazar las letras por sus correspondientes "encriptadas"
    var encryptedText = inputText.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");

    // Mostrar la segunda página con el texto encriptado
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
    document.getElementById("outputText").value = encryptedText;
}

// Función para desencriptar el texto
function desencriptar() {
    var inputText = document.getElementById("inputText").value;

    // Validar si el texto contiene mayúsculas o caracteres especiales
    if (/[A-ZÁÉÍÓÚÑ]/.test(inputText) || /[^a-z\s]/.test(inputText)) {
        alert("Por favor, usa solo letras minúsculas y sin acentos.");
        return;
    }

    // Revertir el proceso de encriptado
    var decryptedText = inputText.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");

    // Mostrar la segunda página con el texto desencriptado
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
    document.getElementById("outputText").value = decryptedText;

}

// Función para copiar el texto al portapapeles
function copyText() {
    var outputText = document.getElementById("outputText");

    // Seleccionar el texto
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    alert("Texto copiado al portapapeles.")

 // Mostrar la segunda página con el texto desencriptado
 document.getElementById("outputText").value = decryptedText;

}