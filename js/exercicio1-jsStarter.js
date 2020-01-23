window.onload = function(){ 
//exercicio 1
var btn1 = document.getElementById('ex1');
btn1.onclick = show;


var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
        uf: "SP"
    };

    function show(){
        console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com
    nº ${endereco.numero}.`);
    }

    //exercicio 2

    function pares(n1, n2){
        for(var i=n1; i<=n2;i++){
            if(i % 2 == 0){
                console.log(i);
            }
        }
    }
    pares(32,321);
}