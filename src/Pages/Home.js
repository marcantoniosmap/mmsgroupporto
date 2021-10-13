import React from "react";
import {useEffect} from 'react';
import Home_slider from '../components/Home_slider'
import Home_slider_slick from "../components/Home_slider_slick";

    function Home(props){


return(
    <div role="main" class="main">
        <Home_slider_slick/>

				<div class="container py-4">
					<div class="row pt-4 mt-5">
						<div class="col">
							<div class="row pt-2 clearfix">
								<div class="col-lg-6">
									<div class="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInRightShorter">
										<div class="feature-box-icon">
											<i class="icon-user-following icons text-color-primary"></i>
										</div>
										<div class="feature-box-info">
											<h4 class="mb-2">Customer Support</h4>
											<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInLeftShorter">
										<div class="feature-box-icon">
											<i class="icon-layers icons text-color-primary"></i>
										</div>
										<div class="feature-box-info">
											<h4 class="mb-2">Sliders</h4>
											<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<div class="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
										<div class="feature-box-icon">
											<i class="icon-calculator icons text-color-primary"></i>
										</div>
										<div class="feature-box-info">
											<h4 class="mb-2">HTML5</h4>
											<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="200">
										<div class="feature-box-icon">
											<i class="icon-star icons text-color-primary"></i>
										</div>
										<div class="feature-box-info">
											<h4 class="mb-2">Icons</h4>
											<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<div class="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">
										<div class="feature-box-icon">
											<i class="icon-drop icons text-color-primary"></i>
										</div>
										<div class="feature-box-info">
											<h4 class="mb-2">Colors</h4>
											<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
										<div class="feature-box-icon">
											<i class="icon-mouse icons text-color-primary"></i>
										</div>
										<div class="feature-box-info">
											<h4 class="mb-2">Buttons</h4>
											<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row pb-5 mb-5 mt-3">
						<div class="col text-center">
							<a href="#" class="btn btn-primary btn-px-5 py-3 font-weight-semibold text-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300">LEARN MORE</a>
						</div>
					</div>
				</div>

				<section class="section section-secondary border-0 py-0 m-0 appear-animation" data-appear-animation="fadeIn">
					<div class="container">
						<div class="row align-items-center justify-content-center justify-content-lg-between pb-5 pb-lg-0">
							<div class="col-lg-5 order-2 order-lg-1 pt-4 pt-lg-0 pb-5 pb-lg-0 mt-5 mt-lg-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
								<h2 class="font-weight-bold text-color-light text-7 mb-2">Who We Are</h2>
								<p class="lead font-weight-light text-color-light text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim. Nullam id varius nunc.</p>
								<p class="font-weight-light text-color-light text-2 mb-4 opacity-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc. Vivamus bibendun magna ex, et faucibus lacus venenatis eget</p>
								<a href="#" class="btn btn-dark-scale-2 btn-px-5 btn-py-2 text-2">LEARN MORE</a>
							</div>
							<div class="col-9 offset-lg-1 col-lg-5 order-1 order-lg-2 scale-2">
								<img class="img-fluid box-shadow-3 my-2 border-radius" src="img/gallery/gallery-1.jpg" alt=""/>
							</div>
						</div>
					</div>
				</section>

				<section class="section section-height-4 bg-color-grey-scale-1 border-0 m-0 pb-5">
					<div class="container">
						<div class="row justify-content-center my-4">
							<div class="col appear-animation" data-appear-animation="fadeInUpShorter">
								<div class="owl-carousel owl-theme nav-bottom rounded-nav" data-plugin-options="{'items': 1, 'loop': true, 'autoHeight': true}">
									<div>
										<div class="col">
											<div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
												<div class="testimonial-author">
													<img src="img/clients/client-1.jpg" class="img-fluid rounded-circle" alt=""/>
												</div>
												<blockquote>
													<p class="text-color-dark text-5 line-height-5">Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma - which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice.</p>
												</blockquote>
												<div class="testimonial-author">
													<p class="opacity-10"><strong class="font-weight-extra-bold text-2">- John Smith. Okler</strong></p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div class="col">
											<div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
												<div class="testimonial-author">
													<img src="img/clients/client-1.jpg" class="img-fluid rounded-circle" alt=""/>
												</div>
												<blockquote>
													<p class="text-color-dark text-5 line-height-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex.</p>
												</blockquote>
												<div class="testimonial-author">
													<p class="opacity-10"><strong class="font-weight-extra-bold text-2">- John Smith. Okler</strong></p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div class="col">
											<div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
												<div class="testimonial-author">
													<img src="img/clients/client-1.jpg" class="img-fluid rounded-circle" alt=""/>
												</div>
												<blockquote>
													<p class="text-color-dark text-5 line-height-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
												</blockquote>
												<div class="testimonial-author">
													<p class="opacity-10"><strong class="font-weight-extra-bold text-2">- John Smith. Okler</strong></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div class="container">
					<div class="row py-5 my-5">
						<div class="col">

							<div class="owl-carousel owl-theme mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 7}}, 'autoplay': true, 'autoplayTimeout': 3000, 'dots': false}">
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-1.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-2.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-3.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-4.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-5.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-6.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-4.png" alt=""/>
								</div>
								<div>
									<img class="img-fluid opacity-2" src="img/logos/logo-2.png" alt=""/>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
)

}
export default Home;