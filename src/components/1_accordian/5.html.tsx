// accordion with react + css transition

import cx from "./cx";
import { data } from "./data";

type DataType = {
  id: string;
  title: string;
  description: string;
  initialClicked: boolean;
};

const AccordionItem = ({
  id,
  title,
  description,
  initialClicked,
}: DataType) => {
  return (
    <li className={cx("item", "item5")} key={id}>
      <input
        type="radio"
        name="accordion"
        id={id}
        className={cx("input")}
        defaultChecked={initialClicked}
      />
      <label htmlFor={id} className={cx("tab")}>
        {title}
      </label>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion5 = () => {
  return (
    <>
      <h3>#5. HTML : input=radio</h3>
      <ul className={cx("container")}>
        {data.map((d, i) => (
          <AccordionItem
            id={d.id}
            title={d.title}
            description={d.description}
            initialClicked={i === 0}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion5;
