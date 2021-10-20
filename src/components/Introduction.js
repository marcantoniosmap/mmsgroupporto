import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
function Introduction(props){


    const introText=[
        'MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma Utama in 2016 and prestigious CCoW mine PT. Multi Harapan Utama in 2017.',
        'Today, our group have grown into one of the most reputable and reliable coal suppliers for both national and international markets.'
    ]

    return(
        <div class="container container-xl-custom py-4">
            <div class="row py-lg-5 my-5">  
                <div class="col-lg-5 pe-lg-5 mb-5 mb-lg-0 d-flex align-items-center">
                    <div>

						<h2 class="font-weight-bold text-color-dark line-height-1 mb-0 ">To be a 
                        <span className="text-primary">
                        <Typewriter
                            options={{
                                strings: [' Reputable', ' Reliable',' Stable', ' Trusted'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                            </span>
                        Company</h2>
					<div class="custom-divider divider divider-primary divider-small my-3">
						<hr class="my-0"/>
					</div>
					<p class=" mb-4 lead" >{introText[0]}</p>
					<p class="pb-1 mb-4">{introText[1]}</p>
					<div class="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
						<Link to='/about' class="btn btn-primary custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 ">ABOUT US</Link>
						<Link to='/business' class="btn btn-outline btn-dark custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 ">OUR BUSINESS</Link>
					</div>
                    </div>

				</div>
                <div class="col-md-10 col-lg-7">
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