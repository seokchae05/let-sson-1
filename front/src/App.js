import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FindStudent from "./page/findStudent";
import Findpassword from "./page/findpassword";
import Login from "./page/login";
import Loginsuccess from "./page/loginsuccess";
import Main from "./page/main";
import Stusign from "./page/stusign";
import Teasign from "./page/teasign";
import FindTeacher from "./page/findTeacher";
import StuSubmit from "./page/stuSubmit";
import TeaSubmit from "./page/teaSubmit";
import PostboxS from "./page/postboxS";
import MypageTp from "./page/mypageTpro";
import MypageTe from "./page/mypageTedit";
import MypageSp from "./page/mypageSpro";
import MypageSe from "./page/mypageSedit";
import Registerstu from "./page/registerStu";
import Registertea from "./page/registerTea";
import PostboxDetail from "./page/postboxDetail";
import AuthRoute from "./authroute";
import Findid from "./page/findid";
import Fixpassword from "./page/fixpassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fixpassword" exact={true} component={Fixpassword} />
        <Route path="/findid" exact={true} component={Findid} />
        <Route path="/findpassword" exact={true} component={Findpassword} />
        <Route path="/stusign" exact={true} component={Stusign} />
        <Route path="/teasign" exact={true} component={Teasign} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/loginsuccess" exact={true} component={Loginsuccess} />
        <AuthRoute path="/findstudent" exact={true} component={FindStudent} />
        <AuthRoute path="/findteacher" exact={true} component={FindTeacher} />
        <AuthRoute path="/stusubmit" exact={true} component={StuSubmit} />
        <AuthRoute path="/teasubmit" exact={true} component={TeaSubmit} />
        <AuthRoute path="/registerstu" exact={true} component={Registerstu} />
        <AuthRoute path="/registertea" exact={true} component={Registertea} />
        <AuthRoute path="/postboxs" exact={true} component={PostboxS} />
        <AuthRoute path="/mypaget/profile" exact={true} component={MypageTp} />
        <AuthRoute path="/mypaget/edit" exact={true} component={MypageTe} />
        <AuthRoute path="/mypages/profile" exact={true} component={MypageSp} />
        <AuthRoute path="/mypages/edit" exact={true} component={MypageSe} />
        <AuthRoute
          path="/postboxdetail"
          exact={true}
          component={PostboxDetail}
        />
        <Route path="/" exact={true} component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
