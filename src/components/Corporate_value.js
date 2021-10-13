import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Corporate_value(props){

    const valueItem=[
        {
            imageUrl:'img/MMS/value/modern.svg',
            letterBold:'M',
            continutity:'odern',
            caption: 'To achieve its vision and mission, MMSGI must be ready to make changes for the better'
        },
        {
            imageUrl:'img/MMS/value/meaningful.svg',
            letterBold:'M',
            continutity:'eaningful',
            caption: 'Everything that is started, implemented and produced has a good / positive effect'
        },
        {
            imageUrl:'img/MMS/value/synergy.svg',
            letterBold:'S',
            continutity:'ynergy',
            caption: 'Coordination and Interaction to get Greater Production'
        },
        
            {
                imageUrl:'img/MMS/value/goaloriented.svg',
                letterBold:'G',
                continutity:'oal Oriented',
                caption: 'Focus on achieving goals'
            },
            {
                imageUrl:'img/MMS/value/integrity.svg',
                letterBold:'I',
                continutity:'ntegrity',
                caption: 'Consistent/ conformity in words, actions, principles/ values, strong character'
            },
    ]

    return(
    <section class="section bg-color-grey-scale-1 section-height-1 section-no-border my-0">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h2 class="font-weight-normal text-6 mb-5 mt-4">Corporate <strong class="font-weight-bold">Culture</strong></h2>
            </div>
        </div>

        <div class="row justify-content-center ">
            {valueItem.map((item,index)=>
                <div class="col-lg-4 mb-4" key={index}>
                    <div class="feature-box feature-box-secondary feature-box-style-4">
                        <div class="feature-box-icon mb-2">
                            <img className='h-100' style={{minHeight:'100px'}}src={item.imageUrl}/>
                        </div>
                        <div class="feature-box-info">
                            <h4 class="mb-2 text-center"><span className=" font-weight-bold">{item.letterBold}</span>{item.continutity}</h4>
                            <p className='px-lg-2 px-4 text-center'>{item.caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
</section>)
}

export default Corporate_value;