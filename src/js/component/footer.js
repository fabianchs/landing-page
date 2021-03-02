import React from "react";
import PropTypes from "prop-types";

export function Footer(props) {
	return (
		<div>
			<div className="row mt-4">
				<div className="col-12 bg-info d-flex justify-content-center">
					<h3 className="text-light m-3">{props.text}</h3>
				</div>
			</div>
		</div>
	);
}
Footer.propTypes = {
	text: PropTypes.string
};
