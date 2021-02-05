import React from "react"
import { Link } from 'react-router-dom';
import HeadButton from "../component/layout/header/header"
import styled from "styled-components";
import mypic from './background.png'
import btn1nothover from './stu1.png';
import btn2nothover from './tea1.png';

const Wrapper = styled.div`
    height : 50vh;
    display : flex;
    align-items : center;
    justify-content: center;
    background-color : #F6F4F3;
`;

const MainImage = styled.img`
    width : 100%;
    height : 50vh;
`;

const Text = styled.p`
    position: absolute;
    top: 33%;
    left : 7%;
    color : white;
`;

const Teabutton1 = styled.button`
    border : solid 1px black;
    width : 150px;
    height : 150px;
    margin-top : 20px;
    margin-left : 130px;
    margin-right : 130px;
    background : url(${btn1nothover}); 
    background-color : white;
    &:hover {
        background : url(${btn1nothover}); 
        background-color : #011440;
      }
`;


const Teabutton2 = styled.button`
    border : solid 1px black;
    width : 150px;
    height : 150px;
    margin-top : 20px;
    margin-left : 130px;
    margin-right : 130px;
    background : url(${btn2nothover}); 
    background-color : white;
    &:hover {
        background : url(${btn2nothover}); 
        background-color : #011440;
      }
`;



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = { person : 50}; // 임의로 지정한 값입니다.
    };


    render(){
        return (
            <div>
                <HeadButton />
                <div>
                    <span>
                        <MainImage src={mypic} />
                        <Text> {this.state.person}명의 회원이 이 사이트를 이용하고 있습니다.</Text>
                    </span>
                    <Wrapper>
                        <Link to="/teasign">
                            <Teabutton1></Teabutton1>
                        </Link>
                        <Link to="/stusign">
                            <Teabutton2></Teabutton2>
                        </Link>
                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Main;