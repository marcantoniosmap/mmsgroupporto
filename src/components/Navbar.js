import React,{useState,useEffect} from "react";
import $ from 'jquery'
import { Link,withRouter,useLocation } from "react-router-dom";
import { isCompositeComponent } from "react-dom/test-utils";

function Navbar(props){
    const [isScrolled,setIsScrolled]=useState(false)
    const location=useLocation()
    const [page,setPage]=useState()

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll>30){
            setIsScrolled(false)
        }else {
            setIsScrolled(true)
        }
    });

    useEffect(()=>{
        setPage(location.pathname.split('/')[1])
    },[location])
	

    return(
        <header id="header" class="position-fixed active" style={{width:'100vw'}}>
				<div class='header-body border-top-0 header-body-bottom-border'>
					<div class="header-container container container-xl-custom">
						<div class="header-row">
							<div class="header-column">
								<div class="header-row">
									<div class="header-logo">
										<Link to="/">
											<img alt="MMSGI Logo" className="my-2" height={isScrolled?'55':'48'}  src="/img/MMS/logo/MMS/MMSGI Horizontal.png"/>
										</Link>
									</div>
								</div>
							</div>
							<div class="header-column justify-content-end">
								<div class="header-row">

									<div class={`header-nav header-nav-links header-nav-dropdowns-dark  order-2 order-lg-1`}>
										<div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
											<nav class="collapse">
												<ul class="nav nav-pills" id="mainNav">


                                                    {/* HOME */}
													<li class="dropdown">
                                                        <Link class={`${page==''&&'active '}dropdown-item text-3 dropdown-toggle`} to="/">
                                                            Beranda
                                                        </Link>
													</li>
                                                    {/* ABOUT US */}
                                                    <li class="dropdown">
                                                    <Link class={`${page=='about'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/about">
                                                            Tentang Kami
                                                        </Link>
													</li>

													{/* OUR BUSINESS */}
													<li class="dropdown">
														<a class={`${page=='business'&&'active '} dropdown-item text-3 dropdown-toggle`} >
															Bisnis Kami
														</a>
														<ul class="dropdown-menu">
			                                                <li>
																<Link onClick={props.listenToChange} className="dropdown-item" to="/business/resources">MMS Resources</Link>
															</li>
                                                            <li>
																<Link onClick={props.listenToChange} className="dropdown-item" to="/business/land">MMS Land</Link>
															</li>
                                                            <li>
																<Link onClick={props.listenToChange} className="dropdown-item" to="/business/solution">MMS Solution</Link>
															</li>
														</ul>
													</li>

                                                     {/* ESG */}
													 <li class="dropdown">
                                                    <Link class={`${page=='CSR'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/CSR">
                                                            CSR
                                                        </Link>
													</li>

                                                       {/* NEWS */}
													   <li class="dropdown">
                                                    <Link class={`${(page==='newspage'|| page==='news') &&'active '}dropdown-item text-3 dropdown-toggle`} to="/newspage/1">
                                                            Berita
                                                        </Link>
													</li>

                                                      {/* Career */}
													  <li class="dropdown">
                                                    <Link class={`${page=='career'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/career">
                                                            Karir
                                                        </Link>
													</li>

                                                     {/* Contact */}
													 <li class="dropdown">
                                                    <Link class={`${page=='contact'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/contact">
                                                            Kontak
                                                        </Link>
													</li>
													
												</ul>
											</nav>
                                            
                                        {/* Mobile view dropdown */}
										</div>
										    <button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
											    <i class="fas fa-bars"></i>
										    </button>
									</div>
                                    
									{/* <div class="header-nav-features header-nav-features-light header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
										<div class="header-nav-feature header-nav-features-search d-inline-flex">
											ID
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

    )
}

export default Navbar