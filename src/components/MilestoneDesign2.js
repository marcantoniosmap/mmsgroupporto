import React, { useState } from "react";





function MilestoneTab(props){
    const [selectedYear,setSelectedYear]=useState(0)
    const milestoneContent=[
        {
            imgSource:'img/MMS/milestone/milestone-2 (1).jpg',
            title : 'Mengawali Perjalanan MMSGI',
            year : '2005',
            content : ['MMS Group Indonesia (MMSGI) diawali dengan didirikannya PT Mitra Maju Sukses (MMS) pada tahun 2005 sebagai perusahaan perdagangan batu bara dan pemasok batu bara, yang awalnya menjadi pemasok PLN dan Industri lainnya.']
        },
        {
            imgSource:'img/MMS/milestone/milestone-2 (2).jpg',
            title : 'Meniti Pasar Ekspor ',
            year : '2012',
            content : ['MMSGI mendirikan Mitra Asia Cemerlang untuk memperluas sayap perdagangan ke pasar ekspor batu bara.']
        }, {
            imgSource:'img/MMS/milestone/milestone-2 (3).jpg',
            title : 'Ekspansi Tambang Batubara',
            year : '2014',
            content : ['MMSGI membentuk MMS Resources (PT Mulia Mandiri Sukses) sebagai pilar usaha untuk mengelola seluruh portfolio batu bara',
                        'MMSGI mengakuisisi tambang batu bara PT Duta Dharma Utama (DDU) untuk memperkuat portofolio menjadi perusahaan batu bara yang terintegrasi.',
                        'MMSGI melakukan ekspansi kerjasama dengan mendirikan Joint Operation bersama MPAS untuk kegiatan tambang batubara di Kalimantan Timur.'],
        },{
            imgSource:'img/MMS/milestone/milestone-2 (4).jpg',
            title : 'Diversifikasi ke Bisnis Properti',
            year : '2015',
            content : ['MMSGI memiliki visi ke depan untuk diversifikasi bisnis batu bara dan mulai melakukan ekspansi ke sektor lain dengan nilai aset yang terus bertumbuh.',
                        'MMSGI memandang sektor properti  sebagai sektor yang tepat, hal ini menjadi alasan atas akuisisi MMSGI melalui Mitra Asian Properti terhadap sebuah hotel di Legian Bali yang dikelola oleh Pullman'],
        }, {
            imgSource:'img/MMS/milestone/milestone-2 (5).jpg',
            title : 'Akuisisi PT Multi Harapan Utama',
            year : '2017',
            content : ['MMSGI membuktikan kemampuannya dalam sektor perdagangan batu bara yang diikuti dengan akuisisi PT Multi Harapan Utama sehingga menempatkan MMSGI menjadi salah satu perusahaan tambang batubara terkemuka di Indonesia.',
                'MMSGI berada pada posisi yang tepat untuk mulai melakukan investasi masa depan pada bisnis yang berkelanjutan pasca akuisisi PT Multi Harapan Utama.'
                ]
        }, {
            imgSource:'img/MMS/milestone/milestone-2 (6).jpg',
            title : 'Dedikasi Energi Baru Terbarukan',
            year : '2018',
            content : ['MMSGI memahami pentingnya energi hijau yang mendorong didirkannya PT Dayatama Prima Energi sebagai perusahaan yang berfokus pada pengembangan Energi baru dan terbarukan.',
            'MMSGI mendirikan MMS LAND (PT Mitra Properti Sentosa) sebagai pilar usaha untuk mengelola seluruh portofolio properti kedepannya.'
            ]
        }, {
            imgSource:'img/MMS/milestone/milestone-2 (7).jpg',
            title : 'Disrupsi Teknologi',
            year : '2019',
            content : ['MMSGI sangat memahami pentingnya infrastruktur digital, MMSGI kembali melebarkan sayapnya ke sektor teknologi dengan mendirikan Mitra Informatika Gemilang sebagai perusahaan penyedia Data Center.',
            'MMSGI mengakuisisi Puri Denpasar Hotel, salah satu hotel di Jakarta Selatan yang memiliki lokasi strategis dengan Golden Access']
        }, {
            imgSource:'img/MMS/milestone/milestone-2 (8).jpg',
            title : 'Investasi untuk Masa Depan',
            year : '2020',
            content : ['MMSGI mendirikan pilar usaha MMS SOLUTION (PT Mitrakarya Cipta Gemilang) yang akan mengakomodir pengembangan bisnis baru dan berkelanjutan.',
            'MMSGI juga mendukung program food estate pemerintah, dengan mendirikan PT Bramasta Sakti di Kalimantan Timur untuk memanfaatkan lahan pasca tambang untuk pertanian jagung dan peternakan sapi.']
        }]

    
    function accordionTab(index){
        if(selectedYear===index) return 0;
        else {
            setSelectedYear(index)
        }
    }

    return(
        <div class="container container-xl-custom">
            <div class="row">
                <div class="col">
                <p class="font-weight-bold text-primary text-uppercase mb-4 text-4">Tonggak Perjalanan</p>
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="tabs tabs-vertical tabs-right tabs-navigation tabs-navigation-simple">
                                <ul class="nav nav-tabs col-sm-3">
                                    {milestoneContent.map((milestone,index)=>
                                        <li class="nav-item">
                                            <a className={`nav-link text-4 ${selectedYear===index ? 'active' : ''}`} onClick={()=>accordionTab(index)}>{milestone.year}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-10 d-flex justify-content-center">
                            {milestoneContent.map((milestone,index)=>
                                <div className={`tab-pane tab-pane-navigation ${selectedYear===index ? 'active' : ''}`} id={`#tabsNavigationVertSimple${index}`}>
                                    <div className="row">

                                        <div className="col-lg-6">
                                    <div class="post-image">
                                        <img style={{}} src={milestone.imgSource} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                                    </div>
                                            </div>    
                                            <div className="col-lg-6">
                                    <div className="my-3">
                                        <h4 className="text-color-dark font-weight-bold text-8 pt-0 pb-3 my-0">{milestone.title}</h4>
                                        <p className="">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MilestoneTab;