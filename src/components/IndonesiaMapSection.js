import React from "react";
import MapReuse from "./MapReuse";

function IndonesiaMap(props){


    const pinpoint=[
        {
            id:'Bangka',
            left:'25%',
            top:'51%',
        },
        {
            id:'Jakarta',
            left:'26%',
            top:'69%',
        },
        {
            id:'Samarinda',
            left:'48%',
            top:'42%',
        },
        {
            id:'Balikpapan',
            left:'45%',
            top:'56%',
        },
        {
            id:'Bali',
            left:'45%',
            top:'82%',
        },
    ]
    return(
        <div class="container container-xl-custom py-4">
			<div class="row py-lg-5 mt-5 mb-0">
				<div class="col-lg-5 pe-lg-5 mb-5 mb-lg-0 order-lg-1 order-2">
					<h2 class="font-weight-bold mb-2">Strong Local Knowledge</h2>
					<p class="text-color-dark text-6 line-height-5">In-depth Local Knowledge Has Enabled MMSGI to Expand Its Operations Across Indonesia...</p>
                    <ol class="list list-ordened list-ordened-style-2 px-0">
						<li>In-depth understanding of Indonesian regulatory aspect especially in mining and property</li>
						<li>Right balance of expertise between operation and strategic resources for execution</li>
						<li>Focus in positioning itself as Government of Indonesia Partner</li>
					</ol>
					{/* <a href="#" class="learn-more text-primary font-weight-semibold text-2">VIEW MORE <i class="fas fa-chevron-right text-3 ms-2"></i></a> */}
				</div>
				<div class="col-lg-7 order-lg-2 order-1">
                    <div class="row mb-4 pb-4">
                        <div class="col">
                           <MapReuse pinpoint={pinpoint}/>
                        </div>
                    </div>
				</div>
			</div>
		</div>

    )
}
export default IndonesiaMap