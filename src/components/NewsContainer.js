import React from "react";
import NewsCard from "./NewsCard";
import content from "../newscontent";

function NewsContainer(props){

    return(
        <div class="container py-4">

					<div class="row">
						<div class="col">
							<div class="blog-posts">

								<div class="row">

                                        {content.map((news,index)=>(
									        <div class="col-md-4">
                                                <NewsCard 
                                                    title={news.title}
                                                    imageUrl={news.imageUrl}
                                                    newsUrl={news.newsContent}
                                                    newsContent={news.newsContent}/>

									        </div>
                                        ))}
								</div>

								<div class="row">
									<div class="col d-flex justify-content-center">
										<ul class="pagination float">
											<li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-left"></i></a></li>
											<li class="page-item active"><a class="page-link" href="#">1</a></li>
											<li class="page-item"><a class="page-link" href="#">2</a></li>
											<li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
										</ul>
									</div>
								</div>

							</div>
						</div>

					</div>

				</div>

    )

}
export default NewsContainer;