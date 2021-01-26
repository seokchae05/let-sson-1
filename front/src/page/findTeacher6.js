import React from "react";
import InfoCard from "../component/feature/card/info_card";
import HeadButtons from "../component/layout/header";
import Sidebar from "../component/layout/sidebar";

class FindTeacher extends React.Component{
    render(){
        return(
        <container>
            <header>
                <HeadButtons/>
            </header>
            <div>
            <InfoCard/>
            </div>
            <div>
                <Sidebar/>
            </div>
            </container>
        )        

        

    }

}


export default FindTeacher;