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

const imgDog1='https://i.imgflip.com/uqnsc.jpg'
const imgDog2='https://i.imgflip.com/2nujpe.jpg'
const imgDog3='https://th.bing.com/th/id/OIP.H82w3Qc4nVXQHCmH7HhvPQAAAA?pid=ImgDet&w=436&h=414&rs=1'
const imgDog4='https://i.imgflip.com/29vpfp.jpg'


export function getTemperaments(){
        return(async()=>{
            const response = axiosCall(tempApi);
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
                doggys=[{
                    name: 'We cant find that Doggy',
                    img: (imgDog1||imgDog2||imgDog3||imgDog4)
                }];
            }
            if(doggys[0]!=='We cant find that Doggy'){
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
                    if(!dog.urlImage) dog.urlImage = 'https://th.bing.com/th/id/R.6f8dc95b79bde2fe0d5190ce6a74c35c?rik=7MuDWKH9Eyn13A&pid=ImgRaw&r=0';
                    
                    return dog
                });
            }
            return doggys
        })();
    }

export function getDoggy(id){
        let path = id?`${doggyApi}/${id}`:doggyApi;
        console.log(path)
        return (async (path)=>{
            let doggy= await axiosCall(path);
            console.log(path + '  path called')
            if(doggy.status===404){
                doggy=[{
                    name: 'We cant find that Doggy',
                    img: (imgDog1||imgDog2||imgDog3||imgDog4)
                }];
            }
            if (doggy.name === 'Smooth Fox Terrier') {
                doggy.weight = [6, 8];
                return doggy;
            }
            if (doggy.name === 'Olde English Bulldogge') {
                doggy.weight = [20, 30];
                return doggy;
            }
            if(!doggy.img) doggy.urlImage = 'https://th.bing.com/th/id/R.6f8dc95b79bde2fe0d5190ce6a74c35c?rik=7MuDWKH9Eyn13A&pid=ImgRaw&r=0';
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