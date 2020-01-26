    var btnElement = document.getElementById('btn');
    var squaresElement = document.getElementById('squares');

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        return color;
    }

    btnElement.onclick = function() {
        var square = document.createElement('div');

        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = '#F00';
        
        square.onmouseover = function() {
            square.style.backgroundColor = getRandomColor();
        }

        squaresElement.appendChild(square);
    }


    //exercicio 3

    var nomes = ["Diego", "Gabriel", "Lucas"];
    var lista = document.getElementById('lista');
    var inputName = document.querySelector('input[name = nome]');
    

    function addItem(texto){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(texto);
        
        liElement.appendChild(textElement);
        lista.appendChild(liElement);
    }
    function adicionar() {
        addItem(inputName.value);
        inputName.value ='';
    }
    
    for (nome of nomes) {
        addItem(nome);
    }
    
    
    
    
    