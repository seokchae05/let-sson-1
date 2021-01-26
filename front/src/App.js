import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FindStudent from "./page/findStudent7";
import Findpassword from "./page/findpassword";
import Login from "./page/login";
import Loginsuccess from "./page/loginsuccess";
import Main from "./page/main";
import Stusign from "./page/stusign";
import Teasign from "./page/teasign";
import FindTeacher from "./page/findTeacher6";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/findpassword" exact={true} component={Findpassword} />  
        <Route path="/stusign" exact={true} component={Stusign} />  
        <Route path="/teasign" exact={true} component={Teasign} /> 
        <Route path="/login" exact={true} component={Login} />
        <Route path="/loginsuccess" exact={true} component={Loginsuccess} />
        <Route path="/findstudent" exact={true} component={FindStudent} />
        <Route path="/findteacher" exact={true} component={FindTeacher} />
        <Route path="/" exact={true} component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
