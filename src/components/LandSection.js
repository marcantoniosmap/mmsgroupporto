import React, { useReducer, useRef, useState } from 'react'
import Slider from 'react-slick';
import NextButton from './NextButton';

function LandSection(props){

    const [chosenState,setChosenState]=useState('Jakarta')
    const sliderRef = useRef();

    function clickListener(e,index) {
        e.preventDefault();
        setChosenState(pinpoint[index].id)
        sliderRef.current.slickGoTo(index)
     }

    const pinpoint=[
        {
            id:'Jakarta',
            judul:'Gedung Perkantoran dan Data Center',
            description :<>
            <p>
            MMS Land memiliki 2 portfolio berupa gedung perkantoran yang berlokasi di Jakarta, yaitu Gedung Commodity Square (d/h Berita Satu Plaza) yang terletak di Jalan Gatot Subroto serta Data Center yang berlokasi di area Kuningan Jakarta.</p>
            <p>
            Gedung Commodity Square (CSQ) dikelola oleh PT Mitra Griya Realitindo sedangkan Data Center dikelola oleh PT Mitra Informatika Gemilang.
            </p>
            </>,
            

            
            left:'27%',
            top:'70%',
        },
        {
            id:'Kutai Kartangera',
            judul:'Perumahan Kalimantan Timur',
            description :<>
                <p>
                Di wilayah Kutai Kartangera, Kalimantan Timur, MMS Land memili 2 portfolio di bidang perumahan. Perumahan Bukit Andara Jonggon serta Kota Harapan Sukses (KHS) di Tanjung Laong.</p>
                <p>
                Perumahan Bukit Andara Jonggon dikembangkan oleh PT Mitra Persona Harmoni terletak pada jalan poros utama Tenggarong - Penajam Paser Utara (ibukota negara baru). Sedangkan, KHS memiliki konsep mini city yang dikembangkan diatas lahan seluas 300 Ha.</p>
            </>,
            left:'48%',
            top:'42%',
        },
       
        {
            id:'Legian Bali',
            judul:'Hotel Bintang 5 di Legian',
            description :
            <>
                <p>
                    MMS Land melalui anak usaha PT Mitra Asian Properti merupakan pemilik mayoritas dari Hotel Pullman Legian. Hotel bintang 5 ini terdiri dari 351 kamar dan memiliki beragam fasilitas, seperti gym, spa, restaurant, dan kolam renang standar internasional.
                </p>
                <p>
                    Pengelolaan Hotel Pullman Legian dipegang langsung oleh Accor Internasional, sebuah jaringan pengelola hotel premium internasional.
                </p>
            </>,
            left:'45%',
            top:'82%',
        },
		{
            id:'Labuan Bajo',
            judul:'Business Hotel Bintang 4 di Labuan Bajo',
            description :
            <>
            <p>
                MMS Land melalui PT Mitra Properti Sentosa berencana mengembangkan hotel bintang 4 dengan konsep bisnis hotel untuk mendukung ekosistem pariwisata segmen MICE (Meeting, Incentive, Conference, and Exhibition) bertaraf Internasional di Labuan Bajo.
            </p>
            <p>
                Hotel ini rencananya akan dikelola oleh jaringan hotel internasional dan dilengkapi dengan fasilitas dan pelayanan berstandar internasional.
            </p>
            </>,
            left:'55%',
            top:'82%',
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
        beforeChange: (current, next) => setChosenState(pinpoint[next].id),
        nextArrow: <NextButton />,
        prevArrow: <NextButton />,
        responsive:[
            {
            breakpoint:900,
            settings:{
                arrows:false

            },
        }
        ]
      };

    
    
    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
               <div className='row'>
                   <div className='col-lg-7 pe-lg-5 '>
                        <div class="image-hotspots ">
                             <img alt='Indonesian Map' src="/img/MMS/Map-Indonesia.png" class="img-fluid" />
                             {pinpoint.map((points,index)=>(
                                <div key={index} style={{left: points.left, top: points.top}} class={`image-hotspot ${chosenState===points.id ? 'image-hotspot-primary' :'image-hotspot-dark' }`}>
                                    { chosenState === points.id && <span className="ring" style={{height:'25px',width:'25px'}}/>}
                                    {
                                        chosenState===points.id ?
                                        <span className="circle" style={{height:'25px',width:'25px'}}/>
                                        : 
                                        <span onClick={(e)=>clickListener(e,index)} className="circle " style={{height:'20px',width:'20px'}}/>

                                    }
                                </div>
                            ))}
                        </div>
                   </div>

                   <div className='col-lg-5 '>
                       <Slider ref={sliderRef} {...settings}>
                           {pinpoint.map((points,index)=>
                            <div className='px-lg-3 px-2' key={index}>
                                <p class="font-weight-semibold mb-1 mt-2 text-primary text-uppercase">{points.id}</p>
                                <div class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{points.judul}</div>
                                <p class=" mb-4 text-4">{points.description}</p>
                                {/* <p class=" mb-4 text-4">{points.description}</p> */}
                            </div>
                           
                           )}

                       </Slider>
                       
                   </div>
               </div>
            </div>
        </section>
    )
}
export default LandSection;