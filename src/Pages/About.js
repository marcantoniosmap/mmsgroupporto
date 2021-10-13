import React, {useEffect,useState} from 'react'
import Corporate_value from '../components/Corporate_value';
import Header from '../components/Header';
import JajaranDireksi from '../components/JajaranDireksi';
import NumberSection from '../components/NumberSection';
import SambutanCEO from '../components/SambutanCEO';
import WhoWeAre from '../components/WhoWeAre';

function About(){
    console.log('about')
    return(
        <>
            <Header 
                imageUrl="img/MMS/slider-2.png" 
                textZero="About" 
                textOne="Us" breadcrumb={[
                    {name :'home',url:'/'}
                ]}/>
            <SambutanCEO/>
            <NumberSection/>
                <WhoWeAre/>
            <Corporate_value/>
            <JajaranDireksi/>
        </>
    )
}
export default About;