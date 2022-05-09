import React,{useEffect,useRef,useState} from 'react'
import Slider from 'react-slick';
import { useLanguage } from '../Pages/LanguageContext';
import NextButton from './NextButton';


function Awards(){

    const {isIndo}=useLanguage()
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {

        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, []);


    const { nav1, nav2 } = state;

    const settings={
        responsive:true,
        infinite: true,
        slidesToShow: 1,
        centerMode : true,
        slidesToScroll: 1,
        autoplay:false,
        speed:1500,
        autoplaySpeed: 4000, 
        adaptiveHeight: true,
        nextArrow: <NextButton />,
        prevArrow: <NextButton />
    }

   const awardList=[
       {
           title :'Kepatuhan Pajak 2019',
           title_en :'Tax Compliance 2019',
           content:'Apresiasi Atas Kontribusi dan Pemenuhan Kepatuhan Formal kepada PT Mitra Asian Properti',
           content_en:'Appreciation for contribution and formal compliance for PT Mitra Asian Property'
       },{
            title :'Penghargaan Subroto 2019',
            title_en :'Subroto Awards 2019',
            content:'Pengelolaan Keselamatan Pertambangan Mineral dan Batubara kepada PT Multi Harapan Utama',
            content_en:'Mineral and Coal Mining Safety Management for PT Multi Harapan Utama'
        },{
            title :'Penghargaan Kecelakaan Nihil',
            title_en :'Zero Accident Award',
            content:'> 27 Juta Jam Kerja Tanpa LTI kepada PT Multi Harapan Utama',
            content_en:'>27 million hours without accident for PT Multi Harapan Utama'
        },{
            title :'Penghargaan Program P2-HIV & AIDS',
            title_en :'P2-HIV & Aids Program Awards',
            content:'Pelaksanaan Program Pencegahan dan Penanggulangan HIV & AIDS di Tempat Kerja Dengan Kategori Platinum',
            content_en:'The implementation of HIV & AIDS prevention and mitigation in working area with Platinum Category for PT Multi Harapan Utama'
        },{
            title :'Indonesian Mining Award 2019 (APBI ICMA)',
            title_en :'Indonesian Mining Award 2019',
            content:'Perusahaan Batubara dengan Pengelolaan Keselamatan Pertambangan Terbaik',
            content_en:'Mining Safety Management in Coal Mining category for PT Multi Harapan Utama'
        },{
            title :'PROPERNAS',
            title_en :'PROPERNAS',
            content:'Biru (Periode 2018-2019)',
            content_en:'Blue (Period 2018-2019)'
        },{
            title :'ISDA Award 2019',
            title_en :'ISDA Award 2019',
            content:'Platinum untuk Kategori Ketahanan Pangan dan Gold untuk Kategori Air Bersih dan Sanitasi Layak',
            content_en:'Platinum category for food security and gold category for clean water and proper sanitation'
        }
   ]

    return(
    <section class="section  section-height-1 bg-color-light section-no-border my-0">
    <div class="container py-3">
        <div class="row">
        <div className="col text-center py-5">
            {/* <h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2"></h3> */}
            <h2 class="font-weight-bold text-color-dark text-lg-11 text-9 line-height-3 line-height-md-1 mb-0">{isIndo?'Penghargaan':'Awards'}</h2>
        </div>
        </div>

        <div class="row justify-content-center ">
            <div className='pb-5'>

            <Slider asNavFor={nav2} ref={slider => (slider1.current = slider)} >
                {awardList.map((awards,index)=>
                <div key={index} className="px-2 d-flex justify-content-center" style={{ height:'100px'}}>
                    <div>
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid rounded-0 mb-4"  style={{maxHeight:'400px'}} src={`img/MMS/awards/Awards (${index+1}).jpg`} alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className="font-weight-bold text-color-primary text-lg-6 text-5 mb-1">{isIndo?awards.title:awards.title_en}</h3>
                            <p className="text-4 mb-0 text-center">{isIndo?awards.content:awards.content_en}</p>
                        </div>
                    </div>
                </div>
             )}
            </Slider>
            </div>

            <Slider
                className='d-none d-md-block'
                asNavFor={nav1}
                arrows={true}
                slidesToShow={5}
                ref={slider => (slider2.current = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                nextArrow={<NextButton/>}
                prevArrow={<NextButton/>}
                >
            {awardList.map((awards,index)=>
            <div key={index} className="px-2">
                <img className="img-fluid rounded-0 mb-4"  src={`img/MMS/awards/Awards (${index+1}).jpg`} alt="" />
            </div>
            )}
        </Slider>

        </div>
    </div>
</section>)
}

export default Awards;