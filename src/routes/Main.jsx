import React from 'react';
import Base from '../Components/Base';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../styles/main.css"

function Main(){
    
    return(
        <>
            <section>
                <Navbar/>
                <Base />
            </section>
            <Footer/>
        </>
    )
}

export default Main