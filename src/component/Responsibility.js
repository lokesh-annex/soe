import React, { useState } from 'react';
import ResponsibitityImgOne from './images/e-s-1.jpg';
import ResponsibitityImgTwo from './images/e-s-2.jpg';

function Responsibitity() {

	return (
		<>
			<section id="Responsibility" className="responsibitity padding-b-140">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-xl-4  col-sm-6 padding-0">
							<div className="responsibitity-box first">
								<img src={ResponsibitityImgOne} />
							</div>
						</div>
						<div className="col-lg-6 col-xl-4  col-sm-6 padding-0">
							<div className="responsibitity-box second white-color">
								<h3 className="heading-title white-color">OUR RESPONSIBILITY- OUR MOTHER NATURE</h3>
								<p>SOE is born out of necessity and with responsibility to protect our planet and its inhabitants.
									Having the lowest possible impact on the environment underpins every decision made. It’s simply a given.
									Starting a sustainable fashion label that puts the planet before profit wasn’t a hard decision for us.
									It was our heartfelt responsibility. Unlike the 2,700 litres of water it takes to produce one cotton shirt.
									We founded SOE because we believe that if you wait for change, it won’t come. We need to make it happen.</p>
							</div>
						</div>
						<div className="col-lg-12 col-xl-4  col-sm-12 padding-0 ">
							<div className="responsibitity-box first">
								<img src={ResponsibitityImgTwo} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Responsibitity;