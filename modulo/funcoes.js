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
    //Padrão do JSON que será o retorno
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
    let filtroSiglaEstado = sigla
    let message = {status: true, statuscode: 200, development: 'Sidney Campos Aragão'}
    let listaEstados = dados.listaDeEstados.estados.find(estado => estado.sigla === filtroSiglaEstado)
    
    if(listaEstados){
        message.uf = listaEstados.sigla
        message.descricao = listaEstados.nome
        message.capital = listaEstados.capital
        message.regiao = listaEstados.regiao
        return message //Resulatdo Verdadeiro da API 200 
    } else {
        return MESSAGE_ERROR //Resultedo Falso da API 500
    }
    


}

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(sigla){
    let filtroSiglaEstado = sigla
    let message = {status: true, statuscode: 200, development: 'Sidney Campos Aragão'}
    let listaEstados = dados.listaDeEstados.estados.find(estado => estado.sigla === filtroSiglaEstado)

    if(listaEstados){
        message.uf = listaEstados.sigla
        message.descricao = listaEstados.nome
        message.capital = listaEstados.capital
        return message //Resulatdo Verdadeiro da API 200 
    } else {
        return MESSAGE_ERROR //Resultedo Falso da API 500
    }

}

//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){
    let filtroRegiao = regiao
    let message = {status: true, statuscode: 200, development: 'Sidney Campos Aragão', regiao: '', estados: []}
    dados.listaDeEstados.estados.forEach(estado => {
        if(filtroRegiao === estado.regiao){
            let uf = estado.sigla
            let descricao = estado.nome
            let estadoRegiao = {uf, descricao}
            message.estados.push(estadoRegiao)
        } else {
            return MESSAGE_ERROR
        }
    })
    return message

}

//Retorna a lista de estados que foram a capital de um país filtrando pelo país
const getEstadosIsCapitalByCountry = function(){

    let message = {status: true, statuscode: 200, development: 'Sidney Campos Aragão', capitais: []}
    dados.listaDeEstados.estados.forEach(function(estado){
        if(estado.capital_pais){
            let capital_atual = estado.capital_pais.capital  
            let uf = estado.sigla
            let descricao = estado.nome
            let capital = estado.capital
            let regiao = estado.regiao
            let capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            let capital_pais_ano_termino = estado.capital_pais.ano_fim
            let estadoCapitalbyCountry = {capital_atual, uf, descricao, capital, regiao, capital_pais_ano_inicio, capital_pais_ano_termino}
            message.capitais.push(estadoCapitalbyCountry)
            return message
        } else{
            return MESSAGE_ERROR
        }
    })



}

//Retorna as cidades existente em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){
    let filtroSiglaEstado = sigla
    let message = {status: true, statuscode: 200, development: 'Sidney Campos Aragão', uf: '', descricao: '', quantidade_cidades: '', cidades: []}
    let listaEstados = dados.listaDeEstados.estados.find(estado => estado.sigla === filtroSiglaEstado)
    if(listaEstados){
        message.uf = listaEstados.sigla
        message.descricao = listaEstados.nome
        dados.listaDeEstados.estados.forEach(cidade => {
            message.cidades.push(cidade.nome)
        })
        message.quantidade_cidades = message.cidades.length
    }


}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}

// console.log(getAllEstados())
// console.log(getEstadoBySigla('SP'))
// console.log(getCapitalBySigla('AC'))
// console.log(getEstadosByRegiao('Sudeste'))
// console.log(getEstadosIsCapitalByCountry())