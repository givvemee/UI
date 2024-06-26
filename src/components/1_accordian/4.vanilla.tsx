// accordion with react + css transition

import VanillaWrapper from "../vanillaWrapper";
import cx from "./cx";
import { data } from "./data";

type DataType = {
  id: string;
  title: string;
  description: string;
  current?: boolean;
  toggle?: () => void;
};

const itemBuilder = ({ id, title, description }: DataType) => {
  const $li = document.createElement("li");
  $li.classList.add(cx("item"), cx("item3"));
  $li.setAttribute("data-id", id);

  const $tab = document.createElement("div");
  $tab.classList.add(cx("tab"));
  $tab.textContent = title;

  const $description = document.createElement("div");
  $description.classList.add(cx("description"));
  $description.textContent = description;

  $li.append($tab, $description);
  return $li;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null;
  const $ul = document.createElement("ul");
  $ul.classList.add(cx("container"));

  const handleClickTab = (e: Event) => {
    const $e = e.target as HTMLElement;

    if (!$e.classList.contains(cx("tab"))) return;

    const targetId = $e.parentElement!.dataset.id;
    if (!targetId) return;

    currentId = targetId === currentId ? null : targetId;

    $items.forEach(($item) => {
      $item.classList.toggle(cx("current"), currentId === $item.dataset.id);
    });
  };

  $ul.addEventListener("click", handleClickTab);

  const $items = data.map(itemBuilder);
  $ul.append(...$items);
  wrapper.append($ul); // 56, 57 순서 바꿔도 무방. 열려있게 한 뒤 렌더를 하고, 렌더하고 열려있게 하는 것의 차이
  ($items[0].children[0] as HTMLElement).click();
};

const Accordion4 = () => <VanillaWrapper title="#4" initiator={initiator} />;
export default Accordion4;
