import React from 'react'
import Slider from 'react-slick';

function SolutionSection(props){

    const projectData=[
        {
            imgUrl:'solar.jpg',
            title :'Pembangkit Listrik Tenaga Surya',
            description:'MMS Solution melalui PT Mitra Dayatama Prima mengembangkan pembangkit listrik tenaga surya di beberapa lokasi di Indonesia dengan pipeline awal pembangkit 2 MW di Kutai Kartanegara, Kalimantan Timur. ',
        },
        {
            imgUrl:'miniranch.jpg',
            title :'Peternakan Sapi Jayatama',
            description:'PT Bramasta Sakti mengelola peternakan sapi Jayatama yang terintegrasi dengan pertanian jagung Bramasta sebagai fasilitas untuk peternak lokal dengan model kemitraan agar memberikan dampak positif kepada masyarakat.',
        },
        {
            imgUrl:'corn.jpg',
            title :'Perkebunan Jagung',
            description:'MMS Solution melalui PT Bramasta Sakti mengelola pertanian jagung skala bersar berteknologi tinggi yang menjadi pionir precision farming di Indonesia. Pertanian jagung Bramasta terletak di Kutai Kartanegara, Kalimantan Timur',
        },
        {
            imgUrl:'smelter.jpg',
            title :'Smelter Nikel',
            description:'MMS Solution melalui PT Mitra Murni Perkasa mengembangkan pabrik pemurnian bijih nikel kelas I untuk memproduksi nikel matte dengan kapasitas produksi 22.000 ton nikel per tahun untuk mendukung pengembangan ekosistem energi hijau di Indonesia.',
        },
    ]

    const settings={
        className:'h-100',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:false, 
        adaptiveHeight: true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                    centerMode : true,
                    autoplay:true,
                 slidesToShow: 1,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
        ]
    }
    

    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
                <div class="row">
                <div className="col text-center mb-4">
                    {/* <h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2">Projek</h3> */}
                    <h2 class="font-weight-bold text-color-dark text-lg-10 text-8 line-height-3 line-height-md-1 mb-2 ">Projek MMS Solution</h2>
                    <p class="mb-4 text-center text-4">MMS Solution berencana untuk mengoperasikan semua inisiatif secara komersial pada <span className='text-primary'>skala industri</span></p>
                </div>
            </div>
                <Slider {...settings}>
                    { projectData.map((project,index)=>
                        <div className=''>
                            <div className="card-custom">
                                <img src={`/img/MMS/subholding/Solution/${project.imgUrl}`} />
                                <div className="info">
                                    <div className='text-6 font-weight-bold'>{project.title}</div>
                                    <div className='text-white text-justify text-3' style={{lineHeight:'21px'}}>{project.description}</div>
                                </div>
                            </div>

                        </div>
                        )}
                </Slider>
            </div>
        </section>
    )
}
export default SolutionSection;