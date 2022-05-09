import React, {useEffect,useRef,useState} from 'react'
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import Header from '../components/Header';
import HomeSliderSlick from '../components/HomeSliderSlick';
import NextButton from '../components/NextButton';
import { useLanguage } from './LanguageContext';

function CSR(){
    const [activeState,setActiveState]=useState('Environment')
    const [activeSlide,setActiveSlide]=useState(0)
    const sliderRef=useRef();
    const {isIndo} = useLanguage()

    const sliderContent=[ 
        {imageUrl: '/img/MMS/CSR/slider-3.jpg',
        Textline2 : '',
        Textline1 : '',
        Paragraph : '',
        CTA : null,
        additional :<div>
            <span className='text-5 text-lg-8 text-color-light'>{isIndo ?'Yayasan Life After Mine didirikan sebagai pelaksana Corporate Social Responsibility dengan fokus pada pembangunan ekonomi, sosial dan lingkungan bagi masyarakat terutama di sekitar wilayah operasi pasca tambang.':'Yayasan Life After Mine was established as the executor for Corporate Social Responsibility with a focus on economic, social and environmental development for the community, especially around the post-mining operation area'}</span>,
        </div>,
       
        },

    ]

    const containerSegment=[
        {
            title : 'Berkah yang Mengalir dari Kolam Pascatambang',
            title_en : 'Blessings Flowing from Post-Mining Ponds',
            belonging : 'Environment',
            img_url : '/img/MMS/CSR/Content/content-1.jpg',
            sgd_symbol : ['03','06','17'],
            paragraph : `Sebagai perusahaan yang menerapkan kaidah teknik pertambangan yang baik dan benar atau good mining practices, MMSGI melalui anak perusahaannya PT MHU, melakukan pemanfaatan kembali air di kolam pascatambang atau void untuk memberikan keberkahan air bersih bagi petani dan masyarakat sekitar Desa Margahayu dan Desa Jonggon Jaya, Kutai Kertanegara, Kalimantan Timur dengan membangun water treatment plant.
            
                        Fasilitas pengolahan air ini mampu menyediakan air bersih untuk lebih dari 1,500 kepala keluarga`,
            paragraph_en : `As a company that applies good mining engineering principles or good mining practices, MMSGI through its subsidiary PT MHU, is reusing water in post-mining ponds or voids to provide clean water blessings for farmers and communities around Margahayu Village and Jonggon Jaya Village, Kutai Kertanegara, East Kalimantan by building a water treatment plant. 
            
            This water treatment facility is able to provide clean water for more than 1,500 households
            `
        },
        {
            title : 'Habis Tambang Terbit Ladang Gembala',
            title_en : 'After Mine Rises Shepherd’s Field',
            belonging : 'Environment',
            sgd_symbol : ['01','02','03','08','17'],
            img_url : '/img/MMS/CSR/Content/content-2.jpg',
            paragraph : `Pemanfaatan kembali lahan pascatambang milik PT Multi Harapan Utama yang berlokasi di Blok Busang Jonggon Operation dan Desa Jonggon B (Kutai Kartanegara, Kalimantan Timur) untuk menjadi pusat peternakan. Melalui kerjasama dengan masyarakat di sekitar wilayah operasi PT MHU, peternakan ini ditarget mampu menampung hingga 1000 ekor sapi.
                        
                        Peternakan ini dikelola oleh PT Bramasta Sakti, yang merupakan anak perusahaan dari MMSGI, dengan bekerjasama dengan Yayasan Cattle Buffalo Club Indonesia (CBC) dan Yayasan Life After Mine (YLAM).`,
            paragraph_en : `Reuse of post-mining land belonging to PT Multi Harapan Utama located in the Busang Jonggon Operation Block and Jonggon B Village (Kutai Kartanegara, East Kalimantan) to become a livestock center. Through collaboration with communities around PT MHU's operational area, this farm is targeted to be able to accommodate up to 1000 head of cattle.
                        
            The farm is managed by PT Bramasta Sakti, a subsidiary of MMSGI, in collaboration with Yayasan Cattle Buffalo Club Indonesia (CBC) and Yayasan Life After Mine (YLAM).`
        },
        {
            title : 'Kejar Paket Kejar Impian',
            title_en : 'Pursue the Dream Pursuit Package',
            belonging : 'Social',
            sgd_symbol : ['04','05','17'],
            img_url : '/img/MMS/CSR/Content/content-3.jpg',
            paragraph : `Berdasarkan hasil analisis tim PT MHU mendapatkan bahwa terdapat dua desa di Kecamatan Loa Kulu, Kutai Kertanegara yang tingkat pendidikannya masih rendah, yaitu Desa Jembayan dan Jembayan Tengah.
                        
                        MMSGI melalui anak perusahaannya PT MHU melakukan insiasi program kesetaraan pendidikan untuk masyarakat yang kurang beruntung dan putus sekolah. Dalam pelaksanaannya PT MHU bermitra dengan Pusat Kegiatan belajar Masyarakat (PKBM) Karang Melenu yang berpengalaman mengelola berbagai aktivitas pendidikan.`,
            paragraph_en : `Based on the results of the analysis, the PT MHU team found that there are two villages in Loa Kulu District, Kutai Kertanegara whose education level is still low, namely Jembayan Village and Jembayan Tengah Village.
            
            MMSGI through its subsidiary PT MHU initiates an equal education program for disadvantaged and out-of-school communities. In its implementation, PT MHU partners with the Pusat Kegiatan belajar Masyarakat (PKEM) Karang Melenu, which has experience in managing various educational activities.`
        },
        {
            title : 'Cepat Tanggap Hadapi Covid-19',
            title_en : 'Quick Response to Covid-19',
            belonging : 'Social',
            sgd_symbol : ['03','17'],
            img_url : '/img/MMS/CSR/Content/content-4.jpg',
            paragraph : `Kondisi Indonesia saat awal menghadapi badai pandemi Covid-19 cukup mengkhawatirkan. Kurangnya peralatan medis di fasiltas-fasilitas kesehatan hingga terganggunya kegiatan perekonomian menyebabkan tidak hanya isu kesehatan namun juga isu sosial dan ekonomi di masyarakat.
                        
                        Melihat situasi ini, MMSGI melalui anak perusahannya PT MHU yang bekerjasama dengan perusahaan-perusahaan mitra kerja, bergerak cepat dan tanggap untuk menggelontorkan bantuan ke rumah sakit dan desa-desa di Kalimantan Timur hingga Rp 5 Milliar berupa APD medis dan sembako yang langsung diterima oleh Gubernur Kalimantan Timur Isran Noor.
                        
                        MMSGI secara keseluruhan juga telah mengkontribusi dalam pembagian bansos sembako dan vaksin kepada 7,500 warga di Kalimantan untuk membantu pemerintah mencapai herd immunity.`,
            paragraph_en : `The condition of Indonesia when it first faced the CoVp-I9 pandemic was quite worrying, The lack of medical equipment in health facilities to the disruption of economic activities causes not only health issues but also social and economic issues in the community.
            
            Seeing this situation, MMSGI through its subsidiary PT MHU in collaboration with partner companies, moved quickly and responsively to distribute aid to hospitals and villages in East Kalimantan up to Rp 5 billion in the form of medical PPE and basic necessities which were immediately received by the Governor of East Kalimantan Isran Noor.
            
            MMSGI as a whole has also contributed to the distribution of basic food assistance and vaccines to 7,500 residents to help the government achieve herd immunity.
            `
        },

        
        {
            title : 'Ekonomi Mandiri ala Sungai Payang',
            title_en : "Payang River's Independent Economy",
            belonging : 'Governance',
            sgd_symbol : ['01','08','10','11','17'],
            img_url : '/img/MMS/CSR/Content/content-5.jpg',
            paragraph : `Masyarakat Desa Sungai Panyang memiliki unit usaha dengan laba bersih mencapai Rp 600 juta. Unit usaha ini memiliki 6 lini bisnis utama, mulai dari pengangkutan tandan buah sawit dan batubara, jasa perantara pengelolaan bahan bakar minyak, jasa pengelolaan cabang perbankan, dll.
                        
                        Melihat opportunity pengembangan desa di wilayah operasinya, PT MHU bekerjasama dengan PT Niagamas Gemilang menyusun proyek pengembangan pabrik kompos untuk meningkatkan skala produksi unit usaha desa ini. PT MHU juga menjadi off taker pupuk kompos yang diproduksi untuk keperluan revegetasi pada lahan reklamasi.
                        
                        Program ini juga melibatkan Pemerintah Kabupaten, Dewan Riset Daerah dan Fakultas Pertanian Universitas Kutai Kertanegara.`,
            paragraph_en : `The community of Payang River’s Village has a business unit with a net profit of Rp 600 million. This business unit has 6 main business lines, starting from the transportation of palm fruit bunches and coal, fuel oil management intermediary services, banking branch management services, etc.
            
            Seeing the opportunity for village development in its area of operation, PT MHU in collaboration with PT Niagamas Gemilang developed a compost factory development project to increase the production scale of this village business unit. PT MHU is also an off taker for compost produced for revegetation purposes on reclamation land.
            
            This program also involves the Regency Government, Regional Research Council and the Faculty of Agriculture, Kutai Kertanegara University.
            `
        },
        {
            title : 'Bertukang di Lingkar Tambang',
            title_en : 'Carpentry in the Mine Circle',
            belonging : 'Governance',
            sgd_symbol : ['01','04','08','10','17'],
            img_url : '/img/MMS/CSR/Content/content-6.jpg',
            paragraph : `Mengoptimalksan potensi dan kearifan lokal di Desa Loa Kulu Kota, PT MHU melakukan pembinaan kepada kelompok masyarakat yang berdekatan dengan wilayah operasi perusahaan dengan tujuan untuk menumbuhkan mata pencaharian yang berkelanjutan di lingkar tambang.

                        Pembinaan teknik pertukangan ini juga bekerjasama dengan Idea Borneo Tenggarong, yaitu platform yang bergerak dibidang mebel serta Komunitas Pecinta Koetai (Kompak) yang bertugas untuk mendampingi masyarakat`,
            paragraph_en : `Optimizing local potential and wisdom in Loa Kulu Town Village, PT MHU provides guidance to community groups adjacent to the company's operational areas with the aim of fostering sustainable livelihoods around the mine.

            This carpentry technique development is also in collaboration with Idea Borneo Tenggarong, a platform engaged in the furniture sector and the Komunitas Pecinta Koetai (Kompak) whose job is to assist the community.
            `,
        }
    ]

    const segments=['Environment','Social','Governance']
      
    const settings={
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        arrows:true,
        nextArrow: <NextButton />,
        prevArrow: <NextButton />,
        speed:1500,
        adaptiveHeight: false,
        beforeChange : (current,next)=> {
            setActiveState(containerSegment[next].belonging)
            // setActiveSlide(containerSegment[next].belonging)
        }
    }
    function changeSlide(e,index){
        e.preventDefault();
        sliderRef.current.slickGoTo(index*2)
    } 
    
    return(
        <>
           <HomeSliderSlick sliderContent={sliderContent}/>
           <Helmet>
            <title>CSR | MMS Group Indonesia</title>
        </Helmet>
            <section class="section-default my-4">
                <div className='container container-xl-custom'>
                    <div class="row">
                        <div class="col">
                                <div class="tabs tabs-bottom tabs-center tabs-simple">
                                    <ul class="nav nav-tabs">
                                        { segments.map((segment,index)=>
                                            <li key={index} class="nav-item" style={{cursor:'pointer'}}>
                                                <div onClick={(e)=>changeSlide(e,index)} class={`nav-link px-3 px-lg-4 ${activeState===segment && 'active'}`} >
                                                    <p class={`mb-0 pb-0 text-center ${activeState===segment && 'text-dark'}`}>{segment}</p>
                                                </div>
                                            </li>    
                                        )}
                                    </ul>
                                    <div className='tab-content'>
                                        
                                            <Slider ref= {sliderRef} {...settings}>
                                            {    containerSegment.map((content,index)=>
                                                    <div class="px-3">
                                                        <div style={{height:'500px', width:'100%', background:'linear-gradient( 0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2 )), url('+content.img_url+')',backgroundSize: 'cover',  backgroundPosition: 'center'}}>
                                                            <div className='d-flex h-100 px-lg-3 py-3 px-1 row justify-content-start align-items-end'>
                                                                {
                                                                    content.sgd_symbol.map((symbol,index)=>
                                                                    <div className='col-2 col-lg-1'>
                                                                        <img className='px-2 SGDsymbol' src={`/img/MMS/CSR/symbol/E-WEB-Goal-${symbol}.png`}/>
                                                                        </div>
                                                                    )
                                                                }

                                                            </div>

                                                        </div>
                                                        <p class="font-weight-semibold mb-1 mt-3 text-primary text-uppercase">{content.belonging}</p>
                                                        <span class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2" >{isIndo?content.title: content.title_en}</span>
                                                        
                                                                <p className='pb-0 pt-3 text-4' style={{whiteSpace:'pre-line'}}>{isIndo?content.paragraph:content.paragraph_en}</p>
                                                    </div>
                                            )}
                                                </Slider>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
         
        </>
    )
}
export default CSR;