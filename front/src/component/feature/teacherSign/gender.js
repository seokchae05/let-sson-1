import React from "react"
import styled from "styled-components";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 25%;
    margin-right : 25%;
    border-top : solid 3px #010440;
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


class Teasigngender extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = props.handleChange;
      }

    render(){
        return (
          <Box>
            <Text>성별이 어떻게 되시나요?</Text>
            <Btn>
              <input type="radio" name="gender" value="남성" onChange={this.handleChange}></input> 남성
            </Btn>
            <Btn>
              <input type="radio" name="gender" value="여성" onChange={this.handleChange}></input> 여성
            </Btn>
          </Box>
        );
    }
}

export default  Teasigngender;