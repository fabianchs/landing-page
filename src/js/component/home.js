import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
//create your first component
export function Home() {
	return (
		<div>
			<div>
				<Navbar
					name="Wow! Aprendí a usar props"
					second="Hola!"
					third="Aprender"
					fourth="Practicar"
					fifth="Seguir"
				/>
			</div>
			<div>
				<Jumbotron
					title="Wow! Aprendí a usar props"
					description="Hola!"
					smalldescription="Aprender"
					buttonURL="Practicar.com"
					buttonLabel="Seguir"
				/>
			</div>
		</div>
	);
}
