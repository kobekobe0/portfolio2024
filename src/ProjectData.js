import javascript from "./images/js.png";
import css from "./images/css.png";
import html from "./images/html.png";
import react from "./images/react.png";
import firebase from "./images/firebase.png";
import mongo from "./images/mongo.png";
import node from "./images/node.png";
import express from "./images/express.png";
import socket from "./images/socket.png";
import graphql from "./images/graphql.png";
import tailwind from "./images/tailwind.png";
import mysql from "./images/mysql.png";
import aws from "./images/aws.png";
import digitalocean from "./images/digital.png";
import php from "./images/php.png";
import next from "./images/nextjs.png";
import shadcn from "./images/shadcn.png";
import mui from "./images/mui.png";
import postgresql from "./images/PostgresSQL.png";
import zustand from "./images/zustand.png";
import sequelize from "./images/Sequelize.png";
import tanstack from "./images/tanstack.png";
import mssql from "./images/mssql.png";
// import w1 from "./images/weather/1.png";
// import w2 from "./images/weather/2.png";
// import w3 from "./images/weather/3.png";
import d1 from "./images/dumps/1.png";
import d2 from "./images/dumps/2.png";
import d3 from "./images/dumps/3.png";
import d4 from "./images/dumps/4.png";
import d5 from "./images/dumps/5.png";
import d6 from "./images/dumps/6.png";
import d7 from "./images/dumps/7.png";
import d8 from "./images/dumps/8.png";
import d9 from "./images/dumps/9.png";
import d10 from "./images/dumps/10.png";
import a1 from "./images/anime/1.png";
import a2 from "./images/anime/2.png";
import a3 from "./images/anime/3.png";
import a4 from "./images/anime/4.png";
import a5 from "./images/anime/5.png";
import a6 from "./images/anime/6.png";
import a7 from "./images/anime/7.png";
// import l1 from "./images/landing/1.png";
// import l2 from "./images/landing/2.png";
// import l3 from "./images/landing/3.png";
// import l4 from "./images/landing/4.png";
// import l5 from "./images/landing/5.png";
// import l6 from "./images/landing/6.png";
// import l7 from "./images/landing/7.png";
// import l8 from "./images/landing/8.png";
import wordle1 from "./images/wordle/wordle1.png";
import wordle2 from "./images/wordle/wordle2.png";
import wordle3 from "./images/wordle/wordle3.png";
import wordle4 from "./images/wordle/wordle4.png";
import wordle5 from "./images/wordle/wordle5.png";
import wordle6 from "./images/wordle/wordle6.png";
import wordle7 from "./images/wordle/wordle7.png";
import tab1 from "./images/tabibito/1.png";
import tab2 from "./images/tabibito/2.png";
import tab3 from "./images/tabibito/3.png";
import tab4 from "./images/tabibito/4.png";
import tab5 from "./images/tabibito/5.png";
import tab6 from "./images/tabibito/6.png";
import tab7 from "./images/tabibito/7.png";
import tab8 from "./images/tabibito/8.png";
import tab9 from "./images/tabibito/9.png";
import tab10 from "./images/tabibito/10.png";
import tab11 from "./images/tabibito/11.png";
import tab12 from "./images/tabibito/12.png";
import tab13 from "./images/tabibito/13.png";
import tab14 from "./images/tabibito/14.png";
import tab15 from "./images/tabibito/15.png";
import twit1 from "./images/twitter/1.png";
import twit2 from "./images/twitter/2.png";
import twit3 from "./images/twitter/3.png";
import twit4 from "./images/twitter/4.png";
import twit5 from "./images/twitter/5.png";
import nav1 from "./images/admin/1.png";
import nav2 from "./images/admin/2.png";
import nav3 from "./images/admin/3.png";
import nav4 from "./images/admin/4.png";
import nav5 from "./images/admin/5.png";
import nav6 from "./images/admin/6.png";
import nav7 from "./images/admin/7.png";
import nav8 from "./images/admin/8.png";
import nav9 from "./images/admin/9.png";
import navQms1 from "./images/navq/1.png";
import navQms2 from "./images/navq/2.png";
import navQms3 from "./images/navq/3.png";
import navQms4 from "./images/navq/4.png";
import navQms5 from "./images/navq/5.png";
import navQms6 from "./images/navq/6.png";
import navQms7 from "./images/navq/7.png";

