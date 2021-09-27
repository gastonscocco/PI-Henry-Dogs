const router = require('express').Router();
const {Temperament} = require('../db');
const {sendTemp} = require('../../tools/sendTemps');

router.get('/', async (req,res,next)=>{
    try{
        const listTemp = await Temperament.findAll();
        const listToSend = [];
        listTemp.forEach(elem=>{
            listToSend.push(sendTemp(elem.name))
        })
        res.json(listToSend);
    }catch(e){
        next(e);
    }
});

module.exports = router