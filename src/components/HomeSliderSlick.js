import React,{useEffect,useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import Slider from 'react-slick'
import { fadeIn } from 'react-animations'

function HomeSliderSlick({sliderContent}){
    const setting ={
        className:'h-100',
        infinite: true,
        slidesToShow: 1,
        arrow:false,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        adaptiveHeight: true
    }
    return(
        <>
        <div style={{height:'100px'}}></div>
        <div style={{height:'calc(100vh - 100px)', display:'block',width:'100%',position:'relative'}}>
            <Slider {...setting}>
            {sliderContent.map((content)=>
            <>
                    <div class="overlay overlay-show overlay-op-6 pt-5" style={{backgroundImage:`url(${content.imageUrl})`,backgroundSize:'cover',backgroundPosition:'center',height:'calc(100vh - 100px', boxSizing:'border-box'}} key={content.Textline1}>
                        <div class="container container-xl-custom pt-5 h-100">
						    <div class="row align-items-center pt-5 h-100">
							    <div class="col">
								    <h1 class=" text-color-light  text-12 line-height-2 mb-3">
									    <span>{content.Textline1}<br/> 
										    <span style={{fontWeight:600}}>{content.Textline2}</span>
                                        </span>
                                    </h1>
								    <p class="text-4-5 text-color-light font-weight-light opacity-9 mb-4 " style={{maxWidth:'700px'}} >{content.Paragraph}</p>
                                    {
                                         
                                         content.CTA &&<Link to={content.CTAlink} class="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-2">{content.CTA}<i class="fas fa-arrow-right ms-2"></i></Link>
                                    }
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
export default HomeSliderSlick;