import React, { useState,useEffect } from 'react';
import Email from './images/email-side.svg';
import Phone from './images/phone-side.svg';
import { Link } from 'react-scroll';

function Header() {
	const [toggle, setToggle] = useState(false)
	function toggleButton() {
		if (toggle) { }
		setToggle(!toggle)

	}
	const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
	return (
		<>

			<section className={scroll?"header fixed":"header "}>
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-md-2 col-sm-2 col-2 align-self-center">
							<div className="ss_logo">
								SOE
								{/* <NavLink exact  to="/"><img className="img-fluid" src={Logo} /></NavLink> */}
							</div>
						</div>
						<div className="col-lg-10 col-md-10 col-sm-10 col-10 align-self-center">
							<div className={toggle ? 'menu active-class ss_menu ss_menu_two' : 'menu ss_menu ss_menu_two'}>
								<ul>
									<li><Link to="Home" spy={true} smooth={true} duration={500} >Home </Link></li>
									<li><Link to="About" spy={true} smooth={true} duration={500} >About Us </Link></li>
									<li><Link to="Team" spy={true} smooth={true} duration={500} >Our Team </Link></li>
									<li><Link to="Customers" spy={true} smooth={true} duration={500} >Our Customers </Link></li>
									<li><Link to="Responsibility" spy={true} smooth={true} duration={500} >Our Responsibility </Link></li>
									<li><Link to="Quality" spy={true} smooth={true} duration={500} >Our Quality</Link></li>
								</ul>
								<div className="head_icon" onClick={toggleButton}>
									<div className="ss_menu_bar">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


			</section>
			<div class="support-side">
				<div class="email-sec-side">
					<a href="mailto:support@demo.in"><span class="phone-support-img">
						<img src={Email} alt="Email Support" />
					</span><span class="phone-support-number"> support@demo.in</span>
					</a>
				</div>
				<div class="phone-sec-side">
					<a href="tel:+911234567890">
						<span class="phone-support-img">
							<img src={Phone} alt="Phone Support" />
						</span>
						<span class="phone-support-number">1234567890</span></a>
				</div>
			</div>
		</>
	);
}

export default Header;