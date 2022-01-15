import React, {useEffect,useRef,useState} from 'react'
import Slider from 'react-slick';
import Header from '../components/Header';
import HomeSliderSlick from '../components/HomeSliderSlick';
import NextButton from '../components/NextButton';

function CSR(){
    const [activeState,setActiveState]=useState('Lingkungan')
    const [activeSlide,setActiveSlide]=useState(0)
    const sliderRef=useRef();

    const sliderContent=[ 
        {imageUrl: '/img/MMS/CSR/slider-3.jpg',
        Textline2 : '',
        Textline1 : '',
        Paragraph : '',
        CTA : null,
        additional :<div>
            <img className='mb-3' style={{maxHeight:'150px'}} src='/img/MMS/logo/MMS/LAM.png'/>
            <span className='text-6 text-lg-8 text-color-light'>MMS Group Indonesia berkomitmen untuk menjalankan aktivitas bisnisnya dengan memperhatikan kepedulian terhadap <span className='font-weight-semibold'>lingkungan dan masyarakat</span> yang merupakan faktor penting dalam kelangsungan jangka panjang bisnis berbasis energi.</span>,
        </div>
        },

    ]

    const containerSegment=[
        {
            title : 'Berkah yang Mengalir dari Kolam Pascatambang',
            belonging : 'Lingkungan',
            img_url : '/img/MMS/CSR/Content/content-1.jpg',
            sgd_symbol : ['03','06','17'],
            paragraph : ['Sebagai perusahaan yang menerapkan kaidah teknik pertambangan yang baik dna benar atau good mining practices, MMSGI melalui anak perusahaannya PT MHU, melakukan pemanfaatan kembali air di kolam pascatambang atau void untuk memberikan keberkahan air bersih bagi petani dan masyarakat sekitar Desa Margahayu dan Desa Jonggon Jaya, Kutai Kertanegara, Kalimantan Timur dengan membangun water treatment plant.',
                        'Fasilitas pengolahan air ini mampu menyediakan air bersih untuk lebih dari 1500 kepala keluarga']
        },
        {
            title : 'Habis Tambang Terbit Ladang Gembala',
            belonging : 'Lingkungan',
            sgd_symbol : ['01','02','03','08','17'],
            img_url : '/img/MMS/CSR/Content/content-2.jpg',
            paragraph : ['Pemanfaatan kembali lahan pascatambang milik PT Multi Harapan Utama yang berlokasi di Blok Busang Jonggon Operation dan Desa Jonggon B (Kutai Kartanegara, Kalimantan Timur) untuk menjadi pusat peternakan. Melalui kerjasama dengan masyarakat di sekitar wilayah operasi PT MHU, peternakan ini ditarget mampu menampung hingga 1000 ekor sapi.',
                        'Peternakan ini dikelola oleh PT Bramasta Sakti, yang merupakan anak perusahaan dari MMSGI, dengan bekerjasama dengan Yayasan Cattle Buffalo Club Indonesia (CBC) dan Yayasan Life After Mine (YLAM).']
        },
        {
            title : 'Kejar Paket Kejar Impian',
            belonging : 'Sosial',
            sgd_symbol : ['04','05','17'],
            img_url : '/img/MMS/CSR/Content/content-3.jpg',
            paragraph : ['Berdasarkan hasil analisis tim PT MHU mendapatkan bahwa terdapat dua desa di Kecamatan Loa Kulu, Kutai Kertanegara yang tingkat pendidikannya masih rendah, yaitu Desa Jembayan dan Jembayan Tengah.',
                        'MMSGI melalui anak perusahaannya PT MHU melakukan insiasi program kesetaraan pendidikan untuk masyarakat yang kurang beruntung dan putus sekolah. Dalam pelaksanaannya PT MHU bermitra dengan Pusat Kegiatan belajar Masyarakat (PKBM) Karang Melenu yang berpengalaman mengelola berbagai aktivitas pendidikan.']
        },
        {
            title : 'Cepat Tanggap Hadapi Covid-19',
            belonging : 'Sosial',
            sgd_symbol : ['03','17'],
            img_url : '/img/MMS/CSR/Content/content-4.jpg',
            paragraph : ['Kondisi Indonesia saat awal menghadapi badai pandemi Covid-19 cukup mengkhawatirkan. Kurangnya peralatan medis di fasiltas-fasilitas kesehatan hingga terganggunya kegiatan perekonomian menyebabkan tidak hanya isu kesehatan namun juga isu sosial dan ekonomi di masyarakat.',
                        'Melihat situasi ini, MMSGI melalui anak perusahannya PT MHU yang bekerjasama dengan perusahaan-perusahaan mitra kerja, bergerak cepat dan tanggap untuk menggelontorkan bantuan ke rumah sakit dan desa-desa di Kalimantan Timur hingga Rp 5 Milliar berupa APD medis dan sembako yang langsung diterima oleh Gubernur Kalimantan Timur Isran Noor.']
        },
        {
            title : 'Ekonomi Mandiri ala Sungai Payang',
            belonging : 'Tata Kelola',
            sgd_symbol : ['01','08','10','11','17'],
            img_url : '/img/MMS/CSR/Content/content-5.jpg',
            paragraph : ['Masyarakat Desa Sungai Panyang memiliki unit usaha dengan laba bersih mencapai Rp 600 juta. Unit usaha ini memiliki 6 lini bisnis utama, mulai dari pengangkutan tandan bauh sawit dan batubara, jasa perantara pengelolaan bahan bakar minyak, jasa pengelolaan cabang perbankan, dll.',
                        'Melihat opportunity pengembangan desa di wilayah operasinya, PT MHU bekerjasama dengan PT Niagamas Gemilang menyusun proyek pengembangan pabrik kompos untuk meningkatkan skala produksi unit usaha desa ini. PT MHU juga menjadi off taker pupuk kompos yang diproduksi untuk keperluan revegetasi pada lahan reklamasi',
                        'Program ini juga melibatkan Pemerintah Kabupaten, Dewan Riset Daerah dan Fakultas Pertanian Universitas Kutai Kertanegara.']
        },
        {
            title : 'Bertukang di Lingkar Tambang',
            belonging : 'Tata Kelola',
            sgd_symbol : ['01','04','08','10','17'],
            img_url : '/img/MMS/CSR/Content/content-6.jpg',
            paragraph : ['Mengoptimalksan potensi dan kearifan lokal di Desa Loa Kulu Kota, PT MHU melakukan pembinaan kepada kelompok masyarakat yang berdekatan dengan wilayah operasi perusahaan dengan tujuan untuk menumbuhkan mata pencaharian yang berkelanjutan di lingkar tambang.',
                        'Pembinaan teknik pertukangan ini juga bekerjasama dengan Idea Borneo Tenggarong, yaitu platform yang bergerak dibidang mebel serta Komunitas Pecinta Koetai (Kompak) yang bertugas untuk mendampingi masyarakat']
        }
    ]

    const segments=['Lingkungan','Sosial','Tata Kelola']
      
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
                                                        <div className='d-flex h-100 p-3 justify-content-start align-items-end'>
                                                        
                                                            {
                                                                content.sgd_symbol.map((symbol,index)=>
                                                                    <img className='px-2 SGDsymbol' src={`/img/MMS/CSR/symbol/E-WEB-Goal-${symbol}.png`}/>
                                                                )
                                                            }

                                                        </div>

                                                    </div>
                                                    <p class="font-weight-semibold mb-1 mt-3 text-primary text-uppercase">{content.belonging}</p>
                                                    <p class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">{content.title}</p>
                                                        {content.paragraph.map((p,index)=>
                                                            <p className='pb-0 mb-1'>{p}</p>)}
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