import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import HeaderSubholding from "../components/HeaderSubholding";
import LandSection from "../components/LandSection";
import ResourcesSection from "../components/ResourcesSection";
import SolutionSection from "../components/SolutionSection";
import content from '../subholdingdetail'

function Subholding(props){

    const [subholdingContent,setSubholdingContent]=useState(null)

    useEffect(() => {
        for (let x of content) {
            if (x.id === props.match.params.id) {
                setSubholdingContent(x)
                break;
            }
        }
    }, [props.match.params.id])

    
    const listNum=[1,2,3,4,5,6,7,8];

    const setting ={
        className:'h-100',
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        adaptiveHeight: true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,

                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,

                }
              },
        ]
    }
    return(
        <>
        {
            subholdingContent &&

       <>
        <HeaderSubholding
            imageUrl={subholdingContent.header_image}
            comp = {<div>
                <img className="" style={{width:'250px'}} src={`/img/MMS/logo/Subholding/${subholdingContent.id}.png`}/> 
            </div>}
        />
        <div class="container container-xl-custom py-5 my-5">
			<div class="row text-center text-lg-start">
				<div class="col-lg-6 pe-lg-5 order-lg-1 order-2">
					<p class="font-weight-semibold mb-1 mt-2 text-uppercase">{subholdingContent.subheading}</p>
					<p class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{subholdingContent.title}</p>
					<p class=" mb-4 text-4">{subholdingContent.caption}</p>
                    <div className="row">
                        {subholdingContent.company.map((comp,index)=>
                        <div className="col-xl-3 col-md-4 col-6" key={index}>
                            <img className="img-fluid" src={`/img/MMS/subholding/logo/${comp}.png`} alt={comp} />
                        </div>
                        )}
                            
                    </div>
				</div>
				<div class="col-lg-6 text-center px-2 mt-3 mt-lg-0 order-lg-2 order-1" style={{overflow:'hidden'}} >
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/LbVbQFwgYOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					{/* <img src={subholdingContent.desc_image} style={{height:'100%', width:'auto'}} className="d-lg-block " alt=""/> */}
				</div>		
			</div>

            
		</div>
            {subholdingContent.id==='solution' ? <SolutionSection/> : subholdingContent.id==='land' ? <LandSection/> : <ResourcesSection/>}

        {/* <div class="">
			<Slider {...setting}>
                {listNum.map((num,index)=>
                    <img className='' src={`/img/MMS/milestone/milestone-2 (${num}).jpg`}/>
                )}
            </Slider>
		</div> */}
        </>
    }
        </>
    )
}
export default Subholding