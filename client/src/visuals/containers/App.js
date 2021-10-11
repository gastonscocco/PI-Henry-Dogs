import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewDoggy from './pages/NewDoggy/NewDoggy';
import Home from './pages/Home/Home';
import Detailed from './pages/Detailed/Detailed';
import Landing from '../componets/Landing/Landing';
import Header from '../componets/Header/Header'
import { useDispatch } from 'react-redux';
import {userState} from '../../controlers/actions'
import Failed from './pages/Failed/Failed';
import Footer from '../componets/Footer/Footer';
import './App.css';



function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userState(window.localStorage.login))
    }, []);


    const Joined = () => {
        window.localStorage.login = true;
    }
    
    const Logout = () => {
        window.localStorage.login = '';
    }
    const appClass = window.localStorage.login?'AllApp':'LandingApp'
    

    // if(window.localStorage.login && !window.location.pathname.includes('home'||'newdoggy'||'detailed')){
    //     console.log('DENTRO DE REDIRECT')
    //     if(!window.location.pathname.includes('404')){
    //         window.location.href='http://localhost:3000/404'
    //     }else{
    //         if(window.location.pathname.includes('hom')){
    //             window.location.href('http://localhost:3000/home')
    //         }
    //     }
    // }

    return (
        <div className={appClass}>
                {window.localStorage.login && <div className='BackGray'></div>}
                {/* {!window.localStorage.login && <h1>Doggy Pedia</h1>} */}
                <Route path='/'>
                    {window.localStorage.login?<Header user={Logout}/>:<Landing user={Joined}/>}
                </Route>
            <Switch>
                <Route exact path='/'>
                    {window.localStorage.login && <Redirect to='/home'/>}
                </Route>
                <Route path='/home'>
                    {window.localStorage.login?<Home  location={window.location.origin}/>:<Redirect to='/'/>}
                </Route>
                <Route path='/newdoggy'>
                    {window.localStorage.login?<NewDoggy/>:<Redirect to='/'/>}
                </Route>
                <Route exact path='/detailed'>
                    {window.localStorage.login?<Detailed/>:<Redirect to='/'/>}
                </Route>
                <Route path='/detailed/:id'
                    render={({match})=>window.localStorage.login?<Detailed match={match}/>:<Redirect to='/'/>}
                />
                <Route exact path='/404'>
                    {window.localStorage.login?<Failed/>:<Redirect to='/'/>}
                </Route>
            </Switch>
                {window.localStorage.login && <Footer/>}
        </div>
    )
}

export default App

// se utiliza localStorage para mantener 
// la sesion abierta en varias pestañas incluso cerrando el explorador

// primero se probo con sessionStorage 
// pero no mantenia la sesion iniciada entre pestañas