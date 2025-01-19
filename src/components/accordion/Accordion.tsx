import React, { ReactElement, useState } from "react";
import "./accordion.scss";

type AccordionBlockProps = {
  data: {
    title: string | ReactElement;
    description: string;
    open?: boolean;
  };
};

type AccordionProps = {
  upIcon?: string;
  downIcon?: string;
};

const accordionData = [
  {
    title: "title 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, veritatis ea officia aut incidunt neque aspernatur dolorem iusto nesciunt velit nisi excepturi quod. Repudiandae id neque eaque repellendus, totam nostrum.",
    open: true,
  },
  {
    title: "title 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, veritatis ea officia aut incidunt neque aspernatur dolorem iusto nesciunt velit nisi excepturi quod. Repudiandae id neque eaque repellendus, totam nostrum.",
  },
  {
    title: "title 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, veritatis ea officia aut incidunt neque aspernatur dolorem iusto nesciunt velit nisi excepturi quod. Repudiandae id neque eaque repellendus, totam nostrum.",
  },
  {
    title: "title 4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, veritatis ea officia aut incidunt neque aspernatur dolorem iusto nesciunt velit nisi excepturi quod. Repudiandae id neque eaque repellendus, totam nostrum.",
  },
];

const AccordionBlock: React.FC<AccordionBlockProps> = ({ data }) => {
  const [collapse, setCollapse] = useState(!data.open);

  const handleClick = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className='accordionBlock'>
      <div className={`accordionHeader`} onClick={handleClick}>
        {data.title}
      </div>
      <div
        className={`accordionContent ${collapse ? "hide" : "show"}`}
        aria-expanded={!collapse}
      >
        {data.description}
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = () => {
  return (
    <div className='accordionContainer'>
      {accordionData.map((data) => (
        <AccordionBlock data={data} key={data.title.toString()} />
      ))}
    </div>
  );
};
