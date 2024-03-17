import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import Card from "../common/card";

import Iona from "../../iona.png";
import Raksquad from "../../Raksquad.png";

import "./styles/works.css";

const Works = () => {
	const navigate = useNavigate();
	const goToExperience = () => {
		navigate("/experience");
	};
	return (
		<div
			className="works"
			onClick={goToExperience}
			style={{ cursor: "pointer" }}
		>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={Iona}
								alt="Iona Labs"
								className="work-image"
							/>
							<div className="work-title">
								Iona Innovations Labs
							</div>
							<div className="work-subtitle">
								Full Stack Web Developer
							</div>
							<div className="work-duration">
								Oct 2022 - Feb 2023
							</div>
						</div>

						<div className="work">
							<img
								src={Raksquad}
								alt="twitter"
								className="work-image"
								style={{ height: "auto" }}
							/>
							<div className="work-title">Rakaquad Tech Corp</div>
							<div className="work-subtitle">
								Full Stack Web Developer
							</div>
							<div className="work-duration">
								July 2023 - Present
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
