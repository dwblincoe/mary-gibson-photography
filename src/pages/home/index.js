import React from "react";
import { Hidden } from "@material-ui/core";

import Body from "../../components/body";

import Logo from "../../assets/marygibson-logo";

import withStyles from "./styles";

const Home = ({ classes }) => (
    <Body>
        <Hidden mdUp>
            <div className={`${classes.container} ${classes.mobileContainer}`}>
                <Logo className={`${classes.logo} ${classes.mobileLogo}`} />
                <h6>Mary Gibson Photography</h6>
            </div>
        </Hidden>
        <Hidden smDown>
            <div className={`${classes.container} ${classes.webpageContainer}`}>
                <Logo className={`${classes.logo} ${classes.webpageLogo}`} />
                <h6>Mary Gibson Photography</h6>
            </div>
        </Hidden>
    </Body>
);

export default withStyles(Home);
