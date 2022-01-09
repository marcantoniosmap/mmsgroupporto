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
                MMS Land memiliki 2 portofolio yang mengelola aset  berupa gedung perkantoran dan data center yang berlokasi di Jakarta.
            </p>
            <p>
            PT Mitra Griya Realti merupakan portofolio MMSGI yang mengelola gedung Commodity Square (d/h Berita Satu Plaza) yang terletak di area Gatot Subroto yang merupakan Central Business District utama di Jakarta. Commodity Square memiliki jumlah lantai mencapai 10 lantai yang mampu mengakomodasi [xxx] orang.
            </p>
            <p>
            PT Mitra Informatika Gemilang merupakan portofolio MMSGI yang mengembangkan dan mengelola Downtown Data Tier 3+ Data Center dengan 99.99% uptime availability dan keamanan tinggi yang berlokasi di area Kuningan Jakarta. Data Center ini akan  menawarkan jasa kolokasi dan interkoneksi untuk mendukung akses data tanpa batas di Indonesia',
            </p>
            </>,
            

            
            left:'27%',
            top:'70%',
        },
        {
            id:'Samarinda',
            judul:'Kota Mandiri Kalimantan Timur',
            description :<>
                <p>
                    MMS Land memiliki 2 portofolio di Kalimantan Timur yang berlokasi di Kutai Kartanegara.
                </p>
                <p>
                    PT Mitra Pesona Harmoni mengembangkan perumahan Bukit Andara Jonggon, sebuah kawasan hunian hijau di Jonggon, Kutai Kartanegara. Perumahan Bukit Andara merupakan komplek residensial mandiriyang dilengkapi area komersial dan fasilitas umum yang memadai. Selain itu lokasi kawasan ini terletak pada jalan poros utama Tenggarong - Penajam Paser Utara (ibukota negara baru) sehingga memiliki nilai potensi investasi yang tinggi
                </p>
                <p>
                    Kota Harapan Sukses merupakan kawasan yang akan dikembangkan oleh MMS Land di Samarinda dengan konsep minicity terintegrasi yang terletak di area Tanjung Laong, Kutai Kartanegara. Mini City KHS dikembangkan untuk menjadi hunian terbaik di Kutai Kartanegara diatas lahan seluas 300 Ha dengan fasilitas umum yang lengkap',
                </p>
            </>,
            left:'48%',
            top:'42%',
        },
       
        {
            id:'Legian Bali',
            judul:'Hotel Bintang 5 di Legian',
            description :'MMS Land melalui anak usaha PT Mitra Asian Properti merupakan pemilik mayoritas dari Hotel Pullman Legian. Hotel ini merupakan hotel bintang 5 yang terdiri dari [xx] kamar yang terletak di kawasan wisata strategis di Bali. Hotel ini dikelola oleh Accor International, sebuah jaringan pengelola hotel premium internasional, untuk memberikan pengalaman premium bagi penghuni dan wisatawan. Hotel Pullman Legian dilengkapi dengan fasilitas lengkap seperti, gym, spa, restaurant dan kolam renang dengan standar internasional. PT Mitra Asian Properti berkomitmen untuk terus mendukung ekosistem pariwisata dan pelestarian budaya di Bali',
            left:'45%',
            top:'82%',
        },
		{
            id:'Labuan Bajo',
            judul:'Hotel Labuan Bajo',
            description :'MMS Land melalui anak usaha PT Mitra Properti Sentosa akan mengembangkan sebuah hotel bintang 4 dengan konsep business hotel untuk mendukung ekosistem pariwisata segmen MICE (Meeting, Incentive, Conference dan Exhibition)  bertaraf internasional di Labuan Bajo. Hotel ini memiliki lokasi strategis dekat Bandara Internasional Komodo yang akan dikelola oleh jaringan hotel internasional dan dilengkapi dengan fasilitas dan pelayanan berstandar internasional. ',
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
        prevArrow: <NextButton />
      };

    
    
    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
               <div className='row'>
                   <div className='col-lg-7 pe-lg-4'>
                        <div class="image-hotspots">
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

                   <div className='col-lg-5'>
                       <Slider ref={sliderRef} {...settings}>
                           {pinpoint.map((points,index)=>
                            <div className='px-3' key={index}>
                                <p class="font-weight-semibold mb-1 mt-2 text-primary text-uppercase">{points.id}</p>
                                <p class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{points.judul}</p>
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