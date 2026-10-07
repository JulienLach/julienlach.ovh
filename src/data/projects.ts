import audit1Img from "../assets/images/audit_tablet_1.webp";
import audit2Img from "../assets/images/audit_tablet_2.webp";
import audit3Img from "../assets/images/audit_tablet_3.webp";
import audit4Img from "../assets/images/audit_tablet_4.webp";
import axelormcpArchitectureImg from "../assets/images/axelor_mcp_architecture.webp";
import blacksygnus1Img from "../assets/images/blacksygnus_1.webp";
import blacksygnus2Img from "../assets/images/blacksygnus_2.png";
import blacksygnus3Img from "../assets/images/blacksygnus_3.png";
import blacksygnus4Img from "../assets/images/blacksygnus_4.png";
import effitech1Img from "../assets/images/effitech1.webp";
import effitech2Img from "../assets/images/effitech2.webp";
import effitech3Img from "../assets/images/effitech3.webp";
import effitechmobile1Img from "../assets/images/effitechmobile1.webp";
import effitechmobile2Img from "../assets/images/effitechmobile2.webp";
import effitechmobile3Img from "../assets/images/effitechmobile3.webp";
import effitechmobile4Img from "../assets/images/effitechmobile4.webp";
import et2i1Img from "../assets/images/et2i_1.webp";
import et2i2Img from "../assets/images/et2i_2.png";
import ficheqs1Img from "../assets/images/ficheqs1.webp";
import ficheqs2Img from "../assets/images/ficheqs2.webp";
import ficheqs3Img from "../assets/images/ficheqs3.webp";
import ficheqs4Img from "../assets/images/ficheqs4.webp";

export type ProjectStatus = {
    label: string;
    type: "opensource" | "live" | "wip";
};

