import React from "react";

function CareerSection(props){

    const careerText={
        titleBold:'Karir',
        titleNormal:' di MMS Group Indonesia',
        paragraph: `Kami berkomitmen untuk menyediakan fasilitas penyandang disabilitas yang memenuhi syarat dalam aplikasi pekerjaan dan proses rekrutmen kami.
        
        MMSGI menghargai keragaman & rasa memiliki dan bangga menjadi pemberi kerja Kesempatan Kerja yang Setara. Semua individu yang mencari pekerjaan di MMSGI dianggap tanpa memandang ras, warna kulit, agama, asal negara, usia, jenis kelamin, status perkawinan, keturunan, difabel, status veteran, identitas gender, orientasi seksual, atau karakteristik lain yang dilindungi hukum.`
    }

    return(
        <div class="container container-xl-custom pt-5 mt-3">

        <div class="row">
            <div class="col-lg-7 pe-lg-5 order-2 order-lg-1">
                <div className="d-flex align-items-center h-100">
                    <div>
                    <div class="overflow-hidden mb-2">
                        <h2 class="font-weight-normal text-lg-9 text-7 mb-2" ><strong class="font-weight-extra-bold">{careerText.titleBold}</strong>{careerText.titleNormal}</h2>
                    </div>
                    <div class="overflow-hidden mb-4">
                        <p class="text-4 mb-4">{careerText.paragraph}</p>
                    </div>
                    </div>
                </div>
                </div>
            <div class="col-lg-5 order-1 order-lg-2">
                <div class="testimonial testimonial-primary">
                <iframe width="100%" height="auto" style={{minHeight:'300px'}} src="https://www.youtube.com/embed/Z5iElZgYyj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        <hr/>
    </div>
    )
}

export default CareerSection;