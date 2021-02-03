import React from "react";
import InfoCardS from "../component/feature/findStudent/info_cardS";
import HeadButtons from "../component/layout/header/header";
import Sidebar from "../component/shared/findingSnT/sidebar";





class FindStudent extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeadButtons />
        </header>
        <span>
          <Sidebar/>
          <InfoCardS />
        </span>
      </div>
    );
  }
}

export default FindStudent;
