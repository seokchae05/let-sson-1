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

const InputBox = styled.input`
    margin-right : 0;
    width : 55%;
    padding-right : 40%;
    padding-bottom : 30px;
`;

class Stusignage_my extends React.Component{
    render(){
        return (
            <Box>
                <Text>나이를 입력 해주세요</Text>
                <label className="stuAge"><InputBox type="text" ></InputBox></label>
            </Box>
        );
    }
}

export default Stusignage_my;