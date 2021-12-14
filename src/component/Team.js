import React, { useState } from 'react';
import TeamD from './images/h6-4.png';

function Team() {

	return (
		<>
			<section id="Team" className="team">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="padding-140">
						<div className="team-inner">
							<h3 className="heading-title">
								OUR HEART-OUR TEAM
							</h3>
							<p>Miserable wages, endless working hours, Unacceptable health and safety conditions, Child labour are enormous problems in the fashion Industry. We have found a solution to these problems and made a ethical team of workers who we closely work with and who put in their heart and soul to deliver you the best piece of garment.
							</p>
						</div>
						</div>
						<div className="team-middle-sec">
							<img src={TeamD} />
						</div>
					</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Team;