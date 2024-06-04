import TabMenu1 from "./1.react";
import TabMenu2 from "./2.react";
import TabMenu3 from "./3.react";
import { TabMenu4 } from "./4.vanilla";

import cx from "./cx";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h1>탭 메뉴</h1>
      <TabMenu1 />
      <TabMenu2 />
      <TabMenu3 />
      <TabMenu4 />
    </div>
  );
};

export default TabMenus;
