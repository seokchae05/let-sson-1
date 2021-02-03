import React from "react";
import InfoCardS from "../component/feature/findStudent/info_cardS";
import HeadButtons from "../component/layout/header/header";
import Sidebar from "../component/shared/findingSnT/sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color : #F6F4F3;
`;

const Side = styled.span`
  height : 100%;
`;

class FindStudent extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeadButtons />
        </header>
        <Wrapper>
          <Side><Sidebar /></Side>
          <InfoCardS />
        </Wrapper>
      </div>
    );
  }
}

export default FindStudent;
