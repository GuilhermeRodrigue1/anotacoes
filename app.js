var arrayctd =
    {
        "title": [],
        "ctd": []
    }


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
        // LIMPANDO O CONTAINER
        if (titleh1.style.display == "block") {
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

    console.log(arrayctd)

    // CHAMANDO FUNÇÃO DO LOCAL STORAGE
    setitem()
}

function setitem() {
    inputtitle.value = ""
    inputcontent.value = ""
    let Arraystring = JSON.stringify(arrayctd)
    console.log(Arraystring)
    localStorage.setItem("JSON", Arraystring)
}

addEventListener("DOMContentLoaded", function() {
    
    // TRANSFORMANDO ARRAY EM STRING JSON
    var arraystring = JSON.stringify(arrayctd)
    // CRIANDO VARIAVEL PARA PEGAR O ITEM DO STORAGE "JSON STRING"
    var LocalStorageJSON = localStorage.getItem("jsondata")
    // TRANSFORMANDO VARIAVEL "JSON STRING" EM UM JSON VALIDO
    var arrayvalid = JSON.parse(LocalStorageJSON)

    console.log(arraystring)
    console.log(arrayvalid)
    console.log(arrayctd)
})