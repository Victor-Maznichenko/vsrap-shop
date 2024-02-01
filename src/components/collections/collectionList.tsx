import CollectionCard from "./collectionCard";
import { getCollections } from "@/lib/api/requests/getCollections";
import "@/styles/components/collections/collectionList.scss";

const CollectionList = async ({ count = -1 }) => {
	const collections = await getCollections(count);

	return (
		<div className="collections-list">
			{collections.map(({ previewPhoto, id, title }) => (
				<div className="collections-list__item" key={id}>
					<CollectionCard id={id} title={title} previewPhoto={previewPhoto} />
				</div>
			))}
		</div>
	);
};

export default CollectionList;
