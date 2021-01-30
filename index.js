const express = require('express')
const {wrapMainKnexAsMiddleware} = require('@google-cloud/sqlcommenter-knex');

const Knex = require('knex');

const app = express()

app.use(wrapMainKnexAsMiddleware(Knex));

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
