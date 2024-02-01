import { CollectionCardProps } from "@/lib/types";
import "@/styles/components/collections/CollectionCard.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionCard = ({ title, previewPhoto, id }: CollectionCardProps) => {
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
