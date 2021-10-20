import React from "react";

function IndonesiaMap(props){


    const pinpoint=[
        {
            id:'Bangka',
            left:'24%',
            top:'48%',
        },
        {
            id:'Jakarta',
            left:'26%',
            top:'65%',
        },
        {
            id:'Samarinda',
            left:'48%',
            top:'38%',
        },
        {
            id:'Balikpapan',
            left:'45%',
            top:'52%',
        },
        {
            id:'Kendari',
            left:'60%',
            top:'56%',
        },
    ]
    return(
        <div class="container container-xl-custom py-4">
			<div class="row py-lg-5 mt-5 mb-0">
				<div class="col-lg-5 pe-lg-5 mb-5 mb-lg-0">
					<h2 class="font-weight-bold mb-2">Strong Local Knowledge</h2>
					<p class="text-color-dark text-6 line-height-5">In-depth Local Knowledge Has Enabled MMSGI to Expand Its Operations Across Indonesia...</p>
                    <ol class="list list-ordened list-ordened-style-2 px-0">
						<li>In-depth understanding of Indonesian regulatory aspect especially in mining and property</li>
						<li>Right balance of expertise between operation and strategic resources for execution</li>
						<li>Focus in positioning itself as Government of Indonesia Partner</li>
					</ol>
					{/* <a href="#" class="learn-more text-primary font-weight-semibold text-2">VIEW MORE <i class="fas fa-chevron-right text-3 ms-2"></i></a> */}
				</div>
				<div class="col-md-10 col-lg-7">
                    <div class="row mb-4 pb-4">
                        <div class="col">
                            <div class="image-hotspots">
                                <img src="img/MMS/Map-Indonesia.png" class="img-fluid" />

                                {pinpoint.map((points,index)=>(
                                <a style={{left: points.left, top: points.top}} class="image-hotspot image-hotspot-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." tabindex="0">
                                    <span class="ring"></span>
                                    <span class="circle"></span>
                                </a>

                                ))}
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>

    )
}
export default IndonesiaMap