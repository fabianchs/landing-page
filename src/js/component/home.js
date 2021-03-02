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
					title1="Horas de descanso"
					description1="Aunque tengas pendientes, el descanso es vital para mantenernos sanos"
					buttonLabel1="Descansar"
					buttonURL1="https://sleep.com"
					imageURL1="https://erickimphotography.com/blog/wp-content/uploads/2017/11/46BA399D-C89D-416B-8647-F8F178594CFA-2000x1325.jpeg"
					title2="Ansiadas vacaciones"
					description2="Las vacaciones saben mejor después de dar el mayor esfuerzo"
					buttonLabel2="Dar mayor esfuerzo"
					buttonURL2="https://vacations.com"
					imageURL2="https://lh3.googleusercontent.com/proxy/n8r2bPuXQXKut2cSO4kYuS2zJ8VFlYDYQZbVx4MXoPwOoh-vTJZJ4ZWH8eObYvv6ak8zntmUJDkBDuygKO6e3eaqf9y3h9XswWAmBzK2rE1l2dG3CZ8-Z2VqRI08-4Fk-RF7_Q8P"
					title3="Learn a new language"
					description3="Skills of communication are essential for new jobs, specially for FS developers"
					buttonLabel3="Learn more"
					buttonURL3="https://languages.com"
					imageURL3="https://www.regions4.org/wp-content/uploads/2020/04/lukas-blazek-mcsdtbwxuzu-unsplash-2000x1325.jpg"
				/>
			</div>
			<div>
				<Footer text="Copyright, todos los derechos reservados &#169;" />
			</div>
		</div>
	);
}
