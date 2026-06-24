$(document).ready(function () {
  $("#formRegistro").on("submit", function (event) {
    event.preventDefault();

    const usuario = $("#usuario").val().trim();
    const correo = $("#correo").val().trim();
    const password = $("#password").val().trim();
    const confirmar = $("#confirmar").val().trim();


    if (usuario === "" || correo === "" || password === "" || confirmar === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    
    if (password !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("Registro exitoso. Bienvenido, " + usuario + "!");
    window.location.href = "/login.html";
  });
});
