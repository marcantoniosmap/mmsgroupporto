import React from "react";

function CareerSection(props){

    const careerText={
        titleBold:'Karir',
        titleNormal:' di MMS Group Indonesia',
        paragraph1:' We are committed to providing reasonable accommodations for qualified applicants with disabilities in our job application and recruitment process.',
        paragraph2:'MMSGI values diversity & belonging and is proud to be an Equal Employment Opportunity employer. All individuals seeking employment at MMSGI are considered without regard to race, color, religion, national origin, age, sex, marital status, ancestry, physical or mental disability, veteran status, gender identity, sexual orientation, or any other legally protected characteristic.',
        quote:'There’s life at work and life outside of work. We want everyone to be healthy, travel often, get time to give back, and have the financial resources and support they need.',
    }

    return(
        <div class="container py-5 mt-3">

        <div class="row">
            <div class="col-lg-8">
                <div class="overflow-hidden mb-2">
                    <h2 class="font-weight-normal text-7 mb-2" ><strong class="font-weight-extra-bold">{careerText.titleBold}</strong>{careerText.titleNormal}</h2>
                </div>
                <div class="overflow-hidden mb-4">
                    <p class="lead mb-0">{careerText.paragraph1}</p>
                </div>
                <p class="text-color-light-3 mb-4">{careerText.paragraph2}</p>
            </div>
            <div class="col-lg-4">
                <div class="testimonial testimonial-primary">
                    <blockquote>
                        <p class="mb-0">{careerText.quote}</p>
                    </blockquote>
                </div>
            </div>
        </div>

    </div>
    )
}

export default CareerSection;