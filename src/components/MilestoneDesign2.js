import React, { useState } from "react";





function MilestoneTab(props){
    const [selectedYear,setSelectedYear]=useState(0)
    const milestoneContent=[
        {
            title : 'Mengawali Perjalanan MMSGI',
            year : '2005',
            content : ['MMS Group Indonesia (MMSGI) diawali dengan didirikannya PT Mitra Maju Sukses (MMS) pada tahun 2005 sebagai perusahaan perdagangan dan pemasok batu bara, yang bermula sebagai pemasok PLN dan industri lainnya.']
        },
        {
            title : 'Meniti Pasar Ekspor ',
            year : '2012',
            content : ['MMSGI mendirikan Mitra Asia Cemerlang untuk memperluas sayap perdagangan ke pasar ekspor batu bara.']
        }, {
            title : 'Ekspansi Tambang Batubara',
            year : '2014',
            content : ['MMSGI membentuk MMS Resources (PT Mulia Mandiri Sukses) sebagai pilar usaha untuk mengelola seluruh portofolio batu bara',
                        'MMSGI mengakuisisi tambang batu bara PT Duta Dharma Utama (DDU) untuk memperkuat portofolio menjadi perusahaan batu bara yang terintegrasi.',
                        'MMSGI melakukan ekspansi kerjasama dengan mendirikan Joint Operation bersama MPAS untuk kegiatan tambang batubara di Kalimantan Timur.'],
        },{
            title : 'Diversifikasi ke Bisnis Properti',
            year : '2015',
            content : ['MMSGI memiliki visi ke depan untuk diversifikasi bisnis batu bara dan mulai melakukan ekspansi ke sektor lain dengan nilai aset yang terus bertumbuh.',
                        'MMSGI memandang sektor properti  sebagai sektor yang tepat, hal ini menjadi alasan atas akuisisi MMSGI melalui Mitra Asian Properti terhadap sebuah hotel di Legian Bali yang dikelola oleh Pullman'],
        }, {
            title : 'Akuisisi PT Multi Harapan Utama',
            year : '2017',
            content : ['MMSGI membuktikan kemampuannya dalam sektor perdagangan batu bara yang diikuti dengan akuisisi PT Multi Harapan Utama sehingga menempatkan MMSGI menjadi salah satu perusahaan tambang batubara terkemuka di Indonesia.',
                'MMSGI berada pada posisi yang tepat untuk mulai melakukan investasi masa depan pada bisnis yang berkelanjutan pasca akuisisi PT Multi Harapan Utama.'
                ]
        }, {
            title : 'Dedikasi Energi Baru Terbarukan',
            year : '2018',
            content : ['MMSGI memahami pentingnya energi hijau untuk masa depan Indonesia yang mendorong didirikannya PT Dayatama Prima Energi sebagai perusahaan yang berfokus pada pengembangan Energi baru dan terbarukan.',
            'MMSGI mendirikan MMS Land (PT Mitra Properti Sentosa) sebagai pilar usaha untuk mengelola seluruh portofolio properti dan real estat kedepannya.'
            ]
        }, {
            title : 'Disrupsi Teknologi',
            year : '2019',
            content : ['MMSGI sangat memahami pentingnya infrastruktur digital, MMSGI kembali melebarkan sayapnya ke sektor teknologi dengan mendirikan PT Mitra Informatika Gemilang sebagai perusahaan penyedia Data Center.',
            'MMSGI mengakuisisi Puri Denpasar Hotel, salah satu hotel di Jakarta Selatan yang memiliki lokasi strategis dengan Golden Access di area Kuningan.']
        }, {
            title : 'Investasi untuk Masa Depan',
            year : '2020',
            content : ['MMSGI mendirikan pilar usaha MMS Solution (PT Mitrakarya Cipta Gemilang) yang akan mengakomodir pengembangan bisnis baru dan berkelanjutan.',
            'MMSGI juga mendukung program food estate pemerintah, dengan mendirikan PT Bramasta Sakti di Kalimantan Timur untuk memanfaatkan lahan pasca tambang untuk pertanian jagung dan peternakan sapi.']
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
						<ul class="nav nav-tabs nav-justified flex-row">
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
                                            <ul className="ps-3">
                                                {milestone.content.map((content,index)=>
                                                 <li className="py-2" key={index}>
                                                    {content}
                                                </li>)}
                                                </ul></p>
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