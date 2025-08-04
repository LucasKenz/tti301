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