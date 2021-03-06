import { convertNeSwToNwSe } from 'google-map-react';
import React from 'react'
import {Link} from 'react-router-dom'
import content from "../newscontent";
import { useLanguage } from '../Pages/LanguageContext';

function Footer(props){

	const {isIndo} = useLanguage()
    const footerAboutUsText="MMS Group Indonesia merupakan perusahaan energi berkelanjutan yang mempunyai 3 pilar bisnis utama yaitu MMS Resources, MMS Land dan MMS Solution dengan lokasi yang tersebar di Indonesia. Salah satu portofolio MMS Group adalah PT Multi Harapan Utama, sebuah perusahaan pemegang lisensi PKP2B di Kalimantan Timur yang berada dibawah MMS Resources"
    const footerAboutUsText_en="MMS Group Indonesia is a sustainable energy company with 3 main business pillars, namely MMS Resources, MMS Land, and MMS Solution with locations spread across Indonesia. One of the MMS Group's portfolios is PT Multi Harapan Utama, a company holding a PKP2B license in East Kalimantan under MMS Resources"

    return(
        <footer id="footer" className="mt-0">
        <div class="container container-xl-custom">
        <div class="row py-lg-4 py-3 my-5">
            <div class="col-md-6 col-lg-4 pe-lg-5">
				<h5 class="text-4 text-color-light mb-3">{isIndo?'Tentang Kami':'About Us'}</h5>
				<p class="mb-2">{isIndo?footerAboutUsText: footerAboutUsText_en}</p>
                <p><Link to="/about" class="btn-flat btn-xs text-color-light"><strong class="text-2">{isIndo? 'LIHAT LEBIH':'EXPLORE MORE'}</strong><i class="fas fa-angle-right p-relative top-1 ps-2"></i></Link></p>
			</div>
			<div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
				<h5 class="text-4 text-color-light mb-3">{isIndo?'Kontak Kami':'Contact Us'}</h5>
				<ul class="list list-unstyled">
					<li class="pb-1 mb-2">
						<span class="d-block font-weight-normal line-height-1 text-color-light">{isIndo?'Alamat':'Address'}</span> 
						TCC Batavia Tower One, Jl. K.H. Mas Mansyur No.126, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Jakarta
					</li>
					<li class="pb-1 mb-2">
						<span class="d-block font-weight-normal line-height-1 text-color-light">{isIndo?'Telepon':'Telephone'}</span>
						<a href="tel:+622129529473">(62-21) 29529473</a>
					</li>
					<li class="pb-1 mb-2">
						<span class="d-block font-weight-normal line-height-1 text-color-light">EMAIL</span>
						<a href="mailto:info@mmsgroup.co.id">info@mmsgroup.co.id</a>
					</li>
				</ul>
				<ul class="social-icons social-icons-clean-with-border social-icons-medium">
                <li class="social-icons-instagram "><a href="https://www.instagram.com/mmsgroupindonesia/" target="_blank" title="Instagram"><i class="fab fa-instagram text-2"></i></a></li>
            <li class="social-icons-facebook "><a href="https://www.facebook.com/profile.php?id=100070979171968/" target="_blank" title="Facebook"><i class="fab fa-facebook-f text-2"></i></a></li>
            <li class="social-icons-linkedin"><a href="https://www.linkedin.com/company/mms-group-indonesia" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in text-2"></i></a></li>
            <li class="social-icons-youtube"><a href="https://www.youtube.com/channel/UCBQDNVsotBmIeT62v4clBQQ" target="_blank" title="Youtube"><i class="fab fa-youtube text-2"></i></a></li>
				</ul>
			</div>
			<div class="col-md-6 col-lg-2 mb-5 mb-lg-0">
				<h5 class="text-4 text-color-light mb-3">{isIndo?'TAUTAN':'LINKS'}</h5>
				<ul class="list list-unstyled mb-0">
					<li class="mb-0"><Link to='/'>{isIndo?'Beranda':'Home'}</Link></li>
					<li class="mb-0"><Link to='/about'>{isIndo?'Tentang Kami':'About Us'}</Link></li>
					<li class="mb-0"><Link to='/business/resources'>MMS Resources</Link></li>
					<li class="mb-0"><Link to='/business/land'>MMS Land</Link></li>
					<li class="mb-0"><Link to='/business/solution'>MMS Solution</Link></li>
					<li class="mb-0"><Link to='/csr'>CSR</Link></li>
					<li class="mb-0"><Link to='/news'>{isIndo?'Karir':'Career'}</Link></li>
					<li class="mb-0"><Link to='/career'>{isIndo?'Berita':'News'}</Link></li>
					<li class="mb-0"><Link to='/contact'>{isIndo?'Kontak':'Conract'}</Link></li>
				</ul>
			</div>
			<div class="col-md-6 col-lg-3 mb-5 mb-md-0">
				<h5 class="text-4 text-color-light mb-3">{isIndo?'BERITA TERAKHIR':'LATEST NEWS'}</h5>
                {content.slice(0,3).map((news,index)=>
                    <article class="mb-3">
                        <Link to={`/news/${news.id}`} class="text-color-light text-3-5">{news.title.substring(0,40)}...</Link>
                        <p class="line-height-2 mb-0">{news.newsContent.substring(0,50)}</p>
                    </article>
                )}
			</div>
						
					</div>
        </div>
        <div class="footer-copyright">
            <div class="container py-2">
                <div class="row py-2">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-center mb-4 mb-lg-0">
                        <p>?? Copyright 2022. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
