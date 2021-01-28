import React from "react"
import HeadButton from "../component/layout/header";
import Teasignname from "../component/feature/teacherSign/name";
import Teasignsubject from "../component/feature/teacherSign/subject";
import Teasigngender from "../component/feature/teacherSign/gender";
import Teasignpay from "../component/feature/teacherSign/pay";
import Teasignregion from "../component/feature/teacherSign/region";
import Teasigncontact from "../component/feature/teacherSign/contact";
import Teasignattend from "../component/feature/teacherSign/attend";
import Teasignprove from "../component/feature/teacherSign/proveimage";
import Teasignintro from "../component/feature/teacherSign/intro";
import Teasignpassword from "../component/feature/teacherSign/password";
import Teasignemail from "../component/feature/teacherSign/email";
import Teasignphone from "../component/feature/teacherSign/phone";
import Teasignuni from "../component/feature/teacherSign/university";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F6F6;
`;
class Teasign extends React.Component{
    render(){
        return (
            <div>
                <HeadButton />
                <Wrapper>
                    <Teasignname />
                    <Teasignsubject />
                    <Teasigngender />
                    <Teasignpay />
                    <Teasignregion />
                    <Teasigncontact />
                    <Teasignattend />
                    <Teasignuni />
                    <Teasignprove />
                    <Teasignintro />
                    <Teasignphone />
                    <Teasignpassword />
                    <Teasignemail />
                </Wrapper>
                
            </div>
        );
    }
}

export default Teasign;