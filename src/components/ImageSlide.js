import React from "react";
import BeforeAfterSlider from 'react-before-after-slider'

function ImageSlide(props){

    return(
      <div class="container container-xl-custom py-4">
			<div class="row py-lg-5 my-5">

      <div class="col-lg-5 pe-lg-5 mb-5 mb-lg-0">
            <div class="pe-3 pe-sm-5 pb-3 pb-sm-0 border-right-light">
              <h4 class="mb-2">Move Slider on Hover</h4>
              <p class="m-0">Move slider on mouse hover option for before / after element.</p>
            </div>

          </div>
          <div class="col-md-10 col-lg-7">

          <BeforeAfterSlider
          after={props.imageBefore}
          before={props.imageAfter}
          width={825}
        height={350}
          />

          </div>
        </div>


    </div>

        
   )
}

export default ImageSlide;