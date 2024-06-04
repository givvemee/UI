import { useEffect, useRef } from "react";

// 자바스크립트 구문 실행하는 함수를 전달 받고 렌더 이후 1회만 실행
const VanillaWrapper = ({
  initiator,
}: {
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

  return <div ref={wrapper} />;
};

export default VanillaWrapper;
