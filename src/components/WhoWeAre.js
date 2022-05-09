import React from 'react'
import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';
import { useLanguage } from '../Pages/LanguageContext';
import MapReuse from './MapReuse';
import MilestoneTab from './MilestoneDesign2';


function WhoWeAre(props){

    const {isIndo}= useLanguage()
	const pinpoint=[
        
		{
            id:'Sumatera Selatan',
            left:'21%',
            top:'62%',
        },
        {
            id:'Jakarta',
            left:'27%',
            top:'70%',
        },
        {
            id:'Kutai Kartanegara',
            left:'48%',
            top:'42%',
        },
        {
            id:'Balikpapan',
            left:'45%',
            top:'56%',
        },
        {
            id:'Bali',
            left:'45%',
            top:'82%',
        },
		{
            id:'Labuan Bajo',
            left:'55%',
            top:'82%',
        },
    ]
    return(
		<section className="section section-height-3  section-parallax bg-color-light border-0 m-0">

		<div class="container container-xl-custom">
			<div class="row py-lg-5 mt-5 mb-0 pb-0">
			<div class="col-lg-6 order-lg-2 order-1">
                <div class="h-100 d-flex align-items-center">
                    <div className='ps-lg-3'>
						<MapReuse pinpoint={pinpoint}/>
					</div>
				</div>
			</div>
				<div class="pt-3 pt-lg-0 col-lg-6 order-lg-1 order-2">
					{/* <p class="font-weight-bold text-primary text-uppercase mb-0">Siapakah Kami?</p> */}
					<h2 class="text-color-dark font-weight-bold text-lg-12 text-10 mb-lg-4 mb-2 pt-0 mt-0">{isIndo ?'Tentang MMSGI':'About Us'}</h2>
					<p class="text-4">
                    MMS Group Indonesia is a sustainable energy company with 3 main business pillars, namely MMS Resources, MMS Land, and MMS Solution with locations spread across Indonesia. One of the MMS Group's portfolios is PT Multi Harapan Utama, a company holding a PKP2B license in East Kalimantan under MMS Resources.
					</p>
					<p class ="text-4">
                    Started from MMS Resources which engage in coal trading and mining business, MMS Group Indonesia had developed and diversified its businesses into the property sector through MMS Land and sustainable businesses under MMS Solution with annual turnover more than USD 1.9 bn.
                    </p>
					<p class ="text-4">
                    Through these 3 pillars, MMS Group Indonesia envisions to continue supporting the development of greener Indonesia for a better future and to emerge as a trusted sustainable energy company.					
                    </p>
				</div>
			</div>
			<div className='col'>
		</div>
		</div>
		
					<MilestoneTab/>				
	</section>
    )
}
export default WhoWeAre;