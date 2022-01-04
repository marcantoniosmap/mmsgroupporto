import React from 'react'
import Slider from 'react-slick';

function SolutionSection(props){

    const projectData=[
        {
            imgUrl:'miniranch.jpg',
            title :'Peternakan',
            description:'Saat ini ada sapi desa setempat yang pindah ke peternakan dengan pola kemitraan dengan masyarakat setempat.',
        },
        {
            imgUrl:'solar.jpg',
            title :'Panel Tenaga Surya',
            description:'Proyek ini telah memperoleh izin yang diperlukan untuk memulai pembangunan panel surya 2 MWPV untuk mendukung operasi tambang.',
        },
        {
            imgUrl:'corn.jpg',
            title :'ladang jagung',
            description:'Lahan jagung dalam tahap demo plot seluas 17 Ha dan persiapan untuk penanaman awal.',
        },
        {
            imgUrl:'smelter.jpg',
            title :'Smelter nickel',
            description:'Proyek smelter nikel Rotary Kiln-Electric Furnace dirancang untuk menghasilkan 27.500 ton/tahun nikel matte. Jalur produksi terdiri dari jalur produksi 2x48 MVA.',
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
                    <h2 class="font-weight-bold text-color-dark text-11 line-height-3 line-height-md-1 mb-3 ">Projek Kami</h2>
                    <p class="mb-4 text-center lead">Kami berencana untuk mengoperasikan semua inisiatif secara komersial pada skala industri</p>
                </div>
            </div>
                <Slider {...settings}>
                    { projectData.map((project,index)=>
                        <div className=''>
                            <div className="card">
                                <img src={`/img/MMS/subholding/Solution/${project.imgUrl}`} />
                                <div className="info">
                                    <div className='text-6 font-weight-bold'>{project.title}</div>
                                    <div className='text-white text-3'>{project.description}</div>
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