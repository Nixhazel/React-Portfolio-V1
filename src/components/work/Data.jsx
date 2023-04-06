import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.png'
import Work3 from '../../assets/work3.png'
import Work4 from '../../assets/work4.png'
import Work5 from '../../assets/work5.png'
import Work6 from '../../assets/work6.png'
import Work7 from '../../assets/work7.png'
import Work8 from '../../assets/work8.png'

export const projectsData = [
	{
		id: 1,
		image: Work1,
		title: "Simon Game",
		category: "Front-End",
		description: (
			<p>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</p>
		),
		link: "https://nixhazel-simon-game.netlify.app/",
	},
	{
		id: 2,
		image: Work2,
		title: "Star-Wars Characters API",
		category: "Front-End",
		description: (
			<div>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</div>
		),
		link: "https://olokor-starwars-api-challenge.netlify.app/",
	},
	{
		id: 3,
		image: Work3,
		title: "Todo List App",
		category: "Front-End",
		description: (
			<div>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</div>
		),
		link: "https://olokor-todo-app.netlify.app/",
	},
	{
		id: 4,
		image: Work4,
		title: "Doctor Apontment Booking App",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-mongodb'></i>
				<i class='uil uil-react'></i>
				<i class='bx bxl-nodejs'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "#portfolio",
	},
	{
		id: 5,
		image: Work5,
		title: "E-Move",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-mongodb'></i>
				<i class='uil uil-react'></i>
				<i class='bx bxl-nodejs'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "https://e-move.onrender.com/",
	},
	{
		id: 6,
		image: Work6,
		title: "Portfolio V0.2",
		category: "Front-End",
		description: (
			<div>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</div>
		),
		link: "https://nixhazel.github.io/Personal-Profile/",
	},
	{
		id: 7,
		image: Work7,
		title: "Library App",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-mongodb'></i>
				<i class='uil uil-react'></i>
				<i class='bx bxl-nodejs'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "https://olokor-library-app.onrender.com",
	},
	{
		id: 8,
		image: Work8,
		title: "Todo List App ExpressJS Ejs",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-nodejs'></i>
			</div>
		),
		link: "https://todo-app-express-e34j.onrender.com",
	},
];

export const projectsNav = [
	{
		name: "all",
	},
	{
		name: "Front-End",
	},
	{
		name: "Full-stack",
	}
];