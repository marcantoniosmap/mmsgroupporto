import React,{useEffect,useRef,useState} from 'react'
import Slider from 'react-slick';
import NextButton from './NextButton';


function Awards(){

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
           content:'Apresiasi atas kontribusi dan Pemenuhan kepatuhan formal kepada Mitra Asian Properti'
       },{
            title :'Penghargaan Subroto 2019',
            content:'Pengelolaan Keselamatan Pertambangan Mineral dan Batubara kepada PT Multi Harapan Utama'
        },{
            title :'Penghargaan Kecelakaan Nihil',
            content:'> 27 Juta Jam Kerja tanpa LTI kepada PT Multi Harapan Utama'
        },{
            title :'Penghargaan Program P2-HIV & AIDS',
            content:'Pelaksanaan Program Pencegahan dan Penanggulangan HIV & AIDS di Tempat Kerja dengan kategori Platinum'
        },{
            title :'Indonesian Mining Award 2019',
            content:'Perusahaan Batubara dengan Pengelolaan Keselamatan Pertambangan Terbaik'
        },{
            title :'PROPERNAS',
            content:'Biru (Periode 2018-2019)'
        },{
            title :'ISDA Award 2019',
            content:'Platinum untuk Kategori Ketahanan Pangan dan Gold untuk Kategori Air Bersih dan Sanitasi Layak'
        }
   ]

    return(
    <section class="section  section-height-1 bg-color-light section-no-border my-0">
    <div class="container py-3">
        <div class="row">
        <div className="col text-center py-5">
            {/* <h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2"></h3> */}
            <h2 class="font-weight-bold text-color-dark text-lg-11 text-9 line-height-3 line-height-md-1 mb-0">Penghargaan</h2>
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
                            <h3 className="font-weight-bold text-color-primary text-lg-6 text-5 mb-1">{awards.title}</h3>
                            <p className="text-4 mb-0 text-center">{awards.content}</p>
                        </div>
                    </div>
                </div>
             )}
            </Slider>
            </div>

            <Slider
                className='d-none d-md-block'
                asNavFor={nav1}
                arrows={false}
                slidesToShow={5}
                ref={slider => (slider2.current = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
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