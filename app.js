var arrayctd = {"title": [], "ctd": []}

const inputtitle = document.getElementById("input-title")
const inputcontent = document.getElementById("ctd-ant")
const appendnotes = document.getElementById("container-append-notes")
const titleh1 = this.document.getElementById("title-h1-notes")

function adicionar() {
    if (inputtitle.value == "" || inputcontent.value == "") {
        window.alert("Insira algum valor valido nos campos!")
    } else {
        arrayctd.title.push(inputtitle.value)
        arrayctd.ctd.push(inputcontent.value)
        h1display()
        addelement()
    }
}

function deletar() {
    console.log("deletou")
    appendnotes.innerHTML = ""
    titleh1.style.display = "flex"
    arrayctd.title = []
    arrayctd.ctd = []
    localStorage.removeItem("JSON")
}

function h1display(){
    if(titleh1.style.display == "flex"){
        titleh1.style.display = "none"
    } else {
        titleh1.style.display = "flex"
    }
}

function addelement(){

    // CONTAINER NOTAS
    const divnotebox = document.createElement("div")
    divnotebox.classList = "note-box"

    // TITLE NOTAS
    const titlediv = document.createElement("div")
    titlediv.classList = "title-note"

    // CONTEUDO DA NOTA
    const ctd_nota = document.createElement("div")
    ctd_nota.classList = "ctd-note"
    
    titlediv.innerText = inputtitle.value
    ctd_nota.innerText = inputcontent.value

    // APPEND ELEMENTS
    appendnotes.appendChild(divnotebox)
    divnotebox.appendChild(titlediv)
    divnotebox.appendChild(ctd_nota)

    // CHAMANDO FUNÇÃO DO LOCAL STORAGE
    setitem()
}

function setitem() {
    // CONDICIONAL DE LIMPEZA DE INPUTS
    if(inputtitle.value == "" && inputcontent.value == ""){
        console.log("inputs já estão vazios")
    } else {
        inputtitle.value = ""
        inputcontent.value = ""
    }

    // TRANFORMANDO O OBJETO EM STRING
    let JSONString = JSON.stringify(arrayctd)
    // ADICIONANDO NO STORAGE O OBJETO STRING
    localStorage.setItem("JSON", JSONString)

    console.log("LocalStorage Atualizado!")
}

addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("JSON") == undefined) {
        console.log("preparando componente local!")
        setitem()
    } else {
        console.log("Ja existe o componente necessario no local.")
        // PUXANDO O LOCALSTORAGE
        let getlocal = localStorage.getItem("JSON")
        // TRANSFORMANDO O STRING LOCAL EM VALIDO
        let JSONValid = JSON.parse(getlocal)
        // PASSANDO O JSON ARMAZENADO NO LOCAL PARA O OBJECT
        arrayctd = JSONValid
        autoaddnotes()
    }
})

function autoaddnotes() {

    let num = 0
    var lengtharraytitle = arrayctd.title.length
    var lengtharrayctd = arrayctd.ctd.length

    for(let num = 0;num != lengtharraytitle;num++){

        // CONTAINER NOTAS
        const divnotebox = document.createElement("div")
        divnotebox.classList = "note-box"

        // TITLE NOTAS
        const titlediv = document.createElement("div")
        titlediv.classList = "title-note"

        // CONTEUDO DA NOTA
        const ctd_nota = document.createElement("div")
        ctd_nota.classList = "ctd-note"

        titlediv.innerText = arrayctd.title[num]
        ctd_nota.innerText = arrayctd.ctd[num]

        // APPEND ELEMENTS
        appendnotes.appendChild(divnotebox)
        divnotebox.appendChild(titlediv)
        divnotebox.appendChild(ctd_nota)

        console.log("Posição da repetição: " + num)

    }

}