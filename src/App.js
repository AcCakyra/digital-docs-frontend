import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/ForgotPassword";
import AdminPage from "./components/AdminPage";

import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
    return (
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/forgot_password" component={ForgotPassword}/>
                    <Route exact path="/admin" component={AdminPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </Router>
        </React.StrictMode>
    );
}

export default App;
