import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import raksquad from "../Raksquad.png";
import tailwind from "../images/tailwind.png";
import iona from "../iona.png";
import next from "../images/nextjs.png";
import node from "../images/node.png";
import mongo from "../images/mongo.png";
import express from "../images/express.png";
import digital from "../images/digital.png";
import socket from "../images/socket.png";
import react from "../images/react.png";
import graph from "../images/graphql.png";
import aws from "../images/aws.png";
import landRegLogo from "../lares.jpg";
import dotnet from "../images/csharp.png";
import mssql from "../images/mssql.png";
import gitlab from "../images/gitlab.png";
import sequelize from "../images/Sequelize.png";

import "./styles/projects.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
			</Helmet>
			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div
							className="title projects-title"
							style={{ display: "flex", alignItems: "center" }}
						>
							Work Exp{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								style={{ marginLeft: "10px" }}
								viewBox="0 0 32 32"
							>
								<path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M30 8H2v18h28ZM20 8s0-4-4-4s-4 4-4 4M8 26V8m16 18V8"
								/>
							</svg>
						</div>

						<div className="subtitle projects-subtitle">
							Here are some of the places I've worked at and some
							of the things I've done. I'm always looking for new
							opportunities, so feel free to reach out to me if
							you're interested in working together.
						</div>

						<div className="projects-list">
							<hr />
							<div>
								<div>
									<h4>Feb 2025 - May 2025</h4>
								</div>
								<div>
									<h2
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<img
											src={landRegLogo}
											style={{
												width: "2rem",
												marginRight: "10px",
											}}
											alt="Land Registration Systems Inc."
										/>
										Land Registration Systems Inc.
									</h2>
									<h4>
										Full-stack Developer (Internship, Quezon
										City, PH)
									</h4>
									<p>
										<b>My Responsibilities</b>
									</p>
									<ul>
										<li>
											Led a team of interns in developing
											a cashless payment system under the
											supervision of a senior developer.
										</li>
										<li>
											Developed a fallback cron job server
											running twice daily to catch and
											reprocess missed transactions,
											enhancing fault tolerance and
											reducing manual recovery efforts.
										</li>
										<li>
											Gained hands-on experience in DevOps
											by scripting CI/CD pipelines using
											GitLab CI/CD. Configured automated
											build, test, and deploy workflows
											for staging environments, including
											job orchestration, environment
											variables, and lifecycle monitoring.
										</li>
										<li>
											Collaborated in agile sprints,
											participating in weekly code reviews
											and task breakdowns.
										</li>
									</ul>
								</div>
								<div>
									<h4
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										Technology Used:
										<img
											src={next}
											alt="Next.js"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={tailwind}
											alt="Tailwind CSS"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={dotnet}
											alt="C# .NET"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={mssql}
											alt="MSSQL"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={gitlab}
											alt="GitLab CI/CD"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={sequelize}
											alt="Sequelize ORM"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
									</h4>
									<h5>
										References: <u>Renalyn Galorio</u>
									</h5>
								</div>
							</div>
							<hr />
							<div>
								<div>
									<h4>Jul 2023 - January 2024</h4>
								</div>
								<div>
									<h2
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<img
											src={raksquad}
											style={{
												width: "2rem",
												marginRight: "10px",
											}}
											alt="raksquad"
										/>
										Raksquad Tech Corp
									</h2>
									<h4>Fullstack Web Developer</h4>
									<p>
										<b>My Responsibilities</b>
									</p>
									<ul>
										<li>
											Truesight is a web platform that
											allows users to control everything
											from transactions to client
											interactions all in one spot. My
											responsibilities were making it as
											easy to use as possible for
											customers and creating a mobile app
											API for photographers that would
											make uploading pictures a breeze.
											Additionally, I deployed the web
											frontend and backend using digital
											ocean through the use of Digital
											Ocean’s Droplet.
										</li>
									</ul>
								</div>
								<div>
									<h4
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										Technology Used:
										<img
											src={next}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={express}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={node}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={digital}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={mongo}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={socket}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
									</h4>
									<h5>
										References: <u>Renalyn Glorioso</u>,{" "}
										<u>Zach Campner</u>
									</h5>
								</div>
							</div>
							<hr />
							<div>
								<div>
									<h4>
										Oct 2022 - Feb 2023, resumed Jan 2025 -
										Present
									</h4>
								</div>
								<div>
									<h2
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<img
											src={iona}
											style={{
												width: "2rem",
												marginRight: "10px",
											}}
											alt="raksquad"
										/>
										Iona Labs Innovation
									</h2>
									<h4>Fullstack Web Developer</h4>
									<p>
										<b>My Responsibilities</b>
									</p>
									<ul>
										<li>
											Developed APIs using both RESTFUL
											and GraphQL approach. Those APIs are
											also secured ensuring only valid
											entities are able to access a
											specific endpoint.
										</li>
										<li>
											Designed and implemented responsive
											user interfaces.
										</li>
										<li>
											Managed database using MongoDB with
											the use of efficient schema design,
											ensuring data consistency and
											retrievability.
										</li>
									</ul>
								</div>
								<div>
									<h4
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										Technology Used:
										<img
											src={react}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={express}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={node}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={aws}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={mongo}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={socket}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
										<img
											src={graph}
											alt="react"
											style={{
												width: "30px",
												margin: "0 10px",
											}}
										/>
									</h4>
									<h5>
										References: <u>Steven Gragg</u>
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
