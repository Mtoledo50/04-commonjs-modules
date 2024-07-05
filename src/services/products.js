// todas as funções que lidam com produtos
// função inicial que recebe um codigo e um nome de um produto
async function getFullName(codeId, productName){
   // console.log("\n");  // insere uma linha em branco
   await doBreakLine();  // chamada da função para adicionar uma linha em branco
     console.log("product:" + codeId + " - " + productName);
}
// fim da declaração de função de codigo e nome dos produtos
//__________________________________
// função que adiciona uma linha em branco // hidden function
async function doBreakLine(){
    console.log("\n");
}
// codigo para exportação das funções.. tudo o que tiver dentro desse modulo poderá ser exportado para outro arquivo
module.exports = {
    getFullName,
};

// fim do modulo de exportação