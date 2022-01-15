import React, {useEffect,useState} from 'react'
import CareerSection from '../components/CareerSection';
import CareerAccordion from '../components/CareerAccordion';
import Header from '../components/Header';


function Career(){
    console.log('about')
    return(
        <>
           <div style={{height:'100px'}}/>
                <CareerSection/>
                <CareerAccordion/>

        </>
    )
}
export default Career;