import React, { useContext } from "react";
import { SidebarContextT } from "../../../../page/findTeacher";

const CheckgenderT = () => {
  const { state, dispatch } = useContext(SidebarContextT);

  const handleChange = e => {
    dispatch({ type: "sortGender", gender: e.currentTarget.value });
  };
  return (
    <div>
      성별
      <div>
        <input
          type="radio"
          name="chk_info2"
          value="m"
          onClick={handleChange}
        ></input>
        남성
      </div>
      <div>
        <input
          type="radio"
          name="chk_info2"
          value="w"
          onClick={handleChange}
        ></input>
        여성
      </div>
    </div>
  );
};

export default CheckgenderT;
