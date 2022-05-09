import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import { useLanguage } from '../Pages/LanguageContext';
import NextButton from './NextButton';

function SolutionSection(props){

    const [chosenState,setChosenState]=useState('Pembangkit Listrik Tenaga Surya')
    const sliderRef = useRef();
    const {isIndo} = useLanguage()

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
            id_en : 'Solar Power Plant',
            title :'Energi Terbarukan Melalui Pembangkit Listrik Tenaga Surya',
            title_en :'Renewable Energy Through Solar Power Generation',
            description:[<>MMS Solution melalui PT Mitra Dayatama Prima sedang mengembangkan pembangkit listrik tenaga surya di beberapa lokasi di Indonesia dengan rancangan awal pembangkit 2 MW di Kutai Kartanegara, Kalimantan Timur.</>,
                        <>Saat ini kami sedang dalam proses pengembangan konseptual hingga 100 MW proyek pembangkit listrik tenaga surya di Kalimantan Timur dan Kalimantan Selatan untuk mendukung target <i>Net Zero Emission</i> Indonesia pada tahun 2060.</>],
            description_en:[<>MMS Solution through PT Mitra Dayatama Prima is developing solar power plants in several locations in Indonesia with an initial design of a 2 MW power plant in Kutai Kartanegara, East Kalimantan.</>,
            <>We are currently in the process of conceptual development of up to 100 MW solar power projects in East Kalimantan and South Kalimantan to support Indonesia <i>Net Zero Emissions</i> target by 2060.</>]
        },
        {
            imgUrl:'miniranch.jpg',
            id: 'Peternakan Sapi Jayatama',
            id_en: 'MiniRanch Jayatama',
            title :'Fasilitas Sapi Peternak Lokal',
            title_en :"Local Breeder's Cattle Facilities",
            description:[<>Bramasta operates the Jayatama Mini Ranch which is integrated with corn farm, providing hubandry facilities and socialization of Good Farming Practice for local farmers in Jonggon Jaya and Margahayu villages.</>,
                <>Fasilitas Peternakan Mini Jayatama dapat menampung hingga 200 ekor sapi. Dengan Jayatama, anggota kelompok ternak diharapkan mendapatkan fasilitas, pengetahuan, dan tempat belajar memelihara dan meningkatkan kelangsungan hidup ternak.</>],
            description_en:[<>Bramasta mengelola Jayatama Mini Ranch yang terintegrasi dengan pertanian jagung menyediakan fasilitas peternakan dan sosialisasi <i>Good Farming Practice</i> bagi petani lokal di Desa Jonggon Jaya dan Margahayu.</>,
                <>The Jayatama Mini Farm facility can accommodate up to 200 cows. With Jayatama, famer group members are expected to get facilities, knowledge, and a place to learn how to maintain and improve the livestock survival.</>]
        },
        {
            imgUrl:'corn.jpg',
            id :'Perkebunan Jagung',
            id_en :'Corn Plantation',
            title :'Ladang Jagung dengan Teknologi Precision Farming',
            title_en :'Corn Field with Precision Farming Technology',
            description:[<>MMS Solution melalui PT Bramasta Sakti (Bramasta) mengelola pertanian jagung skala besar dan berteknologi tinggi yang bertujuan untuk menjadi pelopor <i>Precision Farming</i> di Indonesia. Kebun jagung Bramasta terletak di Kutai Kartanegara, Kalimantan Timur.</>,
                <>Kehadiran pertanian Bramasta dan fasilitas pendukungnya yang canggih turut membantu membangun industrialisasi dan infrastruktur daerah serta menumbuhkan inovasi di sektor pertanian.</>],
            description_en:[<>MMS Solution through PT Bramasta Sakti (Bramasta) manages large-scale and high-tech corn farming which aims to become the pioneer of Precision Farming in Indonesia. Bramasta corn farm is located in Kutai Kartanegara, East Kalimantan.</>,
                <>The presence of Bramasta agriculture and its advanced supporting facilities help to develop industrialization and regional infrastructure as well as foster innovation in the agricultural sector.</>]
        },
        {
            imgUrl:'smelter.jpg',
            id:'Smelter Nikel',
            id_en:'Nickel Smelter',
            title :'Smelter Nikel Ramah Lingkungan',
            title_en :'Eco-Friendly Nickel Smelter',
            description:[<>MMS Solution melalui PT Mitra Murni Perkasa mengembangkan fasilitas smelter nikel pertama di Balikpapan, Kalimantan Timur untuk mendukung ekosistem energi hijau di Indonesia.</>,
                        <>Pabrik peleburan tersebut diharapkan memiliki kapasitas produksi 22.000 MT nikel per tahun. Jalur produksi <i>Reduction-Kiln Electric Furnace</i> (RKEF) 2 x 48MVA akan dibangun untuk mencapai kapasitas produksi nikel yang dibutuhkan.</>],
                        
            description_en:[<>MMS Solution through PT Mitra Murni Perkasa developed the first nickel smelter facility in Balikpapan, East Kalimantan to support the green energy ecosystem in Indonesia.</>,
            <>The smelter is expected to have a production capacity of 22,000 MT of nickel per year. A 2 x 48MVA Reduction-Kiln Electric Furnace (RKEF) production line will be developed to achieve the required nickel production capacity.</>],
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
                                    <p class="font-weight-semibold mb-1 mt-2 text-primary text-uppercase">{isIndo?points.id: points.id_en}</p>
                                    <div class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{isIndo ?points.title: points.title_en}</div>
                                    <p class=" text-4">{isIndo ?points.description[0]: points.description_en[0]}</p>
                                    <p class=" mb-4 text-4">{isIndo ? points.description[1]: points.description_en[1]}</p>
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