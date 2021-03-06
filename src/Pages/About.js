import React, {useEffect,useState} from 'react'
import { Helmet } from 'react-helmet';
import Awards from '../components/Awards';
import Corporate_value from '../components/Corporate_value';
import Header from '../components/Header';
import JajaranDireksi from '../components/JajaranDireksi';
import MilestoneTab from '../components/MilestoneDesign2';
import NumberSection from '../components/NumberSection';
import SambutanCEO from '../components/SambutanCEO';
import VissionMission from '../components/VisionMission';
import WhoWeAre from '../components/WhoWeAre';

function About(){

    const [milestoneshow,setmilestoneshow]=useState(false)

    function changeMilestoneshow(){
        if (milestoneshow) setmilestoneshow(false);
        else setmilestoneshow(true)
    }
    console.log('about')
    return(
        <>
          <Helmet>
            <title>Tentang Kami | MMS Group Indonesia</title>
        </Helmet>
            {/* <Header 
                imageUrl="img/MMS/slider-2.png" 
                textZero="Tentang" 
                textOne="Kami" breadcrumb={[
                    {name :'Beranda',url:'/'}
                ]}/> */}
                <div style={{height:'100px'}}/>
            <SambutanCEO/>
            <VissionMission/>
            {/* <NumberSection/> */}
                <WhoWeAre 
                    milestone={milestoneshow}
                    setmilestoneFunction={changeMilestoneshow}/>
                {/* { milestoneshow && <MilestoneTab setmilestoneFunction={changeMilestoneshow}/>} */}
            <Corporate_value/>
            {/* <JajaranDireksi/> */}
            <Awards/>
        </>
    )
}
export default About;