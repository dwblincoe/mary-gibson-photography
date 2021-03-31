import React from "react";
import { Button, TextField, Typography, Grid, Hidden } from "@material-ui/core";
import { useForm } from "@formspree/react";

import Body from "../../components/body";

import withStyles from "./styles";

const Contact = ({ classes }) => {
    const [state, handleSubmit] = useForm("contactForm");

    return (
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
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            label="NAME"
                            InputLabelProps={{ shrink: true }}
                            className={classes.formItem}
                            name="name"
                        />
                        <TextField
                            variant="outlined"
                            label="EMAIL"
                            InputLabelProps={{ shrink: true }}
                            className={classes.formItem}
                            name="email"
                        />
                        <TextField
                            variant="outlined"
                            label="SUBJECT"
                            InputLabelProps={{ shrink: true }}
                            className={classes.formItem}
                            name="subject"
                        />
                        <TextField
                            variant="outlined"
                            multiline
                            rows={6}
                            label="MESSAGE"
                            InputLabelProps={{ shrink: true }}
                            className={classes.formItem}
                            name="message"
                        />
                        <Button
                            className={classes.formItem}
                            variant="containedPrimary"
                            disableRipple
                            type="submit"
                        >
                            SEND
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Body>
    );
};

export default withStyles(Contact);
