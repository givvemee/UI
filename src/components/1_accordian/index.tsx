import Accordion1 from "./1.react";
import Accordion2 from "./2.react";
import Accordion3 from "./3.react";
import Accordion4 from "./4.vanilla";
import Accordion5 from "./5.html";
import cx from "./cx";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h1>아코디언</h1>
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4 />
      <Accordion5 />
    </div>
  );
};

export default Accordions;
