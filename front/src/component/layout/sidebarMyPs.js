import React from "react"
import { Link } from "react-router-dom";
import Edit from "../feature/sideButton/edit"
import GostuMyP from "../feature/sideButton/gostu";
import Withdraw from "../feature/sideButton/withdraw"
import Wprofile from "../feature/sideButton/wProfile"
import './sidebar.css';




class SidebarMyPs extends React.Component{
    render(){
            return (        
            <span id = 'side'>
                <Link to ="/mypages/profile">
                    <div>
                    <Wprofile/>
                    </div>
                </Link>
                <Link to ="/mypages/edit">
                    <div >
                        <Edit />
                    </div>
                </Link>
                <Withdraw/>
                <Link to = "/mypaget/profile">
                    <GostuMyP/>
                </Link>
            </span>
         )
    }
};


export default SidebarMyPs;