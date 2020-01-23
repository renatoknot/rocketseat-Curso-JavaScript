
    //exercicio 1
    function exibeQuadrado(){
        var quadrado = document.createElement('div');

        quadrado.setAttribute('id', 'quadrado')
        quadrado.style.width = '100px';
        quadrado.style.height = '100px';
        quadrado.style.backgroundColor = 'red';

        //posicao do quadrado aleatória
        var p1 = Math.floor(Math.random() * 500);
        var p2 = Math.floor(Math.random() * 400);
        console.log(p1);
        quadrado.style.left = p1+'px';
        quadrado.style.top = p2+'px';
        quadrado.style.position = 'absolute';
        
        //add o quadrado a tela
        document.body.appendChild(quadrado);
    }
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    var newColor = getRandomColor();

    var quadrado = document.getElementById('quadrado');
    quadrado.addEventListener('mouseover', function(event) {
        quadrado.style.backgroundColor = newColor;
    }) 
