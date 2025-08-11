// // declaração de variáveis
// //const, let, var
// // não usamos muito var pois é antigo

// const nome = 'josé'
// console.log(nome) // imprime 'josé'

// //não vale reatribuir para variáveis const
// nome = 'maria' // isso dá pau
// console.log(nome) // não será executado

// // variáeis são const, let, ou var
// // const é constante, não pode ser reatribuída
// // let é variável, pode ser reatribuída
// // var é uma variável antiga, não usamos mais

// // node script.js para executar no terminal

// // node --watch script.js para executar no terminal e ficar monitorando mudanças

//--------------------------------------------------------------
// variáveis ponteiro
//nome não tem tipo, é um ponteiro para o valor 'josé'
// ponteiro é uma referência a um valor na memória
// let nome = 'josé'
// console.log(teypeof (nome)) // imprime 'string'
// estou dando console.log no valor apontado por nome

// o tipo da variável não muda, muda o valor apontado pela variável
// valor de tipos que ocorre em tempo de execução
//---------------------------------------------------------------

// //var
// var nome = 'josé'
// console.log(nome)
// nome = 'josé 2'

// console.log(nome) // imprime 'josé 2'
// console.log(typeof (nome)) // imprime 'string'
// // var é uma variável antiga, não usamos mais
// // quando escrevemos um projeto novo não queremos usar var
// // porque? o funcionamnento é contraintuitivo
// //var te deixa exposto e propenso a erros

// var linguagem = 'javascript'
// console.log("aprendendo" + linguagem) // imprime 'javascript'
// var linguagem = 'java' // declarando novamente é possível?
// //se fosse linguagem = 'java', tudo bem
// // mas como é var, posso declarar novamente
// console.log("aprendendo" + linguagem) // imprime 'java'
// // isso é uma redefinição de variável e não reatribuição

// // JavaScript é uma linguagem de dupla passagem
// // passa uma vez passando linha por linha, processando sem executar, 
//     // na primeira checa declarações, ou a gramática da linguagem, se tudo pode existir dentro do padrão da linguagem, tabela de símbolos
//     // na tabela de símbolos a classificação é declaração e ordem de execução
//     // no caso de linguagem é como se lingaugem=undefinied deixa de existir e volta a existir
//     // e as variáveis que eu posso usar são as que estão na tabela de símbolos
// // acabando volta no começo e executa linha por linha
// // e executa as declarações, ou seja, a ordem de execução
//     // depois de fazer a segunda passagem, aponta o valor, linguagem=java
// // passa duas vezes pelo código

// // não há nenhuma situação que preferimos usar var
//----------------------------------------------------------------

// exemplo
var idade = 18

console.log(`oi, ${nome}`)
// interpolação só funciona com crase
// por enquanto dá erro porque nome não foi definido
if(idade >= 18) {
    var nome = "joão"
    console.log("maior de idade" + nome)
}
console.log("até mais" + nome)

// tentativa de acesso a variável sem declaração
// e depois tentativa de acesso a variável fora do if, pensamos que o nome já não vale mais e é só de interresse dentro do if
// uso da variável antes e depois da declaração 
// ocorre por causa do hoist, içamento (para cima e para baixo)

// entendendo a dupla passagem
// processa mais de duas vezes, mas apenas as duas que importam são comentadas
    // em var idade = 18, ordem de atribuição que é uma de execução também, e é uma ordem de declaração
    // por ser uma declração, idade passa a existir e idade=undefinied
    // console.log("oi", ${nome}) // ordem de execução, não ocorre nada
// OU é uma declaração, ou é uma ordem de execução, como não passa a existir, não ocorre nada
    // if(idade >= 18) { // ordem de execução, não ocorre nada
        // var nome = "joão" // ordem de declaração, nome passa a existir e nome=undefinied
            // a atribuição ocorre deposis da declaração, na segunda passagem
        // console.log("maior de idade" + nome) // ordem de execução
        // console.log("até mais" + nome) // ordem de execução

// segunda passagem
    //idade=undefinied -> fazemos a atribuição, idade=18
    //console.log("oi", ${nome}) // nome=undefinied, imprime undefinied
    //if(idade >= 18) { // idade=18, agora tme como comparar, condição verdadeira
        // var nome = "joão" // nome=undefinied, mas agora é uma atribuição, nome passa a valer "joão"
        // console.log("maté mais" + nome) // imprime 'até mais joão'
        // pois joão é o valor registrado na tabela de símbolos

