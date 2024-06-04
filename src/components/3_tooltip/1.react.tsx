import { SyntheticEvent, useEffect, useState } from "react";
import cx from "./cx";
import { data } from "./data";

export type TooltipType = {
  id: string;
  title: string;
  description: string;
};

const Tooltip = ({ id, title, description }: TooltipType) => {
  const [isOpen, toggle] = useState(false);
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation(); // 바깥에서 클릭했을 떄도 닫을 수 있게
    toggle((p) => !p);
  };

  useEffect(() => {
    const close = () => toggle(false);
    if (!isOpen) {
      window.addEventListener("click", close);
    }
    return () => {
      window.removeEventListener("click", close);
    };
  }, [isOpen]);

  return (
    <div className={cx("container")}>
      <button className={cx("trigger")} onClick={handleClick}>
        {title}
      </button>
      {isOpen && (
        <div className={cx("tooltip")} onClick={(e) => e.stopPropagation()}>
          {description}
        </div>
      )}
    </div>
  );
};
const Tooltip1 = () => {
  return (
    <div>
      <h3>#1. React - 외부 클릭시 닫히는 툴팁</h3>
      {data.map((d) => (
        <Tooltip {...d} key={d.id} />
      ))}
    </div>
  );
};

export default Tooltip1;