export const projectData = [
	{
		title: "NAV QMS Admin Portal",
		description:
			"A centralized admin dashboard for managing licenses and access control of multiple subscribed companies. Built with a modular, multi-tenant architecture to support dynamic company configurations, real-time license tracking, and scalable alert systems for improved operational transparency.",
		tools: [node, react, shadcn, mui, postgresql, zustand, sequelize],
		toolsText: [
			"Node.js",
			"React.js",
			"Shadcn UI",
			"MUI",
			"PostgreSQL",
			"Zustand",
			"Sequelize ORM",
		],
		github: "",
		link: "https://admin-portal-dev.navqms.com",
		photos: [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9],
		id: "navqmsportal01",
	},
	{
		title: "NAV QMS (Quality Management System)",
		description:
			"Contributed to a compliance tracking system for a US-based client by focusing on UI/UX development—building reusable components, integrating APIs, and delivering modular, user-friendly interfaces that significantly improved workflow efficiency and developer productivity.",
		tools: [next, tanstack, zustand, mui],
		toolsText: ["Next.js", "TanStack Query", "MUI"],
		github: "",
		link: "https://default.navqms.com/",
		photos: [navQms1, navQms2, navQms3, navQms4, navQms5, navQms6, navQms7],
		id: "navqmsui01",
	},
	{
		title: "Barangay Management System",
		description:
			"Designed to automate and digitize barangay operations for over 2,000 residents; features include resident records, document/form generation, and census analytics, reducing paperwork by 70% and significantly improving operational efficiency.",
		tools: [mongo, express, react, node],
		toolsText: ["MongoDB", "Express.js", "React.js", "Node.js"],
		github: "https://github.com/kobekobe0/barangayManagementSystemClient",
		backend: "https://github.com/kobekobe0/barangayManagementSystemServer",
		link: "",
		photos: [],
		id: "barangayms01",
	},

	{
		title: "ScholarPass (Capstone)",
		description:
			"Built a QR code–based gate pass system for managing entry of students and visitors; architected for scalability and reliability to support concurrent users; and scheduled for university-wide implementation to enhance campus security, targeting over 4,000 students.",
		tools: [mongo, express, react, node],
		toolsText: ["MongoDB", "Express.js", "React.js", "Node.js"],
		github: "https://github.com/kobekobe0/scholarpass",
		backend: "https://github.com/kobekobe0/scholarpass_server",
		link: "",
		photos: [],
		id: "scholarpasscapstone01",
	},

	{
		title: "Tabibito",
		description:
			"A travel log app where you can share your adventures with everyone. This is my first fullstack MERN app. I focused more at the backend in this project since this is also the first project where I built the backend by myself. Truly a great experience, I learned a lot building this project.",
		tools: [mongo, express, react, node, socket],
		toolsText: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
		github: "https://github.com/kobekobe0/tabibito",
		link: "https://tabibi-to.herokuapp.com",
		photos: [
			tab9,
			tab1,
			tab2,
			tab3,
			tab4,
			tab5,
			tab6,
			tab7,
			tab8,

			tab10,
			tab11,
			tab12,
			tab13,
			tab14,
			tab15,
		],
		id: "kjzxncoiawd",
	},
	{
		title: "Dumps",
		description:
			"A very bare bone image sharing app. You can upload images and share them with your friends. You can also customize your profile. Made using React and by utilizing the Firebase API. Mainly intended for dump pictures, that is why it is called Dumps. My most complicated and most proud of project so far. ",
		tools: [react, firebase],
		toolsText: ["HTML", "CSS", "Javascript", "React", "Firebase"],
		github: "https://github.com/kobekobe0/dumps",
		link: "https://dumps.herokuapp.com/",
		photos: [d5, d2, d3, d4, d1, d6, d7, d8, d9, d10],
		id: "32dfsd13",
	},
	{
		title: "WordleRush",
		description:
			"A Wordle clone game. I made it a survival like game where every time you get a word, another word will be generated and you will get one point. There's also a leaderboard that shows top scorers. I made this app because I was inspired by Jedcal's vlog where he akso made a wordle game but you can create a word and make your friend guess it by sending link, I just took a different approach. ",
		tools: [react, firebase],
		toolsText: ["HTML", "CSS", "Javascript", "React", "Firebase"],
		github: "https://github.com/kobekobe0/wordle",
		link: "https://wordle-clone-zeta-ebon.vercel.app/",
		photos: [wordle4, wordle1, wordle2, wordle3, wordle5, wordle6, wordle7],
		id: "qv24saf13",
	},
	{
		title: "Twitter, but useless",
		description:
			"A simple web app where you an post anything you are feeling. I built this to see how grapql api works, nothing special to see. Also tried using Tailwind for the first time and I tell you, I won`t go back using vanilla CSS anymore(for my personal projects), LOL.",
		tools: [mongo, express, react, node, tailwind, graphql],
		toolsText: [
			"MongoDB",
			"Express",
			"React",
			"Node.js",
			"Tailwind",
			"GraphQL",
		],
		github: "https://github.com/kobekobe0/MERNG",
		link: "https://github.com/kobekobe0/MERNG",
		photos: [twit1, twit2, twit3, twit4, twit5],
		id: "qzxcasdw2a",
	},
	{
		title: "AnimeStorage",
		description:
			"A simple anime watchlist app made using React and by utilizing local storage. You can search for an anime and add it to your watchlist. You can also remove an anime from your watchlist. Made possible using Jikan API.",
		tools: [react],
		toolsText: ["HTML", "CSS", "Javascript", "React"],
		github: "https://github.com/kobekobe0/animestorage_repush",
		link: "https://animestorage.herokuapp.com/",
		photos: [a1, a2, a3, a4, a5, a6, a7],
		id: "aba12sdfw",
	},
];

export const Skills = [
	{
		name: "React",
		image: react,
	},
	{
		name: "Node.js",
		image: node,
	},
	{
		name: "NextJS",
		image: next,
	},
	{
		name: "Express",
		image: express,
	},
	{
		name: "GraphQL",
		image: graphql,
	},
	{
		name: "Firebase",
		image: firebase,
	},
	{
		name: "MongoDB",
		image: mongo,
	},
	{
		name: "MSSQL",
		image: mssql,
	},
	{
		name: "MySQL",
		image: mysql,
	},
	{
		name: "PostgreSQL",
		image: postgresql,
	},
	{
		name: "Sequelize",
		image: sequelize,
	},

	{
		name: "Socket.io",
		image: socket,
	},

	{
		name: "Tailwind",
		image: tailwind,
	},
	{
		name: "MUI",
		image: mui,
	},
	{
		name: "Shadcn",
		image: shadcn,
	},
	{
		name: "Tanstack",
		image: tanstack,
	},
	{
		name: "Zustand",
		image: zustand,
	},
	{
		name: "PHP",
		image: php,
	},
	{
		name: "Digital Ocean",
		image: digitalocean,
	},
	{
		name: "HTML",
		image: html,
	},
	{
		name: "CSS",
		image: css,
	},
	{
		name: "Javascript",
		image: javascript,
	},
];
