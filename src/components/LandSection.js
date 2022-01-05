import React, { useReducer, useRef, useState } from 'react'
import Slider from 'react-slick';

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
            description :'',
            left:'27%',
            top:'70%',
        },
        {
            id:'Samarinda',
            judul:' ',
            description :'',
            left:'48%',
            top:'42%',
        },
        {
            id:'Legian Bali',
            judul:'Hotel 4 Bintang di Legian',
            description :'',
            left:'45%',
            top:'82%',
        },
		{
            id:'Labuan Bajo',
            judul:'Hotel Labuan Bajo',
            description :'',
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
        beforeChange: (current, next) => setChosenState(pinpoint[next].id)
      };

    
    
    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
               <div className='row'>
                   <div className='col-lg-7'>
                        <div class="image-hotspots">
                             <img src="/img/MMS/Map-Indonesia.png" class="img-fluid" />
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
                                <p class=" mb-4 text-4">KHS merupakana sektor properti MMSGI. Kegiatan usaha MMS Land meliputi pengelolaan pengembangan dan pengelolaan properti residensial dan komersial seperti komplek perumahan (minicity), hotel, gedung perkantoran. Selain itu, MMS Land juga mengembangkan dan mengelola data center sebagai upaya untuk penyediaan infrastruktur digital</p>
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