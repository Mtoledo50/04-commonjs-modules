// variavel constante chamada devArea
const devArea ={
    version: "01ab",
    production: true,
};

//variável constante chamada client
const client = {
    device: "web",
};

//codigo de liberação para que outro arquivo poderá importar as variaveis
module.exports = {
    devArea,
    client,
};

// obs.: acima podemos ver que estamos exportanto duas variáveis.. se for exportar apenas uma o codigo ficaria 
// module.exports = devArea;  (sem chaves)