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
    constructor(props) {
        super(props);
        this.handleChange = this.props.handleChange;
    }


    render(){
        return(
            <div>
                    <Box>
                        <Text> 이름</Text>
                        <InputBoxShort name = "name"
                        value={this.props.state.name} 
                        type="text"
                        >
                            
                        </InputBoxShort>
                    </Box>
                    <Box>
                    <Text>학교</Text>
                        <InputBoxShort 
                        value={this.props.state.school} 
                        name ="school"
                        type="text">
                        </InputBoxShort>
                    </Box>
                    <Box>
                    <Text>학과</Text>
                        <InputBoxShort 
                        name ="major"
                         value={this.props.state.major} 
                         type="text"
                        >
                        </InputBoxShort>
                    </Box>
                    <Box>
                    <Text>주요 과목</Text>
                        <InputBoxShort name ="subject"
                         value={this.props.state.subject} 
                         type="text" >
                         </InputBoxShort>
                    </Box>
                    <Box>
                    <Text>지역</Text>
                        <InputBoxShort name ="location"
                         value={this.props.state.location} 
                         type="text" >
                         </InputBoxShort>
                    </Box>
                    <Box>
                    <Text>경력</Text>
                        <InputBox name ="career"
                         value={this.props.state.career} 
                         onChange={this.handleChange} type="text"></InputBox>
                    </Box>
                    <Box>
                    <Text>소개글</Text>
                        <InputBox name ="introduce"
                         value={this.props.state.introduce} 
                         onChange={this.handleChange} type="text"></InputBox>
                    </Box>
                    <Box>
                    <Text>계획</Text>
                        <InputBox name ="plan" 
                        value={this.props.state.plan} 
                        onChange={this.handleChange} type="text"></InputBox>
                    </Box>
            </div>
        ) 
    }      
}

export default SubmitT;
