import React from "react"
import { Link } from 'react-router-dom';
import Foot from "../component/layout/footer";
import HeadButton from "../component/layout/header"

class Main extends React.Component{
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        
        return (
            <div className="maindisplay">
                <HeadButton />
                <Link to="/teasign">
                    <button>선생님</button>
                </Link>
                <Link to="/stusign">
                    <button>학생</button>
                </Link>
                <Foot/>
            </div>
        );
    }
}

export default Main;