import React from "react";
import InfoCardT from "../component/feature/card/info_cardT";
import HeadButtons from "../component/layout/header";
import Sidebar from "../component/layout/sidebar";
import styled from "styled-components";


class FindTeacher extends React.Component{
    render(){
        return(
        <div>
            <header>
                <HeadButtons/>
            </header>
            <span>
            <Sidebar/>
                <InfoCardT/>
            </span>
            </div>
        )        

    }
}


export default FindTeacher;