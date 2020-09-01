import React from "react";
import { Button, TextField, Typography, Grid, Hidden } from "@material-ui/core";

import Body from "../../components/body";

import withStyles from "./styles";

const Contact = ({ classes }) => (
    <Body>
        <Grid container justify="center" alignItems="center" className={classes.container}>
            <Grid item xs={12} md={8}>
                <div className={classes.titleContainer}>
                    <Hidden smDown>
                        <hr className={classes.titleLine} />
                    </Hidden>
                    <Typography variant="h5" className={classes.title}>
                        Contact Mary
                    </Typography>
                    <Hidden smDown>
                        <hr className={classes.titleLine} />
                    </Hidden>
                </div>
            </Grid>
            <Grid item xs={11} md={6}>
                <div className={classes.formContainer}>
                    <TextField
                        variant="outlined"
                        label="NAME"
                        InputLabelProps={{ shrink: true }}
                        className={classes.formItem}
                    />
                    <TextField
                        variant="outlined"
                        label="EMAIL"
                        InputLabelProps={{ shrink: true }}
                        className={classes.formItem}
                    />
                    <TextField
                        variant="outlined"
                        label="SUBJECT"
                        InputLabelProps={{ shrink: true }}
                        className={classes.formItem}
                    />
                    <TextField
                        variant="outlined"
                        multiline
                        rows={6}
                        label="MESSAGE"
                        InputLabelProps={{ shrink: true }}
                        className={classes.formItem}
                    />
                    <Button className={classes.formItem} variant="containedPrimary" disableRipple>
                        SEND
                    </Button>
                </div>
            </Grid>
        </Grid>
    </Body>
);

export default withStyles(Contact);
