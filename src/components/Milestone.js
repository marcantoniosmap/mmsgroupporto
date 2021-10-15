import React from "react";



function MilestoneYear({date}){
    return(
        <div class="timeline-date">
            <h3 class="text-primary font-weight-bold">{date}</h3>
    </div>
    )
}

function MilestoneArticle(props){
    return(
        <article class={`${props.index%2===0 ? 'right': 'left'} timeline-box post post-medium`}>
        <div class="timeline-box-arrow"></div>
        <div class="p-2">
            <div class="row mb-2">

                <div class="col">
                    <div class="post-image">
                        <img src={props.imgSource} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="post-content">
                        <h2 class="font-weight-semibold text-5 line-height-4 mt-2 mb-2">{props.title}</h2>
                        <p className="mb-0">{props.content}</p>
                    </div>

                </div>
            </div>
        </div>
    </article>
    )
}

function Milestone(props){
    const milestoneContent=[
        {
            type:"year",
            date:'2006'
        },
        {
            type:'content',
            arrangement :1,
            imgSource:'img/MMS/milestone/milestone (1).jpg',
            title : 'MMS dilahirkan',
            content : 'MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma'
        },
        {
            type:'content',
            arrangement :2,
            imgSource:'img/MMS/milestone/milestone (2).jpg',
            title : 'Mengakuisi MHU',
            content : 'MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma'
        },
        {
            type:'year',
            date:'2012',
        },
        {
            type:'content',
            arrangement :1,
            imgSource:'img/MMS/milestone/milestone (3).jpg',
            title : 'Mengakuisi Pullman Bali',
            content : 'MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma'
        },
        {
            type:'content',
            arrangement :2,
            imgSource:'img/MMS/milestone/milestone (4).jpg',
            title : 'Membangun Datacenter',
            content : 'MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma'
        },
    ]
    

    return(
        <div class="container py-4">

        <div class="row">
            <div class="col">
                <div class="blog-posts">
                    <section class="timeline">
                        <div class="timeline-body">
                           
                        {milestoneContent.map((item,index)=>{
                            return item.type==='year' ?  <MilestoneYear date={item.date} key={index}/>: <MilestoneArticle key={index} index={item.arrangement} imgSource={item.imgSource} title={item.title} content={item.content}/>
                        })}                        
                            <div class="timeline-date" onClick={props.setmilestoneFunction}>
                                <h3 class="text-primary font-weight-bold"><a >Load More...</a></h3>
                            </div>

                        </div>

                    </section>

                </div>
            </div>

        </div>

    </div>
    )

}
export default Milestone;