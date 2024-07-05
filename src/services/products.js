// todas as funções que lidam com produtos
// função inicial que recebe um codigo e um nome de um produto
async function getFullName(codeId, productName){
    console.log("\n");  // insere uma linha em branco
    console.log("product:" + codeId + " - " + productName);
}
// fim da declaração de função de codigo e nome dos produtos
//__________________________________

// codigo para exportação das funções.. tudo o que tiver dentro desse modulo poderá ser exportado para outro arquivo
module.exports = {
    getFullName,
};

// fim do modulo de exportação