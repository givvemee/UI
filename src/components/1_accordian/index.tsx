import Accordion1 from "./1.react";
import cx from "./cx";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h1>아코디언</h1>
      <Accordion1 />
    </div>
  );
};

export default Accordions;
