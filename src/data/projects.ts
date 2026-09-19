import audit1Img from '../assets/images/audit_1-portrait.png';
import audit2Img from '../assets/images/audit_2-portrait.png';
import audit3Img from '../assets/images/audit_3-portrait.png';
import audit4Img from '../assets/images/audit_4-portrait.png';
import axelormcp1Img from '../assets/images/axelor_mcp1.png';
import axelormcp2Img from '../assets/images/axelor_mcp2.png';
import blacksygnus1Img from '../assets/images/blacksygnus_1.png';
import blacksygnus2Img from '../assets/images/blacksygnus_2.png';
import effitech1Img from '../assets/images/effitech1.png';
import effitech2Img from '../assets/images/effitech2.png';
import effitech3Img from '../assets/images/effitech3.png';
import effitechmobile1Img from '../assets/images/effitechmobile1.png';
import effitechmobile2Img from '../assets/images/effitechmobile2.png';
import effitechmobile3Img from '../assets/images/effitechmobile3.png';
import effitechmobile4Img from '../assets/images/effitechmobile4.png';
import et2i1Img from '../assets/images/et2i_1.png';
import et2i2Img from '../assets/images/et2i_2.png';
import ficheqs1Img from '../assets/images/ficheqs1.png';
import ficheqs2Img from '../assets/images/ficheqs2.png';
import ficheqs3Img from '../assets/images/ficheqs3.png';
import ficheqs4Img from '../assets/images/ficheqs4.png';
import meetlog1Img from '../assets/images/meetlog1.png';
import meetlog2Img from '../assets/images/meetlog2.png';
import meetlog3Img from '../assets/images/meetlog3.png';
import meetlog4Img from '../assets/images/meetlog4.png';
import mocklifyImg from '../assets/images/mocklify.png';
import mocklify2Img from '../assets/images/mocklify2.png';

export type ProjectStatus = {
	label: string;
	type: 'opensource' | 'live' | 'wip';
};

export type ScreenshotRow = {
	variant: 'desktop' | 'mobile';
	screenshots: { src: string; alt: string }[];
};

export type Project = {
	id: string;
	name: string;
	statuses: ProjectStatus[];
	description: string;
	tags: string[];
	link?: { href: string; label: string };
	screenshotRows: ScreenshotRow[];
};

