import audit1Img from "../assets/images/audit_1-portrait.webp";
import audit2Img from "../assets/images/audit_2-portrait.webp";
import audit3Img from "../assets/images/audit_3-portrait.webp";
import audit4Img from "../assets/images/audit_4-portrait.webp";
import axelormcp1Img from "../assets/images/axelor_mcp1.webp";
import axelormcp2Img from "../assets/images/axelor_mcp2.webp";
import blacksygnus1Img from "../assets/images/blacksygnus_1.jpg";
import blacksygnus2Img from "../assets/images/blacksygnus_2.jpg";
import effitech1Img from "../assets/images/effitech1.webp";
import effitech2Img from "../assets/images/effitech2.webp";
import effitech3Img from "../assets/images/effitech3.webp";
import effitechmobile1Img from "../assets/images/effitechmobile1.webp";
import effitechmobile2Img from "../assets/images/effitechmobile2.webp";
import effitechmobile3Img from "../assets/images/effitechmobile3.webp";
import effitechmobile4Img from "../assets/images/effitechmobile4.webp";
import et2i1Img from "../assets/images/et2i_1.webp";
import et2i2Img from "../assets/images/et2i_2.webp";
import ficheqs1Img from "../assets/images/ficheqs1.webp";
import ficheqs2Img from "../assets/images/ficheqs2.webp";
import ficheqs3Img from "../assets/images/ficheqs3.webp";
import ficheqs4Img from "../assets/images/ficheqs4.webp";

export type ProjectStatus = {
    label: string;
    type: "opensource" | "live" | "wip";
};

