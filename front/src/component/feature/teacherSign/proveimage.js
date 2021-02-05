import React from "react";
import styled from "styled-components";

const Box = styled.div`
margin-top : 30px;
padding-top: 10px;
padding-bottom: 20px;
padding-left: 20px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left : 25%;
margin-right : 25%;
border-top : solid 3px #010440;
background: white;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;

class Teasignprove extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = props.handleChange;
      }
      
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

export default Teasignprove;