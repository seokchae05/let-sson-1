import React, { useContext } from "react";
import { SidebarContextT } from "../../../../page/findTeacher";

const CheckOnlineT = () => {
  const { state, dispatch } = useContext(SidebarContextT);

  const handleChange = e => {
    dispatch({ type: "sortContact", contact: e.currentTarget.value });
  };
  return (
    <div>
      화상강의 여부
      <div>
        <input
          type="radio"
          name="chk_info"
          value="true"
          onClick={handleChange}
        ></input>
        예
      </div>
      <div>
        <input
          type="radio"
          name="chk_info"
          value="false"
          onClick={handleChange}
        ></input>
        아니오
      </div>
    </div>
  );
};

export default CheckOnlineT;
