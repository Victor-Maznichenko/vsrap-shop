import { getCollections } from "@/lib/api/requests/getCollections";

import { CollectionCardsSkeleton } from "@/ui/Skeletons";

import "@/styles/components/collections/collectionList.scss";
import CollectionCard from "./CollectionCard";

const CollectionList = async ({ count = -1 }) => {
  const collections = await getCollections(count);

  return (
    <div className="collections-list">
      {collections ? (
        collections.map(collection => (
          <div className="collections-list__item" key={collection.id}>
            <CollectionCard {...collection} />
          </div>
        ))
      ) : (
        <CollectionCardsSkeleton />
      )}
    </div>
  );
};

export default CollectionList;
