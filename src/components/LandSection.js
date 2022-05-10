import React, { useReducer, useRef, useState } from 'react'
import Slider from 'react-slick';
import NextButton from './NextButton';
import { useLanguage } from '../Pages/LanguageContext';

function LandSection(props){

    const {isIndo} = useLanguage()
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
            judul_en:'Office Building and Data Center',
            description :<>
            <p>
            MMS Land memiliki 2 portfolio berupa gedung perkantoran yang berlokasi di Jakarta, yaitu Gedung Commodity Square (d/h Berita Satu Plaza) yang terletak di Jalan Gatot Subroto serta Data Center yang berlokasi di area Kuningan Jakarta.</p>
            <p>
            Gedung Commodity Square (CSQ) dikelola oleh PT Mitra Griya Realitindo sedangkan Data Center dikelola oleh PT Mitra Informatika Gemilang.
            </p>
            </>,
            description_en :<>
            <p>
            MMS Land owns 2 office building portfolios located in Jakarta, namely Commodity Square Building (formerly Berita Satu Plaza) located on Jalan Gatot Subroto and Data Center located in the Kuningan area of Jakarta.            </p>
            <p>
            The Commodity Square (CSQ) building is managed by PT Mitra Griya Realitindo while the Data Center is managed by PT Mitra Informatika Gemilang.
            </p>
            </>,
            
            left:'27%',
            top:'70%',
        },
        {
            id:'Kutai Kartangera',
            judul:'Perumahan Kalimantan Timur',
            judul_en:'East Kalimantan Housing',
            description :<>
                <p>
                Di wilayah Kutai Kartangera, Kalimantan Timur, MMS Land memiliki 2 portfolio di bidang perumahan. Perumahan Bukit Andara Jonggon serta Kota Harapan Sukses (KHS) di Tanjung Laong.</p>
                <p>
                Perumahan Bukit Andara Jonggon dikembangkan oleh PT Mitra Persona Harmoni terletak pada jalan poros utama Tenggarong - Penajam Paser Utara (ibukota negara baru). Sedangkan, KHS memiliki konsep mini city yang dikembangkan diatas lahan seluas 300 Ha.</p>
            </>,
            description_en :<>
            <p>
            In the Kutai Kartanegara area, East Kalimantan, MMS Land owns 2 residential housing portfolio, Bukit Andara Jonggon Housing and the City of Hope for Success (KHS) in Tanjung Laong.            </p>
            <p>
            Bukit Andara Jonggon housing developed by PT Mitra Persona Harmoni is located on the main axis of Tenggarong - Penajam Paser Utara (the new state capital). Meanwhile, KHS carries the concept of a mini city which is developed on 300 hectares area.
            </p>
            </>,
            left:'48%',
            top:'42%',
        },
       
        {
            id:'Legian Bali',
            judul:'Hotel Bintang 5 di Legian',
            judul_en:'5 Star Hotel in Legian',
            description :
            <>
                <p>
                    MMS Land melalui anak usaha PT Mitra Asian Properti merupakan pemilik mayoritas dari Hotel Pullman Legian. Hotel bintang 5 ini terdiri dari 351 kamar dan memiliki beragam fasilitas, seperti gym, spa, restaurant, dan kolam renang standar internasional.
                </p>
                <p>
                The management of Pullman Legian Hotel is directly handled by Accor International, an international premium hotel management network.
                </p>
            </>,
             description_en :
             <>
                 <p>
                 MMS Land through its subsidiary PT Mitra Asian Properti is the majority owner of the Pullman Legian Hotel. The 5-star hotel consists of 351 rooms and manages various facilities, such as a gym, spa, restaurant, and international standard swimming pool.
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
            judul:'Business Hotel Bintang 5 di Labuan Bajo',
            judul_en:'5-star Business Hotel in Labuan Bajo',
            description :
            <>
            <p>
                MMS Land melalui PT Mitra Properti Sentosa berencana mengembangkan hotel bintang 5 dengan konsep bisnis hotel untuk mendukung ekosistem pariwisata segmen MICE (Meeting, Incentive, Conference, and Exhibition) bertaraf Internasional di Labuan Bajo.
            </p>
            <p>
                Hotel ini rencananya akan dikelola oleh jaringan hotel internasional dan dilengkapi dengan fasilitas dan pelayanan berstandar internasional.
            </p>
            </>,
            description_en :
            <>
            <p>
                MMS Land through PT Mitra Properti Sentosa plans to develop a 5-star hotel with a business hotel concept to support the MICE (Meeting, Incentive, Conference, and Exhibition) tourism ecosystem with international standard in Labuan Bajo.            </p>
            <p>
                The hotel is planned to be managed by an international hotel chain and equipped with international standard facilities and services.            </p>
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
                                <div class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{isIndo ?points.judul: points.judul_en}</div>
                                <p class=" mb-4 text-4">{isIndo?points.description: points.description_en}</p>
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