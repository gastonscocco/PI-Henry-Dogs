const axios = require('axios');
const router = require('express').Router();
const {Dog, Temperament} = require('../db');


/*
[ ] GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
----
[ ] GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado
*/
router.get('/', async(req,res,next)=>{
    try{
        // get doggys from external API
        const res = await axios.get('https://api.thedogapi.com/v1/breeds');
        const doggys = res.data;
        
        // get temperaments from local db
        const myTemps = await Dog.findAll({
            include:Temperament
        });
        
        

    }catch(e){
        console.log(e)
    }
})


/*
[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
*/
//router.get('/:id',)


/*
POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos
*/
//router.post('/')


module.exports = router;