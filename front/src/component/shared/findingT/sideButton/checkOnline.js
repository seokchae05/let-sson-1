import React, { useContext } from "react";
import { FilterContextT } from "../../../../page/findTeacher";

const CheckOnlineT = () => {
  const { state, dispatch } = useContext(FilterContextT);

  const handleChange = e => {
    dispatch({ type: "sortContact", contact: e.currentTarget.value });
  };
  return (
    <div>
      화상강의 여부
      <div>
        <input
          type="radio"
          name="chk_contact"
          value="true"
          onClick={handleChange}
        ></input>
        예
      </div>
      <div>
        <input
          type="radio"
          name="chk_contact"
          value="false"
          onClick={handleChange}
        ></input>
        아니오
      </div>
    </div>
  );
};

export default CheckOnlineT;
