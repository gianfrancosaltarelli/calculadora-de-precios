function calcularCostoTotal(producto1, producto2, producto3) {
    const costoTotal = producto1 + producto2 + producto3;
    return costoTotal;
}

function mostrarResultado(costoTotal) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>El costo total es: $${costoTotal}</p>`;
}

document.getElementById('calculadoraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const producto1 = parseInt(document.getElementById('producto1').value);
    const producto2 = parseInt(document.getElementById('producto2').value);
    const producto3 = parseInt(document.getElementById('producto3').value);

    const costoTotal = calcularCostoTotal(producto1, producto2, producto3);

    mostrarResultado(costoTotal);
});
