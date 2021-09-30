module.exports = function validate(req, res, next){
    
    const {name, height, weight, lifeSpan, img, temperaments}=req.body;
    // Name, Weight, Height son obligatorios y deben ser string
    if(typeof name !== 'string' || typeof height !== 'string' || typeof weight !== 'string'){
        throw new Error('Name, Height and Weight must be Strings and are requires')
    }
    // Si llega un lifeSpan reviso que sea correcto
    if(lifeSpan && typeof lifeSpan !== 'string'){
        throw new Error('lifeSpan must be a String');
    }
    // Si llega una imagen reviso que sea un URL
    if(img && typeof img !== 'string'){
        throw new Error('The image must be a URL');
    }
    // Si el body que llega posee temperaments reviso que lo que posea sea un array
    if(req.body.hasOwnProperty('temperaments') && !Array.isArray(temperaments)){
        throw new Error ('temperaments need be an Array')
    }

    next();
}