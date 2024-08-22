function validarEntrada(textarea) {
  const texto = textarea.value;
  const regex = /^[a-z\s]*$/;

  if (!regex.test(texto)) {
      alert("Solo se permiten letras minúsculas y sin acentos.");
      textarea.value = texto.replace(/[^a-z\s]/g, ""); // Remover caracteres inválidos automáticamente
  }
}

function encriptar() {
const texto = document.getElementById("texto").value.toLowerCase().trim();
//const mensaje = document.getElementById("mensaje");
  if (texto === "") {
      restaurarImagenInicial();
      return;
  }

  const textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  mostrarMensajeEncriptado(textoEncriptado, true);
  //mensaje.value = textoEncriptado; //para la textara mensaje
}

function desencriptar() {
  const texto = document.getElementById("texto").value.toLowerCase().trim();
  const mensaje = document.getElementById("mensaje");

  if (texto === "") {
      restaurarImagenInicial();
      return;
  }

  const textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  mostrarMensajeEncriptado(textoDesencriptado, false);
  //mensaje.value = textoDesencriptado;


}
    

function mostrarMensajeEncriptado(mensaje, esEncriptado) {
  const imgBuscador = document.getElementById("buscador");
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafoMensaje = document.getElementById("parrafo");
  const copiarBtn = document.getElementById("copiar-btn");

  if (esEncriptado) {
      imgBuscador.src = "img/feliz.jpg";  // Imagen después de encriptar
      tituloMensaje.textContent = "Mensaje encriptado con éxito!";
  } else {
      imgBuscador.src = "img/desencriptado.jpg";  // Imagen después de desencriptar
      tituloMensaje.textContent = "mensaje desencriptado con éxito";
  }

  parrafoMensaje.textContent = mensaje;
  copiarBtn.style.display = "block";  // Mostrar el botón de copiar
}

function restaurarImagenInicial() {
  const imgBuscador = document.getElementById("buscador");
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafoMensaje = document.getElementById("parrafo");
  const copiarBtn = document.getElementById("copiar-btn");

  imgBuscador.src = "img/buscador.jpg";  // Imagen inicial
  tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  parrafoMensaje.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  copiarBtn.style.display = "none";  // Ocultar el botón de copiar cuando no hay texto
}

function copiarTexto() {
  const texto = document.getElementById("parrafo").textContent;

  navigator.clipboard.writeText(texto)
      .then(() => {
          alert("Texto copiado al portapapeles.");
      })
      .catch(err => {
          alert("Hubo un error al copiar el texto: " + err);
      });
}



  




