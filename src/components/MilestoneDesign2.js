import React, { useState } from "react";
import { useLanguage } from "../Pages/LanguageContext";



function MilestoneTab(props){
    const {isIndo}= useLanguage()
    const [selectedYear,setSelectedYear]=useState(8)
    const milestoneContent=[
        {
            title : 'Mengawali Perjalanan MMSGI',
            title_en : 'Starting The Journey',
            year : '2005',
            content : [ <>MMS Group Indonesia (MMSGI) diawali dengan didirikannya PT Mitra Maju Sukses (MMS) pada tahun 2005 sebagai perusahaan perdagangan batu bara yang menjadi pemasok batu bara domestik kepada PLN dan industri lainnya.</>,
                        <>MMSGI memiliki visi untuk menjadi perusahaan yang berkembang dan tangguh untuk memberikan solusi inovatif. Founder Andrew Hidayat mendirikan MMSGI dengan tujuan utama untuk menjadi mitra terpercaya bagi <i>partner</i> bisnis. Andrew melakukan kegiatan usahanya secara tepat, profesional dan bertanggung jawab penuh sejak awal.</>,
                        <>Dengan prinsip dasar tersebut MMSGI terus konsisten menjaga kepercayaan dan membangun reputasi yang baik</>],
            content_en : [ <>MMS Group Indonesia (MMSGI) history begins with the establishment of PT Mitra Maju Sukses (MMS) in 2005 as a coal trading company supplying for domestic market (PLN and other industries)</>,
                        <>MMSGI envisions to be a growing and resilient company that provides innovative solutions. Our Founder, Andrew Hidayat, developed MMSGI with the main goal to be a trusted business partner. Andrew runs his business right, professional and responsible from the start.</>,
                        <>With that principle, MMSGI consistently maintained trust and forged a good reputation.</>]
        },
        {
            title : 'Meniti Pasar Ekspor ',
            title_en : 'Export Market Exploration',
            year : '2012',
            content : [ <>Berbekal kepercayaan dan reputasi yang dibangun selama 7 tahun dan diiringi dengan meningkatnya permintaan batu bara, MMSGI memperluas jangkauan usahanya untuk memenuhi permintaan pasar ekspor dengan membentuk perusahaan PT Mitra Asia Cemerlang (MAC)</>,
                        <>Berawal dari perdagangan batu bara di Kalimantan Selatan, MMSGI memperluas wilayah operasi domestik ke Kalimantan Timur dan melakukan penjualan untuk pasar domestik hingga ekspor seperti ke India, Cina, Korea Selatan, dan Thailand.</>,
                        <>MMS dan MAC terus berkomitmen untuk memberikan pelayanan terbaik kepada <i>partner</i> bisnis secara konsisten dengan menyediakan batu bara kualitas terbaik secara tepat waktu.</>],
            content_en : [ <>With 7 years developed trust and reputation along with the increasing coal demand, MMSGI expanded the business to reach the export market demand by establishing PT Mitra Asia Cemerlang (MAC)</>,
                        <>Initiated with a coal trading in South Kalimantan, MMSGI expanded its domestic operation to East Kalimantan and also tapped the export market such as India, China, South Korea, and Thailand.</>,
                        <>MMS and MAC committed to give the best service for business partner, consistently providing a good quality coal.</>],
        }, {
            title : 'Ekspansi Tambang Batubara',
            title_en : 'Coal Mining Expansion',
            year : '2014',
            content : [ <>Dengan pengalaman dan kepercayaan yang dibangun dalam 9 tahun di perdagangan batu bara, MMSGI melakukan ekspansi vertikal melalui kerjasama <i>Joint Operation</i> bersama MPAS pada 2014 untuk kegiatan produksi tambang batubara di Kalimantan Timur.</>,
                        <>Sebagai langkah strategis untuk memperkuat portofolio menjadi perusahaan batu bara yang terintegrasi, MMSGI mengakuisisi tambang batubara PT Duta Dharma Utama (DDU).</>,
                        <>Ditahun yang sama, MMSGI membentuk MMS Resources (PT Mulia Mandiri Sukses) sebagai pilar usaha untuk mengelola seluruh portofolio batubara. Portofolio yang terintegrasi membuat MMSGI menjadi mitra batu bara terpercaya.</>],
            
                        content_en : [ <>With 9 years forged experience and credibility in coal trading, MMSGI expanded vertically through a Joint Operation with MPAS in 2014 for a coal mine production in East Kalimantan</>,
                        <>As a strategic milestone to strengthen the portfolio to be an integrated coal mining company, MMSGI acquired PT Duta Dharma Utama (DDU), a coal mining company.</>,
                        <>Within the same year, MMSGI established MMS Resources (PT Multi Mandiri Sukses) as a business pillar to manage coal-related portfolio. Controlling an integrated coal mining portfolio renders MMSGI to be a reputable coal business partner.</>],
        },{
            title : 'Diversifikasi ke Bisnis Properti',
            title_en : 'Diversification to Property Business',
            year : '2015',
            content : [ <>MMSGI memiliki visi ke depan untuk diversifikasi bisnis batu bara dan mulai melakukan ekspansi ke sektor lain dengan nilai aset yang terus bertumbuh.</>,
                        <>Melihat industri <i>Property</i> dan <i>Real Estate</i> yang terus berkembang, MMSGI memandang sektor ini sebagai sektor yang tepat untuk diversifikasi bisnis selanjutnya.</>,
                        <>Pada tahun 2015, MMSGI melalui Mitra Asian Properti mengakuisisi sebuah hotel bintang 5 di Legian Bali yang dikelola oleh Pullman, sebuah jaringan hotel Internasional. Melalui portofolio ini, MMSGI bertujuan untuk menyediakan pelayanan berstandar internasional dan mendukung pariwisata lokal.</>],
            content_en : [ <>MMSGI has a vision to diversify its business away from coal business and started to expand to other sector with growing asset value.</>,
                        <>Realizing the growing of Property and Real Estate sector, MMSGI perceived this sector as the right industry to further diversify the venture.</>,
                        <>In 2015, MMSGI through Mitra Asian Property acquired a 5-star hotel in Legian Bali, managed by Pullman, an esteemed international hotel chain. With this portfolio, MMSGI aims to provide international standard service and support local tourism.</>]
        }, {
            title : 'Akuisisi PT Multi Harapan Utama',
            title_en : 'PT Multi Harapan Utama Acquisition',
            year : '2017',
            content : [ <>MMSGI membangun dan membuktikan kapabilitasnya dalam sektor pertambangan batu bara terintegrasi pasca akuisisi DDU dan ekspansi wilayah perdagangan di pasar domestik hingga ekspor.</>,
                        <>Pada tahun 2017 MMSGI mengakuisisi PT Multi Harapan Utama (MHU), sebuah perusahaan tambang pemegang lisensi PKP2B, yang menempatkan MMSGI menjadi salah satu perusahaan tambang batu bara terkemuka di Indonesia.</>,
                        <>Pasca akuisisi MHU, MMSGI dapat mengoptimalkan keahliannya di sektor batu bara. Hal ini membuat MMSGI berada pada posisi yang tepat untuk mulai melakukan investasi masa depan pada bisnis yang berkelanjutan.</>
                ],
            content_en : [ <>MMSGI built and proved its capability as integrated coal mining sector after acquiring DDU and expanding its coal trading domestic and export market.</>,
            <>In 2017, MMSGI acquired PT Multi Harapan Utama (MHU), a coal contractor appointed by the Government of the Republic of Indonesia by a Coal Contract of Work (PKP2B) license. MHU acquisition led MMSGI to be one of the reputable coal mining company in Indonesia</>,
        ],
        }, {
            title : 'Dedikasi Energi Baru Terbarukan',
            title_en : 'Dedication for Renewable Energy',
            year : '2018',
            content : [ <>Kepedulian MMSGI terhadap perkembangan energi hijau untuk masa depan Indonesia mendorong MMSGI mendirikan PT Mitra Dayatama Prima sebagai perusahaan pengembang energi baru dan terbarukan yang berfokus pada pembangkit listrik tenaga surya.</>,
                        <>Pada tahun yang sama, MMSGI mendirikan MMS Land (PT Mitra Properti Sukses) sebagai pilar usaha untuk mengelola seluruh portofolio <i>Properti</i> dan <i>Real Estate</i> kedepannya untuk mewujudkan visi MMSGI.</>
            ],
            content_en : [ <>MMSGI’s concern in the development of Indonesian green energy was the main driver for MMSGI to develop PT Mitra Dayatama Prima to run renewable energy developing company focusing in solar power plant.</>,
                        <>Within the same year, MMSGI established MMS Land (PT Mitra Properti Sukses) as a business pillar to manage all Property and Real Estate portfolio.</>
            ]
        }, {
            title : 'Disrupsi Teknologi',
            title_en : 'Technology Disruption',
            year : '2019',
            content : [ <>Memahami pentingnya infrastruktur digital di Indonesia, MMSGI melebarkan sayap MMS Land ke sektor teknologi dengan mendirikan <i>Downtown Data Center</i> dibawah bendera PT Mitra Informatika Gemilang (MIG).</>,
                        <>Selain itu, MMSGI mengakuisisi Puri Denpasar Hotel, salah satu hotel di Jakarta Selatan yang memiliki lokasi strategis dengan <i>Golden Access</i> di area Kuningan sehingga meningkatkan kepercayaan dan kredibilitas MMSGI.</>,
                        <>Melalui MIG, MMSGI mendorong pengembangan infrastruktur digital di Indonesia untuk memberikan akses data tanpa batas yang mendorong anak bangsa untuk terus berkarya. </>],
            content_en : [ <>Comprehending the importance of digital infrastructure in Indonesia, MMSGI expanded its property business into technology sector by developing Downtown Data Center under PT Mitra Informatika Gemilang (MIG).</>,
                        <>MMSGI also acquired Puri Denpasar Hotel, a hotel located in strategic location in South Jakarta with Golden Access in Kuningan area, which further improved MMSGI reliability and credibility.</>,
                        <>Through MIG, MMSGI supports the development of digital infrastructure in Indonesia to provide limitless access for Indonesian to strive and contribute for the nation.</>]
        }, {
            title : 'Investasi untuk Masa Depan',
            title_en : 'Investment for The Future',
            year : '2020',
            content : [ <>Sebagai perusahaan inovatif yang memiliki kepedulian tinggi kepada lingkungan dan sosial, MMSGI mewujudkan visinya dengan mendirikan pilar usaha MMS Solution (PT Mitrakarya Cipta Gemilang) untuk mengakomodir pengembangan bisnis baru dan berkelanjutan seperti energi baru terbarukan dan perusahaan sosial.</>,
                        <>MMSGI mendukung program Food Estate pemerintah, dengan mendirikan PT Bramasta Sakti (Bramasta) di Kalimantan Timur yang memanfaatkan lahan pascatambang untuk pertanian jagung dan peternakan sapi. Bramasta bekerja sama dengan petani lokal dengan skema <i>profit-sharing</i> sebagai bentuk kepedulian perusahaan terhadap masyarakat sekitar.</>],
            content_en : [ <>As an innovative company with major concerns in environment and social issue, MMSGI realized its vision by establishing MMS Solution (PT Mitrakarya Cipta Gemilang) to accommodate new and sustainable business and such as renewable energy and social entrprise.</>,
                        <>MMSGI supports Indonesian Government Food Estate program by establishing PT Bramasta Sakti (Bramasta) in East Kalimantan which optimizes post-mining land for corn precision farming and mini ranch. Bramasta collaborates with local farmers under a profit-sharing scheme as an effort and care to build the local farmers independency.</>]
        },{
            title : 'Kontribusi Nyata untuk Komunitas',
            title_en : 'Contributing to Community',
            year : '2021',
            content : [ <>Sebagai bentuk tanggung jawab terhadap masyarakat dan lingkungan. MMS Group Indonesia menyiapkan serangkaai program dan inisiatif dengan tema kemanusiaan yang disalurkan melalui Yayasan Life After Mine.</>,
                        <>Fokus tanggung jawab sosial MMS Group Indonesia saat ini adalah pengembangan komunitas di sekitar wilayah pertambangan dan/atau wilayah paskatambang. Hal ini dilakukan guna menyiapkan komunitas yang mandiri dalam menghadapi tantangan global. </>],
            content_en : [ <>As a form of responsibility to society and the environment. MMS Group Indonesia has prepared a series of programs and initiatives with the theme of humanity distributed through the Life After Mine Foundation.</>,
            <>MMS Group Indonesia's current focus in social responsibility is community development around post-mining areas. All this initiatives are executed in order to prepare an independent community in facing global challenges.</>]
        }]

    
    function accordionTab(index){
        if(selectedYear===index) return 0;
        else {
            setSelectedYear(index)
        }
    }

    return(
        <div class="container container-xl-custom pt-3">
            <div class="row">
                <div class="col">
                    <p class="font-weight-bold text-primary text-uppercase mb-4 text-4">{isIndo? 'Tonggak Perjalanan':'Milestone'}</p>
                    <div class="tabs tabs-simple tabs-bottom mb-0">
						<ul class="nav nav-tabs nav-justified flex-row ">
                        {milestoneContent.map((milestone,index)=>
                            <li class="nav-item">
                                     <a className={`nav-link text-3 ${selectedYear===index ? 'active' : ''}`} style={{cursor:'pointer'}} onClick={()=>accordionTab(index)}>{milestone.year}</a>
                                 </li>
                             )}
						</ul>
						<div class="tab-content" style={{minHeight:'300px'}}>
                        {milestoneContent.map((milestone,index)=>
                                <div className={`tab-pane tab-pane-navigation ${selectedYear===index ? 'active' : ''}`} id={`#tabsNavigationVertSimple${index}`}>
                                    <div className="row">

                                        <div className="col-lg-6">
                                    <div class="post-image">
                                        <img src={`img/MMS/milestone/${milestone.year}.jpg`} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                                    </div>
                                            </div>    
                                            <div className="col-lg-6">
                                    <div className="my-3">
                                        <h4 className="text-color-dark font-weight-bold text-lg-8 text-6 pt-0 pb-lg-3 my-0">{isIndo? milestone.title : milestone.title_en}</h4>
                                        
                                        {isIndo? 
                                            <p className="text-4">
                                                {milestone.content.map((content,index)=>
                                                 <p key={index}>
                                                    {content}
                                                    </p>
                                                )}
                                            </p>:
                                            <p className="text-4">
                                                {milestone.content_en.map((content,index)=>
                                                 <p key={index}>
                                                    {content}
                                                    </p>
                                                )}
                                                {/* </ul> */}
                                            </p>}
                                    </div>
                                            </div>   
                                    </div>
                                    
                                </div>
                                    )}
							{/* <div id="popular" class="tab-pane">
								<p>Popular</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
							</div>
							<div id="recent" class="tab-pane active">
								<p>Recent</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
							</div> */}
						</div>
					</div>
                </div>
            </div>
        </div>
    )

}
export default MilestoneTab;