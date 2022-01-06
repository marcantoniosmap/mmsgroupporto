import React, {useEffect,useState} from 'react'
import CareerSection from '../components/CareerSection';
import CareerAccordion from '../components/CareerAccordion';
import Header from '../components/Header';


function Career(){
    console.log('about')
    return(
        <>
            <Header 
                imageUrl="img/MMS/Parallax3.jpg" 
                textZero="Karir" 
                textOne="" breadcrumb={[
                    {name :'Beranda',url:'/'}
                ]}/>
                <CareerSection/>
                <CareerAccordion/>

        </>
    )
}
export default Career;