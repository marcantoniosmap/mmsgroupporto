import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import content from "../newscontent";


function NewsContent(props){
    
    const [newsContent,setNewsContent]=useState(null)
    const [textArray,setTextArray]=useState([])
    const [recentPost,setRecentPost]=useState([])

    content.sort(function(a,b){
		return new Date(b.date) - new Date(a.date);
	  });

    useEffect(() => {
        var i = 0
        var recentArray=[]
        for (let x of content) {
            if (x.id === props.match.params.id) {
                setNewsContent(x)
            }else {
                if(i<3){
                    recentArray.push(x)
                    i++
                }
            }
        }
        setRecentPost(recentArray);
    }, [props.match.params.id])

    const monthNames=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const options = { year :'numeric',month: 'short', day: 'numeric'}
    return(
        <>
            
            <div style={{height:'100px'}}/>
            {newsContent && 
                <div class="container container-xl-custom py-4 mb-4">
                    <div class="row">
                        <div class="col-lg-3 order-lg-2 d-none d-lg-block">
                            <div className="position-sticky" style={{top:120}}>
                                <h5 class="font-weight-semi-bold">Berita Terakhir</h5>
                                    <aside class="sidebar">
                                        <ul class="simple-post-list">
                                            {
                                            recentPost.map((post,index)=>(
                                                <li>
                                                    <div class="post-iage">
                                                        {/* <div class="img-thumbnail img-thumbnail-no-borders d-block"> */}
                                                            <Link to={`/news/${post.id}`}>
                                                                <div className='onHoverFull' style={{
                                                                    backgroundImage:`url('/img/MMS/News/${post.imageUrl}.jpg')`,
                                                                    backgroundSize:'cover',
                                                                    backgroundPosition:'center',
                                                                    boxSizing:'border-box',
                                                                    height:'150px',
                                                                    width:'100%',
                                                                }}>
                                                                </div>
                                                                {/* <img src={`/img/MMS/News/${post.imageUrl}.jpg`} width="100%" height="auto" alt=""/> */}
                                                            </Link>
                                                        {/* </div> */}
                                                    </div>
                                                    <div class="post-info mt-2">
                                                        <Link to={`/news/${post.id}`}>{post.title.substring(0,80)}{post.title.length>80 && '...'}</Link>
                                                        <div class="post-meta">
                                                            {new Date(post.date).toLocaleDateString('en-US',options)}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                            }
                                        </ul>
                                    </aside>
                            </div>
                        </div>
                        <div class="col-lg-9 order-lg-1 pe-lg-5">
                            <div class="blog-posts single-post">
                                <article class="post post-large blog-single-post border-0 m-0 p-0">
                                    <div class="post-image ms-0">
                                        <img src={`/img/MMS/News/Landscape/${newsContent.imageUrl}.jpg`} class="img-thumbnail img-thumbnail-no-borders rounded-0" style={{width:'100%', height:'auto'}} alt={newsContent.title} />
                                    </div>

                                    <div class="post-date ms-0">
                                        <span class="day">{new Date(newsContent.date).getDate()}</span>
                                        <span class="month">{monthNames[new Date(newsContent.date).getMonth()]}</span>
                                    </div>

                                    <div class="post-content ms-0">
                                        <h2 class="font-weight-semi-bold text-lg-8 text-6 text-primary">{newsContent.title}</h2>
                                        <p className='text-4 text-left' style={{whiteSpace:'pre-line'}}>{newsContent.newsContent}</p>

                                    </div>
                                </article>

                            </div>
                        </div>
                    </div>

                </div>
            }

        </>
    )
}
export default NewsContent;