import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { useLanguage } from "../Pages/LanguageContext";
function Introduction(props){

	const {isIndo} =useLanguage()

    const introText_in='MMS Group Indonesia (MMSGI) merupakan perusahaan Unicorn energi berkelanjutan yang mempunyai 3 pilar bisnis utama yaitu MMS Resources, MMS Land dan MMS Solution dengan lokasi yang tersebar di Indonesia. Salah satu portofolio MMS Group adalah PT Multi Harapan Utama, sebuah perusahaan pemegang lisensi PKP2B di Kalimantan Timur yang berada dibawah MMS Resources.'
	const introText_en='MMS Group Indonesia (MMSGI) is a natural resources Unicorn company with 3 main business pillars , namely MMS Resources, MMS Land, and MMS Solution with span of operation across Indonesia. One of the MMSGIs portfolios is PT Multi Harapan Utama, a company which holds IUPK (formerly PKP2B) license in East Kalimantan under MMS Resources.'

    return(
        <div class="container container-xl-custom py-4">
            <div class="row py-lg-5 mt-5">  
                <div class="col-lg-7 pe-lg-5 mb-3 mb-lg-0 d-flex align-items-center" >
                    <div>

						{
							isIndo? <h2 class="font-weight-bold text-color-dark line-height-1 mb-0 ">Perusahaan <span className="text-primary">Unicorn </span>di Sektor Energi</h2> :
							<h2 class="font-weight-bold text-color-dark line-height-1 mb-0 "><span className="text-primary">Unicorn </span>Company in the Energy Sector</h2> 
						}
    
                        {/* <Typewriter
                            options={{
                                strings: [' Reputable', ' Reliable',' Stable', ' Trusted'],
                                autoStart: true,
                                loop: true,
                            }}
                            /> */}
					<div class="custom-divider divider divider-primary divider-small my-3">
						<hr class="my-0"/>
					</div>
					<p class="text-4 mb-lg-4" >{isIndo ? introText_in : introText_en}</p>
					<div class="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
						<Link to='/about' class="btn btn-primary custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 ">{isIndo ? 'Tentang Kami' :'About Us'}</Link>
						<Link to='/contact' class="btn btn-outline btn-dark custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 d-md-block d-none ">{isIndo ? 'Kontak Kami' : 'Contact Us'}</Link>
					</div>
                    </div>
				</div>
                <div class="col-lg-5 d-lg-block d-none">
					<div class="position-relative">
						<div>
							<img src="img/MMS/threebusiness.png" class="img-fluid" alt="" />
						</div>
					
					</div>
				</div>
			
			</div>
		
		</div>
    )
}

export default Introduction