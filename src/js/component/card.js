import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div>
			<div className="card col-3">
				<img src={props.imageURL} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title"> {props.title} </h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonURL} className="btn btn-primary">
						{props.buttonLabel}
					</a>
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
	imageURL: PropTypes.string
};
