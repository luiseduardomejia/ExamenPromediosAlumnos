function calcularPromedio() {
    let a1 = parseFloat(document.getElementById("alumno1").value) || 0;
    let a2 = parseFloat(document.getElementById("alumno2").value) || 0;
    let a3 = parseFloat(document.getElementById("alumno3").value) || 0;
    let a4 = parseFloat(document.getElementById("alumno4").value) || 0;
    let a5 = parseFloat(document.getElementById("alumno5").value) || 0;

    let promedios = [a1, a2, a3, a4, a5];

    let total = promedios.reduce((acum, val) => acum + val, 0);
    let promedio = total / promedios.length;

    document.getElementById("resultado").innerText = "Promedio total es: " + promedio.toFixed(2) + " puntos.";
}

function borrarCampos() {
    document.getElementById("alumno1").value = "";
    document.getElementById("alumno2").value = "";
    document.getElementById("alumno3").value = "";
    document.getElementById("alumno4").value = "";
    document.getElementById("alumno5").value = "";

    document.getElementById("resultado").innerText = "";
}