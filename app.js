/***********************************************************************************************************************************
 * Objetivo: API responsavel em cirar end points referentes estados e cidades
 * Data: 15/09/2025
 * Autor: Sidney
 * Versão 1.0
 * 
 * Observações: Instalar dependencia para criar a API 
 *      express     -> npm install express      --save Instala as dependênciais para criar uma API
 *      cors        -> npm install cors         --save Instala as dependênciais para configurar as permissões uma API
 *      body-parser -> npm install body-parser  --save Instala as dependênciais para receber os tipos de daados via POST ou PUT
 *********************************************************************************************************************************/

// Import das dependências
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

// Import do arquivo de funções
const dados         = require('./modulo/funcoes.js')

// Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta
            // em execução local podemos definir uma porta livre
const PORT          = process.PORT || 8080

// Instância na class do express
const app = express()

// Configurações do CORS
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin','*')      // IP de origem
    response.header('Access-Control-Allow-Methods','GET')   // Metodos (Verbos) do protocolo HTTP

    app.use(cors())
    next()                                                  //Próximo, ler tudo
})

//Request   -> Recebe os dados da API
//Response  -> Envia os dados na API

// EndPoint 
        // Listar todos os estados
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()
    response.status(estados.statuscode)
    response.json(estados)
})
        // Envia os dados do estado por sigla
app.get('/v1/estado/:uf', function(request, response){
    let sigla           = request.params.uf 
    let estados = dados.getEstadoBySigla(sigla)
    response.json(estados)

    console.log(sigla)
})
        // Envia os dados da capital por sigla do estado
app.get('/v1/capital/:uf', function(request, response){
    let sigla           = request.params.uf 
    let estados         = dados.getCapitalBySigla(sigla)
    response.json(estados)

    console.log(sigla)

})
        // Envia os estados conforme a região
app.get('/v1/regiao/:regiao', function(request, response){
    // let regiaoEstados   = request.query.regiao
            // let sigla           = request.query.uf
            // let id              = request.params.id
    let regiao             = request.params.regiao
    let estados            = dados.getEstadosByRegiao(regiao)   
    response.status(estados.statuscode)
    response.json(estados)

    console.log(regiao)
})
        //Envia capitais do Brasil
app.get('/v1/capitais', function(request, response){
    let capitais = dados.getEstadosIsCapitalByCountry()
    response.status(capitais.statuscode)
    response.json(capitais)
})
        //Envia as cidade de um estado
app.get('/v1/estado/cidade/:uf', function(request, response){
    let sigla           = request.params.uf
    let estados         = dados.getCidadesBySigla(sigla)
    response.status(estados.statuscode)
    response.json(estados)
})
//Start da API
app.listen(PORT, function(){
    console.log('API aguardando requisições ....')
})
