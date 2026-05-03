function crearTarjetas() {
    let divTarjetas = document.getElementById("divTarjetas");

    let desde = Number(document.getElementById("txtDesde").value);
    let hasta = Number(document.getElementById("txtHasta").value);
    let salto = Number(document.getElementById("txtSaltos").value);
    
    if (salto<=0) {
        salto = 1;
    }
    let contenidor = "";

    for (let i = desde; i <= hasta; i+=salto) {
        contenidor += `<div class="item">${i}</div>`;
    }
    divTarjetas.innerHTML = contenidor;
}