import React,{useState,useEffect} from "react";
import $ from 'jquery'
import { Link,useLocation } from "react-router-dom";
import {Modal} from 'react-bootstrap'
import {useLanguage} from "../Pages/LanguageContext"

function Navbar(props){
    const [isScrolled,setIsScrolled]=useState(false)
    const location=useLocation()
    const [page,setPage]=useState()
	const [tabOpen,setTabOpen]=useState(false)
	const {isIndo,setWebLanguage} = useLanguage()

	function HandleLangChange(lang){
		setWebLanguage(lang)


	}
	function openTabs(e){
		e.preventDefault()
		if (window.innerWidth>992) return ''
		else {
			tabOpen ? setTabOpen(false) : setTabOpen(true)
		}
	}

  	const [lgShow, setLgShow] = useState(false);

	  function handleOpen(){
		  setLgShow(true)
	  }

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
										{page==='CSR' && <img alt="MMSGI Logo" className="mx-3" height={isScrolled?'0':'48'}  src="/img/MMS/logo/MMS/LAM color.png"/>}

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
                                                            {isIndo ? 'Beranda' :'Home'}
                                                        </Link>
													</li>
                                                    {/* ABOUT US */}
                                                    <li class="dropdown">
                                                    <Link class={`${page=='about'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/about">
                                                            {isIndo ? 'Tentang Kami' : 'About Us'}
                                                        </Link>
													</li>

													{/* OUR BUSINESS */}
													<li class={`dropdown dropdown-reverse ${tabOpen && 'open'}`}>
														<a onClick={(e)=>openTabs(e)} class={`${page=='business'&&'active '} dropdown-item text-3 dropdown-toggle`} >
															{isIndo ? 'Bisnis Kami' : 'Our Business'}
															<i class="fas fa-chevron-down"></i>
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
                                                            {isIndo ?'Berita' :'News'}
                                                        </Link>
													</li>

                                                      {/* Career */}
													  <li class="dropdown">
                                                    <Link class={`${page=='career'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/career">
                                                            {isIndo ? 'Karir': 'Career'}
                                                        </Link>
													</li>

                                                     {/* Contact */}
													 <li class="dropdown">
                                                    <Link class={`${page=='contact'&&'active '}dropdown-item text-3 dropdown-toggle`} to="/contact">
                                                            {isIndo ? 'Kontak':'Contact'}
                                                        </Link>
													</li>
													
													<li class="dropdow">
                                                    <a class="text-3">
                                                            <span onClick={()=>setWebLanguage(true)}className={`${isIndo && 'text-primary'} pe-1`}>ID </span>  | 
															<span onClick={()=>setWebLanguage(false)}className={`${!isIndo && 'text-primary'} ps-1`}>EN </span>
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



				<a class="g-20" style={{cursor:'pointer'}} onClick={handleOpen}>
					<img alt="MMSGI Logo" className="ms-1 my-float"   src="/img/MMS/logo/MMS/logo-g20.png"/>
				</a>
			
				<Modal
					size="lg"
					show={lgShow}
					onHide={() => setLgShow(false)}
					aria-labelledby="example-modal-sizes-title-lg"
				>
					<Modal.Header closeButton>
					{/* <Modal.Title id="example-modal-sizes-title-lg">
						<h3 className="text-4 mb-0 font-weight-semibold text-primary">MMSGI Becoming G20 Partner</h3>
					</Modal.Title> */}
					</Modal.Header>
					<Modal.Body>
						<div className="row pb-4 pb-lg-0">

						<div className="col-md-4 px-lg-4 ">
							<img className="img-fluid d-none d-lg-block" src='/img/MMS/logo/MMS/logo-g20.png' style={{maxHeight:'300px'}}/>
						</div>
						<div className="col-md-8 pe-5">
							<div className="d-flex align-items-center h-100">
								<div>
							<h1 className="text-lg-7 text-6 mb-0 font-weight-bold text-uppercase" style={{lineHeight:'35px'}}>MMSGI in B20 Indonesia 2022</h1>
							<h1 className="text-4 mb-3 font-weight-bold text-primary" style={{lineHeight:'20px'}}>Advancing Innovative, Inclusive, and Collaborative Growth </h1>
							<p className="text-4">{isIndo? `MMS Group Indonesia merupakan member dari Task Force Energy, Sustainability and Climate pada B20 Forum yang merupakan salah satu dialogue group dalam rangkaian kegiatan Presidensi G20 Indonesia 2022.` :`MMS Group Indonesia is a member of the Energy, Sustainability and Climate Task Force at the B20 Forum, which is one of the dialogue groups in the series of activities for the 2022 G20 Indonesia Presidency.`}</p>

							<Link onClick={()=> setLgShow(false)} className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-2" to="/news/133229f53ngk47">{isIndo?'Lanjut baca..':'Read more'}
							<i class="fas fa-arrow-right ms-2"></i> </Link>

								</div>

							</div>

						</div>
						</div>
									
						
					</Modal.Body>
				</Modal>
				
				

			</header>
    )
}

export default Navbar;