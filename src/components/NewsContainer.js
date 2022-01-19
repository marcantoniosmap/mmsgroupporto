import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import content from "../newscontent";
import { Link } from "react-router-dom";

function NewsContainer(props){

	const [pageNum,setPageNum]=useState(1)
	console.log(props.match)
	const pageLength=content.length/9
	useEffect(()=>{

	},[])


	content.reverse()
	const slicedArray = content.slice(0,props.maxNews)
	console.log(slicedArray)

    return(
        <div class="container py-4">
			<div class="row">
				<div class="col">
					<div class="blog-posts">
						<div class="row">
                            {slicedArray.map((news,index)=>(
							    <div class="col-md-4">
                                    <NewsCard 
										id={news.id}
                                        title={news.title}
                                        imageUrl={news.imageUrl}
                                        newsContent={news.newsContent}/>
							    </div>
                            ))}
						</div>
						{props.showPagination &&
						<div class="row">
							<div class="col d-flex justify-content-center">
								<ul class="pagination float">
									<li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-left"></i></a></li>
									{
										[...Array(pageLength).keys()].map((pagenum,index)=>
											<li class={`page-item ${pagenum=pageNum && 'active'}`}><Link class="page-link" to={`/newspage/${pagenum}`}>{pagenum}</Link></li>
										)
									}
									<li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
								</ul>
							</div>
						</div>
						}
					</div>
				</div>
			</div>
		</div>

    )

}
export default NewsContainer;