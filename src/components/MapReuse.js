import React, { useState } from "react";

function MapReuse({pinpoint}){
    
    const [chosenState,setChosenState]=useState(null)

    function clickListener(e,location) {
        e.preventDefault();
        setChosenState(location)
        console.log(location)
     }

    return(

        <div class="image-hotspots">
            <img src="img/MMS/Map-Indonesia.png" class="img-fluid" />
            {pinpoint.map((points,index)=>(
                <>
            <div key={index} style={{left: points.left, top: points.top}} class="image-hotspot image-hotspot-primary">
                <span className="ring" style={{height:'20px',width:'20px'}}></span>
                <span onMouseEnter={(e)=>clickListener(e,points.id)} onMouseLeave={()=>setChosenState(null)} className="circle"  style={{height:'20px',width:'20px'}}></span>
            </div>
            <div style={{left: points.left, top: points.top}} class="image-hotspot image-hotspot-primary">
                <span  style={{lineHeight:'21px'}}className={`tooltiptext ${chosenState===points.id ? '': 'd-none'}`}>{points.id}</span>
            </div>
                </>
            ))}
        </div>
                       

    )
}
export default MapReuse