import React from "react";
import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import { SendOutlined } from "@material-ui/icons";

import withStyles from "./styles";

const Meet = ({ classes, history }) => (
    <Grid container justify="center" alignItems="center" className={classes.container}>
        <Grid item sm={11} md={8} lg={8}>
            <div className={classes.titleContainer}>
                <Hidden smDown>
                    <hr className={classes.titleLine} />
                </Hidden>
                <Typography variant="h5" className={classes.title}>
                    Meet Mary
                </Typography>
                <Hidden smDown>
                    <hr className={classes.titleLine} />
                </Hidden>
            </div>

            <Grid container className="mt-2">
                <Grid item sm={11} md={8} lg={5} className={classes.imgContainer}>
                    <img src={require("../../assets/mary.jpg")} alt="Mary Gibson & Family" />
                </Grid>
                <Grid item xs={10} sm={8} lg={5} className={classes.about}>
                    <Typography color="textSecondary" className="mt-2">
                        Mary Gibson Photography is a business with specialization in newborn
                        photography but expanding to other areas rapidly.
                    </Typography>
                    <Typography color="textSecondary" className="mt-2">
                        When it comes to newborn photography, you can count on Mary Gibson
                        Photography to deliver. I provide all of my clients with a gorgeous
                        selection of high-definition photos for you and your family to cherish
                        forever. Whether you’re looking for an elegant, custom-designed album, or
                        you simply want a few shots of your little one’s smile, explore the endless
                        possibilities of working with Mary Gibson Photography.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item sm={11} md={8} lg={8} className="mt-2 flex-center">
            <Button
                startIcon={<SendOutlined />}
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => history.push("/contact")}
            >
                Contact Mary
            </Button>
        </Grid>
    </Grid>
);

export default withStyles(Meet);
