const axios = require('axios');
const router = require('express').Router();
const {Dog, Temperament} = require('../db');
const {apiSend, dbSend} = require('../../tools/toSend')
const validate = require('../../tools/validate')

router.get('/', async(req,res,next)=>{
    try{
        const dogsToShow=[]; // array for dogs to show in front
        const {name} = req.query; // take name from query  

        // get doggys from external API
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const doggys = response.data;

        // get temperaments from local db
        const localDoggys = await Dog.findAll({ // dogs creates by users
            include:Temperament
        });

//  -----------Start Query -------------------

        if(name){  // si tengo name en query hacer..
            if(localDoggys){  // si tengo doggys locales
                dogsToShow.push(dbSend(localDoggys.find(elem=>elem.name.toLowerCase()===name.toLowerCase())))
            }
            doggys.forEach(elem=>{   
                if(elem.name.toLowerCase().includes(name.toLowerCase())){  // compara el nombre del query con el array de la api
                    dogsToShow.push(apiSend(elem));  // lo envia con una funcion externa
                }
            });
            
            return dogsToShow.length?res.json(dogsToShow):res.status(404).json({error: 'Whe dont have that doggy :c'})
        }
        // if(dogsToShow.length){return res.json(dogsToShow)}
        // return res.status(404).json({error: 'Whe dont have that doggy :c'});

// ------------- End Query -------------

        doggys.forEach(elem=>{
            dogsToShow.push(apiSend(elem));
        })
        if(localDoggys){
            localDoggys.forEach(elem=>{
                dogsToShow.push(dbSend(elem));
            })
            return res.json(dogsToShow);
        }
        res.json(dogsToShow);

    }catch(e){
        next(e)
    }
})

router.get('/:id', async(req,res,next)=>{
    try{
        const {id}=req.params;
        // Si id es un numero busco en los locales, si no error

        if(id.length<10 && typeof parseInt(id) === 'number'){
            const apiDoggys = await axios.get('https://api.thedogapi.com/v1/breeds');
            const doggys = apiDoggys.data;
            const doggy = doggys.filter(elem => {
                return elem.id == id;
            });
            return doggy.length?res.json(apiSend(doggy[0])):res.status(404).json({error: 'We dont have any doggy with that id :c'});
        }else{
                const dbDog = await Dog.findByPk(id,{
                    include: Temperament
                });
                if(dbDog) return res.json(dbSend(dbDog));
        }
    }catch(e){
        next(e)
    }
})


/*
POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos
*/
router.post('/', validate, async (req,res,next)=>{
    try{
        const {name, height, weight, lifeSpan, img, temperaments} = req.body;
        const response = axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        const newDoggy = response.data;

        if(newDoggy && newDoggy.some(elem=>elem.name.toLowerCase()===name.toLowerCase())){
            return res.status(404).json({error: 'That doggy is aready exists' });
        }
        const doggy = await Dog.create({
            name, height, weight, lifeSpan, img, 
        })

        if(temperaments){
            // Temperaments from database where temperaments are from local temperaments
            const lcTemp = temperaments.map(elem=>elem.toLowerCase());
            const idTempdb = await Temperament.findAll({
                where:{
                    name: lcTemp
                }
            });
            // id local to id temp 
            const idTemp=[];
            idTempdb.forEach(elem=>{
                idTemp.push(elem.id)
            });
            // set temperaments to created doggy
            await doggy.setTemperaments(idTemp);
            // find the created doggy on db
            const response = await Dog.findByPk(doggy.id, {
                include: Temperament
            });
            // return the created doggy with the format of dbSend
            return res.status(201).json(dbSend(response));
        }
        if(!doggy) return res.status(404).json({error : 'We cant create your dog :c'});
        res.status(201).json(dbSend(doggy));
    }catch(e){
        next(e)
    }
})

module.exports = router;
