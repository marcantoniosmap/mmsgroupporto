import React from 'react'
import {Parallax} from 'react-parallax';


function WhoWeAre(props){

    return(
		<section className="section section-height-3  section-parallax bg-color-light border-0 m-0">

		<div class="container container-xl-custom">
			<div class="row align-items-center">
				<div class="col-md-6 col-lg-5 col-xl-6 text-center pe-md-5 mb-5 mb-md-0" >
					<img src="img/MMS/Pullman.jpg" class="img-fluid" alt="" />
				</div>
				<div class="col-md-6 col-lg-7 col-xl-6">
				<p class="font-weight-bold text-primary text-uppercase mb-0">Who are we</p>
					<h2 class="text-color-dark font-weight-bold text-12 mb-4 pt-0 mt-0">MMS Brief History</h2>
					<p class="lead">MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma Utama in 2016 and prestigious CCoW mine PT. Multi Harapan Utama in 2017.</p>
					<p class ="lead">Today, our group have grown into one of the most reputable and reliable coal suppliers for both national and international markets.</p>
					{/* <a href="#" class="btn btn-primary font-weight-semibold rounded-0 btn-px-5 py-3 text-2">Explore Line of Business</a> */}
				</div>
			</div>
		</div>
	</section>
    )
}
export default WhoWeAre;