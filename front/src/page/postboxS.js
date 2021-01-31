import React from "react";
import PostboxList from "../component/feature/postbox/postbox_listS";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";


const Wrapper = styled.div`
 background-color:#F6F6F6;
`

class PostboxS extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
            <Wrapper>
                <PostboxList/>
            </Wrapper>
            </div>
        )
    }
}


export default PostboxS;