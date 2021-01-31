import React from "react";
import InfoCardT from "../component/feature/findTeacher/info_cardT";
import HeadButtons from "../component/layout/header/header";
import Sidebar from "../component/shared/findingSnT/sidebar";



class FindTeacher extends React.Component{
    render(){
        return(
        <div>
            <header>
                <HeadButtons/>
            </header>
            <span>
            <Sidebar/>
                <InfoCardT/>
            </span>
            </div>
        )        

    }
}


export default FindTeacher;