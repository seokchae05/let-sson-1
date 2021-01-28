import React from "react"
import { Link } from "react-router-dom";
import Edit from "../feature/sideButton/edit"
import GostuMyP from "../feature/sideButton/gostu";
import Withdraw from "../feature/sideButton/withdraw"
import Wprofile from "../feature/sideButton/wProfile"
import './sidebar.css';




class SidebarMyP extends React.Component{
    render(){
            return (        
            <span id = 'side'>
                <Link to ="/mypaget/profile">
                    <div>
                    <Wprofile/>
                    </div>
                </Link>
                <Link to ="/mypaget/edit">
                    <div >
                        <Edit />
                    </div>
                </Link>
                <Withdraw/>
                <Link to = "/mypages/profile">
                    <GostuMyP/>
                </Link>
            </span>
         )
    }
};


export default SidebarMyP;