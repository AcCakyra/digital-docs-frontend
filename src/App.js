import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

import "tabler-react/dist/Tabler.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact={true} component={LoginPage}/>
                <Route path="/" component={MainPage}/>
            </Switch>
        </Router>
    );
}

export default App;
