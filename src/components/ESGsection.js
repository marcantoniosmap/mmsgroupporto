import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';

function ESGSection(props){
    

    return(
        <>
    <Parallax
        bgImage='img/MMS/slider-5.jpg'
        bgImageStyle={{top:'10%', minHeight:'100%'}}
        strength={200}
        className="page-header-modern page-header-background page-header-background-md parallax overlay overlay-color-dark overlay-show overlay-op-7 my-0" >
        
        <div class="container container-xl-custom py-3">
		    <div class="row align-items-center py-5">
		    	<div class="col-lg-12 justify-content-center text-center">
                <h2 className="text-color-light mb-1" style={{fontWeight:600}}>Karir yang Menginspirasi Dimulai Dari Sini!</h2>
		    		<p className="lead text-light text-center pb-1">
                    Mari bergabung menjadi keluarga besar MMS Group Indonesia!
		    		</p>
                        <Link class="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5" to="/career">Karir<i class="fas fa-arrow-right ms-2"></i></Link>
                    {/* <div class="get-started text-start text-lg-end">
		    		</div> */}
		    	</div>
		    	<div class="col-lg-4 pt-lg-0 pt-3">
		    		
		    	</div>
		    </div>

		</div>
    </Parallax>
        </>
    )
}

export default ESGSection;