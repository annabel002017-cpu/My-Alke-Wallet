$(document).ready(function () {

  let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

  const tabla = $("#tablaTransacciones");
  function renderTabla() {
    tabla.empty();
    transacciones.forEach((t, index) => {
      const fila = `
        <tr>
          <td>${index + 1}</td>
          <td>${t.tipo}</td>
          <td>$${t.monto}</td>
          <td>${t.detalle}</td>
          <td>${t.fecha}</td>
        </tr>
      `;
      tabla.append(fila);
    });
  }
  renderTabla();

  $("#btnBorrar").on("click", function () {
    if (confirm("¿Seguro que deseas borrar todas las transacciones?")) {
      localStorage.removeItem("transacciones");
      transacciones = [];
      renderTabla();
      alert("Historial borrado correctamente.");
    }
  });
});
