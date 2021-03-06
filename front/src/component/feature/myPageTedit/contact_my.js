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
    margin-bottom : 10px
`;

class Teasigncontact_my extends React.Component{
    render(){
        return (
            <Box>
                <Text>화상강의 진행이 가능하신가요?</Text>
                <Btn>
                    <input type="radio" name="stucontact"  value="아니오"></input>예
                </Btn>
                <Btn>
                    <input type="radio" name="stucontact"  value="예" ></input>아니오
                </Btn>
            </Box>
        );
    }
}

export default  Teasigncontact_my;