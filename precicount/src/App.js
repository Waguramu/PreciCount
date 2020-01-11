import React from 'react';

import { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import AppBar from "./components/appbar";
import Album from "./components/album";
import Viewer from "./components/viewer";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar />
                <Switch>
                    <Route exact path="/" component={Album} />
                    <Route exact path="/viewer" component={Viewer} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;