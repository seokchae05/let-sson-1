import React from "react";
import InfoCardT from "../component/feature/findTeacher/info_cardT";
import HeadButtons from "../component/layout/header/header";
import Sidebar from "../component/shared/findingSnT/sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color : #F6F4F3;
`;

const Side = styled.span`
  height : 100%;
`;



class FindTeacher extends React.Component{
    render(){
        return(
        <div>
            <header>
                <HeadButtons/>
            </header>
            <Wrapper>
                <Side><Sidebar /></Side>
                <InfoCardT/>
            </Wrapper>
            </div>
        )        

    }
}


export default FindTeacher;