import React from "react";
import content from '../careercontent'

function CareerAccordion(props){

    console.log(content)


    return(
        <section class="section section-default border-0 m-0">
        <div class="container py-4">

            <div class="row pb-4">
                <div class="col-12">
                    <div class="">
                        <h4 class="mt-2 mb-2">Current <strong>Openings</strong></h4>
                        <div class="accordion accordion-modern accordion-modern-grey-scale-1 without-bg mt-4" id="accordion">
                            
                            {
                                content.map((item,index)=>
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
                                            <li className="mb-0 px-0"><span class="text-2"><strong>JOB DESC :</strong></span></li>
                                            {
                                                item.job_desc.map((job_desc,index)=>(
                                                    
                                                    <li className="mb-0" key={index}><i class="fas fa-caret-right top-6 "></i> <span class="text-2">{job_desc}</span></li>
                                                ))
                                            }
                                        </ul>

                                            </div>
                                            <div className="col-lg-6">
                                            <ul class="list list-icons pb-2 mb-4">
                                            <li className="mb-0 px-0"><span class="text-2"><strong>QUALIFICATION :</strong></span></li>
                                            {
                                                item.qualification.map((qualification,index)=>(
                                                    
                                                    <li className="mb-0" key={index}><i class="fas fa-caret-right top-6 "></i> <span class="text-2">{qualification}</span></li>
                                                ))
                                            }
                                        </ul>
                                            </div>
                                        </div>
{/* 
                                        <ul class="list list-inline mt-4 mb-3 text-2">
                                            <li class="list-inline-item">
                                                <strong>LOCATION:</strong>
                                                NEW YORK
                                            </li>
                                            <li class="list-inline-item ms-md-3">
                                                <strong>QUALIFICATION:</strong>
                                                3+ YEARS EXPERIENCE, GRADUATION
                                            </li>
                                        </ul>

                                        <a href="#" class="btn btn-modern btn-dark">Apply</a> */}
                                    </div>
                                </div>
                            </div>
                                )
                            }

                        </div>
                    </div>

                </div>
              
            </div>

        </div>
    </section>
    )
}

export default CareerAccordion;