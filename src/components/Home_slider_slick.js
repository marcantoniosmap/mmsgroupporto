import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import { fadeIn } from 'react-animations'

function Home_slider_slick(props){
    const setting ={
        className:'h-100',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        adaptiveHeight: true
    }

    const sliderContent=[

        {imageUrl: '/img/MMS/slider-1.png',
        Textline1 : 'Building Indonesia',
        Textline2 : 'Since 2005',
        Paragraph : 'learn more about our values',
        CTA : 'About MMS',
        CTAlink : '/about',
        },

        {imageUrl: '/img/MMS/slider-2.png',
        Textline1 : 'Diversified',
        Textline2 : 'Line of Business',
        Paragraph : 'Seek more on MMS 3 main Business pillars',
        CTA : 'Our Business',
        CTAlink : '/business',
        },

        {imageUrl: '/img/MMS/slider-3.png',
        Textline1 : 'Environmental, social',
        Textline2 : 'and corporate governance',
        Paragraph : 'Learn more about MMS ESG!',
        CTA : 'Our ESG',
        CTAlink : '/esg',
        },
    ]
    

    return(
        <>
                <div style={{height:'100px'}}></div>

        <div style={{height:'100vh', display:'block',width:'100%',position:'relative'}}>
            <Slider {...setting}>
            {sliderContent.map((content)=>
            <>
                    <div class="overlay overlay-show overlay-op-4 pt-5" style={{backgroundImage:`url(${content.imageUrl})`,backgroundSize:'cover',backgroundPosition:'center',height:'calc(100vh - 100px', boxSizing:'border-box'}} key={content.Textline1}>
                        <div class="container container-xl-custom pt-5 h-100">
						    <div class="row align-items-center pt-5 h-100">
							    <div class="col">
								    <h1 class=" text-color-light font-weight-extra-bold text-12 line-height-2 mb-3">
									    <span>{content.Textline1}<br/> 
										    {content.Textline2}
                                        </span>
                                    </h1>
								    <p class="text-4-5 text-color-light font-weight-light opacity-9 mb-4" >{content.Paragraph}</p>
								    <Link to={content.CTAlink} class="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-2">{content.CTA}<i class="fas fa-arrow-right ms-2"></i></Link>
							    </div>
						    </div>
					    </div>
					</div>
                    </>
        )}

            </Slider>

        </div>
        </>
    )
}
export default Home_slider_slick;