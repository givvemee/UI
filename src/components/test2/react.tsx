import { useState } from "react";

const React = () => {
  const [show, toggle] = useState(false);

  return (
    <div>
      React
      <button onClick={() => toggle((p) => !p)}>토글</button>
      {show ? "토글" : "꺼짐"}
    </div>
  );
};
export default React;
