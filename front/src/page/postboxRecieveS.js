import React from "react";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import PostboxListRS from "../component/feature/postbox/postboxListRS";
// 학생이 받은 내역

const Wrapper = styled.div`
 background-color:#F6F6F6;
`

class PostboxRecieveS extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
            <Wrapper>
                <PostboxListRS/>
            </Wrapper>
            학생이 받은 내역
            </div>
        )
    }
}


export default PostboxRecieveS;