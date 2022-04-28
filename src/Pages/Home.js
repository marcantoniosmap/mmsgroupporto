import React from "react";
import HomeSliderSlick from "../components/HomeSliderSlick";
import Introduction from "../components/Introduction";
import OverviewSubsidiaries from "../components/OverviewSubsidiaries";
import ESGSection from "../components/ESGsection";
import NewsonHome from "../components/NewsonHome";
import { Helmet } from "react-helmet";
import {useLanguage} from '../Pages/LanguageContext'

function Home(props){
    const {isIndo}=useLanguage()
	const sliderContent_in=[

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
    const sliderContent_en=[

        {imageUrl: '/img/MMS/slider-1.png',
        Textline1 : 'Armed with a strong vision and Mission',
        Textline2 : 'We develop with Certainity',
        Paragraph : 'Through a strong vision and mission, our company develops and grows sustainably for the betterment of Indonesia',
        CTA : 'About Us',
        CTAlink : '/about',
        },

        {imageUrl: '/img/MMS/slider-2-new.jpg',
        Textline1 : 'Through 3 Business Pillars',
        Textline2 : 'We Serve the Country',
        Paragraph : 'Starting from the coal business, MMSGI manifests service to the country through 3 business pillars: MMS Resources, MMS Land, and MMS Solution',
        CTA : 'Our Business',
        CTAlink : '/business/resources',
        },

        {imageUrl: '/img/MMS/slider-3.png',
        Textline1 : 'Through Different Initiatives,',
        Textline2 : 'We give back to the countrt',
        Paragraph : 'We support the sustainable progress of society through various initiatives to create compassion between each other',
        CTA : 'CSR',
        CTAlink : '/csr',
        },
    ]
    

return(
    <div role="main" class="main">
        <Helmet>
            <title>Beranda | MMS Group Indonesia</title>
        </Helmet>
        <HomeSliderSlick sliderContent={isIndo ? sliderContent_in: sliderContent_en}/>
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