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
        setPage(location.pathname)
        console.log(location.pathname)
    },[location])


    return(
        <header id="header" class="" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
				<div class='header-body border-top-0 header-body-bottom-border'>
					<div class="header-container container">
						<div class="header-row">
							<div class="header-column">
								<div class="header-row">
									<div class="header-logo">
										<Link to="/">
											<img alt="Porto" height={isScrolled?'70':'60'} src="img/MMS/logo/MMS/black-notext.svg"/>
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
                                                        <Link class={`${page=='/'&&'active '}dropdown-item dropdown-toggle`} to="/">
                                                            Home
                                                        </Link>
													</li>
                                                    {/* ABOUT US */}
                                                    <li class="dropdown">
                                                    <Link class={`${page=='/about'&&'active '}dropdown-item dropdown-toggle`} to="/about">
                                                            About Us
                                                        </Link>
													</li>

													{/* OUR BUSINESS */}
													<li class="dropdown">
														<a class="dropdown-item dropdown-toggle" href="#">
															Our Business
														</a>
														<ul class="dropdown-menu">
			                                                <li>
																<a class="dropdown-item" href="#">MMS Resources</a>
															</li>
                                                            <li>
																<a class="dropdown-item" href="#">MMS Land</a>
															</li>
                                                            <li>
																<a class="dropdown-item" href="#">MMS Initiatives</a>
															</li>
														</ul>
													</li>

                                                     {/* ESG */}
                                                     <li class="dropdown">
														<a class="dropdown-item dropdown-toggle" href="index.html">
															ESG
														</a>
													</li>

                                                       {/* NEWS */}
                                                       <li class="dropdown">
														<a class="dropdown-item dropdown-toggle" href="index.html">
															News
														</a>
													</li>

                                                      {/* Career */}
                                                      <li class="dropdown">
														<a class="dropdown-item dropdown-toggle" href="index.html">
															Career
														</a>
													</li>

                                                     {/* Contact */}
                                                     <li class="dropdown">
														<a class="dropdown-item dropdown-toggle" href="index.html">
															Contact
														</a>
													</li>
													
												</ul>
											</nav>
                                            
                                        {/* Mobile view dropdown */}
										</div>
										    <button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
											    <i class="fas fa-bars"></i>
										    </button>
									</div>
                                    
									<div class="header-nav-features header-nav-features-light header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
										<div class="header-nav-feature header-nav-features-search d-inline-flex">
											ID
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

    )
}

export default Navbar