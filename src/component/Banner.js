import React, { useState } from 'react';
import BannerImg from './images/banner.jpg';
import BannerImg2 from './images/banner-1.jpg';

function Banner() {

	return (
		<>
			<section id="Home"  className="banner">
				<div className="container">
					<div className="row">
					<div className="col-lg-6 col-sm-12">
						<div className="banner-heading">
						<div className="main-heading">
							<span>SOE</span> is a bunch of honest people who aim to make the Fashion Industry HONEST.
						</div>
						</div>
						
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="banner-img">
							<img src={BannerImg2} />
						</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;