import React from "react";
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

class Teasignprove_my extends React.Component{
    render(){
        return (
            <Box>
                <Text>학력을 증명할 사진을 첨부해주세요 ex)재학증명서</Text>
                <label className="teaProve">
                    <input type="file" accept="image/png, image/jpeg"></input>
                </label>
            </Box>
        );
    }
}

export default Teasignprove_my;