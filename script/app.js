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

    if (inputtitle.value == "" || inputcontent.value == "") {

        window.alert("Insira algum valor!")

    } else {

        // LIMPANDO O CONTAINER
        if (appendnotes.innerText == "AINDA NÃO HÁ ANOTAÇÕES...") {

            appendnotes.innerHTML = ""

        }

        // CONTAINER NOTAS
        var divnotebox = document.createElement("div")
        divnotebox.classList = "note-box"

        // TITLE NOTAS
        var titlediv = document.createElement("div")
        titlediv.classList = "title-note"
        titlediv.innerText = inputtitle.value

        // CONTEUDO DA NOTA
        var ctd_nota = document.createElement("div")
        ctd_nota.classList = "ctd-note"
        ctd_nota.innerText = inputcontent.value

        appendnotes.appendChild(divnotebox)
        divnotebox.appendChild(titlediv)
        divnotebox.appendChild(ctd_nota)

    }

}

