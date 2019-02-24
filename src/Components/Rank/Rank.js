import React from "react";

const Rank = ({name, entries}) => {
	return (
		<div className="center">
			<div className="white f3">{`${name}, your entry count is...`}</div>
			<div className="white f3 bold">
				{entries}
			</div>
		</div>
	);
};

export default Rank;
