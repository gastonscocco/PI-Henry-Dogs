
function dbSend(target){
    if(target.temperaments){
        const temps = target.temperaments;
        const tempToJoin = [];
        temps.forEach(elem=>{
            tempToJoin.push(elem.name) 
        });
    target.temperament = tempToJoin.join(', ');
    }
    const toSend={
        id: target.id,
        name: target.name,
        height: target.height,
        weight: target.weight
    }
    if(target.lifeSpan) toSend.lifeSpan = target.lifeSpan;
    if(target.img) toSend.img = target.img;
    if(target.temperament) toSend.temperament = target.temperament
    return toSend;
}

function apiSend(elem){
    return {
        id: elem.id,
        name: elem.name,
        height: elem.weight.metric,
        weight: elem.weight.metric,
        lifeSpan: elem.life_span,
        img: elem.image.url,
        temperament: elem.temperament
    }
};

function sendTemps(elem){
    return {
        id:elem.id,
        temperament: elem.name
    }
}

module.exports = {
    dbSend,
    apiSend,
    sendTemps
}