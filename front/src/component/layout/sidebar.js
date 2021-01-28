import React from "react"
import Checkage from "../feature/sideButton/checkAge"
import Checkgender from "../feature/sideButton/checkGender"
import CheckOnline from "../feature/sideButton/checkOnline"
import Checkpay from "../feature/sideButton/checkPay"
import './sidebar.css';

class Sidebar extends React.Component{
    render(){
        
    return (
    <span id = 'side'>
        <Checkgender/>
        <CheckOnline/>
        <Checkpay/>
        <Checkage/>
    </span>        
        );
    }
}


export default Sidebar;