import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container d-flex align-items-center flex-column">
                    <Switch>
                        <Route path="/login" exact={true} component={LoginPage}/>
                        <Route path="/" component={MainPage}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
