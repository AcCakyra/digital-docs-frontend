import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";
import Error404 from "./components/Error404";

import "tabler-react/dist/Tabler.css";
import UserService from "./services/UserService";

class App extends React.Component {

    render() {
        return (
            <React.StrictMode>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/forgot_password" component={ForgotPassword}/>
                        <Route exact path="/home" component={HomePage}/>
                        <Route exact path="/" component={MainPage}/>
                        <Route component={Error404}/>
                    </Switch>
                </Router>
            </React.StrictMode>
        )
    };
}

export default App;
