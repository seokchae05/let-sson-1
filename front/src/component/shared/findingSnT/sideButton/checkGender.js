import React, { useContext } from "react";
import { SidebarContextS } from "../../../../page/findStudent";

const Checkgender = () => {
  const { state, dispatch } = useContext(SidebarContextS);

  const handleChangeM = (e) => {
    dispatch({ type: "sortMale", male: true, female: false });
  };
  const handleChangeW = (e) => {
    dispatch({ type: "sortFemale", male: false, female: true });
  };
  return (
    <div>
      성별
      <div>
        <input
          type="radio"
          name="chk_gender"
          value="m"
          onClick={handleChangeM}
        ></input>
        남성
      </div>
      <div>
        <input
          type="radio"
          name="chk_gender"
          value="w"
          onClick={handleChangeW}
        ></input>
        여성
      </div>
    </div>
  );
};

export default Checkgender;
