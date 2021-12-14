import React, { useState } from 'react';
import Customers from './images/cus.png';

function Customer() {

	return (
		<>
			<section id="Customers" className="our-customers padding-140">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-xl-6  col-sm-12">
							<div className="our-customers-sec">
								<div className="customers-img">
									<img src={Customers} />
								</div>
								<div class="decoration show-lg-up"></div>
								<div class="title-deco">
									<h3><span>OUR CUSTOMERS</span></h3>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-xl-6  col-sm-12">
							<div className="our-customers-inner">
								<p>
									We felt the fast fashion pendulum was swinging too far and yearned for
									products that are designed to last, not trend-driven, and inspired by natural design and
									materials. So here we bring the best quality product at an affordable price which you would
									want to treasure in your closet for your life and we promise that it will be so in trend
									that it will never go out of trend.

								</p>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		</>
	);
}

export default Customer;