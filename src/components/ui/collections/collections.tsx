import { ReactNode } from "react";

import "@/assets/styles/components/ui/collections/collections.scss";

type IProps = {
	children: ReactNode;
};

const Collections = ({ children }: IProps) => (
	<section className="collections">
		<div className="container">
			<div className="collections__inner">{children}</div>
		</div>
	</section>
);

export default Collections;
