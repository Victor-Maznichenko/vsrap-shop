import { getCollections } from "@/lib/services/getCollections";
import CollectionCard from "./collectionCard";

const CollectionList = async ({ count = -1 }) => {
	const collections = await getCollections(count);

	return (
		<div className="collections__list">
			{collections.map(({ previewPhoto, id, title }) => (
				<div className="collections__list-item" key={id}>
					<CollectionCard
						id={id}
						title={title}
						previewPhoto={previewPhoto}
					/>
				</div>
			))}
		</div>
	);
};

export default CollectionList;
