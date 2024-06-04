import { useState } from "react";
import cx from "./cx";
import { data } from "./data";

type DataType = {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
};

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: DataType) => {
  return (
    <li className={cx("item", { current })} key={id}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      {current ? <div className={cx("description")}>{description}</div> : null}
    </li>
  );
};

const Accordion1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    // id 를 캡처하여 클로저로 내부에서 한 번 더 사용
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <h3>#1. React</h3>
      <ul className={cx("container")}>
        {data.map((d) => (
          <AccordionItem
            id={d.id}
            title={d.title}
            description={d.description}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion1;
