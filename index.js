const express = require('express')
const path = require('path')
const productsRouter = require('./routes/products')
const productsApiArouter = require('./routes/api/products')

// APP
const app = express()

// MIDDLEWARE
app.use(express.json())     // HABILITAR RECIBIR DATOS DE TIPO JSON

// ARCHIVIOS ESTATICOS
app.use("/static", express.static(path.join(__dirname, "public")) )

// RUTA DE DONDE ESTAN LAS VISTAS (view-engine setup)
app.set("views",path.join(__dirname,"views"))

// MOTOR DE LOS TAEMPLATES
app.set("view engine", "pug")

// RUTAS
app.use('/products', productsRouter)
app.use('/api/products', productsApiArouter)

// REDIRECT
app.use('/',function(req, res){
  res.redirect('/products')
})


const server = app.listen(3000, function (){ 
  console.log(`Listen http://localhost:${server.address().port}`) 
})





















// app.engine('hbs', engines.handlebars)
// app.set('views', './views')
// app.set('view engine', 'hbs')