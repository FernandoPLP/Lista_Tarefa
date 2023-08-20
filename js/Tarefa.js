const botao = document.querySelector("#btnAddTarefa");
const table = document.querySelector("table");

botao.addEventListener("click", (evt) => {
    evt.preventDefault();

    const inputTarefa = document.getElementById("id-tarefa");
    const inputDesc = document.getElementById("id-desc");
    const inputAutor = document.getElementById("id-autor");
    const inputImportPouco = document.getElementById("id-import1");
    const inputImportMedio = document.getElementById("id-import2");
    const inputImportAlto = document.getElementById("id-import3");

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.textContent = inputTarefa.value;
    td2.textContent = inputDesc.value;
    td3.textContent = inputAutor.value;

    if (inputImportAlto.checked) {
        td4.textContent = "Alta";
    } else if (inputImportMedio.checked) {
        td4.textContent = "Média";
    } else if (inputImportPouco.checked) {
        td4.textContent = "Pouca";
    } else {
        td4.textContent = "N/A";
    }

    let botaoDeExcluir = document.createElement("button")
    botaoDeExcluir.textContent = " x "
   
    td5.appendChild(botaoDeExcluir)

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5)

    table.appendChild(tr);

    botaoDeExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();

        tr.remove()
    })

    inputTarefa.value = "";
    inputDesc.value = "";
    inputAutor.value = "";
    inputImportPouco.checked = false;
    inputImportMedio.checked = false;
    inputImportAlto.checked = false;

});