import React from 'react'
import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';
import MapReuse from './MapReuse';
import MilestoneTab from './MilestoneDesign2';


function WhoWeAre(props){

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
					<h2 class="text-color-dark font-weight-bold text-lg-12 text-10 mb-lg-4 mb-2 pt-0 mt-0">Tentang MMSGI</h2>
					<p class="text-4">
                        MMS Group Indonesia merupakan perusahaan energi berkelanjutan yang mempunyai 3 pilar bisnis utama yaitu MMS Resources, MMS Land dan MMS Solution dengan lokasi yang tersebar di Indonesia. Salah satu portofolio MMS Group adalah PT Multi Harapan Utama, sebuah perusahaan pemegang lisensi PKP2B di Kalimantan Timur yang berada dibawah MMS Resources.
					</p>
					<p class ="text-4">
                        Berawal dari MMS Resources yang bergerak di bidang perdagangan dan pertambangan batu bara, MMS Group Indonesia berkembang dan melakukan diversifikasi bisnis ke sektor properti melalui MMS Land dan bisnis berkelanjutan dengan MMS Solution.
					</p>
					<p class ="text-4">
M                       Melalui 3 pilar tersebut, MMS Group Indonesia mempunyai visi untuk terus mendukung pengembangan Indonesia yang lebih hijau untuk masa depan yang lebih baik serta menjadi perusahaan energi berkelanjutan yang terpercaya.
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