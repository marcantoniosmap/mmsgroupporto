import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import content from "../newscontent";
import { Link } from "react-router-dom";

function NewsContainer(props){

	content.sort(function(a,b){
		return new Date(b.date) - new Date(a.date);
	  });
	const {pagenum}=props.match.params
	const [pagination,setPagination]=useState(1)
	const [slicedArray,setSliceArray]=useState([])

	useEffect(() => {
		var temp=Math.floor(content.length/6)
		if (content.length%6 !==0){
			temp=temp+1}
		setPagination(temp)
	
		if(props.status==='home'){
			setSliceArray(content.slice(0,props.maxNews))
		}else{
			setSliceArray(content.slice((pagenum-1)*6,((pagenum-1)*6)+6))
		}
	},[pagenum] )




    return(
        <div class="container container-xl-custom py-4">
			<div class="row">
				{
					props.showPagination &&
					<div class="text-center pt-4">
						<h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2">MMS GROUP INDONESIA</h3>
						<h2 class="font-weight-bold text-color-dark text-lg-11 text-9 line-height-3 line-height-md-1 mb-5">Berita dan Acara</h2>
					</div>
				}
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
									<li class={`page-item ${pagenum==='1' && 'disabled'}`}><Link class="page-link" to={`/newspage/${parseInt(pagenum)-1}`}><i class="fas fa-angle-left"></i></Link></li>
									{
										Array.from(Array(pagination).keys()).map((page,index)=>
											<li class={`page-item ${parseInt(pagenum)===page+1 && 'active'}`}><Link class="page-link" to={`/newspage/${page+1}`}>{page+1}</Link></li>
										)
									}
									<li class={`page-item ${parseInt(pagenum)===pagination && 'disabled'}`}><Link class="page-link" to={`/newspage/${parseInt(pagenum)+1}`}><i class="fas fa-angle-right"></i></Link></li>
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