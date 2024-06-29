const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ArrayPassword = []
let accountant = 0;

function Main(){

    //verificar cada senha por vez
    ArrayPassword.forEach((password) => {

        for(var i = 0; i < ArrayPassword.length; i++) {

            //veirifica se as demais senhas se são maiores ou de igual length
            if(ArrayPassword[i].length >= password.length){

                let Arrayselected = [];

                //evita por a propria senha na lista de senhas possiveis de acessar
                if(i != ArrayPassword.indexOf(password)){

                    //lista de possiveis senhas que podem ser acessadas
                    Arrayselected.push(ArrayPassword[i]);  

                    //verificar cada possiveis senhas possiveis por vez
                    Arrayselected.forEach((OptionsPassword) => {

                        let ArrayOptionsPassword = [];
                        let limitation = OptionsPassword.length - (password.length - 1)

                        //quebra as demais senhas em possiveis senhas no mesmo comprimento da senha selecionada;
                        //ex: senha "jus" pode acessar "justa"? jus tem length 3, então quebra "justa" em length de 3: jus, ust, sta;
                        for(let a = 0; a < limitation; a++){
                            ArrayOptionsPassword.push(OptionsPassword.slice( a, (password.length + a)));
                        }

                        //procura nas possiveis opções alguma que seja igual a senha
                        if(ArrayOptionsPassword.includes(password)){
                            accountant++
                        }
                    })

                }

            }
        }
    });

}

const askNumber = () => {
    rl.question('número de senhas: ', (passwordNumber) => {

        if(isNaN(passwordNumber)){
            console.log("Digite um numero!")
            askNumber()
        }if(passwordNumber > 20000){
            console.log("tamanho maximo da senhas a serem verificadas são 20000!")
            askNumber()
        }

        let i = 1;
        const askPassword = () => {

            rl.question(`senha do ${i}º usuário: `, (password) => {

                if(password.length < 10){

                    ArrayPassword.push(password);
                    i++;
    
                    if (i > passwordNumber) {
                        Main()
                        console.log(accountant)
                        rl.close();
                    } else {
                        askPassword();
                    }

                }else{
                    console.log("tamanho maximo da senha é 10 caracteres!")
                    askPassword()
                }
                

            });
        };

        askPassword();

    });
}

askNumber();