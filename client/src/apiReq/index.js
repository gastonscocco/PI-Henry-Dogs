import axios from 'axios';

//const api = 'http://localhost:3001/doggypedia'

const doggyApi = 'http://localhost:3001/doggypedia/dogs'
const tempApi = 'http://localhost:3001/doggypedia/temperaments'

function axiosCall(url, options = {}){
    const { method, body } = options
    let call = method==='post'?axios.post:axios.get;

    return (async()=>{
        try{
            const response = await call(url, body);
            return response.data
        }catch(error){
            if(error.response && error.response.status){
                return {
                    message: error.response.statusText,
                    status: error.response.status
                }
            }
            return console.log('Error : ', error)
        }
    })();
    //was returned and invoqued
}


export function getTemperaments(){
        return(async()=>{
            const response = await axiosCall(tempApi);
            const temps=[];

            if(response.length){
                response.map(elem=>{
                    if(elem.temperament){
                        temps.push(elem.temperament)
                    }
                })
            }

            return temps.sort(); 
        })();
    }

export function getDoggys(name){
        let path = name?`${doggyApi}?name=${name}`:doggyApi;
        
        return(async()=>{
            let doggys = await axiosCall(path);
            if(doggys.status===404){
                window.location.href='http://localhost:3000/404'
                // return doggys=[{
                //     name: 'We cant find that Doggy',
                //     img: (imgDog1||imgDog2||imgDog3||imgDog4)
                // }];
            }else if(doggys.status!==404 && doggys[0]!=='We cant find that Doggy'){
                doggys.map(dog=>{
                    if (dog.name === 'Smooth Fox Terrier') {
                        dog.weight = [6, 8];
                        return dog;
                    }
                    if (dog.name === 'Olde English Bulldogge') {
                        dog.weight = [20, 30];
                        return dog;
                    }
                    //console.log(dog.weight.metric)
                    const doggyWeight = dog.weight.split(' - ');
                    dog.weight=[parseInt(doggyWeight[0]), parseInt(doggyWeight[1])];
                    if(!dog.img) dog.img = 'https://cdn.discordapp.com/attachments/890950417737998397/895887865567920129/Dognut.png';
                    
                    return dog
                });
            }
            return doggys
        })();
    }

export function getDoggy(id){
        let path = id?`${doggyApi}/${id}`:doggyApi;
        return (async (path)=>{
            let doggy= await axiosCall(path);
            if(doggy.status===404){
                window.location.href='http://localhost:3000/404'
                // doggy=[{
                //     name: 'We cant find that Doggy',
                //     img: (imgDog1||imgDog2||imgDog3||imgDog4)
                // }];
            }
            if (doggy.name === 'Smooth Fox Terrier') {
                doggy.weight = [6, 8];
                return doggy;
            }
            if (doggy.name === 'Olde English Bulldogge') {
                doggy.weight = [20, 30];
                return doggy;
            }
            // if(!doggy.img) doggy.img = 'https://cdn.discordapp.com/attachments/890950417737998397/895887865567920129/Dognut.png';
            return doggy
        })(path);
    }

export function postDoggy(body){
        return (async()=>{
            return await axiosCall(doggyApi, {method:'post', body});
        })();
    }


module.export={
    getTemperaments,
    getDoggys,
    getDoggy,
    postDoggy
}