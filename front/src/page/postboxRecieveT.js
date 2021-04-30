import React from "react";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import PostboxListRT from "../component/feature/postbox/postboxListRT";
// 선생이 받은 내역

const Wrapper = styled.div`
 background-color:#F6F6F6;
`

class PostboxRecieveT extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
            <Wrapper>
                <PostboxListRT />
            </Wrapper>
            선생이 받은 내역
            </div>
        )
    }
}


export default PostboxRecieveT;