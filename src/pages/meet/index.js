import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Hidden,
    Grid,
    Typography
} from "@material-ui/core";

import withStyles from "./styles";

const gibson = require("../../assets/gibson_family.jpg");

const Meet = ({ classes }) => (
    <Grid container justify="center" alignItems="center" className={classes.container}>
        <Grid item sm={11} md={8} lg={6} xl={4}>
            <Card>
                <CardHeader
                    component={() => (
                        <Typography align="center" variant="h3" color="textSecondary">
                            Meet Mary
                        </Typography>
                    )}
                />

                <CardMedia
                    component={() => (
                        <img
                            style={{ width: "100%", backgroundSize: "cover" }}
                            src={require("../../assets/gibson_family.jpg")}
                        />
                    )}
                />
                <CardContent>
                    {" "}
                    <Typography color="textSecondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;When it comes to newborn photography, you can count
                        on Mary Gibson Photography to deliver. I provide all of my clients with a
                        gorgeous selection of high-definition photos for you and your family to
                        cherish forever. Whether you’re looking for an elegant, custom-designed
                        album, or you simply want a few shots of your little one’s smile, explore
                        the endless possibilities of working with Mary Gibson Photography.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
);

export default withStyles(Meet);