export const projects: Project[] = [
	{
		id: 'axelor-mcp',
		name: 'Axelor MCP',
		statuses: [{ label: 'Open source', type: 'opensource' }],
		description:
			'Local MCP server that lets Claude Desktop query an Axelor instance directly search partners, manage sales orders, invoices, and timesheets through natural language.',
		tags: ['MCP server', 'Claude Desktop', 'ERP'],
		link: { href: 'https://github.com/JulienLach/axelor-mcp', label: 'GitHub →' },
		screenshotRows: [
			{
				variant: 'desktop',
				screenshots: [
					{ src: axelormcp1Img, alt: 'Axelor MCP screenshot 1' },
					{ src: axelormcp2Img, alt: 'Axelor MCP screenshot 2' },
				],
			},
		],
	},
	{
		id: 'blacksygnus',
		name: 'BlackSygnus',
		statuses: [{ label: 'Live', type: 'live' }],
		description:
			'SaaS platform to centralize risk analyses, track corrective action plans, and generate DUERP and FMEA reports turning static documents into operational management. I also built an MCP server connecting its risk data to Claude Code, enabling AI-driven analysis and recommendations.',
		tags: ['Risk assessment', 'SaaS', 'MCP server'],
		link: { href: 'https://blacksygnus.com', label: 'View →' },
		screenshotRows: [
			{
				variant: 'desktop',
				screenshots: [
					{ src: blacksygnus1Img, alt: 'BlackSygnus landing' },
					{ src: blacksygnus2Img, alt: 'BlackSygnus dashboard' },
				],
			},
		],
	},
	{
		id: 'audit',
		name: 'Audit',
		statuses: [{ label: 'Live', type: 'live' }],
		description:
			'Mobile-first PWA for digitizing safety forms used in industrial contexts. Fill, validate, and send forms as PDF by email fully offline-capable via service worker.',
		tags: ['React', 'Node.js', 'PostgreSQL', 'PWA'],
		screenshotRows: [
			{
				variant: 'mobile',
				screenshots: [
					{ src: audit1Img, alt: 'Audit screenshot 1' },
					{ src: audit2Img, alt: 'Audit screenshot 2' },
					{ src: audit3Img, alt: 'Audit screenshot 3' },
					{ src: audit4Img, alt: 'Audit screenshot 4' },
				],
			},
		],
	},
	{
		id: 'et2i',
		name: 'ET2I',
		statuses: [{ label: 'Live', type: 'live' }],
		description:
			"Website redesign for an industrial services company, with a customer portal and an ERP-connected quote configurator to streamline project requests. Tablet-responsive so sales reps can submit project requests directly on-site at the client's location.",
		tags: ['Web', 'ERP integration', 'Customer portal'],
		link: { href: 'https://et2i.net/', label: 'View →' },
		screenshotRows: [
			{
				variant: 'desktop',
				screenshots: [
					{ src: et2i1Img, alt: 'et2i website' },
					{ src: et2i2Img, alt: 'et2i quote configurator' },
				],
			},
		],
	},
	{
		id: 'mocklify',
		name: 'Mocklify',
		statuses: [{ label: 'Live', type: 'live' }],
		description:
			'Turn screenshots into simple mockups. Add a macOS window frame, background, and shadow — right in your browser. No Photoshop, no account, no upload.',
		tags: ['Browser tool', '100% private', 'PNG export'],
		link: { href: 'https://mocklify.ovh', label: 'View →' },
		screenshotRows: [
			{
				variant: 'desktop',
				screenshots: [
					{ src: mocklifyImg, alt: 'Mocklify screenshot' },
					{ src: mocklify2Img, alt: 'Mocklify screenshot 2' },
				],
			},
		],
	},
	{
		id: 'meetlog',
		name: 'MeetLog',
		statuses: [
			{ label: 'Side project', type: 'wip' },
			{ label: 'Work in progress', type: 'wip' },
		],
		description:
			'Record, transcribe, and summarize sprint meetings and stand-ups in real-time with AI. Whisper.cpp for offline transcription, Ollama for local LLM summaries.',
		tags: ['React Native', 'Node.js', 'Whisper.cpp', 'Ollama'],
		link: { href: 'https://github.com/JulienLach/MeetLog', label: 'GitHub →' },
		screenshotRows: [
			{
				variant: 'mobile',
				screenshots: [
					{ src: meetlog2Img, alt: 'MeetLog screenshot 2' },
					{ src: meetlog3Img, alt: 'MeetLog screenshot 3' },
					{ src: meetlog1Img, alt: 'MeetLog screenshot 1' },
					{ src: meetlog4Img, alt: 'MeetLog screenshot 4' },
				],
			},
		],
	},
	{
		id: 'ficheqs',
		name: 'FicheQS',
		statuses: [{ label: 'Side project', type: 'wip' }],
		description:
			'Mobile-first PWA for digitizing quality and safety forms used in the real estate industry. Fill, validate, and send forms as PDF by email on the go.',
		tags: ['React', 'Node.js', 'PostgreSQL', 'PWA'],
		screenshotRows: [
			{
				variant: 'mobile',
				screenshots: [
					{ src: ficheqs1Img, alt: 'FicheQS screenshot 1' },
					{ src: ficheqs4Img, alt: 'FicheQS screenshot 4' },
					{ src: ficheqs3Img, alt: 'FicheQS screenshot 3' },
					{ src: ficheqs2Img, alt: 'FicheQS screenshot 2' },
				],
			},
		],
	},
	{
		id: 'effitech',
		name: 'EffiTech',
		statuses: [{ label: 'Side project', type: 'wip' }],
		description:
			'Field service management PWA for scheduling technician interventions, managing clients and employees, and generating signed reports with technical documents.',
		tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
		link: { href: 'https://github.com/JulienLach/EffiTech', label: 'GitHub →' },
		screenshotRows: [
			{
				variant: 'desktop',
				screenshots: [
					{ src: effitech1Img, alt: 'EffiTech screenshot 1' },
					{ src: effitech2Img, alt: 'EffiTech screenshot 2' },
					{ src: effitech3Img, alt: 'EffiTech screenshot 3' },
				],
			},
			{
				variant: 'mobile',
				screenshots: [
					{ src: effitechmobile4Img, alt: 'EffiTech mobile screenshot 4' },
					{ src: effitechmobile1Img, alt: 'EffiTech mobile screenshot 1' },
					{ src: effitechmobile3Img, alt: 'EffiTech mobile screenshot 3' },
					{ src: effitechmobile2Img, alt: 'EffiTech mobile screenshot 2' },
				],
			},
		],
	},
];
