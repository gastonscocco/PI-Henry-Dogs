const axios = require('axios');
const {Temperament} = require('../src/db');

module.exports = async function firstCharge(){
    try{
        const allData = await axios('https://api.thedogapi.com/v1/breeds');
        const doggys = allData.data;  //take data from api response
        doggys.forEach(elem=>{
            if(elem.temperament){  // if actual element have temperament do..
                const listOfTemps = elem.temperament.split(', ').map(temp=>temp.toLowerCase());
                // guardamos los temperamentos separados y en minusculas
                if(listOfTemps.length){
                    // si es que tenemos contenido entonces..
                    listOfTemps.forEach(async (item)=>{
                        await Temperament.findOrCreate({ // no es necesario un filtrado anterior con este metodo
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

Se consideró utilizar Promise.all pero se podia dar el caso
de que se lanzaran dos promesas con el mismo temperamento a la vez

*/