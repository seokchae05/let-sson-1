import React, { useContext } from "react";
import { FilterContextT } from "../../../../page/findTeacher";

const CheckpayT = () => {
  const { state, dispatch } = useContext(FilterContextT);

  const handleChange = e => {
    dispatch({ type: "sortPay", pay: e.currentTarget.value });
  };

  return (
    <div>
      금액
      <div>
        <input
          type="radio"
          name="chk_pay"
          value="40"
          onClick={handleChange}
        ></input>
        40만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_pay"
          value="30"
          onClick={handleChange}
        ></input>
        30만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_pay"
          value="20"
          onClick={handleChange}
        ></input>
        20만원 이상
      </div>
      <div>
        <input
          type="radio"
          name="chk_pay"
          value="10"
          onClick={handleChange}
        ></input>
        10만원 이상
      </div>
    </div>
  );
};

export default CheckpayT;
