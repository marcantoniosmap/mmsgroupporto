import React from 'react'
import Slider from 'react-slick';

function JajaranDireksi(props){

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" ,content:'>' }}
            onClick={onClick}
          >
              <i class=" h-100 icons icon-compass text-primary"/>
          </div>
        );
      }
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
          />
        );
      }

    const settings={
        className:'h-100',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        speed:1500,
        autoplaySpeed: 4000, 
        adaptiveHeight: true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
        ]
    }
    

    const direksiProfile=[
        {
            picURL:'img/MMS/profile/andrew.jpg',
            name :'Andrew Lee',
            gelar:'CEO'
        },
        {
            picURL:'img/MMS/profile/adri.jpg',
            name :'Adri',
            gelar:'Head of Operations'
        },
        {
            picURL:'img/MMS/profile/winarto.jpg',
            name :'Winarto Phitoyo',
            gelar:'CFO'
        },
        {
            picURL:'img/MMS/profile/edmund.jpg',
            name :'Edmund Tan',
            gelar:'Head of MTL'
        },
        {
            picURL:'img/MMS/profile/jessy.jpg',
            name :'Jessy Phin',
            gelar:'Corporate Director'
        },
        {
            picURL:'img/MMS/profile/ciho.jpg',
            name :'Ciho D Bangun',
            gelar:'President Director'
        },
    ]

    return(
        <div class="container">
        <div class="row pt-5 pb-4 my-5">
            <div class="col-md-12 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
                <div className="text-center mb-4">
                <h2 class="text-color-dark font-weight-normal text-6 mb-1 ">Board of <strong class="font-weight-bold">Directors</strong></h2>
                <p class="lead">A board of directors (B of D) is an elected group of individuals that represent shareholders. The board is a governing body that typically meets at regular intervals to set corporate management and oversight policies. Every public company must have a board of directors.</p>
                {/* <p class="mb-4">MMS had built its core strength having most qualified member of the boards.</p> */}

                </div>
            </div>
            <div class="col-md-12 order-2 order-md-1 text-center text-md-start">
                <Slider {...settings}>

                    {direksiProfile.map((profile,index)=>
                    <div key={index} className=" px-3">
                        <img class="img-fluid rounded-0 mb-4" src={profile.picURL} alt="" />
                        <h3 class="font-weight-bold text-color-dark text-4 mb-0">{profile.name}</h3>
                        <p class="text-2 mb-0">{profile.gelar}</p>
                    </div>
                    )}
                    </Slider>
            </div>
        </div>
    </div>
    )
}
export default JajaranDireksi;