// accordion with react

import { useState } from "react";
import cx from "./cx";
import { data } from "./data";

type DataType = {
  id: string;
  title: string;
  description?: string;
  current: boolean;
  toggle: () => void;
};

const TabItem = ({ id, title, current, toggle }: DataType) => {
  return (
    <li className={cx("tab", { current })} key={id} onClick={toggle}>
      {title}
    </li>
  );
};

const TabMenu2 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id);

  const toggleItem = (id: string) => () => {
    // id 를 캡처하여 클로저로 내부에서 한 번 더 사용
    setCurrentId(id);
  };

  return (
    <>
      <h3>#2. React - css 로 hidden/show</h3>
      <div className={cx("container", "tabMenu2")}>
        <ul className={cx("tabList")}>
          {data.map((d) => (
            <TabItem
              {...d}
              id={d.id}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </ul>
        {data.map((d) => (
          <div className={cx("description", { current: currentId === d.id })}>
            {d.description}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabMenu2;
