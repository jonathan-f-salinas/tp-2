const docentes = require('../../datos/docentes.json')

const getAllDocentes = (req, res)=>{
    res.status (200).json( docentes )
}
const getDocentesByLegajo = (req, res) => {
    const legajo = req.params.legajo
    const resultado = docentes.find( docente => docente.legajo == legajo)
    if(resultado) {
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({ mensaje: `El docente con legajo ${legajo} no fue encontrado`} )
    }
}

const deleteDocentesByLegajo = (req, res) => {
    const legajo = req.params.legajo
    const indice = docentes.findIndex( docente => docente.legajo == legajo )
    if(indice==-1) {
        res.status(404).json(
            {
            resultado: "La operación de borrado no pudo ser realizada",
            mensaje: `El docente con legajo ${legajo} no fue encontrado`
            }
        )
    } else {
        const docente = docentes[indice];
        const resultado = docentes.splice(indice,1)
        res.status(200).json(
            {resultado: "La operación de borrado pudo realizarse con exito",
             docente: docente
            }
        )
    }
}
const createdocente = (req, res) => {
    const DocentesData = req.body
    const existe = docentes.find(docente => docente.legajo == DocentesData.legajo)
    if (!existe) {
        if( ! DocentesData.concursado)
            DocentesData.concursado = false
    
        if (!DocentesData.nombre) {
            res.status(400).json({mensaje: `No puedo generar el docente con legajo ${DocentesData.legajo} por no tener nombre`})    
        } else  {
            docentes.push(DocentesData)
            res.status(201).json({mensaje: `El docente con legajo ${DocentesData.legajo} fue creado correctamente`})
        }
    } else {
        res.status(400).json({mensaje: `El docente con legajo ${DocentesData.legajo} ya existe en la base de datos`})
    }
}

 


module.exports = { 
    getAllDocentes, 
    getDocentesByLegajo,
    deleteDocentesByLegajo,
    createdocente,
    /*updateAlumno*/
}