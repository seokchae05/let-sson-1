import React from "react";
import InfoCardS from "../component/feature/card/info_cardS";
import HeadButtons from "../component/layout/header";
import Sidebar from "../component/layout/sidebar";




class FindStudent extends React.Component{
    render(){
        return(
        <container>
            <header>
                <HeadButtons/>
            </header>
            <span>
            <Sidebar/>
                <InfoCardS/>
            </span>
            </container>
        )        

        

    }

}


export default FindStudent;