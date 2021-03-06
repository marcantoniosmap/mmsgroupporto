import React from "react";
import { Link } from "react-router-dom";

function NewsCard(props){
    const monthNames=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return(
        <article class="post post-medium border-0 pb-0 mb-5">
            <div class="post-image" style={{position:'relative'}}>
                <Link to={`/news/${props.id}`}>
                    <img src={`/img/MMS/News/${props.imageUrl}.jpg`} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                </Link>
                <div class="post-date ms-0" style={{position:'absolute',zIndex:3, bottom:'10px',left:'10px'}}>
                                        <span class="day">{new Date(props.date).getDate()}</span>
                                        <span class="month">{monthNames[new Date(props.date).getMonth()]}</span>
            </div>
            </div>
            <div class="post-content">
            
                <h2 class="font-weight-semibold text-xl-5 text-4 line-height-6 mt-3 mb-1"><Link to={`/news/${props.id}`}>{props.title.substring(0,70)}{props.title.length>70 && '...'}</Link></h2>
                
                <p className="">{props.newsContent.substring(0,180)}...</p>

                {/* <div class="post-meta">
                    <span class="d-block mt-2"><Link to={`/news/${props.id}`} class="btn btn-xs btn-light text-1 text-uppercase">MULAI BACA</Link></span>
                </div> */}

            </div>
        </article>

				
    )

}
export default NewsCard