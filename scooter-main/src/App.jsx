import React from 'react';
import Carousel from './Carousel';
import Section from './Section';
import Section2 from './Section2';
import Options from './Options';
import Footer from './Footer';
import Navbar from './Navbar';
let App=()=>{
    return(
    <>
       <Navbar/>
        <Carousel />
        <Section />
        <Section2 />
        <Options />
        <Footer />
        </>
    );
}
export default App;