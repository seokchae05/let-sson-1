import React from "react"
import Checkage from "./sideButton/checkAge"
import Checkgender from "./sideButton/checkGender"
import CheckOnline from "./sideButton/checkOnline"
import Checkpay from "./sideButton/checkPay"
import styled from "styled-components";

const Wrapper = styled.div`
margin: 5px;
float: right;
width: 250px;
box-sizing: border-box;
border: 1px solid gray;
display: grid;
background-color : white;
positon: flow;
margin-bottom:90%;
`

const SideB = styled.div`
    margin: 10px;
    background-color : lightgray;
    border : 1px solid gray;
`

class Sidebar extends React.Component{
    render(){
        
    return (
    <span>
        <Wrapper>
            <SideB>
                <Checkgender/>
            </SideB>
            <SideB>
                <CheckOnline/>
            </SideB>
        
            <SideB>
                <Checkpay/>
            </SideB>
            <SideB>
                <Checkage/>
            </SideB>
        </Wrapper>
    </span>        
        );
    }
}


export default Sidebar;