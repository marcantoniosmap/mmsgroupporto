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
            title :'Menyediakan Listrik Berkelanjutan',
            description:'MMS Solution melalui PT Mitra Dayatama Prima mengembangkan pembangkit listrik tenaga surya di beberapa lokasi di Indonesia dengan pipeline awal pembangkit 2 MW di Kutai Kartanegara, Kalimantan Timur. ',
        },
        {
            imgUrl:'miniranch.jpg',
            id: 'Peternakan Sapi Jayatama',
            title :'Fasilitas Penggemukan Sapi Berteknologi',
            description:'PT Bramasta Sakti mengelola peternakan sapi Jayatama yang terintegrasi dengan pertanian jagung Bramasta sebagai fasilitas untuk peternak lokal dengan model kemitraan agar memberikan dampak positif kepada masyarakat.',
        },
        {
            imgUrl:'corn.jpg',
            id :'Perkebunan Jagung',
            title :'Precision Farming Berstandar International',
            description:'MMS Solution melalui PT Bramasta Sakti mengelola pertanian jagung skala besar berteknologi tinggi yang menjadi pionir precision farming di Indonesia. Pertanian jagung Bramasta terletak di Kutai Kartanegara, Kalimantan Timur.',
        },
        {
            imgUrl:'smelter.jpg',
            id:'Smelter Nikel',
            title :'Smelter dengan Terknologi RKEF',
            description:'MMS Solution melalui PT Mitra Murni Perkasa mengembangkan pabrik pemurnian bijih nikel kelas I untuk memproduksi nikel matte dengan kapasitas produksi 22.000 ton nikel per tahun untuk mendukung pengembangan ekosistem energi hijau di Indonesia.',
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
                                    <p class=" mb-4 text-4">{points.description}</p>
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