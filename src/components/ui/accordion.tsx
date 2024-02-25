"use client";
import { useState } from "react";

import Icon from "./Icon";
import "@/styles/components/ui/accordion.scss";

type Props = {
  title: string;
  contentTitle: string;
  contentText: string;
};

const Accordion = ({ title, contentTitle, contentText }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div className={`${isOpen ? "active" : ""} accordion`}>
      <div className="accordion__top" onClick={toggleOpen}>
        <h5 className="accordion__title">{title}</h5>
        <Icon name="arrow-down" />
      </div>
      <div className="accordion__dropdown">
        <h5 className="accordion__dropdown-title">{contentTitle}</h5>
        <p className="accordion__dropdown-text">{contentText}</p>
      </div>
    </div>
  );
};

export default Accordion;
