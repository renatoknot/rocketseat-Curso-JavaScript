//exercicio 1

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject) {
        if(idade >= 18){
            resolve('Maior que 18');
        } else {
            reject('Menor que 18');
        }
    })

}
    checaIdade(13)
        .then(function() {
            console.log("Maior que 18");
        })
        .catch(function() {
            console.log("Menor que 18");
        });
    


        
//EXERCICIO 2
var listElement = document.querySelector('#listaRepos');
var inputElement = document.getElementById('nameUser');
var btnAddUser = document.querySelector('button');
var feedback = document.getElementById('feedback');
btnAddUser.onclick = listRepos;


function renderRepos(repositores) {
    //limpa a lista antes de listar outra
    listElement.innerHTML = '';
    //renderiza para o html
    for ( var repo of repositores) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderLoading(){
    listElement.innerHTML = '';
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError() {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Usuário não localizado!');
    var errorElement = document.createElement('li');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepos() {
    var user = inputElement.value;

    if(!user) return;

    renderLoading();

    var linkRepos = `https://api.github.com/users/${user}/repos`;
    
    axios.get(linkRepos)
        .then(function(response) {
            renderRepos(response.data);
        })
        .catch(function(error) {
            renderError();
        })
}




