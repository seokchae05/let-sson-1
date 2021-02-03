import React from "react"
import styled from "styled-components";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 20%;
    margin-right : 20%;
    border-top : solid 1px black;
    background : white;
    margin-top : 30px;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;

const Btn = styled.div`
    margin-top : 10px;
    margin-bottom : 15px
`;


class Stusignpay_my extends React.Component{
    render(){
        return (
            <Box>
                <Text>과외비의 예산이 어떻게 되시나요? (1달 수업 기준)</Text>
                <label className="stuJen">
                    <Btn><input type="radio" name="teapay" value="10만원 대"></input>   10만원 대</Btn>
                    <Btn><input type="radio" name="teapay" value="20만원 대"></input>   20만원 대</Btn>
                    <Btn><input type="radio" name="teapay" value="30만원 대"></input>   30만원 대</Btn>
                    <Btn><input type="radio" name="teapay" value="40만원 대"></input>   40만원 대</Btn>
                    <Btn><input type="radio" name="teapay" value="40만원 이상"></input>   그 이상</Btn>
                </label>
            </Box>

        );
    }
}

export default Stusignpay_my;