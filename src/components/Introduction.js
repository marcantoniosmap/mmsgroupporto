import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
function Introduction(props){


    const introText=[
        'MMS Group Indonesia (MMSGI) merupakan perusahaan energi berkelanjutan yang mempunyai 3 pilar bisnis utama yaitu MMS Resources, MMS Land dan MMS Solution dengan lokasi yang tersebar di Indonesia. Salah satu portofolio MMS Group adalah PT Multi Harapan Utama, sebuah perusahaan pemegang lisensi PKP2B di Kalimantan Timur yang berada dibawah MMS Resources',
        // 'Today, our group have grown into one of the most reputable and reliable coal suppliers for both national and international markets.'
    ]

    return(
        <div class="container container-xl-custom py-4">
            <div class="row py-lg-5 mt-5">  
                <div class="col-lg-7 pe-lg-5 mb-3 mb-lg-0 d-flex align-items-center" >
                    <div>

						<h2 class="font-weight-bold text-color-dark line-height-1 mb-0 ">The <span className="text-primary">Unicorn </span>of Indonesia's Natural Resources Sector</h2>
    
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
					<p class="text-4 mb-lg-4" >{introText[0]}</p>
					{/* <p class="pb-1 mb-4">{introText[1]}</p> */}
					<div class="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
						<Link to='/about' class="btn btn-primary custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 ">Tentang Kami</Link>
						<Link to='/contact' class="btn btn-outline btn-dark custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 d-md-block d-none ">Kontak Kami</Link>
					</div>
                    </div>

				</div>
                <div class="col-lg-5 d-lg-block d-none">
					<div class="position-relative">
						<div>
							<img src="img/MMS/threebusiness.jpg" class="img-fluid" alt="" />
						</div>
					
					</div>
				</div>
			
			</div>
		
		</div>
    )
}

export default Introduction