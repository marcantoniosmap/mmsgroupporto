import React,{useEffect} from 'react'

function Home_slider(){

    const sliderContent=[

        {imageUrl: '/img/MMS/slider-1.png',
        Textline1 : 'Building Indonesia',
        Textline2 : 'Since 2005',
        Paragraph : 'learn more about our values',
        CTA : 'About MMS'
        },

        {imageUrl: '/img/MMS/slider-2.png',
        Textline1 : 'Diversified',
        Textline2 : 'Line of Business',
        Paragraph : 'Seek more on MMS Three main Business pillars.',
        CTA : 'Our Business'
        },

        {imageUrl: '/img/MMS/slider-3.png',
        Textline1 : 'Environmental, social',
        Textline2 : 'and corporate governance',
        Paragraph : 'Learn more about MMS ESG!',
        CTA : 'Our ESG'
        },
    ]

    return(
        <>
        <div class="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover show-dots-xs dots-light nav-inside nav-inside-plus nav-light nav-md nav-font-size-md show-nav-hover mb-0" style={{height:'100vh'}}>
		    <div class="owl-stage-outer">                
    			<div class="owl-stage">
                {sliderContent.map((content)=>
                    <div class="owl-item position-relative overlay overlay-show overlay-op-4 pt-5" style={{backgroundImage:`url(${content.imageUrl})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh'}} key={content.Textline1}>
                        <div class="container container-xl-custom pt-5 h-100">
						    <div class="row align-items-center pt-5 h-100">
							    <div class="col">
								    <h1 class=" text-color-light font-weight-extra-bold text-12 line-height-2 mb-3">
									    <span>{content.Textline1}<br/> 
										    {content.Textline2}
                                        </span>
                                    </h1>
								    <p class="text-4-5 text-color-light font-weight-light opacity-9 mb-4" data-plugin-animated-letters data-plugin-options="{'startDelay': 1500, 'minWindowWidth': 0, 'animationSpeed': 50}">{content.Paragraph}</p>
								    <a href="#" class="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="2200" data-appear-animation-duration="1.2s" data-plugin-options="{'minWindowWidth': 0}">{content.CTA}<i class="fas fa-arrow-right ms-2"></i></a>
							    </div>
						    </div>
					    </div>
					</div>
        )}

				</div>
					</div>
					<div class="owl-nav">
						<button type="button" role="presentation" class="owl-prev"></button>
						<button type="button" role="presentation" class="owl-next"></button>
					</div>
					<div class="owl-dots mb-5">
						<button role="button" class="owl-dot active"><span></span></button>
						<button role="button" class="owl-dot"><span></span></button>
						<button role="button" class="owl-dot"><span></span></button>
					</div>
				</div>
        
        </>
    )
}

export default Home_slider