import React, { useState } from "react";





function MilestoneTab(props){
    const [selectedYear,setSelectedYear]=useState(0)
    const milestoneContent=[
        {
            title : 'Mengawali Perjalanan MMSGI',
            year : '2005',
            content : [ <>MMS Group Indonesia (MMSGI) diawali dengan didirikannya PT Mitra Maju Sukses (MMS) pada tahun 2005 sebagai perusahaan perdagangan batu bara yang menjadi pemasok batu bara domestik kepada PLN dan industri lainnya.</>,
                        <>MMSGI memiliki visi untuk menjadi perusahaan yang berkembang dan tangguh untuk memberikan solusi inovatif. Founder Andrew Hidayat mendirikan MMSGI dengan tujuan utama untuk menjadi mitra terpercaya bagi <i>partner</i> bisnis. Andrew melakukan kegiatan usahanya secara tepat, profesional dan bertanggung jawab penuh sejak awal.</>,
                        <>Dengan prinsip dasar tersebut MMSGI terus konsisten menjaga kepercayaan dan membangun reputasi yang baik</>]
        },
        {
            title : 'Meniti Pasar Ekspor ',
            year : '2012',
            content : [ <>Berbekal kepercayaan dan reputasi yang dibangun selama 7 tahun dan diiringi dengan meningkatnya permintaan batu bara, MMSGI memperluas jangkauan usahanya untuk memenuhi permintaan pasar ekspor dengan membentuk perusahaan PT Mitra Asia Cemerlang (MAC)</>,
                        <>Berawal dari perdagangan batu bara di Kalimantan Selatan, MMSGI memperluas wilayah operasi domestik ke Kalimantan Timur dan melakukan penjualan untuk pasar domestik hingga ekspor seperti ke India, Cina, Korea Selatan, dan Thailand.</>,
                        <>MMS dan MAC terus berkomitmen untuk memberikan pelayanan terbaik kepada <i>partner</i> bisnis secara konsisten dengan menyediakan batu bara kualitas terbaik secara tepat waktu.</>]
        }, {
            title : 'Ekspansi Tambang Batubara',
            year : '2014',
            content : [ <>Dengan pengalaman dan kepercayaan yang dibangun dalam 9 tahun di perdagangan batu bara, MMSGI melakukan ekspansi vertikal melalui kerjasama <i>Joint Operation</i> bersama MPAS pada 2014 untuk kegiatan produksi tambang batubara di Kalimantan Timur.</>,
                        <>Sebagai langkah strategis untuk memperkuat portofolio menjadi perusahaan batu bara yang terintegrasi, MMSGI mengakuisisi tambang batubara PT Duta Dharma Utama (DDU).</>,
                        <>Ditahun yang sama, MMSGI membentuk MMS Resources (PT Mulia Mandiri Sukses) sebagai pilar usaha untuk mengelola seluruh portofolio batubara. Portofolio yang terintegrasi membuat MMSGI menjadi mitra batu bara terpercaya.</>]
        },{
            title : 'Diversifikasi ke Bisnis Properti',
            year : '2015',
            content : [ <>MMSGI memiliki visi ke depan untuk diversifikasi bisnis batu bara dan mulai melakukan ekspansi ke sektor lain dengan nilai aset yang terus bertumbuh.</>,
                        <>Melihat industri <i>Property</i> dan <i>Real Estate</i> yang terus berkembang, MMSGI memandang sektor ini sebagai sektor yang tepat untuk diversifikasi bisnis selanjutnya.</>,
                        <>Pada tahun 2015, MMSGI melalui Mitra Asian Properti mengakuisisi sebuah hotel bintang 5 di Legian Bali yang dikelola oleh Pullman, sebuah jaringan hotel Internasional. Melalui portofolio ini, MMSGI bertujuan untuk menyediakan pelayanan berstandar internasional dan mendukung pariwisata lokal.</>]
        }, {
            title : 'Akuisisi PT Multi Harapan Utama',
            year : '2017',
            content : [ <>MMSGI membangun dan membuktikan kapabilitasnya dalam sektor pertambangan batu bara terintegrasi pasca akuisisi DDU dan ekspansi wilayah perdagangan di pasar domestik hingga ekspor.</>,
                        <>Pada tahun 2017 MMSGI mengakuisisi PT Multi Harapan Utama (MHU), sebuah perusahaan tambang pemegang lisensi PKP2B, yang menempatkan MMSGI menjadi salah satu perusahaan tambang batu bara terkemuka di Indonesia.</>,
                        <>Pasca akuisisi MHU, MMSGI dapat mengoptimalkan keahliannya di sektor batu bara. Hal ini membuat MMSGI berada pada posisi yang tepat untuk mulai melakukan investasi masa depan pada bisnis yang berkelanjutan.</>
                ]
        }, {
            title : 'Dedikasi Energi Baru Terbarukan',
            year : '2018',
            content : [ <>Kepedulian MMSGI terhadap perkembangan energi hijau untuk masa depan Indonesia mendorong MMSGI mendirikan PT Mitra Dayatama Prima sebagai perusahaan pengembang energi baru dan terbarukan yang berfokus pada pembangkit listrik tenaga surya.</>,
                        <>Pada tahun yang sama, MMSGI mendirikan MMS Land (PT Mitra Properti Sukses) sebagai pilar usaha untuk mengelola seluruh portofolio <i>Properti</i> dan <i>Real Estate</i> kedepannya untuk mewujudkan visi MMSGI.</>
            ]
        }, {
            title : 'Disrupsi Teknologi',
            year : '2019',
            content : [ <>Memahami pentingnya infrastruktur digital di Indonesia, MMSGI melebarkan sayap MMS Land ke sektor teknologi dengan mendirikan <i>Downtown Data Center</i> dibawah bendera PT Mitra Informatika Gemilang (MIG).</>,
                        <>Selain itu, MMSGI mengakuisisi Puri Denpasar Hotel, salah satu hotel di Jakarta Selatan yang memiliki lokasi strategis dengan <i>Golden Access</i> di area Kuningan sehingga meningkatkan kepercayaan dan kredibilitas MMSGI.</>,
                        <>Melalui MIG, MMSGI mendorong pengembangan infrastruktur digital di Indonesia untuk memberikan akses data tanpa batas yang mendorong anak bangsa untuk terus berkarya. </>]
        }, {
            title : 'Investasi untuk Masa Depan',
            year : '2020',
            content : [ <>Sebagai perusahaan inovatif yang memiliki kepedulian tinggi kepada lingkungan dan sosial, MMSGI mewujudkan visinya dengan mendirikan pilar usaha MMS Solution (PT Mitrakarya Cipta Gemilang) untuk mengakomodir pengembangan bisnis baru dan berkelanjutan seperti energi baru terbarukan dan perusahaan sosial.</>,
                        <>MMSGI mendukung program Food Estate pemerintah, dengan mendirikan PT Bramasta Sakti (Bramasta) di Kalimantan Timur yang memanfaatkan lahan pascatambang untuk pertanian jagung dan peternakan sapi. Bramasta bekerja sama dengan petani lokal dengan skema <i>profit-sharing</i> sebagai bentuk kepedulian perusahaan terhadap masyarakat sekitar.</>]
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
                    <p class="font-weight-bold text-primary text-uppercase mb-4 text-4">Tonggak Perjalanan</p>
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
                                        <h4 className="text-color-dark font-weight-bold text-lg-8 text-6 pt-0 pb-lg-3 my-0">{milestone.title}</h4>
                                        <p className="text-4">
                                            {/* <ul className="ps-3"> */}
                                                {milestone.content.map((content,index)=>
                                                //  <li
                                                 <p key={index}>
                                                    {content}
                                                    </p>
                                                )}
                                                {/* </ul> */}
                                                </p>
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