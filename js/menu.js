$(document).ready(function () {
  let saldo = 0;

  $("#saldo").text(`$${saldo}`);

  function guardarTransaccion(tipo, monto, detalle) {
    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    const nueva = {
      tipo: tipo,
      monto: monto,
      detalle: detalle,
      fecha: new Date().toLocaleString()
    };
    transacciones.push(nueva);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
  }

  // Depósito
  $("#formDeposito").on("submit", function (event) {
    event.preventDefault();
    const monto = parseFloat($("#montoDeposito").val());
    if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto válido para depositar.");
      return;
    }
    saldo += monto;
    $("#saldo").text(`$${saldo}`);
    guardarTransaccion("Depósito", monto, "Depósito en cuenta");
    alert(`Depósito exitoso de $${monto}`);
    $("#montoDeposito").val("");
  });

  // Retiro
  $("#formRetiro").on("submit", function (event) {
    event.preventDefault();
    const monto = parseFloat($("#montoRetiro").val());
    if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto válido para retirar.");
      return;
    }
    if (monto > saldo) {
      alert("Fondos insuficientes.");
      return;
    }
    saldo -= monto;
    $("#saldo").text(`$${saldo}`);
    guardarTransaccion("Retiro", monto, "Retiro de cuenta");
    alert(`Retiro exitoso de $${monto}`);
    $("#montoRetiro").val("");
  });

  // Transferencia
  $("#formTransferencia").on("submit", function (event) {
    event.preventDefault();
    const destinatario = $("#destinatario").val().trim();
    const monto = parseFloat($("#montoTransferencia").val());

    if (destinatario === "" || isNaN(monto) || monto <= 0) {
      alert("Complete todos los campos correctamente.");
      return;
    }
    if (monto > saldo) {
      alert("Fondos insuficientes para la transferencia.");
      return;
    }
    
    saldo -= monto;
    $("#saldo").text(`$${saldo}`);
    guardarTransaccion("Transferencia", monto, `Transferencia a ${destinatario}`);
    alert(`Transferencia de $${monto} enviada a ${destinatario}`);
    $("#destinatario").val("");
    $("#montoTransferencia").val("");
  });
});
