import React from "react"
import HeadButton from "../component/layout/header";
import Stusignage from "../component/feature/studentSign/age";
import Stusigngender from "../component/feature/studentSign/gender";
import Stusignisstu from "../component/feature/studentSign/isstudent";
import Stusignname from "../component/feature/studentSign/name";
import Stusignpropergender from "../component/feature/studentSign/propergender";
import Stusignregion from "../component/feature/studentSign/region";
import Stusigncontact from "../component/feature/studentSign/contact";
import Stusignphone from "../component/feature/studentSign/phone";
import Stusignpassword from "../component/feature/studentSign/password";
import Stusignemail from "../component/feature/studentSign/email";
import Stusignpay from "../component/feature/studentSign/pay";
import Stusignsubject from "../component/feature/studentSign/subject";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F6F6;
`;

class Stusign extends React.Component{
    render(){
        return (
            <div>
                <HeadButton />
                <Wrapper>
                    <Stusignname />
                    <Stusignisstu />
                    <Stusignage />
                    <Stusigngender />
                    <Stusignpropergender />
                    <Stusignregion />
                    <Stusignsubject />
                    <Stusignpay />
                    <Stusigncontact />
                    <Stusignphone />
                    <Stusignpassword />
                    <Stusignemail />
                </Wrapper>
            </div>

        );
    }
}

export default Stusign;