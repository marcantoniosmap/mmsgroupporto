import React from 'react'
import {Link} from 'react-router-dom'

function Footer(props){

    const footerAboutUsText="MMS Group Indonesia was started in 2005 as a coal trading company, supplying coal to local industries such as sugar refinery and textile. Enhancing our position as a reliable coal supplier in Indonesia, we acquired coal mine PT. Dutadharma Utama in 2016 and prestigious CCoW mine PT. Multi Harapan Utama in 2017."

    return(
        <footer id="footer">
        <div class="container">
            <div class="row py-5 my-4">
                <div class="col-md-9 mb-4 mb-lg-0">
                    <h5 class="text-3 mb-3">ABOUT US</h5>
                    <p class="mt-2 mb-2">{footerAboutUsText}</p>
                    <p><a href="#" class="btn-flat btn-xs text-color-light"><strong class="text-2">VIEW MORE</strong><i class="fas fa-angle-right p-relative top-1 ps-2"></i></a></p>
                    <div class="row pt-3">
                        <div class="col-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 class="text-3 mb-3">BLOG</h5>
                            <ul class="list list-icons list-icons-sm mb-0">
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="blog-full-width.html">Blog Full Width</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="blog-large-image.html">Blog Large Image</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="blog-medium-image.html">Blog Medium Image</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="blog-post.html">Single Post</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 class="text-3 mb-3">OUR BUSINESS</h5>
                            <ul class="list list-icons list-icons-sm mb-0">
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-full-width.html">MMS Resources</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-left-sidebar.html">MMS Land</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-right-sidebar.html">MMS Initiatives</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-custom-header.html">Custom Header</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 class="text-3 mb-3">PORTFOLIO</h5>
                            <ul class="list list-icons list-icons-sm mb-0">
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="portfolio-2-columns.html">2 Columns</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="portfolio-3-columns.html">3 Columns</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="portfolio-4-columns.html">4 Columns</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="portfolio-single-wide-slider.html">Single Project</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 class="text-3 mb-3">EXTRA</h5>
                            <ul class="list list-icons list-icons-sm mb-0">
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-team.html">Team</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-services.html">Services</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-careers.html">Careers</a></li>
                                <li><i class="fas fa-angle-right top-8"></i> <a class="link-hover-style-1" href="page-faq.html">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4 mb-lg-0">
                    <h5 class="text-3 mb-3 pb-1">CONTACT US</h5>
                    <p class="text-6 text-color-light font-weight-bold"><a href="mailto:info@mmsgroup.co.id" class="text-decoration-none text-color-light">info@mmsgroup.co.id</a></p>
                    <p class="mb-2">International: <a href="tel:02129529473" class="text-decoration-none">(62-21) 29529473</a></p>
                    <p class="mb-2">Fax: (62-21) 29529478</p>
                    <ul class="list list-icons list-icons-lg">
                        <li class="mb-1"><i class="far fa-dot-circle text-color-primary"></i><p class="m-0">TCC Batavia Tower One Lt. 43, Jakarta</p></li>
                        <li class="mb-1"><i class="far fa-envelope text-color-primary"></i><p class="m-0"><a href="mailto:marketing@mmsgroup.co.id">marketing@mmsgroup.co.id</a> (Sales)</p></li>
                        <li class="mb-1"><i class="far fa-envelope text-color-primary"></i><p class="m-0"><a href="mailto:recruitment@mmsgroup.co.id">recruitment@mmsgroup.co.id</a> (Recruitment)</p></li>
                        
                        

                    </ul>
                    <ul class="footer-social-icons social-icons mt-4">
                        <li class="social-icons-instagram "><a href="https://www.instagram.com/mmsgroupindonesia/" target="_blank" title="Instagram"><i class="fab fa-instagram text-2"></i></a></li>
                        <li class="social-icons-facebook "><a href="https://www.facebook.com/profile.php?id=100070979171968/" target="_blank" title="Facebook"><i class="fab fa-facebook-f text-2"></i></a></li>
                        <li class="social-icons-linkedin"><a href="https://www.linkedin.com/company/mms-group-indonesia" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in text-2"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container py-2">
                <div class="row py-2">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-center mb-4 mb-lg-0">
                        <p>© Copyright 2021. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
