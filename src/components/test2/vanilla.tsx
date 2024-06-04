import VanillaWrapper from "../vanillaWrapper";

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;

  const pEl = document.createElement("p");
  pEl.textContent = "꺼짐";

  const btnEl = document.createElement("button");
  btnEl.textContent = "토글";
  btnEl.addEventListener("click", () => {
    state = !state;
    pEl.textContent = state ? "켜짐" : "꺼짐";
  });

  const divEl = document.createElement("div");
  divEl.textContent = "바닐라";

  divEl.append(btnEl, pEl);
  wrapper.insertAdjacentElement("beforeend", divEl);
};

const Vanilla = () => <VanillaWrapper initiator={initiator} />;
export default Vanilla;
