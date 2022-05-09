import React from "react";
import { useLanguage } from "../Pages/LanguageContext";

function CareerSection(props){

    const {isIndo}= useLanguage()
    const careerText={
        titleBold:'Karir',
        titleBold_en:'Career',
        titleNormal:' di MMS Group Indonesia',
        titleNormal_en:' in MMS Group Indonesia',
        paragraph: `Kami berkomitmen untuk menyediakan fasilitas penyandang disabilitas yang memenuhi syarat dalam aplikasi pekerjaan dan proses rekrutmen kami.
        
        MMSGI menghargai keragaman & rasa memiliki dan bangga menjadi pemberi kerja Kesempatan Kerja yang Setara. Semua individu yang mencari pekerjaan di MMSGI dianggap tanpa memandang ras, warna kulit, agama, asal negara, usia, jenis kelamin, status perkawinan, keturunan, difabel, status veteran, identitas gender, orientasi seksual, atau karakteristik lain yang dilindungi hukum.`,
        paragraph_en: `We are committed to providing facilities for people with disabilities who qualify in our job application and recruitment process standards. 
        
        MMSGI valued diversity and sense of belonging, also proud to be an Equal Employee Opportunity employer. Each individual who seeks employment at MMSGI is considered a talent regardless his/her race, colour, religion, national origin, age, gender, marital status, ancestry, disability, veteran status, sexual orientation or other characteristics that are legally protected by Indonesian law.`
    }

    return(
        <div class="container container-xl-custom pt-5 mt-3">

        <div class="row">
            <div class="col-lg-7 pe-lg-5 order-2 order-lg-1">
                <div className="d-flex align-items-center h-100">
                    <div>
                    <div class="overflow-hidden mb-2">
                        <h2 class="font-weight-normal text-lg-9 text-7 mb-2" ><strong class="font-weight-extra-bold">{isIndo?careerText.titleBold: careerText.titleBold_en}</strong>{isIndo?careerText.titleNormal:careerText.titleNormal_en}</h2>
                    </div>
                    <div class="overflow-hidden mb-4">
                        <p class="text-4 mb-4">{isIndo?careerText.paragraph:careerText.paragraph_en}</p>
                    </div>
                    </div>
                </div>
                </div>
            <div class="col-lg-5 order-1 order-lg-2">
                <div class="testimonial testimonial-primary">
                <iframe width="100%" height="auto" style={{minHeight:'300px'}} src="https://www.youtube.com/embed/qP51u8D0l4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        <hr/>
    </div>
    )
}

export default CareerSection;