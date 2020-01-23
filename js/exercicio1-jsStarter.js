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

    //exercicio 3
    function temHabilidade(skills){
        if (skills.indexOf('Javascript') != -1){
            return true;
        }else {
            return false;
        }
    }

    var skills = ["Javascript", "ReactJS", "React Native"];
    console.log(temHabilidade(skills));


    //exercicio 4

    function experiencia(anos) {
        if (anos <= 1) {
            return 'Iniciante';
        }
        if (anos <= 3) {
            return 'Intermediário';
        }
        if (anos <= 6) {
            return 'Avançado';
        }
        return 'Jedi Master';
    }
    var anosEstudo = 7;
    console.log(experiencia(anosEstudo));
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master

    //exercicio 5
    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];

    for(var usuario of usuarios){
        console.log(`O ${usuario.nome} possui as habilidades: `+ usuario.habilidades.join(', '));
    }
}