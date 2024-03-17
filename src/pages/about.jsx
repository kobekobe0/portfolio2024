import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import { Skills } from "../ProjectData";

import E1 from "../e1.jpg";

import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/about.css";
import resume from "../images/SantosKobe.pdf";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "SantosKobeBrian.pdf"; // replace with the actual file name and extension
		link.click();
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="subtitle homepage-subtitle">
									<a
										className="resume-link"
										href={resume}
										download="SantosKobeBrian.pdf"
										target="_blank"
										style={{
											textDecoration: "none",
											color: "gray",
											backgroundColor: "#edebeb",
											padding: "5px 10px",
											borderRadius: "5px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<FontAwesomeIcon
											icon={faFileDownload}
											className="homepage-social-icon"
											inverse
										/>
										My Resume
									</a>
								</div>

								<div
									className="subtitle about-skills"
									style={{
										display: "flex",
										flexWrap: "wrap",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{Skills.map((skill, index) => (
										<div
											className="about-skill"
											key={index}
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												margin: "10px",
												padding: "10px",
												border: "1px solid #ddd",
												borderRadius: "4px",
												flexDirection: "column",
											}}
										>
											<img
												src={skill.image}
												alt={skill.name}
												style={{
													width: "40px",
													height: "auto",
												}}
											/>
											<p style={{ fontSize: "12px" }}>
												{skill.name}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={E1}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