export type ScreenshotRow = {
    variant: "desktop" | "tablet" | "mobile";
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
        statuses: [{ label: "Side project", type: "wip" }],
        description:
            "Serveur MCP local pour interroger une instance Axelor depuis Claude Desktop : partenaires, commandes, factures, feuilles de temps, en langage naturel.",
        tags: ["Serveur MCP", "Claude Desktop", "ERP", "Open source"],
        link: { href: "https://github.com/JulienLach/axelor-mcp", label: "GitHub" },
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: axelormcpArchitectureImg,
                        alt: "Schéma d'architecture du serveur Axelor MCP : Claude Desktop lance le processus Node.js, qui appelle l'un des 33 outils validés par Zod via JSON-RPC sur stdio, lesquels interrogent l'API REST d'Axelor",
                        width: 2184,
                        height: 2448,
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
            "Plateforme SaaS pour centraliser les analyses de risques, suivre les actions correctives et générer les rapports DUERP et AMDEC. Avec un serveur MCP qui connecte ses données à Claude pour des analyses assistées par l'IA.",
        tags: ["Analyse de risques", "SaaS", "Serveur MCP"],
        link: { href: "https://blacksygnus.com", label: "Voir" },
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: blacksygnus1Img,
                        alt: "Page d'accueil de BlackSygnus présentant l'analyse de risques centralisée et le suivi des actions",
                        width: 2400,
                        height: 1350,
                    },
                    {
                        src: blacksygnus2Img,
                        alt: "Tableau de bord BlackSygnus avec matrices de risques, indicateurs clés et répartitions par famille et par unité",
                        width: 1200,
                        height: 650,
                    },
                ],
            },
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: blacksygnus3Img,
                        alt: "Liste des risques identifiés dans BlackSygnus avec structure, danger, famille, unité de travail et niveaux de risque brut et résiduel",
                        width: 2528,
                        height: 1306,
                    },
                    {
                        src: blacksygnus4Img,
                        alt: "Formulaire de création d'un nouveau risque dans BlackSygnus avec l'évaluation initiale en gravité, fréquence et détection",
                        width: 2528,
                        height: 1306,
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
            "PWA mobile-first pour numériser les formulaires de sécurité en milieu industriel. Remplissage, validation et envoi en PDF par e-mail, même hors ligne.",
        tags: ["React", "Node.js", "PostgreSQL", "PWA"],
        screenshotRows: [
            {
                variant: "tablet",
                screenshots: [
                    {
                        src: audit1Img,
                        alt: "Écran d'accueil de l'application Audit sur tablette avec les boutons de création et de consultation des audits",
                        width: 1536,
                        height: 2048,
                    },
                    {
                        src: audit2Img,
                        alt: "Checklist d'un audit sécurité sur tablette avec les notations Bon / Insuffisant / Non concerné",
                        width: 1536,
                        height: 2048,
                    },
                    {
                        src: audit3Img,
                        alt: "Liste des audits validés dans l'application Audit sur tablette",
                        width: 1536,
                        height: 2048,
                    },
                    {
                        src: audit4Img,
                        alt: "Rapport d'audit validé sur tablette avec un bouton d'envoi par e-mail",
                        width: 1536,
                        height: 2048,
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
            "Refonte du site d'une entreprise de services industriels, avec portail client et configurateur de devis connecté à l'ERP. Utilisable sur tablette pour saisir les demandes directement chez le client.",
        tags: ["Web", "Intégration ERP", "Portail client"],
        link: { href: "https://et2i.net/", label: "Voir" },
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: et2i1Img,
                        alt: "Page d'accueil d'ET2i, bureau d'études industriel, avec un estimateur de coût de projet",
                        width: 2400,
                        height: 1350,
                    },
                    {
                        src: et2i2Img,
                        alt: "Estimateur de projet ET2i résumant une demande de topographie et d'acquisition 3D",
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
            "PWA mobile-first pour numériser les fiches qualité et sécurité dans l'immobilier. Remplissage, validation et envoi en PDF par e-mail, sur le terrain.",
        tags: ["React", "Node.js", "PostgreSQL", "PWA"],
        screenshotRows: [
            {
                variant: "mobile",
                screenshots: [
                    {
                        src: ficheqs1Img,
                        alt: "Écran d'accueil de l'application mobile FichesQS avec les boutons pour créer ou consulter les fiches qualité et sécurité",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: ficheqs4Img,
                        alt: "Liste des fiches qualité et sécurité validées par logement dans l'application mobile FichesQS",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: ficheqs3Img,
                        alt: "Fiche qualité et sécurité validée dans FichesQS avec un bouton d'envoi par e-mail",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: ficheqs2Img,
                        alt: "Menu de navigation de l'application mobile FichesQS avec les options de compte et de déconnexion",
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
            "PWA de gestion d'interventions terrain : planning des techniciens, clients, employés et rapports signés avec documents techniques.",
        tags: ["React", "Node.js", "PostgreSQL", "Docker"],
        screenshotRows: [
            {
                variant: "desktop",
                screenshots: [
                    {
                        src: effitech1Img,
                        alt: "Calendrier EffiTech listant les interventions planifiées avec les colonnes client, statut et technicien",
                        width: 1200,
                        height: 646,
                    },
                    {
                        src: effitech2Img,
                        alt: "Panneau de détail d'une intervention EffiTech avec les informations client, planning et travaux à réaliser",
                        width: 1200,
                        height: 647,
                    },
                    {
                        src: effitech3Img,
                        alt: "Annuaire des employés EffiTech présentant les techniciens et leurs coordonnées",
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
                        alt: "Liste mobile EffiTech des rendez-vous, codés par couleur selon le statut",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: effitechmobile1Img,
                        alt: "Calendrier mobile EffiTech avec les rendez-vous colorés de la journée d'un technicien",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: effitechmobile3Img,
                        alt: "Détail d'un rendez-vous mobile EffiTech avec client, adresse et description des travaux",
                        width: 700,
                        height: 1379,
                    },
                    {
                        src: effitechmobile2Img,
                        alt: "Rapport d'intervention mobile EffiTech avec signature du technicien et du client",
                        width: 700,
                        height: 1379,
                    },
                ],
            },
        ],
    },
];
