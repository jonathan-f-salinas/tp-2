const express = require('express')//importo la funcion express
const router = express.Router()//a express le pido una ruta
const alumnosController = require ('../controllers/alumnos.controller')//importo todo el objeto

router.get('/', alumnosController.getAllAlumnos)// en el string solo pongo la barra para no repetir en la url /alumnos/alumnos
router.get('/:dni', alumnosController.getAlumnoByDni)//:dni "path parameter" porque no se que numero van a ingresar
router.delete('/:dni', alumnosController.deleteAlumnoByDni)
router.post('/', alumnosController.crateAlumno)
router.put('/:dni', alumnosController.updateAlumno )

module.exports = { router: router}// guardo y exporto lo que contiene la constante router

