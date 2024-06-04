// accordion with react + css

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

const TabItem = ({ id, title, description, current, toggle }: DataType) => {
  return (
    <li className={cx("item", { current })} key={id}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    // id 를 캡처하여 클로저로 내부에서 한 번 더 사용
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <h3>#3. React : 하나의 li 안에 title/desc 모두</h3>
      <ul className={cx("container", "tabMenu3")}>
        {data.map((d) => (
          <TabItem
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

export default TabMenu3;
