import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Contact(props){

    return(
        <>
         {/* <Header 
                imageUrl="img/MMS/Parallax2.jpg" 
                textZero="Contact" 
                textOne="Us" breadcrumb={[
                    {name :'home',url:'/'}
                ]}/> */}
				<div style={{height:'100px'}}/>

				<div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.399677340555!2d106.8142241156511!3d-6.210900762568472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6a9c14edf29%3A0xaa58930ff69274c0!2sTower%20one!5e0!3m2!1sen!2sid!4v1634203779005!5m2!1sen!2sid" 
                    title="mmsgrouploc"
                    width="100%" 
                    height="300px" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy"/>
				</div>
        <div class="container container-xl-custom my-5">
		<h2 class="font-weight-bold text-center text-8 mt-2 mb-0">Kontak Kami</h2>
		<p class="text-4 text-center">Jangan ragu untuk bertanya, jangan simpan pertanyaan apa pun!</p>

					<div class="row">
						<div class="col-lg-4"> 
							<div class="">
								<h4 class="">Social <strong>Media</strong></h4>
								<ul class="list list-icons list-icons-style-2 mt-2">
										<li><i class="fab fa-instagram top-6"></i> <strong class="text-dark">Instagram:</strong> <a href="https://www.instagram.com/mmsgroupindonesia/">mmsgroupindonesia</a></li>
										<li><i class="fab fa-facebook-f top-6"></i> <strong class="text-dark">Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=100070979171968">MMS Group Indonesia</a></li>
										<li><i class="fab fa-linkedin-in top-6"></i> <strong class="text-dark">LinkedIn:</strong> <a href="https://www.linkedin.com/company/mms-group-indonesia">MMS GROUP INDONESIA</a></li>
										<li><i class="fab fa-youtube text-2"></i> <strong className='text-dark'>Youtube:</strong><a href="https://www.youtube.com/channel/UCBQDNVsotBmIeT62v4clBQQ" target="_blank" title="Youtube"> MMS Group Indonesia</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-4 ">
							<div class="">
								<h4 class="mt-2 mb-1">Our <strong>Office</strong></h4>
								<ul class="list list-icons list-icons-style-2 mt-2">
									<li><i class="fas fa-envelope top-6"></i> <strong class="text-dark">Email:</strong> <a href="mailto:info@mmsgroup.co.id">info@mmsgroup.co.id</a></li>
									<li><i class="fas fa-phone top-6"></i> <strong class="text-dark">Phone:</strong> (62-21) 29529473</li>
									<li><i class="fas fa-fax top-6"></i> <strong class="text-dark">Fax:</strong> (62-21) 29529478</li>
								</ul>
							</div>
						</div>
					
						<div class="col-lg-4">
							<div class="">
								<h4 class="">Jam <strong>Operasional</strong></h4>
								<ul class="list list-icons list-dark mt-2">
									<li><i class="far fa-clock top-6"></i> Senin Jumat - 9am to 5pm</li>
									<li><i class="far fa-clock top-6"></i> Sabtu - 9am sampai 2pm</li>
									<li><i class="far fa-clock top-6"></i> Minggu - Tutup</li>
								</ul>
							</div>
						</div>
						</div>

					</div>
        </>
    )
}
export default Contact;