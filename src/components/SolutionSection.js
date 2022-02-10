import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import NextButton from './NextButton';

function SolutionSection(props){

    const [chosenState,setChosenState]=useState('Pembangkit Listrik Tenaga Surya')
    const sliderRef = useRef();

    function clickListener(e,index) {
        console.log('hello')
        e.preventDefault();
        setChosenState(projectData[index].id)
        sliderRef.current.slickGoTo(index)
     }

    const projectData=[
        {
            imgUrl:'solar.jpg',
            id : 'Pembangkit Listrik Tenaga Surya',
            title :'Energi Terbarukan Melalui Pembangkit Listrik Tenaga Surya',
            description:[<>MMS Solution melalui PT Mitra Dayatama Prima sedang mengembangkan pembangkit listrik tenaga surya di beberapa lokasi di Indonesia dengan rancangan awal pembangkit 2 MW di Kutai Kartanegara, Kalimantan Timur.</>,
                        <>Saat ini kami sedang dalam proses pengembangan konseptual hingga 100 MW proyek pembangkit listrik tenaga surya di Kalimantan Timur dan Kalimantan Selatan untuk mendukung target <i>Net Zero Emission</i> Indonesia pada tahun 2060.</>]
        },
        {
            imgUrl:'miniranch.jpg',
            id: 'Peternakan Sapi Jayatama',
            title :'Fasilitas Sapi Peternak Lokal',
            description:[<>Bramasta mengelola Jayatama Mini Ranch yang terintegrasi dengan pertanian jagung menyediakan fasilitas peternakan dan sosialisasi <i>Good Farming Practice</i> bagi petani lokal di Desa Jonggon Jaya dan Margahayu.</>,
                <>Fasilitas Peternakan Mini Jayatama dapat menampung hingga 200 ekor sapi. Dengan Jayatama, anggota kelompok ternak diharapkan mendapatkan fasilitas, pengetahuan, dan tempat belajar memelihara dan meningkatkan kelangsungan hidup ternak.</>]
        },
        {
            imgUrl:'corn.jpg',
            id :'Perkebunan Jagung',
            title :'Ladang Jagung dengan Teknologi Precision Farming',
            description:[<>MMS Solution melalui PT Bramasta Sakti (Bramasta) mengelola pertanian jagung skala besar dan berteknologi tinggi yang bertujuan untuk menjadi pelopor <i>Precision Farming</i> di Indonesia. Kebun jagung Bramasta terletak di Kutai Kartanegara, Kalimantan Timur.</>,
                <>Kehadiran pertanian Bramasta dan fasilitas pendukungnya yang canggih turut membantu membangun industrialisasi dan infrastruktur daerah serta menumbuhkan inovasi di sektor pertanian.</>]
        },
        {
            imgUrl:'smelter.jpg',
            id:'Smelter Nikel',
            title :'Smelter Nikel Ramah Lingkungan',
            description:[<>MMS Solution melalui PT Mitra Murni Perkasa mengembangkan fasilitas smelter nikel pertama di Balikpapan, Kalimantan Timur untuk mendukung ekosistem energi hijau di Indonesia.</>,
                        <>Pabrik peleburan tersebut diharapkan memiliki kapasitas produksi 22.000 MT nikel per tahun. Jalur produksi <i>Reduction-Kiln Electric Furnace</i> (RKEF) 2 x 48MVA akan dibangun untuk mencapai kapasitas produksi nikel yang dibutuhkan.</>]
        },
    ]
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay : true,
        autoplaySpeed : 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setChosenState(projectData[next].id),
        nextArrow: <NextButton />,
        prevArrow: <NextButton />
      };

    

    return(
        <section class=" section-height-1 section-no-border my-lg-5 my-3">
        <div className='container container-xl-custom pb-5'>
           <div className='row'>
               <div className='col-lg-6 pe-lg-5 '>
                   <div className='row'>
                       {projectData.map((project,index)=>
                       <div className={`col-6  ${chosenState!==project.id ? 'p-1':' p-2'}`} >
                           <img onClick={(e)=>clickListener(e,index)} className={`img-fluid ${chosenState!==project.id ? 'custom-image-solution':''}`} src={`/img/MMS/subholding/Solution/${project.imgUrl}`} alt={project.title}/>
                       </div>)}
                   </div>
               </div>

               <div className='col-lg-6 pt-3 pt-lg-0 px-0'>
                   <Slider ref={sliderRef} {...settings}>
                       {projectData.map((points,index)=>
                            <div className='d-flex justify-content px-2 px-lg-0'>
                                <div className='px-lg-3' key={index}>
                                    <p class="font-weight-semibold mb-1 mt-2 text-primary text-uppercase">{points.id}</p>
                                    <div class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{points.title}</div>
                                    <p class=" text-4">{points.description[0]}</p>
                                    <p class=" mb-4 text-4">{points.description[1]}</p>
                                    {/* <p class=" mb-4 text-4">{points.description}</p> */}
                                </div>
                            </div>
                       
                       )}

                   </Slider>
                   
               </div>
           </div>
        </div>
    </section>
    )
}
export default SolutionSection;