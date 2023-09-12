const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vehiculos = new Schema({

    vehiculo: String,
    precio: String,
    IVA: String

});

module.exports = mongoose.model('datos', Vehiculos);