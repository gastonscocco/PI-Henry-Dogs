const axios = require('axios');
const {Temperament} = require('../src/db');

module.exports = async function firstCharge(){
    try{
        const allData = await axios('https://api.thedogapi.com/v1/breeds');
        const doggys = allData.data;
        doggys.forEach(elem=>{
            if(elem.temperament){
                const listOfTemps = elem.temperament.split(', ').map(temp=>temp.toLowerCase());
                if(listOfTemps.length){
                    listOfTemps.forEach(async (item)=>{
                        await Temperament.findOrCreate({
                            where:{
                                name:item
                            }
                        });
                    });
                }
            }
        })
    }catch(e){
        return console.log('Error => ', e)
    }
};

/*
Se solicitan los datos a la API,
se toma solo la data para trabajar con ella
recorremos la data por cada elemento tomando el listado de temperamentos y separandolos entre si
dejandolo en minusculas , comprovamos que existan temperamentos
y recorremos este nuevo array cargandolos en la base de datos 
*/