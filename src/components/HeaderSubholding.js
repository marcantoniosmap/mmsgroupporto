import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';

function HeaderSubholding(props){
    
    const subholdingArray=['resources','land','solution']
    return(
        <>
        <div style={{height:'100px'}}></div>
    <Parallax
        bgImage='/img/MMS/slider-3.png'
        bgImageStyle={{top:'9%'}}
        strength={300}
        className="page-header page-header-modern page-header-background page-header-background-md parallax overlay overlay-color-light overlay-show overlay-op-8 mt-0 p-0" >
        
        <div class="container py-lg-5 py-4">
            <div class="row  py-lg-5 py-2">
            <div class="col-md-12 align-self-center p-static order-2 text-center">
                <div className='row'>
                    {
                        subholdingArray.map((sub,index)=>
                            <div className='col-4 px-2'>
                                <Link to={`/business/${sub}`}>
                                    <img alt={'MMS' + sub} className={`${ sub!==props.id &&'image-greyscale'} img-fluid subHolding-default pb-lg-0`} src={`/img/MMS/logo/Subholding/${sub}.png`}/> 
                                </Link>
                            </div>
                        
                        )
                    }
                   
                </div>

            </div>
                {/* <div class="col-md-12 align-self-center order-1">
                    <ul class="breadcrumb breadcrumb-dark d-block text-center">
                    {props.breadcrumb.map((item,index)=>
                        <li><Link to={item.url}>{item.name}</Link></li>)}
                       </ul>
                </div> */}
               
            </div>
        </div>
    </Parallax>
        </>
    )
}

export default HeaderSubholding;