import React from "react";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Xbutton = styled.button`
width:30px;
height: 30px;
margin-right: 0;
margin-left: 75%;
margin-top : 30px;
margin-bottom : 30px;
`


const Wrapper = styled.div`
    margin: 0;   
    padding : 0; 
    width:100%;
    height: 720px;
    box-sizing: border-box;
    background-color : #F6F6F6;
    
`

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;
  margin-right: 30%;
  border-top: solid 1px black;
  background: white;
  margin-bottom: 10px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;
const BoxShort = styled.div`
  margin-right: 0;
  width: 30%;
  padding-bottom: 0px;
  background-color: lightgray;
  border: 1px solid gray;
  
`;


class PostboxDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            id: props.location.state.id,
            name : props.location.state.name,
            period: props.location.state.period,
        }
    
    }
    render(){
        return(
            <div>
                <HeadButtons/>
                <Wrapper>
                <Link to ="/postboxs">
                <Xbutton>
                    X
                </Xbutton>
                </Link>
                <Box>
                    <Text> 식별아이디</Text>
                    <BoxShort className="id">{this.state.id}</BoxShort>
                </Box>
                <Box>
                    <Text> 이름</Text>
                    <BoxShort>{this.state.name}</BoxShort>
                </Box>    
                <Box>
                    <Text> 기간</Text>
                    <BoxShort>{this.state.period}</BoxShort>
                </Box>    
                </Wrapper>
            </div>
        )
    }
}



export default PostboxDetail;