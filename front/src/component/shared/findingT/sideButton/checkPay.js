import React, { useContext } from "react";
import { SidebarContextT } from "../../../../page/findTeacher";

const CheckpayT = () => {
  const { state, dispatch } = useContext(SidebarContextT);

  const handleChange = e => {
    dispatch({ type: "sortBudget", budget: e.currentTarget.value });
  };

  return (
    <div>
      금액
      <div>
        <input
          type="radio"
          name="chk_info"
          value="40"
          onClick={handleChange}
        ></input>
        40만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_info"
          value="30"
          onClick={handleChange}
        ></input>
        30만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_info"
          value="20"
          onClick={handleChange}
        ></input>
        20만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_info"
          value="10"
          onClick={handleChange}
        ></input>
        10만원 이상
      </div>
    </div>
  );
};

export default CheckpayT;
