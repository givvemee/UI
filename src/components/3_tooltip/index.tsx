import Tooltip1 from "./1.react";
import Tooltip2 from "./2.context";
import cx from "./cx";

const Tooltips = () => {
  return (
    <div className={cx("Tooltips")}>
      <h1>툴팁</h1>
      <Tooltip1 />
      <Tooltip2 />
    </div>
  );
};

export default Tooltips;
