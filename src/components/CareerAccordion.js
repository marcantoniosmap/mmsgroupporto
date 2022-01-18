import React from "react";
import content from '../careercontent'

function CareerAccordion(props){

    console.log(content)


    return(
        <section class="section bg-light section-default border-0 m-0 p-0">
        
        <div class="container container-xl-custom py-4">

            <div class="row pb-4">
                <div class="col-lg-12">
                    <h4 class="mt-2 mb-2 text-lg-8 text-6">Posisi Terbuka</h4>
                    <div class="accordion accordion-modern accordion-modern-status  mt-4" id="accordion"> 
                        {   content.map((item,index)=>
                            <div class="card card-default mb-2" key={index}>
                                <div class="card-header">
                                    <h4 class="card-title m-0">
                                        <a class="accordion-toggle text-3" data-bs-toggle="collapse" data-bs-parent="#accordion" href={`#collapse${index}`}>
                                            {item.title}
                                        </a>
                                    </h4>
                                </div>
                                <div id={`collapse${index}`} class="collapse">
                                    <div class="card-body mt-3">
                                        <div className="row w-100">
                                            <div className="col-lg-6">
                                        <ul class="list list-icons pb-2 mb-4">
                                            <li className="mb-0 px-0"><span class="text-2"><strong>URAIAN PEKERJAAN :</strong></span></li>
                                            {
                                                item.job_desc.map((job_desc,index)=>(
                                                    <li className="mb-0" key={index}><i class="fas fa-caret-right top-6 "></i> <span class="text-2">{job_desc}</span></li>
                                                ))
                                            }
                                        </ul>
                                            </div>
                                            <div className="col-lg-6">
                                            <ul class="list list-icons pb-2 mb-4">
                                            <li className="mb-0 px-0"><span class="text-2"><strong>KUALIFIKASI :</strong></span></li>
                                            {
                                                item.qualification.map((qualification,index)=>(
                                                    <li className="mb-0" key={index}><i class="fas fa-caret-right top-6 "></i> <span class="text-2">{qualification}</span></li>
                                                ))
                                            }
                                        </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
              
            </div>

        </div>
    </section>
    )
}

export default CareerAccordion;