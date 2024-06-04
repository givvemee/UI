// accordion with react

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
    <li className={cx("tab", { current })} key={id} onClick={toggle}>
      {title}
    </li>
  );
};

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    // id 를 캡처하여 클로저로 내부에서 한 번 더 사용
    setCurrentId((prev) => (prev === id ? null : id));
  };

  const currentDataDescription = data.find(
    (item) => item.id === currentId
  )?.description;

  return (
    <>
      <h3>#1. React 현재 desc 로만 그리기</h3>
      <div className={cx("container")}>
        <ul className={cx("tabList")}>
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
        <div className={cx("description")}>{currentDataDescription || ""}</div>
      </div>
    </>
  );
};

export default TabMenu1;
