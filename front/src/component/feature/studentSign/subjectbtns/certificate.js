import React from "react"
import styled from "styled-components";

const Btn = styled.input`
    background : white;
    width : 13%;
    height : 40px;
    border : 1px dashed #010440;
    margin : 1%;
`;


class Certificate_s extends React.Component{
    constructor(props) {
        super(props);
        this.state = { background: 'white', textColor: 'black' };
      }

      changeColor = () => {
          if(this.state.background === 'white'){
            this.setState({
                background: '#010440',
                textColor: 'white'
              }); // 이후 value값 넘겨주는거 추가
          }
          else{
            this.setState({
                background: 'white',
                textColor: 'black'
              }); // 이후 value값 넘겨주는거 추가
          }
      }

    render(){
        return (
            <Btn type="button" style={{ backgroundColor: this.state.background, color: this.state.textColor }} onClick={this.changeColor} value="자격증"></Btn>
        );
    }
}

export default Certificate_s;