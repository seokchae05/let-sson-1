import React from "react";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import PostboxListSS from "../component/feature/postbox/postboxListSS";
// 학생이 보낸 내역

const Wrapper = styled.div`
 background-color:#F6F6F6;
`

class PostboxSendS extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
            <Wrapper>
                <PostboxListSS/>
            </Wrapper>
            학생이 보낸 내역
            </div>
        )
    }
}


export default PostboxSendS;