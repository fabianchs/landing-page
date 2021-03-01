import React from "react";
import PropTypes from "prop-types";

export function Navbar(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-info">
				<a className="navbar-brand text-light" href="#">
					{props.name}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav float-right">
						<li className="nav-item active">
							<a className="nav-link text-muted " href="#">
								{props.second}{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.third}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.fourth}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.fifth}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
Navbar.propTypes = {
	name: PropTypes.string,
	second: PropTypes.string,
	third: PropTypes.string,
	fourth: PropTypes.string,
	fifth: PropTypes.string
};
