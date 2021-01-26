import React from "react"
import HeadButton from "../component/layout/header";
import Stusignage from "../component/feature/studentSign/age";
import Stusigngender from "../component/feature/studentSign/gender";
import Stusignisstu from "../component/feature/studentSign/isstudent";
import Stusignname from "../component/feature/studentSign/name";
import Stusignpropergender from "../component/feature/studentSign/propergender";
import Stusignregion from "../component/feature/studentSign/region";
import Stusigncontact from "../component/feature/studentSign/contact";
import Stusignphone from "../component/feature/studentSign/phone";
import Stusignpassword from "../component/feature/studentSign/password";
import Stusignemail from "../component/feature/studentSign/email";
import Stusignpay from "../component/feature/studentSign/pay";
import Stusignsubject from "../component/feature/studentSign/subject";


class Stusign extends React.Component{
    render(){
        return (
            <div>
                <HeadButton />
                <Stusignname />
                <Stusignisstu />
                <Stusignage />
                <Stusigngender />
                <Stusignpropergender />
                <Stusignregion />
                <Stusignsubject />
                <Stusignpay />
                <Stusigncontact />
                <Stusignphone />
                <Stusignpassword />
                <Stusignemail />
            </div>
        );
    }
}

export default Stusign;