import React, {useEffect,useState} from 'react'
import Header from '../components/Header';
import content from "../newscontent";


function NewsContent(){

    const recentpost=content.slice(0, 4);
    return(
        <>
            {/* <Header 
                imageUrl="/img/MMS/Parallax4.jpg" 
                textZero="News" 
                textOne="" breadcrumb={[
                    {name :'home',url:'/'}
                ]}/> */}
                <div style={{height:'100px'}}/>

<div class="container py-4 mb-4">

<div class="row">
    <div class="col-lg-3 order-lg-2 d-lg-block d-none">
    <h5 class="font-weight-semi-bold">Recent Post</h5>
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
                                <a href="blog-post.html">{post.title}</a>
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
                        <img src={"/img/MMS/NewsPreview.jpg"} class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                    </a>
                </div>

                <div class="post-date ms-0">
                    <span class="day">10</span>
                    <span class="month">Jan</span>
                </div>

                <div class="post-content ms-0">

                    <h2 class="font-weight-semi-bold text-primary">MMS Group Indonesia Distribusikan APD ke Beberapa Rumah Sakit, Puskesmas, Hingga Rumah Yatim dan Yayasan Panti Asuhan</h2>
                    <div className='pt-3'>
                        <p>Jakarta 12 Agustus 2020 - MMS Group Indonesia kembali peduli terhadap dampak dari adanya pandemic Covid-19 melalui kegiatan Corporate Social Responbility (CSR).  Sejak April 2020, MMS Group Indonesia telah menyerahkan sumbangan berupa uang tunai, sembako, APD, Masker, Face Shield dan lainnya.</p>
                        <p>Di bulan Agustus ini sumbangan APD dan juga masker Kembali diserahkan kepada beberapa rumah sakit dan Puskesmas yang menangani pasien covid-19 serta kepada beberapa Rumah Yatim dan Yayasan Panti Asuhan di sekitar Jakarta, Tangerang dan Bogor.</p>
                        <p>Kami akan terus bekontribusi sebagai bentuk kepedulian kami terhadap kondisi covid-19 ini. Kami sadar betul, ini juga merupakan tanggung jawab kami untuk membantu sesama, bila kemarin kita sudah memberikan sejumlah uang, sembako, masker, face shield, APD dan lainnya, selanjutnya kita akan terus memberikan bantuan yang dibutuhkan, “kata Andrew Hidayat selaku pendiri MMS Group Indonesia, Kamis (12/08).</p>
                        <p>Saat ini kebutuhan akan APD dan masker bagi tenaga medis masih sangat tinggi, karena itu MMS Group Indonesia berusaha terus menyalurkan bantuan ke berbagai rumah sakit. Bagi para medis sebagai garda terdepan dalam penanganan Covid-19, APD merupakan senjata mutlak untuk membentengi diri agar keamanan dan keselamatannya terjaga.</p>
                        <p>Bantuan diserahkan langsung oleh tim MMS Group Indonesia peduli Covid-19 kepada perwakilan dari masing-masing Rumah Sakit dan Panti Asuhan.</p>
                        <p>Di internal Perusahaan, MMS Group Indonesia juga melakukan Rapid Test sampai dengan swab test secara rutin terhadap karyawannya agar dapat mendeteksi sedini mungkin penyebaran Covid-19.</p>

                    </div>

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