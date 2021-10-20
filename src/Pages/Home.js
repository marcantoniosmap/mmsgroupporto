import React from "react";
import {useEffect} from 'react';
import HomeSliderSlick from "../components/HomeSliderSlick";
import IndonesiaMap from "../components/IndonesiaMap";
import BusinessDevelopment from "../components/BusinessDevelopment";
import Introduction from "../components/Introduction";
import OverviewSubsidiaries from "../components/OverviewSubsidiaries";
import ESGSection from "../components/ESGsection";
import NewsonHome from "../components/NewsonHome";

function Home(props){

	const sliderContent=[

        {imageUrl: '/img/MMS/slider-1.png',
        Textline1 : 'Building Indonesia',
        Textline2 : 'Since 2005',
        Paragraph : 'learn more about our values',
        CTA : 'About MMS',
        CTAlink : '/about',
        },

        {imageUrl: '/img/MMS/slider-2.png',
        Textline1 : 'Diversified',
        Textline2 : 'Line of Business',
        Paragraph : 'Seek more on MMS 3 main Business pillars',
        CTA : 'Our Business',
        CTAlink : '/business',
        },

        {imageUrl: '/img/MMS/slider-3.png',
        Textline1 : 'Environmental, social',
        Textline2 : 'and corporate governance',
        Paragraph : 'Learn more about MMS ESG!',
        CTA : 'Our ESG',
        CTAlink : '/esg',
        },
    ]
    

return(
    <div role="main" class="main">
        <HomeSliderSlick sliderContent={sliderContent}/>
		<Introduction/>
		<OverviewSubsidiaries/>
		<IndonesiaMap/>
		<ESGSection/>
		<NewsonHome/>

		{/* <BusinessDevelopment/> */}
		{/* <ImageSlide 
			imageBefore='img/MMS/before.jpg' 
			imageAfter='img/MMS/after.jpg' /> */}
	</div>
)

}
export default Home;