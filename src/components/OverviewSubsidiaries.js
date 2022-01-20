import React from "react";
import { Link } from "react-router-dom";

function  OverviewSubsidiaries(props){
    
    const process_items=[
    {
        imgUrl:'img/MMS/logo/Subholding/resources.png',
        title :'MMS Resources',
        caption_en :'was established in 2005 as the sub-holding company of all coal and other mineral mining and trading',
        caption :'Didirikan pada tahun 2012 sebagai sub-holding usaha pertambangan dan perdagangan mineral',
        url:'business/resources'
    },{
        imgUrl:'img/MMS/logo/Subholding/land.png',
        title :'MMS Land',
        caption_en : 'was established in 2018 as the sub-holding of property and hospitality assets',
        caption : 'Didirikan pada tahun 2018 sebagai sub-holding usaha properti dan real estat',
        url:'business/land'
    },{
        imgUrl:'img/MMS/logo/Subholding/solution.png',
        title :'MMS Solution',
        caption_en : 'was established in 2020 as the sub-holding for all sustainable initiatives',
        caption : 'Didirikan pada tahun 2020 sebagai sub-holding usaha berkelanjutan untuk masa depan',
        url:'business/solution'
    }
    ]

    // const mmsCaption='was established in 2005 as coal trading company, as business grow the function transformed into a holding company for three main business pillars'
    const mmsCaption='Berawal pada tahun 2005 sebagai perusahaan perdagangan batubara, dalam perjalannnya MMSGI tumbuh menjadi perusahaan induk dengan tiga pilar usaha utama'

    return(
    
    <section className="section section-default border-0 mb-0">
    <div class="container py-5">
       
        <div class="">
        <div className="text-center">
            <h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2">MMS GROUP INDONESIA</h3>
            <h2 class="font-weight-bold text-color-dark text-lg-11 text-9 line-height-3 line-height-md-1 mb-5">Struktur Perusahaan</h2>
        </div>
            <div className="text-center mmsgroup-holding process row d-flex justify-content-center mb-lg-5 mt-3">
                <div className="col-lg-6 mb-5">
                    <img className="img-fluid" style={{width:'100px'}}  src="img/MMS/logo/MMS/mmslogo.png"/>
                    <div class="process-step-content px-3 px-lg-0">
                        <h4 class="mb-1 text-5 font-weight-bold">MMS Group Indonesia</h4>
                        <p className="text-center mb-0 px-lg-5">{mmsCaption}</p>
                    </div>
                </div>
            </div>
            <div class="col mt-lg-5 mb-2 d-flex align-items-center">
                
                <div class="row process mt-3">
                    {process_items.map((item,index)=>(

                    <div class="process-step col-lg-4 mb-lg-2 mb-5 d-flex justify-content-start" key={index}>
                        <div class="process-step-circle" style={{borderColor:'transparent'}}>
                        <Link to={item.url}>
                            <img src={item.imgUrl} className="img-fluid"/>
                        </Link>
                        </div>
                        <div class="process-step-content px-3 px-lg-0 pt-0">
                            {/* <h4 class="mb-1 text-5 font-weight-bold"><Link className="text-dark btn-flat" to={item.url}>{item.title}</Link></h4> */}
                            <p class="text-center mb-0 px-W">{item.caption}</p>
                        </div>
                    </div>
                    ))}
                   
                </div>

            </div>
        </div>
    </div>
</section>
)
}

export default OverviewSubsidiaries;