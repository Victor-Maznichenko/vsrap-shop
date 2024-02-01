import Collections from "@/components/collections";
import CollectionList from "@/components/collections/collectionList";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Коллекции",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

const CollectionsPage = () => (
	<main className="collections">
		<Collections>
			<h3 className="collections__title section-title">Все коллекции:</h3>
			<CollectionList />
		</Collections>
	</main>
);

export default CollectionsPage;
