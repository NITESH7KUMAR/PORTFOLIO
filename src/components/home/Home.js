import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Hom Page</h1>
            <Link to="/contact">Go to About Page</Link>
        </div>
    )
}
export default Home;