import React from 'react';
import AboutMe  from '../AboutMe/index';
import Banner from '../Banner/index';
import CarouselControl from '../CarouselControl/index';


const PagePrincipal  = () => {

    return (
        <div>
         <Banner title = {"Bienvenido a MaiVisage"}/>
        <AboutMe />
        <CarouselControl />  
        </div>
    );
};
export default PagePrincipal;
