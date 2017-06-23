import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Home from '../views/Home.jsx';
import Dashboard from '../views/Dashboard.jsx';

class App extends React.Component {

    render() {
        return(
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        )
    }

}

export default App;
