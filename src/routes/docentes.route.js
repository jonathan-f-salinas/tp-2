const express = require('express')
const docentesController= require('../controllers/docentes.controller')
const router = express.Router()

router.get('/', docentesController.getAllDocentes)
router.get('/:legajo', docentesController.getDocentesByLegajo)
router.delete('/:legajo', docentesController.deleteDocentesByLegajo)
router.post('/', docentesController.createdocente)
//router.put('/:dni', alumnosController.updateAlumno )


module.exports = { router}
