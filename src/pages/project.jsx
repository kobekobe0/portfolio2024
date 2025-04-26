import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import { projectData } from "../ProjectData";

import "./styles/readArticle.css";

const Project = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (image) => {
		setSelectedImage(image);
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};
	const navigate = useNavigate();
	let { id } = useParams();

	const [project, setProject] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		setProject(projectData[id]);
		console.log(projectData[id]);
	}, [id]);

	if (!project) {
		return (
			<div className="page-content">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="title read-project-title">
								{project.title}
							</div>
							<div className="read-project-tools">
								{project.tools.map((item, index) => (
									<img src={item} alt="logo" />
								))}
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "start",
									marginTop: "20px",
									textDecoration: "none",
								}}
							>
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									style={{
										marginRight: "10px",
										textDecoration: "none",
									}}
								>
									<button
										disabled={!project.github}
										className="read-project-link"
										style={{
											marginBottom: "10px",
											fontWeight: "bold",
											padding: "5px 10px",
											display: "flex",
											alignItems: "center",
											textDecoration: "none",
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1.5em"
											height="1.5em"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"
											/>
										</svg>{" "}
										{!project.github &&
											"Private Repository"}
									</button>
								</a>
								{project?.backend && (
									<a
										href={project.backend}
										target="_blank"
										rel="noreferrer"
										style={{
											marginRight: "10px",
											textDecoration: "none",
										}}
									>
										<button
											disabled={!project.github}
											className="read-project-link"
											style={{
												marginBottom: "10px",
												fontWeight: "bold",
												padding: "5px 10px",
												display: "flex",
												alignItems: "center",
												textDecoration: "none",
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1.5em"
												height="1.5em"
												viewBox="0 0 24 24"
											>
												<path
													fill="currentColor"
													d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"
												/>
											</svg>{" "}
											{!project.github &&
												"Private Repository"}
										</button>
									</a>
								)}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
									}}
								>
									<button
										className="read-project-link"
										style={{
											marginBottom: "10px",
											fontWeight: "bold",
											padding: "5px 10px",
											display: "flex",
											alignItems: "center",
											textDecoration: "none",
										}}
										disabled={!project.link}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1.5em"
											height="1.5em"
											viewBox="0 0 24 24"
											color="red"
										>
											<path
												fill="currentColor"
												d="M6.343 4.938a1 1 0 0 1 0 1.415a8.003 8.003 0 0 0 0 11.317a1 1 0 1 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.146a1 1 0 0 1 1.414 0m12.732 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.415-1.414a8.003 8.003 0 0 0 0-11.317a1 1 0 0 1 1.415-1.415M9.31 7.812a1 1 0 0 1 0 1.414a3.92 3.92 0 0 0 0 5.544a1 1 0 1 1-1.415 1.414a5.92 5.92 0 0 1 0-8.372a1 1 0 0 1 1.415 0m6.958 0a5.92 5.92 0 0 1 0 8.372a1 1 0 0 1-1.414-1.414a3.92 3.92 0 0 0 0-5.544a1 1 0 0 1 1.414-1.414m-4.186 2.77a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
											/>
										</svg>
										<span
											style={{
												fontSize: "14px",
												textDecoration: "none",
												textUnderlineOffset: "10px",
											}}
										>
											live demo is under maintenance
										</span>
									</button>
								</a>
							</div>

							<div className="read-project-body">
								<div className="read-project-description">
									<p>{project.description}</p>
								</div>

								<div className="read-project-images">
									{project.photos.map((item, index) => (
										<img
											src={item}
											alt="logo"
											onClick={() => openModal(item)}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
			{modalVisible && (
				<div className="modal">
					<span className="close" onClick={closeModal}>
						&times;
					</span>
					<img
						className="modal-content"
						src={selectedImage}
						alt="Selected"
					/>
				</div>
			)}
		</React.Fragment>
	);
};

export default Project;
