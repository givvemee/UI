import { useEffect, useRef } from "react";

// 자바스크립트 구문 실행하는 함수를 전달 받고 렌더 이후 1회만 실행
const VanillaWrapper = ({
  title = "",
  subTitle = "",
  initiator,
}: {
  title?: string;
  subTitle?: string;
  initiator: (wrapper: HTMLDivElement) => void;
}) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);
  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  }, [initiator]);

  return (
    <>
      {title && (
        <h3>
          {title}. Vanilla {subTitle && <sub>{subTitle}</sub>}
        </h3>
      )}
      <div ref={wrapper} />
    </>
  );
};

export default VanillaWrapper;
