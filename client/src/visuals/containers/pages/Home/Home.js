import React from 'react';
import Doggys from '../../../componets/Doggys/Doggys';

function Home({location}) {
    return (
        <section>
            <Doggys location={location}/>
        </section>
    )
}

export default Home
