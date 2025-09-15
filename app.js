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

//Import das dependências
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta
            //em execução local podemos definir uma porta livre
const PORT          = process.PORT || 8080

//Instância na class do express
const app = express()

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Methods','GET')

    app.use(cors())
    next()
})

app.get('')