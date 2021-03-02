import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";
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
					imageURL="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F30%2FGettyImages-1032751904-2000.jpg"
				/>
			</div>
			<div>
				<Footer text="Copyright, todos los derechos reservados " />
			</div>
		</div>
	);
}
