/***********************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções para criar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Sidney
 * Versão 1.0
 ************************************************************************************************/

//import do arquivo estados e cidades
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Sidney Campos Aragão'}

//Retorna a lista de estados
const getAllEstados = function(){
    let message = {status: true, statuscode: 200, development: 'Sidney Campos Aragão', uf: []}
    
    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
        
        
    })
    //Adiciona um novo elemento no JSON
    message.quantidade = message.uf.length
    
    //Apaga um elemento no JSON
    //delete message.status

    if(message.uf.length > 0)
        return message //Resulatdo Verdadeiro da API 200 
    else
        return MESSAGE_ERROR //Resultedo Falso da API 500
}

//Retorna dados do estado filtrando pela sigla
const getEstadoBySigla = function(sigla){
    let siglaEstado = sigla




}

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(sigla){

}

//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){

}

//Retorna a lista de estados que foram a capital de um país filtrando pelo país
const getEstadosIsCapitalByCountry = function(pais){


}

//Retorna as cidades existente em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){

}

module.exports = {
    getAllEstados
}
