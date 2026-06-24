$(document).ready(function () {
  $("#formLogin").on("submit", function (event) {
    event.preventDefault(); // Evita recarga automática

    const usuario = $("#usuario").val().trim();
    const password = $("#password").val().trim();

    if (usuario === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Credenciales fijas
    if (usuario === "Francisco" && password === "1234") {
      alert("Bienvenido, " + usuario + "!");
      window.location.href = "./menu.html"; 
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});
