import React from "react";

import withStyles from "./styles";

const Body = ({ children, classes }) => <div className={classes.container}>{children}</div>;

export default withStyles(Body);
