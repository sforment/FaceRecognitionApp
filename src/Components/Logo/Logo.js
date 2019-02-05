import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logoPic from "./logoPic.png";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				className="Tilt br2 shadow-2"
				options={{ max: 35 }}
				style={{ height: 200, width: 200 }}
			>
				<div className="Tilt-inner">
					<img
						src={logoPic}
						style={{ paddingTop: "45px" }}
						alt="Logo"
					/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
