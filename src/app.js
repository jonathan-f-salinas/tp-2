const express = require('express');//traigo de la libreria node_modules la funcion express y la guardo en la constante
const app = express() // ejecuto la libreria express y la guardo en la constante app
const PORT = process.env.PORT || 3000;
const alumnosRouter = require('./routes/alumnos.route')
const docentesRouter= require ('./routes/docentes.route')


app.use(express.json())
app.use('/alumnos', alumnosRouter.router)
app.use('/docentes',docentesRouter.router)


//pongo a escuchar la aplicacion con listen
app.listen(PORT, ()=>{console.log(`App lista escuhando en el puerto ${PORT}`)} )

