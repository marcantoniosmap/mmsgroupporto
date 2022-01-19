import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import content from "../newscontent";
import { Link } from "react-router-dom";

function NewsContainer(props){

	content.sort(function(a,b){
		return new Date(b.date) - new Date(a.date);
	  });
	const [pageNum,setPageNum]=useState(parseInt(props.match.params.pagenum))
	const [pagination,setPagination]=useState(1)
	const [slicedArray,setSliceArray]=useState([])

	useEffect(() => {
		setPageNum(parseInt(props.match.params.pagenum))
		var temp=Math.floor(content.length/6)
		if (content.length%6 !==0){
			temp=temp+1}
		setPagination(temp)
	
		if(props.status==='home'){
			console.log('heyhyehye')
			setSliceArray(content.slice(0,props.maxNews))
		}else{
			setSliceArray(content.slice((pageNum-1)*6,((pageNum-1)*6)+6))
		}
	console.log((pageNum-1)*6,((pageNum-1)*6)+6,slicedArray)



	},[props.match.params.pagenum,pageNum,props.maxNews,props.status,slicedArray] )




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
									<li class={`page-item ${pageNum===1 && 'disabled'}`}><Link class="page-link" to={`/newspage/${pageNum-1}`}><i class="fas fa-angle-left"></i></Link></li>
									{
										Array.from(Array(pagination).keys()).map((pagenum,index)=>
											<li class={`page-item ${pagenum+1===pageNum && 'active'} ${console.log(pagenum,pageNum)}`}><Link class="page-link" to={`/newspage/${pagenum+1}`}>{pagenum+1}</Link></li>
										)
									}
									<li class={`page-item ${pageNum===pagination && 'disabled'}`}><Link class="page-link" to={`/newspage/${pageNum+1}`}><i class="fas fa-angle-right"></i></Link></li>
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