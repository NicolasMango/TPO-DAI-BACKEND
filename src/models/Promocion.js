import mongoose from 'mongoose';

const PromocionSchema = new mongoose.Schema({
    idVecino:Number,
    estado:String,
    rubro:String,
    categoria:String,
    fotosPublicacion: [{
        url : String
    }],
    contacto: {
        nombreapellido  : String,
        horarioComercio : String,
        mediosContacto  : [{
            canal : String,
            contacto : String
        }],
        email:String,
        direccion : {
            latitud : String,
            longitud : String,
            calle : String,
            numero : String,
            departamento : String,
            entreCalleA : String,
            entreCalleB : String,
            codigoPostal : String,
            localidad : String
        }

    },
    date: {type: Date , default : Date.now} 
});

const Promocion = mongoose.model('Promocion',PromocionSchema);

export default Promocion;