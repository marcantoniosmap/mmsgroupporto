import React, { useEffect, useReducer, useRef, useState } from 'react'
import AnimatedNumber from "animated-number-react";
import { useLanguage } from '../Pages/LanguageContext';

function VissionMission(props){
    
    const {isIndo} = useLanguage()

    const itemList=[
        {
            iconName:'user',
            number :'1000',
            caption :'Employees'
        },
        {
            iconName:'badge',
            number :'12',
            caption :'Years in Business'
        },
        {
            iconName:'compass',
            number :'15',
            caption :'Reached Cities'
        },
        {
            iconName:'briefcase',
            number :'3',
            caption :'Line of Business'
        },

    ]

    return(
        <section class="section section-primary border-0 mb-0">
            <div class="container container-xl-custom">
                <div class="row my-3">
                    <div class="col-lg-6 pe-5 mb-5 mb-lg-3 mb-lg-0">
                    <div className='' style={{position:'relative',opacity:'0.2', top:'60px',right:'110px'}}>
                            <img className='d-none d-lg-block' style={{position:'absolute', bottom:'0px'}} width='140px' alt='visi' src='/img/MMS/visi.png'/>
                        </div>
                        <div className=' pe-lg-5'>
                        <h3 class="font-weight-bold text-8 mb-2">{isIndo ?'Visi':'Vision'}</h3>
                        <div class="custom-divider divider divider-light divider-small my-3">
                            <hr class="my-0"/>
                        </div>
                        {isIndo? <p className='text-5 pt-3'>Menjadi perusahaan yang berkembang dan tangguh yang memberikan<b> solusi inovatif</b>.</p>
                        
                            :<p className='text-5 pt-3'>To be a growing and resilient company that provides <b>innovative solutions</b>.</p>}

                        </div>
                    </div>
                    <div class="col-lg-6 pe-5" >
                        <div className='' style={{position:'relative',opacity:'0.2', top:'60px',right:'110px'}}>
                            <img className='d-none d-lg-block' style={{position:'absolute', bottom:'0px'}} width='140px' alt='misi' src='/img/MMS/misi.png'/>
                        </div>
                        <h3 class="font-weight-bold text-8 mb-2">{isIndo?'Misi':'Mission'}</h3>
                        <div class="custom-divider divider divider-light divider-small my-3">
                            <hr class="my-0"/>
                        </div>
                        <p className='text-4 mb-0'>
                           {isIndo? <ul className='ps-3'>
                                <li className='py-2'>Memberikan dampak positif bagi masyarakat dan lingkungan,</li>
                                <li className='py-2'>Tempat kerja yang menyenangkan untuk bekerja dan berusaha, dan</li>
                                <li className='py-2'>Menjadi mitra bisnis berdasarkan prinsip saling percaya dan saling menguntungkan.</li>
                            </ul>:
                            <ul className='ps-3'>
                                <li className='py-2'>Bring positive impact to community and environment,</li>
                                <li className='py-2'>Bring a fun workplace to work and to strive, and</li>
                                <li className='py-2'>•	Bring value add to business partner through a win-win solution.</li>
                            </ul>
}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VissionMission;