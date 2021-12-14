import React, { useState } from 'react';
import AboutImg from './images/Coze-home6-8.jpg';
import AboutImgSec from './images/h6-1-275x300.png';

function  About() {

	return (
		<>
			<section id="About" className="about padding-140">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="about-img">

								<div className="about-img-m">
									<img src={AboutImg} />
								</div>
								<div className="about-img-s">
									<img src={AboutImgSec} />
								</div>
							</div>

						</div>
						<div className="col-sm-6">
							<div className="about-content">
							<h3 className="heading-title">	About Us </h3>
								<p>
									SOE is a bunch of honest people who aim to make
									the Fashion Industry HONEST.HONEST to people
									who make our clothes, to people who buy our clothes
									and to our mother nature.This is at the heart of everything we do.
								</p>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;