import React from "react";
import {useEffect} from 'react';
import HomeSliderSlick from "../components/HomeSliderSlick";
import IndonesiaMap from "../components/IndonesiaMapSection";
import BusinessDevelopment from "../components/BusinessDevelopment";
import Introduction from "../components/Introduction";
import OverviewSubsidiaries from "../components/OverviewSubsidiaries";
import ESGSection from "../components/ESGsection";
import NewsonHome from "../components/NewsonHome";
import { Helmet } from "react-helmet";

function Home(props){

	const sliderContent=[

        {imageUrl: '/img/MMS/slider-1.png',
        Textline1 : 'Berbekal Visi Misi yang Kuat',
        Textline2 : 'Kami Berkembang Dengan Pasti',
        Paragraph : 'Melalui visi misi yang kuat, perusahaan kami berkembang dan bertumbuh secara berkelanjutan untuk kemajuan Indonesia',
        CTA : 'Tentang Kami',
        CTAlink : '/about',
        },

        {imageUrl: '/img/MMS/slider-2-new.jpg',
        Textline1 : 'Melalui 3 Pilar Usaha ',
        Textline2 : 'Kami Mengabdi Kepada Negeri',
        Paragraph : 'Bermula dari usaha batubara, MMSGI mewujudkan bakti pada negeri melalui 3 pilar usaha: MMS Resources, MMS Land, dan MMS Solution',
        CTA : 'Bisnis Kami',
        CTAlink : '/business/resources',
        },

        {imageUrl: '/img/MMS/slider-3.png',
        Textline1 : 'Lewat Berbagai Inisiatif,',
        Textline2 : 'Kami Bersumbangsih Pada Negeri',
        Paragraph : 'Kami mendukung kemajuan masyarakat yang berkesinambungan melalui berbagai insiatif guna menciptakan silih asih antar sesama',
        CTA : 'CSR',
        CTAlink : '/csr',
        },
    ]
    

return(
    <div role="main" class="main">
        <Helmet>
            <title>Beranda | MMS Group Indonesia</title>
        </Helmet>
        <HomeSliderSlick sliderContent={sliderContent}/>
		<Introduction/>
		<OverviewSubsidiaries/>
		{/* <IndonesiaMap/> */}
		<ESGSection/>
		<NewsonHome {...props}/>

		{/* <BusinessDevelopment/> */}
		{/* <ImageSlide 
			imageBefore='img/MMS/before.jpg' 
			imageAfter='img/MMS/after.jpg' /> */}
	</div>
)

}
export default Home;