// o que ocorre se trocarmos todos os var por let?
// vai dar erro logo no console.log("oi", ${nome})
    // tabela de símbolos primeira passagem:
    // idade=undefinied (escopo=global)
    // nome=undefinied (escopo=apenas dentro do if)
// tabela se símbolos segunda passagem:
    // idade=18 (escopo=global)
    // nome=undefinied (escopo=apenas dentro do if)
// da erro pois o console.log("oi", ${nome}) tenta o que existe somente dentro do if

// o var não deixa de existir pela retrocombatibilidade, para não afetar aplicações já existentes
//----------------------------------------------------------------

// objetos são cidadões de primeira classe

//----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//LAB 1 - 1.3

// const n1 = 2;
// const n2 = '3';

// // Coersão de tipos:
// const n3 = n1 + n2; //o que javascript faz o que? R: 23
//     // JS surgiu para a web
//     // uma página html é estática em string
//     // JS tem uma preferência por priorizar texto e string
//     // a coersão é de int para string, faz concatenação
// // faz o cast implícito (ele faz sem eu pedir), de int para string

// //coeração explícita, eu explicitamente informo qual o tipo de conversão que desejo, soma acontece
// const n4 = n1 + Number(n2) // forço a transformaçã de string para um objeto do tipo number, é um objeto (por isso é um cast) do tipo primitivo number

// console.log(n4)
// //------------------------------------------------------------------------------------------------------------------

// // 1.4: == e corersão implícita | === não há coersão, checa tipo e valor
// console.log(1 == 1)//true
// console.log (1 == "1") //true, mas qual eu comparo? o 1 converte para string ou a string converte para o number
// console.log (1 === 1) //true
// console.log (1 === "1")//false
// console.log (true == 1) //true, no java isso não é permitido, no python pode
//     // Python tem muito mas similar a tipagem com JS, linguagens de script
//     // true é 1 e 1 é um valor de uma sequência, então tira o valor 1 da sequência e da true

// // aqui compara com cast
// console.log (1 == [1])//true

// console.log (null == null)//true
// console.log (null == undefined)//true

// console.log([] == false)//true

// // compara objetos com cast (numero em memória, que são diferentes)
// console.log ([1] == [1])//false
// console.log ([] == [])//false

// // console.log ([1] === [1]) //false
//     // pois compara objetos, e === compara tipos e não objetos, e objetos por padrão são difernetes e apontam para endereços diferentes
//     // roda apesar de mostrar que está errado
//     // e compara sempre endereços sempre diferente

// // prevenindo
// a1 = [1] // objeto referencia
// a2 = a1 // a2 referencia o mesmo lugar de a1
// console.log(a1.a2) // true
// //-----------------------------------------------------------------------------------------------------------------------------------------

// //1.5 - Vetores - conjunto com dados em sequência -- sempre dinâmico

// //declaração
// v1 = []; // v1 apotna para uma lista de valores

// //podemos acessar qualquer posição, começando de zero
// v1[0] = 3.4;
// v1[10] = 2;
// v1[2] = "abc"
//     // Vetor dinâmico, no java temos que setar um tamanho
//     // mas aqui não precisamos, na web não temos coisas que esperamos
//     // tem 11 elementos 0 até 11
//     // todos os valores não definidos são undefinied

// //aqui, v1 tem comprimento igual a 11
// console.log(v1.length)

// //inicializando na declaração
// v2 = [2, "abc", true] // diferença na declaração é igual a diferença nos objetos, não tenho um undefinied
// console.log(v2) // mostra todos os valores

// //iterando
// for (let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// }

// // vetores em JS é mais parecido com python do que com java
// // em java precisa dar um tipo
// // em python e em JS não precisa, qualquer coisa entra

// //se 
// v2[10000] = "muito mais longo" // printa undefinied até 9999 eno 10000 printa muito longo
//     // é sempre dinâmico

// //---------------------------------------------------------------------------------------------------------------

