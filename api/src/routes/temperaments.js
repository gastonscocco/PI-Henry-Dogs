const router = require('express').Router();
const {Temperament} = require('../db');
const {sendTemps} = require('../../tools/toSend')

router.get('/', async (req,res,next)=>{
    try{
        const listTemp = await Temperament.findAll();
        const listToSend = [];
        listTemp.forEach((elem,index)=>{
            listToSend.push(sendTemps(elem))
        })
        res.json(listToSend);
    }catch(e){
        next(e);
    }
});

module.exports = router