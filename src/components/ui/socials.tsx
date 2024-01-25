import React from "react";
import Icon from "./icon";

const Socials = () => {
	return (
		<div className="socials">
			<ul className="socials__list">
				<li className="socials__item">
					<a
						href="https://vk.com/one_twwo_three"
						className="socials__link"
					>
						<Icon name={"vk"} width={25} height={25} />
					</a>
				</li>
				<li className="socials__item">
					<a
						href="https://github.com/victor-maznichenko"
						className="socials__link"
					>
						<Icon name={"github"} width={25} height={25} />
					</a>
				</li>
				<li className="socials__item">
					<a
						href="mailto:victor_maznichenko@mail.ru"
						className="socials__link"
					>
						<Icon name={"email"} width={25} height={25} />
					</a>
				</li>
				<li className="socials__item">
					<a href="https://t.me/One_twwo_three" className="socials__link">
						<Icon name={"telegram"} width={25} height={25} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
