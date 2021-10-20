import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';

function ESGSection(props){
    

    return(
        <>
    <Parallax
        bgImage='img/MMS/slider-3.png'
        bgImageStyle={{top:'10%', minHeight:'100%'}}
        strength={200}
        className="page-header-modern page-header-background page-header-background-md parallax overlay overlay-color-dark overlay-show overlay-op-5 my-0" >
        
        <div class="container py-5">
		    <div class="row align-items-center">
		    	<div class="col-lg-8">
                <h2 class="font-weight-bold text-color-light line-height-1 mb-3 ">Our ESG</h2>
		    		<p className="lead text-light my-0">
                    Environmental, Social, and Corporate Governance is an evaluation of a firm’s collective conscientiousness for social and environmental factors.
		    		</p>
		    	</div>
		    	<div class="col-lg-4">
		    		<div class="get-started text-start text-lg-end">
		    			<Link to='/esg' class="btn btn-primary btn-lg text-3 font-weight-semibold px-4 py-3">Explore MMSGI ESG</Link>
		    		</div>
		    	</div>
		    </div>

		</div>
    </Parallax>
        </>
    )
}

export default ESGSection;