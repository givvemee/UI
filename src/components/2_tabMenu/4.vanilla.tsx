// accordion with react

import VanillaWrapper from "../vanillaWrapper";
import cx from "./cx";
import { data } from "./data";

type DataType = {
  id: string;
  title: string;
  description: string;
};

const TabBuildmenu = ({ id, title }: DataType) => {
  const $li = document.createElement("li");
  $li.classList.add(cx("tab"));
  $li.textContent = title;
  $li.setAttribute("data-id", id);
  return $li;
};

const TabBuildDescription = ({ description }: DataType) => {
  const $div = document.createElement("div");
  $div.classList.add(cx("description"));
  $div.textContent = description;
  return $div;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string = data[0].id;
  const $container = document.createElement("div");
  $container.classList.add(cx("container"), cx("tabMenu2"));

  const $tabUl = document.createElement("ul");
  $tabUl.classList.add(cx("tabList"));

  const $tabList = data.map(TabBuildmenu);
  const $desc = data.map(TabBuildDescription);

  $tabUl.append(...$tabList);
  $container.append($tabUl, ...$desc);

  const handleClickTab = (e: Event) => {
    const $e = e.target as HTMLElement;
    if (!$e.classList.contains(cx("tab"))) return;

    currentId = $e.dataset.id || data[0].id;

    $tabList.forEach(($item, i) => {
      $item.classList.toggle(cx("current"), currentId === $item.dataset.id);
      $desc[i].classList.toggle(cx("current"), currentId === $item.dataset.id);
    });
  };

  $tabUl.addEventListener("click", handleClickTab);
  $tabList[0].click();
  wrapper.append($container);
};

export const TabMenu4 = () => (
  <VanillaWrapper initiator={initiator} title={"#4. 바닐라 자바스크립트"} />
);
