import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "components/AnimatedSwitch/AnimatedSwitch";
import Registration from "views/Registration/Registration";
import RegistrationSuccessful from "views/Registration/RegistrationSuccessful";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={({ location }) =>
                        !location.state ? (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: {
                                        currentStep: 1,
                                        prevPage: null
                                    }
                                }}
                            />
                        ) : (
                            <TransitionGroup component="div" className="app">
                                <AnimatedSwitch
                                    key={location.pathname}
                                    location={location}
                                >
                                    <Registration location={location} />
                                </AnimatedSwitch>
                            </TransitionGroup>
                        )
                    }
                />

                <Route
                    render={({ location }) => (
                        <TransitionGroup component="div" className="app">
                            <AnimatedSwitch
                                key={location.key}
                                location={location}
                            >
                                <Route
                                    exact
                                    path="/registration-successful"
                                    component={RegistrationSuccessful}
                                />
                            </AnimatedSwitch>
                        </TransitionGroup>
                    )}
                />
            </Switch>
        );
    }
}

export default App;