export type ScreenshotRow = {
    variant: "desktop" | "mobile";
    screenshots: { src: string; alt: string; width: number; height: number }[];
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
        id: "axelor-mcp",
        name: "Axelor MCP",
        statuses: [{ label: "Open source", type: "opensource" }],
        description:
            "Local MCP server that lets Claude Desktop query an Axelor instance directly search partners, manage sales orders, invoices, and timesheets through natural language.",
        tags: ["MCP server", "Claude Desktop", "ERP"],
        link: { href: "https://github.com/JulienLach/axelor-mcp", label: "GitHub" },
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: axelormcp1Img,
                        alt: "Claude Desktop chat creating a new CRM lead in Axelor from a natural language request",
                        width: 1200,
                        height: 708,
                    },
                    {
                        src: axelormcp2Img,
                        alt: "Claude Desktop MCP settings showing the local Axelor MCP server connected and running",
                        width: 1200,
                        height: 704,
                    },
                ],
            },
        ],
    },
    {
        id: "blacksygnus",
        name: "BlackSygnus",
        statuses: [{ label: "Live", type: "live" }],
        description:
            "SaaS platform to centralize risk analyses, track corrective action plans, and generate DUERP and FMEA reports turning static documents into operational management. I also built an MCP server connecting its risk data to Claude Code, enabling AI-driven analysis and recommendations.",
        tags: ["Risk assessment", "SaaS", "MCP server"],
        link: { href: "https://blacksygnus.com", label: "View" },
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: blacksygnus1Img,
                        alt: "BlackSygnus landing page pitching centralized risk analysis and action tracking",
                        width: 1200,
                        height: 645,
                    },
                    {
                        src: blacksygnus2Img,
                        alt: "BlackSygnus dashboard showing risk matrices, KPIs and breakdowns by category and department",
                        width: 1200,
                        height: 650,
                    },
                ],
            },
        ],
    },
    {
        id: "audit",
        name: "Audit",
        statuses: [{ label: "Live", type: "live" }],
        description:
            "Mobile-first PWA for digitizing safety forms used in industrial contexts. Fill, validate, and send forms as PDF by email fully offline-capable via service worker.",
        tags: ["React", "Node.js", "PostgreSQL", "PWA"],
        screenshotRows: [
            {
                variant: "mobile",
                screenshots: [
                    {
                        src: audit1Img,
                        alt: "Audit mobile app home screen with buttons to create a safety or vehicle audit",
                        width: 700,
                        height: 1307,
                    },
                    {
                        src: audit2Img,
                        alt: "Audit mobile app checklist form with Bon / Insuffisant / Non concerné ratings",
                        width: 700,
                        height: 1307,
                    },
                    {
                        src: audit3Img,
                        alt: "Audit mobile app list of validated audits",
                        width: 700,
                        height: 1307,
                    },
                    {
                        src: audit4Img,
                        alt: "Audit mobile app validated report with a button to send it by email",
                        width: 700,
                        height: 1307,
                    },
                ],
            },
        ],
    },
    {
        id: "et2i",
        name: "ET2i",
        statuses: [{ label: "Live", type: "live" }],
        description:
            "Website redesign for an industrial services company, with a customer portal and an ERP-connected quote configurator to streamline project requests. Tablet-responsive so sales reps can submit project requests directly on-site at the client's location.",
        tags: ["Web", "ERP integration", "Customer portal"],
        link: { href: "https://et2i.net/", label: "View" },
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: et2i1Img,
                        alt: "ET2i homepage for an industrial engineering firm with a project cost estimator",
                        width: 1200,
                        height: 698,
                    },
                    {
                        src: et2i2Img,
                        alt: "ET2i project estimator summarizing a topography and 3D acquisition request",
                        width: 1200,
                        height: 650,
                    },
                ],
            },
        ],
    },
    {
        id: "ficheqs",
        name: "FicheQS",
        statuses: [{ label: "Side project", type: "wip" }],
        description:
            "Mobile-first PWA for digitizing quality and safety forms used in the real estate industry. Fill, validate, and send forms as PDF by email on the go.",
        tags: ["React", "Node.js", "PostgreSQL", "PWA"],
        screenshotRows: [
            {
                variant: "mobile",
                screenshots: [
                    {
                        src: ficheqs1Img,
                        alt: "FichesQS mobile app home screen with buttons to create or view quality and safety forms",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: ficheqs4Img,
                        alt: "FichesQS mobile app list of validated quality and safety forms by housing unit",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: ficheqs3Img,
                        alt: "FichesQS validated quality and safety form with a button to send it by email",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: ficheqs2Img,
                        alt: "FichesQS mobile app navigation menu with account and logout options",
                        width: 700,
                        height: 1379,
                    },
                ],
            },
        ],
    },
    {
        id: "effitech",
        name: "EffiTech",
        statuses: [{ label: "Side project", type: "wip" }],
        description:
            "Field service management PWA for scheduling technician interventions, managing clients and employees, and generating signed reports with technical documents.",
        tags: ["React", "Node.js", "PostgreSQL", "Docker"],
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: effitech1Img,
                        alt: "EffiTech calendar listing scheduled interventions with client, status and technician columns",
                        width: 1200,
                        height: 646,
                    },
                    {
                        src: effitech2Img,
                        alt: "EffiTech intervention detail panel with client, planning and work-to-do information",
                        width: 1200,
                        height: 647,
                    },
                    {
                        src: effitech3Img,
                        alt: "EffiTech employee directory showing technicians and their contact details",
                        width: 1200,
                        height: 646,
                    },
                ],
            },
            {
                variant: "mobile",
                screenshots: [
                    {
                        src: effitechmobile4Img,
                        alt: "EffiTech mobile list of appointments color-coded by status",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: effitechmobile1Img,
                        alt: "EffiTech mobile calendar with color-coded appointments for a technician's day",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: effitechmobile3Img,
                        alt: "EffiTech mobile appointment detail with client, address and work description",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: effitechmobile2Img,
                        alt: "EffiTech mobile intervention report with technician and client signature capture",
                        width: 700,
                        height: 1379,
                    },
                ],
            },
        ],
    },
];
