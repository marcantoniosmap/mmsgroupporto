import React, {useEffect,useState} from 'react'
import Header from '../components/Header';


function NewsContent(){

    const recentpost=[1,2,3,4,5]
    return(
        <>
            <Header 
                imageUrl="/img/MMS/Parallax4.jpg" 
                textZero="News" 
                textOne="" breadcrumb={[
                    {name :'home',url:'/'}
                ]}/>

<div class="container py-4 mb-2">

<div class="row">
    <div class="col-lg-3 order-lg-2 d-lg-block d-none">
    <h5 class="font-weight-semi-bold pt-4">Recent Post</h5>
        <aside class="sidebar">
            {/* <div class="recent-posts">
				<article class="post">							
					<h4><a href="blog-post.html" class="text-decoration-none">Lorem ipsum dolor sit amet, consectetur</a></h4>
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam nisi ultricies nisi luctus, sed fermentum. <a href="blog-post.html" class="read-more font-weight-bold text-2">read more <i class="fas fa-chevron-right text-1 ms-1"></i></a></p>						   
                </article>
			</div> */}
            <ul class="simple-post-list">

                {
                    recentpost.map((post,index)=>(
                        <li>
                            <div class="post-image">
                                <div class="img-thumbnail img-thumbnail-no-borders d-block">
                                    <a href="blog-post.html">
                                        <img src="/img/blog/square/blog-11.jpg" width="50" height="50" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div class="post-info">
                                <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
                                <div class="post-meta">
                                    Nov 10, 2021
                                </div>
                            </div>
                        </li>
                        
                    ))
                }

            </ul>
            
        </aside>
    </div>
    <div class="col-lg-9 order-lg-1">
        <div class="blog-posts single-post">
            <article class="post post-large blog-single-post border-0 m-0 p-0">
                <div class="post-image ms-0">
                    <a href="blog-post.html">
                        <img src={"/img/blog/wide/blog-11.jpg"} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                    </a>
                </div>

                <div class="post-date ms-0">
                    <span class="day">10</span>
                    <span class="month">Jan</span>
                </div>

                <div class="post-content ms-0">

                    <h2 class="font-weight-semi-bold"><a href="blog-post.html">Class aptent taciti sociosqu ad litora torquent</a></h2>

                    <div class="post-meta">
                        <span><i class="far fa-user"></i> By <a href="#">John Doe</a> </span>
                        <span><i class="far fa-folder"></i> <a href="#">Lifestyle</a>, <a href="#">Design</a> </span>
                        <span><i class="far fa-comments"></i> <a href="#">12 Comments</a></span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.</p>
                    <p>Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla elit. Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam massa mauris, viverra et rhoncus a, feugiat ut sem. Quisque ultricies diam tempus quam molestie vitae sodales dolor sagittis. Praesent commodo sodales purus. Maecenas scelerisque ligula vitae leo adipiscing a facilisis nisl ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                    <p>Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et interdum. Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing aliquet. Phasellus convallis lorem dui. Quisque hendrerit, lectus ut accumsan gravida, leo tellus porttitor mi, ac mattis eros nunc vel enim. Nulla facilisi. Nam non nulla sed nibh sodales auctor eget non augue. Pellentesque sollicitudin consectetur mauris, eu mattis mi dictum ac. Etiam et sapien eu nisl dapibus fermentum et nec tortor.</p>
                    <p>Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor eget fringilla non, vehicula sed tortor. Proin enim quam, vulputate at lobortis quis, condimentum at justo. Phasellus nec nisi justo. Ut luctus sagittis nulla at dapibus. Aliquam ullamcorper commodo elit, quis ornare eros consectetur a. Curabitur nulla dui, fermentum sed dapibus at, adipiscing eget nisi. Aenean iaculis vehicula imperdiet. Donec suscipit leo sed metus vestibulum pulvinar. Phasellus bibendum magna nec tellus fringilla faucibus. Phasellus mollis scelerisque volutpat. Ut sed molestie turpis. Phasellus ultrices suscipit tellus, ac vehicula ligula condimentum et.</p>
                    <p>Aenean metus nibh, molestie at consectetur nec, molestie sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec euismod urna. Donec gravida pharetra ipsum, non volutpat ipsum sagittis a. Phasellus ut convallis ipsum. Sed nec dui orci, nec hendrerit massa. Curabitur at risus suscipit massa varius accumsan. Proin eu nisi id velit ultrices viverra nec condimentum magna. Ut porta orci quis nulla aliquam at dictum mi viverra. Maecenas ultricies elit in tortor scelerisque facilisis. Mauris vehicula porttitor lacus, vel pretium est semper non. Ut accumsan rhoncus metus non pharetra. Quisque luctus blandit nisi, id tempus tellus pulvinar eu. Nam ornare laoreet mi a molestie. Donec sodales scelerisque congue. </p>

                </div>
            </article>

        </div>
    </div>
</div>

</div>

        </>
    )
}
export default NewsContent;