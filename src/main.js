// declaração de que esse arquivo poderá exportar o conteudo de outro
//criação de uma variável constante chamada de p que o seu conteudo é uma require(solicitação)
const p = require("./services/products");

async function main() {
    console.log("CArrinho de Compras: ");
    p.getFullName("408", "mousepad");
    p.getFullName("508", "mouse");
}

main ();