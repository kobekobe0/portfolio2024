import React from "react";

import Project from "./project";

import { projectData } from "../../ProjectData";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{projectData.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.tools}
						title={project.title}
						description={project.description}
						linkText={project.github}
						link={project.link}
						index={index}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
