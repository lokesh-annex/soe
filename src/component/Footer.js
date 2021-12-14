import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Footer() {

	return (
		<>
			<footer className="footer-area  padding-60">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="footer-logo text-center mb-20">
								<a href="">
									SOE</a>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="copyright text-center mb-20">
								<p>Copyright © 2021 All rights reserved | Made with
									<i className="fa fa-heart"></i> by
									<a target="_blank" href="https://annexlogics.com/"> Annexlogics</a>.</p>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="socials-style-1">
								<a href="#"><i class="fab fa-facebook-f"></i></a>
								<a href="#"><i class="fab fa-twitter"></i></a>
								<a href="#"><i class="fab fa-google-plus-g"></i></a>
							</div>

						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;