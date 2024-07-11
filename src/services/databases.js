// arquivo responsavel pelo banco de dados 
// exporft default
/*
essas funções comentadas seriam as funções sem serem exportadas como padrão
async function connectToDatabase(){
    console.log("se conectando ao banco:" + dataName);

}

async function disconnectDatabase(){
//  atalho para comentar (ctrl + k+c)
console.log("desconectando");
}

*/

// declaração das funções auto exportáveis 
exports.connectToDatabase = (dataName) => {
    console.log("se conectando ao banco:" + dataName);

}

exports.disconnectDatabase = () => {
//  atalho para comentar (ctrl + k+c)
console.log("desconectando");
}