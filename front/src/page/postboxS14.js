import React from "react";
import PostboxList from "../component/feature/card/postbox_listS";
import HeadButtons from "../component/layout/header";

class PostboxS extends React.Component{
    render(){
        return(
            <container>
                <HeadButtons/>
                <PostboxList/>
            </container>
        )
    }
}


export default PostboxS;