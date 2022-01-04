import React, { useEffect, useReducer, useRef, useState } from 'react'
import AnimatedNumber from "animated-number-react";

function VissionMission(props){
    

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
            <div class="container">
                <div class="row mt-3 mb-5">
                    <div class="col-md-6 ">
                        <h3 class="font-weight-bold text-5 mb-2">Visi Kami</h3>
                        <p className=''>Menjadi perusahaan yang berkembang dan tangguh yang memberikan solusi inovatif</p>
                    </div>
                    <div class="col-md-6" >
                        <h3 class="font-weight-bold text-5 mb-2">Misi Kami</h3>
                        <p className=''>
                        <ul>
                            <li>Memberikan dampak positif bagi masyarakat dan lingkungan</li>
                            <li>Tempat kerja yang menyenangkan untuk bekerja dan berusaha</li>
                            <li>Menjadi mitra bisnis berdasarkan prinsip saling percaya dan saling menguntungkan.</li>
                        </ul>
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VissionMission;