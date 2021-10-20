import React from "react";

function  BusinessDevelopment(props){
    
    const process_items=[
        "Nurture business based on process excellence, best practice and GCG\n",
        "Seek ways to create value and monetize investment at the right time",
        "Open for strategic partnership to expedite growth and learning period",
        "Always strive to become  a market leader and best in class players",
        "Enter into new sustainable business based on strength and supported by data"

    ]

    return(
    
    <section class="section section-default border-0">
    <div class="container">
        <div class="row">
            <div class="col mt-5 mb-2 d-flex align-items-center">
                <div class="row process my-5 d-flex align-items-center">
                    {process_items.map((item,index)=>(

                    <div class="process-step col-lg-2 mb-5 mb-lg-4" key={index}>
                        <div class="process-step-circle">
                            <strong class="process-step-circle-content">0{index+1}</strong>
                        </div>
                        <div class="process-step-content">
                            {/* <h4 class="mb-1 text-5 font-weight-bold">First Step</h4> */}
                            <p class="mb-0">{item}</p>
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

export default BusinessDevelopment;