// declaração de que esse arquivo poderá exportar o conteudo de outro
//criação de uma variável constante chamada de p que o seu conteudo é uma require(solicitação)
const p = require("./services/products");  // declaração de variável que permite importar tudo o que estiver declarado na variavel dentro desse arquivo mencionado
const config = require("./services/config"); // declaração de variável que permite importar tudo o que estiver declarado na variavel dentro desse arquivo mencionado


async function main() {
    console.log("Carrinho de Compras: ");
    p.getFullName("408", "mousepad");
    p.getFullName("508", "mouse");

    console.log(config.client);
    console.log(config.devArea);

}

main ();