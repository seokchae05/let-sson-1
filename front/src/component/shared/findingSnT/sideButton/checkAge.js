import React, { useContext } from "react";
import { SidebarContext } from "../../../../page/findStudent";

const Checkage = () => {
  const { state, dispatch } = useContext(SidebarContext);
  const handleChange = e => {
    dispatch({ type: "sortAge", age: e.currentTarget.value });
  };

  return (
    <div>
      연령대
      <div>
        <input
          type="radio"
          name="chk_info1"
          value="40"
          onClick={handleChange}
        ></input>
        40세 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_info1"
          value="30"
          onClick={handleChange}
        ></input>
        30세 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_info1"
          value="20"
          onClick={handleChange}
        ></input>
        20세 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_info1"
          value="0"
          onClick={handleChange}
        ></input>
        그 외
      </div>
    </div>
  );
};

export default Checkage;
