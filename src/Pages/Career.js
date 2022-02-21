import React, {useEffect,useState} from 'react'
import CareerSection from '../components/CareerSection';
import CareerAccordion from '../components/CareerAccordion';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';


function Career(){
    console.log('about')
    return(
        <>
        <Helmet>
            <title>Karir | MMS Group Indonesia</title>
        </Helmet>
           <div style={{height:'100px'}}/>
                <CareerSection/>
                <CareerAccordion/>

        </>
    )
}
export default Career;