import React, { useContext } from "react";
import { SidebarContextS } from "../../../../page/findStudent";

const Checkpay = () => {
  const { state, dispatch } = useContext(SidebarContextS);

  const handleChange = e => {
    dispatch({ type: "sortBudget", budget: e.currentTarget.value });
  };

  return (
    <div>
      금액
      <div>
        <input
          type="radio"
          name="chk_budget"
          value="40"
          onClick={handleChange}
        ></input>
        40만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_budget"
          value="30"
          onClick={handleChange}
        ></input>
        30만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_budget"
          value="20"
          onClick={handleChange}
        ></input>
        20만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_budget"
          value="10"
          onClick={handleChange}
        ></input>
        10만원 이상
      </div>
    </div>
  );
};

export default Checkpay;
