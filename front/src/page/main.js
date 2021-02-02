import React from "react"
import { Link } from 'react-router-dom';
import HeadButton from "../component/layout/header/header"
import styled from "styled-components";
import mypic from './background.png'

const Wrapper = styled.div`
    height : 35vh;
    display : flex;
    align-items : center;
    justify-content: center;
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

const Teabutton = styled.button`
    border : solid 1px black;
    width : 200px;
    height : 100px;
    margin-left : 200px;
    margin-right : 200px;
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
                            <Teabutton>선생님</Teabutton>
                        </Link>
                        <Link to="/stusign">
                            <Teabutton>학생</Teabutton>
                        </Link>
                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Main;