// //1.5.1 = métodos acessórios = necessidade para trabalhar com web que foi incrementado na linguagem
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
//     "Cristina"];
// const apenasComA = nomes.filter((n) => n.startsWith("A")); // .filter checa cada elemento, ai descarta ou mantém o valor segundo o filtro
// console.log(apenasComA);
    
// // const res = nomes.map((nome) => nome.charAt(0)); // mapeia a primeira letra de cada elemento
// // console.log(res);
    
// const todosComecamComA = nomes.every((n) => n.startsWith("A")); // devolve true ou false
// console.log(todosComecamComA);

// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);
// console.log(soma);
// // map reduce, gerar mapas e fazer totalização de valores
//     // nesse caso é a totalização de valores dentro do array
//     // é uma soma no ac com o valor v para todos os itens do vetor
// //-----------------------------------------------------------------------------------------------------------------------------------------------

// function hello (){
//     console.log ('Oi')
// }
// hello()
// //cuidado, aqui redefinimos a função sem parâmetros
// function hello (nome){
//     console.log ('Hello, ' + nome)
// }

// hello('Pedro') // quando sobrescrevemos a função não segue exatamente cascata
//     // se no mesmo arquivo a última declaraçaõ é a que vale
//     // sobrescreve a primeira função 
//     // na sobrescrita o que ocorre é que descarta o primeiro uso, libera a memória, mas nunca terei o primeiro de novo
    
// function soma (a, b) {
//     return a + b;
// }
// const res = soma (2, 3)
// console.log (res)
// //----------------------------------------------------------------------------------------------------------------------------

// // 1.6.2 - funções anônimas
// const dobro = function (n) {
//     return n * 2;
// };
// const ser = dobro(4);
// console.log(ser);

// //valor padrão para o parâmetro
// const triplo = function (n = 5) {
//     return 3 * n;
// };
// console.log(triplo());
// console.log(triplo(10));
// //---------------------------------------------------------------------------------------------------------------------------

// //1.6.3 -> arrow functions
// hello() // não funciona

// const hello = () => console.log("Hello");
// hello();

// // no JS há o içamento, porém para funções eu não posso usar
//     //não posso usar hello() antes de definir a função hello()
//     // pois o que ocorre é que o uso aponta para a função e se não existe dá erro de execução

// // const dobro = (valor) => valor * 2; // aparenta erro por que como arrow function é anônima, não há sobrescrita
// // console.log(dobro(10));
// // const triplo = (valor) => { // aparenta erro por que como arrow function é anônima, não há sobrescrita
// //     return valor * 3;
// // };

// // apartir do momento que tem o {} eu preciso do return mesmo que tenho apenas 1 instrução dentro

// console.log(triplo(10));
// //e agora?
// const ehPar = (n) => {
//     n % 2 === 0;
// };
// console.log(ehPar(10)); ////undefined, pois não há return
//-----------------------------------------------------------------------------------------------------------------

//1.7 - Clousure - função dentro de função

// function f(funcao){
//     return funcao()
//     // qual o resultado de funcao()
//     // depois que eu entender posso aplicar 
// }

// function g() {
//     function outraFuncao() {
//         console.log("fui criado por g")
//         function exibirA() {
//             console.log('A')
//            return () => console.log("B")
//         } return exibirA
//     } return outraFuncao
// }

// f(g())()
// // assim exibi B

// function f(){
//     let nome = 'joao'
//     function g() {
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){
//     let nome = 'joao'
//     return function() {
//         console.log(`ola, ${nome}`)
//     }
// }
// let olaResult = ola()
// olaResult()

// function saudacoesFactory() {
//     return function() {
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// let olaJoao = saudacoesFactory('ola', 'joao')
// let tchauJoao = saudacoesFactory('tchau', 'joao')
// olaJoao()
// tchauJoao()

function eAgora(){
    let cont = 1
    function f1(){
        console.log(`f1: ${cont}`)
    }
    cont ++
    function f2(){
        console.log(`f2: ${cont}`)
    }
    cont ++
    return(f1, f2)
}

let eAgoraResult = eAgora()
eAgoraResult.f1() // exibi: 3
eAgoraResult.f2() // exibi: 3

// return(f1,f2) é o clousure, que guarda o estado de cont
    // quando a função externa termina o resultado é 3
    