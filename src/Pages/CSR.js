import React, {useEffect,useRef,useState} from 'react'
import Slider from 'react-slick';
import Header from '../components/Header';
import HomeSliderSlick from '../components/HomeSliderSlick';

function CSR(){
    const [activeState,setActiveState]=useState('Lingkungan')
    const [activeSlide,setActiveSlide]=useState(0)
    const sliderRef=useRef();

    const sliderContent=[ 
        {imageUrl: '/img/MMS/CSR/slider-3.jpg',
        Textline2 : '',
        Textline1 : <span className='text-2'>MMS Group Indonesia berkomitmen untuk menjalankan aktivitas bisnisnya dengan memperhatikan kepedulian terhadap <span className='font-weight-semibold'>lingkungan dan masyarakat</span> yang merupakan faktor penting dalam kelangsungan jangka panjang bisnis berbasis energi.</span>,
        Paragraph : '',
        CTA : null,
        },

    ]

    const containerSegment=[
        {
            title : 'Berkah yang mengalir dari kolam pascatambang',
            belonging : 'Lingkungan',
            img_url : '/img/MMS/subholding/slider-1.jpg',
            paragraph : ['Sebagai perusahaan yang menerapkan kaidah teknik pertambangan yang baik dna benar atau good mining practices, MMSGI melalui anak perusahaannya PT MHU, melakukan pemanfaatan kembali air di kolam pascatambang atau void untuk memberikan keberkahan air bersih bagi petani dan masyarakat sekitar Desa Margahayu dan Desa Jonggon Jaya, Kutai Kertanegara, Kalimantan Timur dengan membangun water treatment plant.',
                        'Fasilitas pengolahan air ini mampu menyediakan air bersih untuk lebih dari 1500 kepala keluarga']
        },
        {
            title : 'Habis tambang terbit ladang gembala',
            belonging : 'Lingkungan',
            img_url : '/img/MMS/subholding/slider-2.jpg',
            paragraph : ['Pemanfaatan kembali lahan pascatambang milik PT Multi Harapan Utama yang berlokasi di Blok Busang Jonggon Operation dan Desa Jonggon B (Kutai Kartanegara, Kalimantan Timur) untuk menjadi pusat peternakan. Melalui kerjasama dengan masyarakat di sekitar wilayah operasi PT MHU, peternakan ini ditarget mampu menampung hingga 1000 ekor sapi.',
                        'Peternakan ini dikelola oleh PT Bramasta Sakti, yang merupakan anak perusahaan dari MMSGI, dengan bekerjasama dengan Yayasan Cattle Buffalo Club Indonesia (CBC) dan Yayasan Life After Mine (YLAM).']
        },
        {
            title : 'Kejar paket kejar impian',
            belonging : 'Sosial',
            img_url : '/img/MMS/subholding/slider-1.jpg',
            paragraph : ['Berdasarkan hasil analisis tim PT MHU mendapatkan bahwa terdapat dua desa di Kecamatan Loa Kulu, Kutai Kertanegara yang tingkat pendidikannya masih rendah, yaitu Desa Jembayan dan Jembayan Tengah.',
                        'MMSGI melalui anak perusahaannya PT MHU melakukan insiasi program kesetaraan pendidikan untuk masyarakat yang kurang beruntung dan putus sekolah. Dalam pelaksanaannya PT MHU bermitra dengan Pusat Kegiatan belajar Masyarakat (PKBM) Karang Melenu yang berpengalaman mengelola berbagai aktivitas pendidikan.']
        },
        {
            title : 'Cepat tanggap hadapi covid-19',
            belonging : 'Sosial',
            img_url : '/img/MMS/subholding/slider-1.jpg',
            paragraph : ['Kondisi Indonesia saat awal menghadapi badai pandemi Covid-19 cukup mengkhawatirkan. Kurangnya peralatan medis di fasiltas-fasilitas kesehatan hingga terganggunya kegiatan perekonomian menyebabkan tidak hanya isu kesehatan namun juga isu sosial dan ekonomi di masyarakat.',
                        'Melihat situasi ini, MMSGI melalui anak perusahannya PT MHU yang bekerjasama dengan perusahaan-perusahaan mitra kerja, bergerak cepat dan tanggap untuk menggelontorkan bantuan ke rumah sakit dan desa-desa di Kalimantan Timur hingga Rp 5 Milliar berupa APD medis dan sembako yang langsung diterima oleh Gubernur Kalimantan Timur Isran Noor.']
        },
        {
            title : 'Ekonomi mandiri ala sungai payang',
            belonging : 'Tata Kelola',
            img_url : '/img/MMS/subholding/slider-1.jpg',
            paragraph : ['Masyarakat Desa Sungai Panyang memiliki unit usaha dengan laba bersih mencapai Rp 600 juta. Unit usaha ini memiliki 6 lini bisnis utama, mulai dari pengangkutan tandan bauh sawit dan batubara, jasa perantara pengelolaan bahan bakar minyak, jasa pengelolaan cabang perbankan, dll.',
                        'Melihat opportunity pengembangan desa di wilayah operasinya, PT MHU bekerjasama dengan PT Niagamas Gemilang menyusun proyek pengembangan pabrik kompos untuk meningkatkan skala produksi unit usaha desa ini. PT MHU juga menjadi off taker pupuk kompos yang diproduksi untuk keperluan revegetasi pada lahan reklamasi',
                        'Program ini juga melibatkan Pemerintah Kabupaten, Dewan Riset Daerah dan Fakultas Pertanian Universitas Kutai Kertanegara.']
        },
        {
            title : 'Bertukang di lingkar tambang',
            belonging : 'Tata Kelola',
            img_url : '/img/MMS/subholding/slider-1.jpg',
            paragraph : ['Mengoptimalksan potensi dan kearifan lokal di Desa Loa Kulu Kota, PT MHU melakukan pembinaan kepada kelompok masyarakat yang berdekatan dengan wilayah operasi perusahaan dengan tujuan untuk menumbuhkan mata pencaharian yang berkelanjutan di lingkar tambang.',
                        'Pembinaan teknik pertukangan ini juga bekerjasama dengan Idea Borneo Tenggarong, yaitu platform yang bergerak dibidang mebel serta Komunitas Pecinta Koetai (Kompak) yang bertugas untuk mendampingi masyarakat']
        }
    ]

    const segments=[
        {
            id : 'Lingkungan',
            icon : '',
            content : [
                {
                    title : 'Berkah yang mengalir dari kolam pascatambang',
                    img_url : '/img/MMS/subholding/slider-1.jpg',
                    paragraph : ['Sebagai perusahaan yang menerapkan kaidah teknik pertambangan yang baik dna benar atau good mining practices, MMSGI melalui anak perusahaannya PT MHU, melakukan pemanfaatan kembali air di kolam pascatambang atau void untuk memberikan keberkahan air bersih bagi petani dan masyarakat sekitar Desa Margahayu dan Desa Jonggon Jaya, Kutai Kertanegara, Kalimantan Timur dengan membangun water treatment plant.',
                                'Fasilitas pengolahan air ini mampu menyediakan air bersih untuk lebih dari 1500 kepala keluarga']
                },
                {
                    title : 'Habis tambang terbit ladang gembala',
                    img_url : '/img/MMS/subholding/slider-2.jpg',
                    paragraph : ['Pemanfaatan kembali lahan pascatambang milik PT Multi Harapan Utama yang berlokasi di Blok Busang Jonggon Operation dan Desa Jonggon B (Kutai Kartanegara, Kalimantan Timur) untuk menjadi pusat peternakan. Melalui kerjasama dengan masyarakat di sekitar wilayah operasi PT MHU, peternakan ini ditarget mampu menampung hingga 1000 ekor sapi.',
                                'Peternakan ini dikelola oleh PT Bramasta Sakti, yang merupakan anak perusahaan dari MMSGI, dengan bekerjasama dengan Yayasan Cattle Buffalo Club Indonesia (CBC) dan Yayasan Life After Mine (YLAM).']
                }
        ]
        },
        {
            id : 'Sosial',
            icon : '',
            content : [
                {
                    title : 'Kejar paket kejar impian',
                    img_url : '',
                    paragraph : ['Berdasarkan hasil analisis tim PT MHU mendapatkan bahwa terdapat dua desa di Kecamatan Loa Kulu, Kutai Kertanegara yang tingkat pendidikannya masih rendah, yaitu Desa Jembayan dan Jembayan Tengah.',
                                'MMSGI melalui anak perusahaannya PT MHU melakukan insiasi program kesetaraan pendidikan untuk masyarakat yang kurang beruntung dan putus sekolah. Dalam pelaksanaannya PT MHU bermitra dengan Pusat Kegiatan belajar Masyarakat (PKBM) Karang Melenu yang berpengalaman mengelola berbagai aktivitas pendidikan.']
                },
                {
                    title : 'Cepat tanggap hadapi covid-19',
                    img_url : '',
                    paragraph : ['Kondisi Indonesia saat awal menghadapi badai pandemi Covid-19 cukup mengkhawatirkan. Kurangnya peralatan medis di fasiltas-fasilitas kesehatan hingga terganggunya kegiatan perekonomian menyebabkan tidak hanya isu kesehatan namun juga isu sosial dan ekonomi di masyarakat.',
                                'Melihat situasi ini, MMSGI melalui anak perusahannya PT MHU yang bekerjasama dengan perusahaan-perusahaan mitra kerja, bergerak cepat dan tanggap untuk menggelontorkan bantuan ke rumah sakit dan desa-desa di Kalimantan Timur hingga Rp 5 Milliar berupa APD medis dan sembako yang langsung diterima oleh Gubernur Kalimantan Timur Isran Noor.']
                }
        ]
        },
        {
            id : 'Tata Kelola',
            icon : '',
            content : [
                {
                    title : 'Ekonomi mandiri ala sungai payang',
                    img_url : '',
                    paragraph : ['Masyarakat Desa Sungai Panyang memiliki unit usaha dengan laba bersih mencapai Rp 600 juta. Unit usaha ini memiliki 6 lini bisnis utama, mulai dari pengangkutan tandan bauh sawit dan batubara, jasa perantara pengelolaan bahan bakar minyak, jasa pengelolaan cabang perbankan, dll.',
                                'Melihat opportunity pengembangan desa di wilayah operasinya, PT MHU bekerjasama dengan PT Niagamas Gemilang menyusun proyek pengembangan pabrik kompos untuk meningkatkan skala produksi unit usaha desa ini. PT MHU juga menjadi off taker pupuk kompos yang diproduksi untuk keperluan revegetasi pada lahan reklamasi',
                                'Program ini juga melibatkan Pemerintah Kabupaten, Dewan Riset Daerah dan Fakultas Pertanian Universitas Kutai Kertanegara.']
                },
                {
                    title : 'Bertukang di lingkar tambang',
                    img_url : '',
                    paragraph : ['Mengoptimalksan potensi dan kearifan lokal di Desa Loa Kulu Kota, PT MHU melakukan pembinaan kepada kelompok masyarakat yang berdekatan dengan wilayah operasi perusahaan dengan tujuan untuk menumbuhkan mata pencaharian yang berkelanjutan di lingkar tambang.',
                                'Pembinaan teknik pertukangan ini juga bekerjasama dengan Idea Borneo Tenggarong, yaitu platform yang bergerak dibidang mebel serta Komunitas Pecinta Koetai (Kompak) yang bertugas untuk mendampingi masyarakat']
                }
        ]
        },
    ]  
    const settings={
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        speed:1500,
        dots : true,
        adaptiveHeight: true,
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
                                            <div onClick={(e)=>changeSlide(e,index)} class={`nav-link ${activeState===segment.id && 'active'}`} >
                                                <p class={`mb-0 pb-0 text-center ${activeState===segment.id && 'text-dark'}`}>{segment.id}</p>
                                            </div>
                                        </li>    
                                    )}
								</ul>
                                <div className='tab-content'>
                                    
                                        <Slider ref= {sliderRef} {...settings}>
                                        {    containerSegment.map((content,index)=>
                                                <div class="px-3">
                                                    <img className='img-fluid pb-4' src={content.img_url}/>
                                                    <h4 class="font-weight-semi-bold text-6 text-primary mb-2"> {content.title}</h4>
                                                        {content.paragraph.map((p,index)=>
                                                            <p className=''>{p}</p>)}
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