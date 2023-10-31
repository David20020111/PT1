const express = require('express');
const router = express.Router();
const model = require('../models/vehiculos.js')();
const vehiculo = require('../models/vehiculos.js');

router.get('/', async (req,res)=>{
    const datos = await vehiculo.find();
    console.log(datos);
    res.render('index.ejs', {
        datos
    });
});

router.post("/add", async (req, res) => {
    const valor = new vehiculo(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async(req,res) => {
    const {id} = req.params;
    await Venta.findByIdAndRemode(id);
    res.redirect('/');
});

router.get('/upd/:id', async(req,res) => {
    const {id} = req.params;
    await Venta.findByIdAndUpdate(id);
    res.redirect('/');
});

module.exports = router;
 