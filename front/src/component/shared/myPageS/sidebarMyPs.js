import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
margin: 5px;
float: right;
width: 250px;
box-sizing: border-box;
border: 1px solid white;
display: grid;
background-color : white;
positon: flow;
`


const SideB = styled.button`
border : solid 1px black;
width : 230px;
height : 100px;
margin:10px;
`




class SidebarMyPs extends React.Component{
    render(){
            return ( 
            <div>
                <Wrapper>
                        <Link to ="/mypages/profile">
                            <SideB>프로필 작성</SideB>       
                        </Link>
                        <Link to ="/mypages/edit">
                            <SideB>수정하기</SideB>
                        </Link>
                        <SideB 
                        onClick ={() => window.confirm('정말로 탈퇴하시겠습니까?')}>
                            탈퇴하기
                            </SideB>
                        <Link to = "/mypaget/profile">
                            <SideB>마이페이지 전환</SideB>
                        </Link>
                </Wrapper>
            </div>
         )
    }
};


export default SidebarMyPs;