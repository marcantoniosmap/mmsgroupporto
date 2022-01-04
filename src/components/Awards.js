import React,{useEffect,useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';


function Awards(props){

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
        className:'',
        infinite: true,
        slidesToShow: 1,
        centerMode : true,
        slidesToScroll: 1,
        autoplay:false,
        speed:1500,
        autoplaySpeed: 4000, 
        adaptiveHeight: true,
    }

   const awardList=[
       {
           title :'this award',
           content:'Hello there'
       },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
        },{
            title :'this award',
            content:'Hello there'
            ,
        }
   ]

    return(
    <section class="section bg-color-grey-scale-1 section-height-1 section-no-border my-0">
    <div class="container py-3">
        <div class="row">
        <div className="col text-center py-5">
            {/* <h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2"></h3> */}
            <h2 class="font-weight-bold text-color-dark text-11 line-height-3 line-height-md-1 mb-0">Pencapaian</h2>
        </div>
        </div>

        <div class="row justify-content-center ">
            <div className='pb-5'>

            <Slider 
                asNavFor={nav2} 
                ref={slider => (slider1.current = slider)}
                {...settings}>
                {awardList.map((awards,index)=>

            <div key={index} className="px-2 d-flex justify-content-center" style={{
                height:'100px',
                backgroundColor : 'white '
            }}>
                <div>
                    <div className="d-flex justify-content-center">

                <img className="img-fluid rounded-0 mb-4"  style={{maxHeight:'400px'}}src={`img/MMS/awards/Awards (${index+1}).jpg`} alt="" />
                    </div>
                <div className="text-center">
                <h3 className="font-weight-bold text-color-dark text-7 mb-0">{awards.title}</h3>
                <p className="lead mb-0 text-center">{awards.content}</p>
                </div>
                </div>
            </div>
            
            )}
            </Slider>
            </div>

            <Slider
                asNavFor={nav1}
                slidesToShow={5}
                ref={slider => (slider2.current = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                >
            {awardList.map((awards,index)=>
            <div key={index} className="px-2" style={{maxWidth:''}}>
                <img className=" img-fluid rounded-0 mb-4"  src={`img/MMS/awards/Awards (${index+1}).jpg`} alt="" />
            </div>
            )}
        </Slider>

        </div>
    </div>
</section>)
}

export default Awards;