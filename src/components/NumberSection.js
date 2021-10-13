import React, { useEffect, useReducer, useRef, useState } from 'react'
import AnimatedNumber from "animated-number-react";

function NumberSection(props){
    

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
            number :'130',
            caption :'Subsidiaries'
        },

    ]

    return(
        <section class="section section-primary border-0 mb-0">
        <div class="container">
            <div class="row counters counters-sm pb-4 pt-3">
              {itemList.map((item,index)=>
               <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0" key={index}>
               <div class="counter">
                   <i class={`icons icon-${item.iconName} text-color-light`}></i>
                   <strong class="text-color-light font-weight-extra-bold">{item.number}</strong>
                   <label class="text-4 mt-1 text-color-light">{item.caption}</label>
               </div>
           </div>)}
            </div>
        </div>
    </section>
    )
}

export default NumberSection;