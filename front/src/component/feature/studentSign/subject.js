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

const Btn = styled.input`
    background : white;
    width : 13%;
    height : 40px;
    border : 1px dashed black;
    margin : 1%;
`;


class Stusignsubject extends React.Component{
    render(){
        return (
            <Box>
                <Text>어떤 과목을 수강하실 건가요?</Text>
                <label className="teaName">
                    <Btn type="button" value="국어"></Btn>
                    <Btn type="button" value="영어"></Btn>
                    <Btn type="button" value="사회"></Btn>
                    <Btn type="button" value="수학"></Btn>
                    <Btn type="button" value="과학"></Btn>
                    <Btn type="button" value="자격증"></Btn>
                    <br/>
                    <Btn type="button" value="레슨"></Btn>
                    <Btn type="button" value="프로그래밍"></Btn>
                    <Btn type="button" value="자소서"></Btn>
                    <Btn type="button" value="논술"></Btn>
                    <Btn type="button" value="회화"></Btn>
                    <Btn type="button" value="면접"></Btn>
                </label>
            </Box>
        );
    }
}

export default Stusignsubject;