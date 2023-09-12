const express = require('express');
const router = express.Router();
const model = require('../models/vehiculos.js')
const vehiculo = require('../models/vehiculos.js')

router.get('/', async (req,res)=>{
    const datos = await vehiculo.find();
    console.log(datos);
    res.render('index.ejs', {
        datos
    });
});

module.exports = router;
