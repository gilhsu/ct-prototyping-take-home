const express = require('express')
const app = express()
const routes = require('./server/routes')

// rename this in your app directoy
app.locals.title = 'Template'

app.use('/', routes)

module.exports = app;