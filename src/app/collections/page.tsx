import CollectionList from "@/components/ui/collections/collectionList";
import Collections from "@/components/ui/collections/collections";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Коллекции",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

export default async function CollectionsPage() {
	return (
		<main className="collections">
			<Collections>
				<h3 className="collections__title section-title">Все коллекции:</h3>
				<CollectionList />
			</Collections>
		</main>
	);
}
