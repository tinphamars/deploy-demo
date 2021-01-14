import React from 'react';
import News from './components/News/News';
import Header from './components/Static/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './components/Home';
import Product from './components/Product';
import Detail from './components/Product/detail/detail';


class App extends React.Component {

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/blog">
                        <News />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/product">
                        <Product />
                    </Route>

                    <Route exact path="/detail">
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
