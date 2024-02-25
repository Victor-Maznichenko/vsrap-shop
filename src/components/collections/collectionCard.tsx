import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ICollectionCardProps } from "@/lib/types";
import "@/styles/components/collections/collectionCard.scss";

const CollectionCard = ({ title, previewPhoto, id }: ICollectionCardProps) => (
  <Link
    href={`/collections/${id}`}
    className="collection-card"
    style={{ backgroundImage: `url(${previewPhoto})` }}
  >
    <Image src={previewPhoto} fill alt={title} />
    <h3 className="collection-card__title title">{title}</h3>
  </Link>
);

export default CollectionCard;
