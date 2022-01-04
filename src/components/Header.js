import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';

function Header(props){
    

    return(
        <>
        <div style={{height:'100px'}}></div>
    <Parallax
        bgImage={props.imageUrl}
        bgImageStyle={{top:'9%', minHeight:'100%'}}
        strength={300}
        className="page-header page-header-modern page-header-background page-header-background-md parallax overlay overlay-color-dark overlay-show overlay-op-5 mt-0" >
        
        <div class="container">
            <div class="row">
                <div class="col-md-12 align-self-center p-static order-2 text-center">
                    <h1>{props.textZero} <span style={{fontWeight:600}}>{props.textOne}</span></h1>
                </div>
                <div class="col-md-12 align-self-center order-1">
                    <ul class="breadcrumb breadcrumb-light d-block text-center">
                    {props.breadcrumb.map((item,index)=>
                        <li><Link to={item.url}>{item.name}</Link></li>)}
                        <li className="active">{props.textZero+" "+props.textOne}</li>
                       </ul>
                </div>
            </div>
        </div>
    </Parallax>
        </>
    )
}

export default Header;