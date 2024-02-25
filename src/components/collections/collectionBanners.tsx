import Image from "next/image";
import Link from "next/link";

import "@/styles/components/collections/collectionBanners.scss";
import { getCollections } from "@/lib/api/requests/getCollections";

const CollectionBanners = async ({ className }: { className?: string }) => {
  const collections = await getCollections(15);
  return (
    <div className={`${className || ""} banners`}>
      {collections.map(collection => (
        <Link key={collection.id} href={`/collections/${collection.id}`} className="banners__item">
          <Image src={collection.bannerPhoto} fill alt={collection.title} />
          <div className="banners__item-content">
            <h3 className="banners__item-title">{collection.title}</h3>
            <p className="banners__item-description">{collection.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionBanners;
