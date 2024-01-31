import React from "react";

type Props = {
	title: string;
	contentTitle: string;
	contentText: string;
};

const Accordion = ({ title, contentTitle, contentText }: Props) => {
	return (
		<div className="accordion">
			<div className="accordion__top">
				<h5 className="accordion__title">{title}</h5>
			</div>
			<div className="accordion__dropdown">
				<h5 className="accordion__dropdown-title">{contentTitle}</h5>
				<p className="accordion__dropdown-text">{contentText}</p>
			</div>
		</div>
	);
};

export default Accordion;
