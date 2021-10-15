import React from "react";
import { Link } from "react-router-dom";

function NewsCard(props){



    return(

        <article class="post post-medium border-0 pb-0 mb-5">
            <div class="post-image">
                <Link to={`/news/${props.id}`}>
                    <img src={props.imageUrl} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />  
                </Link>
            </div>

            <div class="post-content">

                <h2 class="font-weight-semibold text-4 line-height-6 mt-3 mb-2"><Link to={`/news/${props.id}`}>{props.title}</Link></h2>
                <p className="">{props.newsContent.substring(0,180)}...</p>

                <div class="post-meta">
                    <span class="d-block mt-2"><Link to={`/news/${props.id}`} class="btn btn-xs btn-light text-1 text-uppercase">Read More</Link></span>
                </div>

            </div>
        </article>

				
    )

}
export default NewsCard