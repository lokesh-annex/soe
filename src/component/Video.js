import React, { useState } from 'react';
import Video1 from "./video/Factory_Wide_pmvovx.mp4";

function Video() {

	return (
		<>
			<section className="video padding-b-140">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="video-main">
								<video className="factory-video" autoPlay loop muted >
									<source src={Video1} type='video/mp4' />
									<source src={Video1} type="video/ogg" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Video;