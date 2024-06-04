import { SyntheticEvent, useEffect } from "react";
import { TooltipType } from "./1.react";
import cx from "./cx";
import { data } from "./data";
import { SingleOpenContextProvider, useSingleOpen } from "./singleOpenContext";

const Tooltip = ({ id, title, description }: TooltipType) => {
  const [isOpen, toggle] = useSingleOpen(id);
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation(); // 바깥에서 클릭했을 떄도 닫을 수 있게
    toggle((p) => (p === id ? null : id));
  };

  useEffect(() => {
    const close = () => toggle(null);
    if (!isOpen) {
      window.addEventListener("click", close, { once: true });
    }
    return () => {
      window.removeEventListener("click", close);
    };
  }, [isOpen, toggle]);

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
const Tooltip2 = () => {
  return (
    <div>
      <h3>#2. React - 하나씩 열리고 닫히는 툴팁</h3>
      <SingleOpenContextProvider>
        {data.map((d) => (
          <Tooltip {...d} key={d.id} />
        ))}
      </SingleOpenContextProvider>
    </div>
  );
};

export default Tooltip2;
