import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
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
					title="This is a landing page"
					description="A project that I did on 4Geeks Academy"
					smalldescription="Learning React"
					buttonURL="https://github.com/fabianchs/landing-page"
					buttonLabel="Ir al repositorio"
				/>
			</div>
			<div>
				<Card
					title="Vamos por un café"
					description="El café ayuda a mantenerte con energía en momentos de trabajo"
					buttonLabel="Tomar café"
					buttonURL="https://coffee.com"
					imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
				/>
			</div>
		</div>
	);
}
