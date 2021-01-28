import React from "react";
import PostboxList from "../component/feature/card/postbox_listS";
import HeadButtons from "../component/layout/header";

class PostboxS extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <PostboxList/>
            </div>
        )
    }
}


export default PostboxS;