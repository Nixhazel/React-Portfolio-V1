// Import original work images for legacy projects
import Work4 from '../../assets/work4.png';
import RaizMobile from '../../assets/raizmobile.png';
import BondApp from '../../assets/bondapp.png';
import OdsMobile from '../../assets/odsmobile.png';
import PlearntyApp from '../../assets/plentymobile.png';
import FloatMobile from '../../assets/floatmobile.png';
import EraResponder from '../../assets/respondermobile.jpeg';
import ODSWEB from '../../assets/odsweb.png';
import RaizB2B from '../../assets/raizb2b.png';
import EasyVille from '../../assets/eastvilll.png';
import ReadinessAI from '../../assets/rai.png';

// Placeholder images - replace with actual project screenshots
const PlaceholderImage =
	'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Project+Screenshot';

export const projectsData = [
	// ============ MOBILE PROJECTS ============
	{
		id: 1,
		image: RaizMobile,
		title: 'Raiz App',
		category: 'Mobile',
		description:
			'Fintech super app with wallets, cards, FX, P2P transfers, and loyalty rewards.',
		techStack: ['React Native', 'TypeScript', 'Expo', 'Redux'],
		githubLink: '',
		liveLink: 'https://onelink.to/ratpbt'
	},
	{
		id: 2,
		image: BondApp,
		title: 'Bond Loyalty App',
		category: 'Mobile',
		description:
			'Loyalty program platform for businesses to manage customer reward systems.',
		techStack: ['React Native', 'TypeScript', 'Expo'],
		githubLink: '',
		liveLink: 'https://apps.apple.com/us/app/bond-loyalty/id6446080057'
	},
	{
		id: 3,
		image: OdsMobile,
		title: 'ODS Mobile',
		category: 'Mobile',
		description:
			'E-commerce app with integrated wallet, loyalty points, and checkout system.',
		techStack: ['React Native', 'TypeScript', 'Expo'],
		githubLink: '',
		liveLink:
			'https://play.google.com/store/apps/details?id=com.rxhealth.ods&pcampaignid=web_share'
	},
	{
		id: 4,
		image: PlearntyApp,
		title: 'Plearnty App',
		category: 'Mobile',
		description:
			'Plearnty is a gamified quiz app where students compete, learn, and get rewarded for their performance.',
		techStack: ['React Native', 'Expo', 'TypeScript'],
		githubLink: '',
		liveLink:
			'https://play.google.com/store/apps/details?id=com.edubanc.plearntyapp&pcampaignid=web_share'
	},
	{
		id: 5,
		image: FloatMobile,
		title: 'Float Transfer',
		category: 'Mobile',
		description:
			'Global remittance app with low-latency transfers and real-time tracking.',
		techStack: ['React Native', 'TypeScript', 'Expo'],
		githubLink: '',
		liveLink: 'https://apps.apple.com/us/app/float-transfer/id6752876316'
	},
	{
		id: 6,
		image: EraResponder,
		title: 'Era Responder',
		category: 'Mobile',
		description:
			'Emergency response app for first responders with real-time GPS and status updates.',
		techStack: ['React Native', 'TypeScript', 'Expo', 'Google Maps'],
		githubLink: '',
		liveLink: 'https://apps.apple.com/us/app/era-responder/id1584795374'
	},

	// ============ WEB PROJECTS ============
	{
		id: 7,
		image: PlaceholderImage,
		title: 'Era Dispatch',
		category: 'Web',
		description:
			'Real-time emergency dispatch dashboard for coordinating responders and incidents.',
		techStack: ['React', 'TypeScript', 'WebSocket', 'Google Maps API'],
		githubLink: '',
		liveLink: ''
	},
	{
		id: 8,
		image: ODSWEB,
		title: 'OneDrug Store',
		category: 'Web',
		description:
			'Pharmaceutical e-commerce platform with inventory and payment processing.',
		techStack: ['React', 'TypeScript', 'Tailwind CSS'],
		githubLink: '',
		liveLink: 'https://onedrugstore.ng/'
	},
	{
		id: 9,
		image: RaizB2B,
		title: 'Raiz Business',
		category: 'Web',
		description:
			'Business banking portal for SMEs with bulk payments and financial insights.',
		techStack: ['React', 'TypeScript', 'REST API', 'Chart.js'],
		githubLink: '',
		liveLink: 'https://business.raiz.app/login'
	},
	// Full-stack projects (Web frontend)
	{
		id: 10,
		image: Work4,
		title: 'Doctor Appointment App',
		category: 'Web',
		description:
			'Medical booking web app with appointment scheduling, user dashboard, and payments.',
		techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
		githubLink: '',
		liveLink: 'https://teco-medic.onrender.com'
	},
	{
		id: 11,
		image: ReadinessAI,
		title: 'Readiness AI',
		category: 'Web',
		description:
			'AI-powered operational readiness dashboard with analytics and real-time monitoring.',
		techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
		githubLink: '',
		liveLink: 'https://www.readinessai.io/'
	},
	{
		id: 12,
		image: EasyVille,
		title: 'EasyVill Estates',
		category: 'Web',
		description:
			'Real estate platform with property listings, search filters, and user authentication.',
		techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
		githubLink: '',
		liveLink:
			'https://fupre-housing-platform-git-dev-emmanuels-projects-f9a07aef.vercel.app/?_vercel_share=PBxDrOJsxMdIF7Cuhx1H3w5B9Bn047hc'
	},

	// ============ BACKEND / FULL-STACK PROJECTS ============
	{
		id: 13,
		image: Work4,
		title: 'Doctor Appointment App',
		category: 'Backend',
		description:
			'Full-stack medical booking system with REST APIs, auth, and database management.',
		techStack: ['Node.js', 'MongoDB', 'Express', 'JWT Auth'],
		githubLink: '',
		liveLink: 'https://teco-medic.onrender.com'
	},
	{
		id: 14,
		image: ReadinessAI,
		title: 'Readiness AI Backend',
		category: 'Backend',
		description:
			'Python-powered API services with PostgreSQL for AI-driven analytics dashboards.',
		techStack: ['Python', 'PostgreSQL', 'REST API', 'FastAPI'],
		githubLink: '',
		liveLink: 'https://www.readinessai.io/'
	},
	{
		id: 15,
		image: EasyVille,
		title: 'EasyVill Estates API',
		category: 'Backend',
		description:
			'Node.js backend with MongoDB for real estate listings, auth, and transactions.',
		techStack: ['Node.js', 'MongoDB', 'Express', 'JWT Auth'],
		githubLink: '',
		liveLink:
			'https://fupre-housing-platform-git-dev-emmanuels-projects-f9a07aef.vercel.app/?_vercel_share=PBxDrOJsxMdIF7Cuhx1H3w5B9Bn047hc'
	}
];

export const projectsNav = [
	{
		name: 'all'
	},
	{
		name: 'Mobile'
	},
	{
		name: 'Web'
	},
	{
		name: 'Backend'
	}
];
