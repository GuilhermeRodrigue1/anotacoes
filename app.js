const inputtitle = document.getElementById("input-title")
const inputcontent = document.getElementById("ctd-ant")
const appendnotes = document.getElementById("container-append-notes")
const titleh1 = document.getElementById("title-h1-notes")

function adicionar() {
    validateelements()
}

function deletar() {
    console.log("deletou")
    appendnotes.innerHTML = ""
    titleh1.style.display = "block"
}

function validateelements() {
    if (inputtitle.value == "" || inputcontent.value == "") {
        window.alert("Insira algum valor!")
    } else {
        // LIMPANDO O CONTAINER
        if (titleh1.style.display = "block") {
            titleh1.style.display =  "none"
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


var arraytitle = []
var arrayctd = []









const jsondata = [
    {
        "nome": "Guilherme",
        "idade": 17,
        "trabalhando": true,
        "hobbie": ["Programar", "Produção", "Streaming", "Jogar"],
        "detalhes_profissao": {
            "profissão": "Organizador de eventos",
            "salario": 250,
            "moeda": "Dollar",
            "Empresa": "Esforce",
            "Empresa2": "Eletronic Mushroom",
            "Empresa3": "Axlebolt"
        }
    },
    {
        "nome": "Ryan",
        "idade": 27,
        "trabalhando": false,
        "hobbie": ["Jogar", "Academia"],
        "detalhes_profissao": {
            "profissão": null,
            "salario": null,
            "moeda": null,
            "Empresa": null,
            "Empresa2": null,
            "Empresa3": null
        }
    }
]

var jsonstring = JSON.stringify(jsondata);
var jsonobjects = JSON.parse(jsonstring);

console.log(jsondata);
console.log(jsonstring);
console.log(jsonobjects);

jsonobjects.map(function (pessoa) {

    console.log(pessoa.detalhes_profissao)

})
