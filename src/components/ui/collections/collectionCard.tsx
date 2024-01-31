import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/assets/styles/components/ui/collections/collectionCard.scss";

type IProps = {
	title: string;
	id: number;
	previewPhoto: string;
};

const CollectionCard = ({ title, previewPhoto, id }: IProps) => {
	return (
		<Link
			href={`/collections/${id}`}
			className="collection-card"
			style={{ backgroundImage: `url(${previewPhoto})` }}
		>
			<Image src={previewPhoto} fill alt={title} />
			<h3 className="collection-card__title title">{title}</h3>
		</Link>
	);
};

export default CollectionCard;
