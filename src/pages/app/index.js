import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

import Home from "../home";
import Gallery from "../gallery";
import PricingInfo from "../pricing-info";
import Meet from "../meet";
import Contact from "../contact";
import Navbar from "../../components/navbar";

import withStyles from "./styles.js";

const App = ({ classes, history }) => {
    const isHome = history.location.pathname === "/";
    return (
        <div>
            {isHome && (
                <React.Fragment>
                    <div className={classes.photoBg} />
                    <div className={classes.overlay} />
                </React.Fragment>
            )}

            <div className={classes.container}>
                <Navbar isHome={isHome} />
                <FormspreeProvider project="1623100352146440098">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/pricing-info" component={PricingInfo} />
                        <Route path="/meet" component={Meet} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </FormspreeProvider>
            </div>
        </div>
    );
};

export default withRouter(withStyles(App));
