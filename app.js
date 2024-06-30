var arrayctd = {"title": [], "ctd": []}

const inputtitle = document.getElementById("input-title")
const inputcontent = document.getElementById("ctd-ant")
const appendnotes = document.getElementById("container-append-notes")
const titleh1 = document.getElementById("title-h1-notes")

function adicionar() {
    // VALIDANDO VALORES
    validateelements()
}

function deletar() {
    console.log("deletou")
    appendnotes.innerHTML = ""
    titleh1.style.display = "block"
    arrayctd.title = []
    arrayctd.ctd = []
    console.log(arrayctd)
}
 
function validateelements() {
    if (inputtitle.value == "" || inputcontent.value == "") {
        window.alert("Insira algum valor valido nos campos!")
    } else {
        // DEIXANDO INVISIVEL O AVISO
        if (titleh1.style.display == "flex") {
            titleh1.style.display =  "none"
        }
        addelement()
    }
}

function addelement(){
    // INSERINDO VALORES DO INPUT NA ARRAY
    arrayctd.title.push(inputtitle.value)
    arrayctd.ctd.push(inputcontent.value)

    // CONTAINER NOTAS
    const divnotebox = document.createElement("div")
    divnotebox.classList = "note-box"

    // TITLE NOTAS
    const titlediv = document.createElement("div")
    titlediv.classList = "title-note"
    titlediv.innerText = inputtitle.value
    
    // CONTEUDO DA NOTA
    const ctd_nota = document.createElement("div")
    ctd_nota.classList = "ctd-note"
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
        console.log("Limpando inputs")
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
    }
})