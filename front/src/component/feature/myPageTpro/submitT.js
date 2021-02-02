import React from "react";
import styled from "styled-components";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 30%;
    margin-right : 30%;
    border-top : solid 1px black;
    background : white;
    margin-bottom: 10px;
`

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`
const InputBoxShort = styled.input`
    margin-right : 0;
    width : 30%;
    padding-bottom : 0px;
    background-color: lightgray;
    border: 1px solid gray;
`

const InputBox = styled.input`
    margin-right : 0;
    width : 55%;
    padding-right : 40%;
    padding-bottom : 30px;
`

class SubmitT extends React.Component{

    render(){
        return(
            <div>
                    <Box>
                        <Text>{this.props.id} 이름</Text>
                        <InputBoxShort className ="name"></InputBoxShort>
                    </Box>
                    <Box>
                    <Text>학교</Text>
                        <InputBoxShort className ="school"></InputBoxShort>
                    </Box>
                    <Box>
                    <Text>학과</Text>
                        <InputBoxShort className ="major"></InputBoxShort>
                    </Box>
                    <Box>
                    <Text>주요 과목</Text>
                        <InputBoxShort className ="subject"></InputBoxShort>
                    </Box>
                    <Box>
                    <Text>지역</Text>
                        <InputBoxShort className ="location"></InputBoxShort>
                    </Box>
                    <Box>
                    <Text>경력</Text>
                        <InputBox className ="career"></InputBox>
                    </Box>
                    <Box>
                    <Text>소개글</Text>
                        <InputBox className ="appeal"></InputBox>
                    </Box>
                    <Box>
                    <Text>계획</Text>
                        <InputBox className ="plan"></InputBox>
                    </Box>
            </div>
        ) 
    }      
}

export default SubmitT;
