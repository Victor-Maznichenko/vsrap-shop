import Skeleton from "react-loading-skeleton";

export const ProductCardsSkeleton = () =>
  [...Array(8)].map((_, index) => <Skeleton width={275} height={275} key={index} />);

export const CollectionCardsSkeleton = () =>
  [...Array(8)].map((_, index) => <Skeleton width={277} height={284} key={index} />);
