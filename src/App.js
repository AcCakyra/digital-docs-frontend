import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import DocumentPage from "./components/DocumentPage";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";
import CheckPage from "./components/CheckPage";
import Error404 from "./components/Error404";

import "tabler-react/dist/Tabler.css";

class App extends React.Component {

    render() {
        return (
            <React.StrictMode>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/forgot_password" component={ForgotPassword}/>
                        <Route exact path="/document" component={DocumentPage}/>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/check" component={CheckPage}/>
                        <Route component={Error404}/>
                    </Switch>
                </Router>
            </React.StrictMode>
        )
    };
}

export default App;
