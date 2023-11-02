let sliderElement = document.querySelector("#slider");
let buttonElemnt = document.querySelector("button");
let sizePassowrd = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "qwertyuiopçlkjhgfdsazxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM123456789";
let novaSenha = "";


sizePassowrd.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassowrd.innerHTML = this.value;
}

function generatePassoword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))

    containerPassword
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}