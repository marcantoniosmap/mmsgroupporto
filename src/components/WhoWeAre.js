import React from 'react'
import {Parallax} from 'react-parallax';
import MapReuse from './MapReuse';
import MilestoneTab from './MilestoneDesign2';


function WhoWeAre(props){

	const pinpoint=[
        
		{
            id:'Ogan Komering Ulu',
            left:'21%',
            top:'62%',
        },
        {
            id:'Jakarta',
            left:'27%',
            top:'70%',
        },
        {
            id:'Samarinda',
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
            id:'Bajo',
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
                    <div>
						<MapReuse pinpoint={pinpoint}/>
					</div>
				</div>
			</div>
				<div class="pt-3 pt-lg-0 col-lg-6 order-lg-1 order-2">
					{/* <p class="font-weight-bold text-primary text-uppercase mb-0">Siapakah Kami</p> */}
					<h2 class="text-color-dark font-weight-bold text-12 mb-4 pt-0 mt-0">Tentang MMSGI</h2>
					<p class="">
						MMS Group Indonesia merupakan perusahaan energi berkelanjutan yang mempunyai 3 pilar bisnis utama yaitu MMS Resurces, MMS Land dan MMS Solution dengan lokasi yang tersebar di Indonesia. Salah satu portofolio MMS Group adalah <a href='https://www.mhucoal.co.id' target='#' className='-font-weight-bold'>PT Multi Harapan Utama</a>, sebuah perusahaan pemegang lisensi PKP2B di Kalimantan Timur yang berada dibawah MMS Resources.
					</p>
					<p class ="">
						Berawal dari MMS Resources yang bergerak di bidang pertambangan batu bara, MMS Group Indonesia berkembang dan melakukan diversifikasi bisnis ke sektor Property melalui MMS Land dan bisnis berkelanjutan dengan MMS Solution.
					</p>
					<p class ="">
						Melalui 3 pilar tersebut, MMS Group Indonesia mempunyai visi untuk terus mendukung pengembangan Indonesia yang lebih hijau untuk masa depan yang lebih baik dan menjadi perusahaan energi berkelanjutan yang terpercaya.</p>
					{/* <button onClick={props.setmilestoneFunction} class="btn btn-primary font-weight-semibold rounded-0 btn-px-5 py-3 text-2">{props.milestone ?'tutup Milestone MMSGI' : 'Lihat Milestone MMSGI'}<i class="fas fa-arrow-right ms-2"></i></button> */}
				</div>
			</div>
			<div className='col'>

		<hr class="solid my-5"></hr>
		</div>
		</div>
		
					<MilestoneTab/>				
	</section>
    )
}
export default WhoWeAre;