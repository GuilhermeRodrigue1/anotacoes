const inputtitle = document.getElementById("input-title")
const inputcontent = document.getElementById("ctd-ant")
const appendnotes = document.getElementById("container-append-notes")

function adicionar() {
    console.log("adicionou")
    var appenddiv = validateelements()
    appendnotes.appendChild(appenddiv)
}

function deletar() {
    console.log("deletou")
    appendnotes.innerHTML = "<h1>AINDA NÃO HÁ ANOTAÇÕES...</h1>"
}

function validateelements() {

    if (inputtitle.value == "") {

        window.alert("Insira algum titulo!")

    } else {

        // LIMPANDO O CONTAINER
        if (appendnotes.innerText == "AINDA NÃO HÁ ANOTAÇÕES...") {

            appendnotes.innerHTML = ""

        }

        // ADICIONANDO ELEMENTOS
        var divnotebox = document.createElement("div")
        divnotebox.innerText = inputtitle.value
        divnotebox.classList = "note-box"

        return divnotebox

    }

}

