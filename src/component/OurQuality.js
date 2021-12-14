import React, { useState } from 'react';
import BannerImg from './images/project-1.jpg';


function Qualit() {

	return (
		<>
			<section id="Quality" className="quality padding-140">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-xl-6  col-sm-12">
							<div className="quality-left-sec">
								<img src={BannerImg} />
							</div>
						</div>
						<div className="col-lg-12 col-xl-6  col-sm-12">
						<div className="quality-container">
							<div className="quality-main">
								<h3 className="heading-title">Our Quality
								</h3>
								<p>
									At SOE, we make clothes that you’d love to wear for years. The type of one where you wouldn’t 
									want that lovely piece to retire and it won’t itself. Also, we’re not big on trends,
									 that means our products will never go out of fashion. They will be in your treasure forever.
								</p>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Qualit;