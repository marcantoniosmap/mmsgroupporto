import React from 'react'
import { useLanguage } from '../Pages/LanguageContext';

function SambutanCEO(props){

    const {isIndo} = useLanguage()
    return(
    <div class="container container-xl-custom pt-5">
        <div class="row py-4 mb-2">
            <div class="col-lg-8 order-2 align-items-center justify-content-center d-flex pe-lg-3" >
                <div>
                <div class="overflow-hidden">
					<h2 class="text-color-dark font-weight-bold text-lg-12 text-10 mb-lg-4 mb-2 pt-0 mt-0">{isIndo ?'Sambutan Direktur Utama' :'Greetings From CEO'}</h2>
                </div>

                {isIndo ? <p class="text-justify text-4">
                    MMS Group Indonesia mempunyai cita-cita menjadi perusahaan energi berkelanjutan dan terpercaya untuk seluruh rakyat Indonesia. Seluruh upaya kami tujukan untuk terciptanya <i>green society</i> untuk Indonesia yang tangguh, mandiri, dan berkelanjutan. Cita-cita tersebut kami wujudkan melalui bisnis kami yang menyediakan energi terpadu dari hulu sampai dengan hilir serta bisnis bernuansa <i>green environment</i>.
                        <br/><br/>
                    Dengan perkembangan saat ini, aspek lingkungan, sosial dan tata kelola menjadi perhatian dari setiap bisnis, terutama pada perusahaan energi. Kami menjawab tantangan tersebut dimana kami telah berkembang dari sebuah perusahaan di sektor pertambangan dan perdagangan batubara yang kemudian merambah sektor properti dan bisnis-bisnis berkelanjutan yang sesuai dengan prinsip <i>Sustainable Development Goals</i> (SDGs) seperti pembangkit listrik tenaga surya, pertanian berteknologi tinggi, dan smelter nikel. 
                        <br/><br/>
                    Selain itu, kami juga mendukung program <i>Net Zero Emission</i> Indonesia 2060 dengan perencanaan dan implementasi efisiensi energi dan penggunaan listrik berbasis energi baru terbarukan. Khusus untuk aspek sosial, kami aktif berkontribusi kepada masyarakat melalui Yayasan Life After Mine yang kami dirikan untuk meningkatkan kesejahteraan masyarakat terutama di area sekitar pertambangan. 
                        <br/><br/>
                    <p  style={{textAlign:'right'}}>
                        Salam,
                        <br/>
                            <span class="font-weight-bold text-primary text-uppercase mb-0">Sendy Greti</span>
                            <p class=" text-3 text- font-weight-semibold text-dark my-0" style={{lineHeight:'18px'}}>Direktur Utama</p> 
                        </p>
                   </p>:
                   <p class="text-justify text-4">
                        MMS Group Indonesia aspires to be a sustainable and reliable energy company for Indonesia. We marshal our effort to nurture a green society for stronger, independent, and sustainable Indonesia. Our aspiration is translated through our businesses which provide integrated energy from upstream to downstream under green environment nuance.
                       <br/><br/>
                       Reflecting on the current global issues, environment, social and governance aspects have been the main concerns for many stakeholders, particularly in energy sector. We respond to the challenge by growing our business from coal-mining and trading business to property and other sustainable businesses, in line with Sustainable Development Goals (SDGs) principles, such as solar power plant, high-technology farming, and nickel smelter to support battery development.
                       <br/><br/>
                       Additionally, we also support the Indonesia Net Zero Emission 2060 initiative by planning and implementing the energy efficiency program and the use of renewable energy in our operating area. Notably in social aspect, we are actively contributing to the local community through Yayasan Life After Mine to improve the well-being of the people living around mining area.
                       <br/><br/>
                   <p  style={{textAlign:'right'}}>
                       Regards,
                       <br/>
                           <span class="font-weight-bold text-primary text-uppercase mb-0">Sendy Greti</span>
                           <p class=" text-3 text- font-weight-semibold text-dark my-0" style={{lineHeight:'18px'}}>Chief Executive Officer</p> 
                       </p>
                  </p>
                   }
                {/* <hr class="solid my-4 "/>

                <p class="pb-3" style={{fontStyle:'italic'}}>"Salah satu kunci sukses adalah pantang menyerah serta kemauan untuk menghadapi dan menyelesaikan masalah. Dengan menghadapi dan menyelesaikan masalah, seseorang akan banyak belajar sehingga dirinya dapat berkembang menjadi lebih baik dari sebelumnya."</p> */}

            </div>
            </div>
            <div class="col-lg-4 order-lg-2 mb-4 mb-lg-0 d-flex align-items-center" style={{maxWidth:'500px'}}>
                <img src="img/MMS/Sendi Greti.jpg" className="img-fluid mb-2 pl-2"  alt=""/>
            </div>
        </div>
    </div>
    )
}
export default SambutanCEO;