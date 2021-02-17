import React, { useContext } from "react";
import { FilterContextT } from "../../../../page/findTeacher";

const CheckgenderT = () => {
  const { state, dispatch } = useContext(FilterContextT);

  const handleChange = e => {
    dispatch({ type: "sortGender", gender: e.currentTarget.value });
  };
  return (
    <div>
      성별
      <div>
        <input
          type="radio"
          name="chk_gender"
          value="m"
          onClick={handleChange}
        ></input>
        남성
      </div>
      <div>
        <input
          type="radio"
          name="chk_gender"
          value="w"
          onClick={handleChange}
        ></input>
        여성
      </div>
    </div>
  );
};

export default CheckgenderT;
