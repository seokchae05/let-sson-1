import React from "react";
import InfoCard from "../component/feature/card/info_card";
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
                    <InfoCard/>
                </span>
            </container>
        );        

        

    }

}


export default FindStudent;