import React from "react";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import PostboxListST from "../component/feature/postbox/postboxListST";
// 선생이 보낸 내역

const Wrapper = styled.div`
 background-color:#F6F6F6;
`

class PostboxSendT extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
            <Wrapper>
                <PostboxListST/>
            </Wrapper>
            선생이 보낸 내역
            </div>
        )
    }
}


export default PostboxSendT;