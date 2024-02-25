import "@/styles/components/collections/collections.scss";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const Collections = ({ children }: IProps) => (
  <section className="collections">
    <div className="container">
      <div className="collections__inner">{children}</div>
    </div>
  </section>
);

export default Collections;
