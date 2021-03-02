import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="mt-4 w-75 mx-auto">
			<div className="row ">
				<div className="col-3">
					<div className="card">
						<img
							src={props.imageURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body ">
							<h5 className="card-title"> {props.title} </h5>
							<p className="card-text">{props.description}</p>
							<a
								href={props.buttonURL}
								className="btn btn-primary">
								{props.buttonLabel}
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img
							src={props.imageURL1}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body ">
							<h5 className="card-title"> {props.title1} </h5>
							<p className="card-text">{props.description1}</p>
							<a
								href={props.buttonURL1}
								className="btn btn-primary">
								{props.buttonLabel1}
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img
							src={props.imageURL2}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body ">
							<h5 className="card-title"> {props.title2} </h5>
							<p className="card-text">{props.description2}</p>
							<a
								href={props.buttonURL2}
								className="btn btn-primary">
								{props.buttonLabel2}
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img
							src={props.imageURL3}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body ">
							<h5 className="card-title"> {props.title3} </h5>
							<p className="card-text">{props.description3}</p>
							<a
								href={props.buttonURL3}
								className="btn btn-primary">
								{props.buttonLabel3}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imageURL: PropTypes.string,
	title1: PropTypes.string,
	description1: PropTypes.string,
	buttonLabel1: PropTypes.string,
	buttonURL1: PropTypes.string,
	imageURL1: PropTypes.string,
	title2: PropTypes.string,
	description2: PropTypes.string,
	buttonLabel2: PropTypes.string,
	buttonURL2: PropTypes.string,
	imageURL2: PropTypes.string,
	title3: PropTypes.string,
	description3: PropTypes.string,
	buttonLabel3: PropTypes.string,
	buttonURL3: PropTypes.string,
	imageURL3: PropTypes.string
};
