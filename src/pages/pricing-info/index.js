import React from "react";
import { Grid, Typography, List, ListItem, ListSubheader, Hidden } from "@material-ui/core";

import withStyles from "./styles";

const pregnancySessions = [
    {
        title: "Maternity Sessions",
        duration: "1 hour",
        photosIncluded: "25 edited photos",
        cost: "$125.00",
        additionalInfo: []
    }
];

const babySessions = [
    {
        title: "Newborn Mini Session (Baby Only)",
        duration: "1.5 hour",
        photosIncluded: "10-15 edited photos",
        cost: "$125.00",
        additionalInfo: ["Wrapped + Poses with prop"]
    },
    {
        title: "Full Newborn Session",
        duration: "2-3 hour",
        photosIncluded: "20-25 edited photos",
        cost: "$175.00",
        additionalInfo: ["Wrapped + Posed + Family & Siblings shots"]
    },
    {
        title: "Milestone Sessions (3, 6, 9 Month - Baby Only )",
        duration: "45 minute",
        photosIncluded: "15-20 edited photos",
        cost: "$125.00",
        additionalInfo: ["Add family photos $25.00 extra and get 5 additional edited photos"]
    },
    {
        title: "Cake Smash",
        duration: "1 hour",
        photosIncluded: "20-25 edited photos",
        cost: "$250.00",
        additionalInfo: [
            "You pick the theme and I create a custom setup",
            "I will provide the cake",
            "Add family photos for $25.00 and get 5 additional edited photos"
        ]
    }
];

const miscSessions = [
    {
        title: "Senior Session",
        duration: "1 hour",
        photosIncluded: "25 edited photos",
        cost: "$125.00",
        additionalInfo: ["Two locations"]
    },
    {
        title: "Family Sessions (up to 10 people)",
        duration: "1 hour",
        photosIncluded: "25 edited photos",
        cost: "$175.00",
        additionalInfo: ["One location", "Add $25.00 to add 5 addition people and edited photoss"]
    }
];

const PricingInfo = ({ classes }) => {
    const renderSessionCard = (session) => (
        <Grid item sm={12} className={classes.cardContainer}>
            <List>
                <ListSubheader disableSticky>
                    <Typography variant="h6" color="textSecondary" className={classes.subtitle}>
                        {session.title}
                    </Typography>
                </ListSubheader>
                <ListItem>
                    <Typography color="textSecondary">
                        <strong>Price</strong>: {session.cost}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography color="textSecondary">
                        <strong>Duration</strong>: {session.duration}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography color="textSecondary">
                        <strong>Included Photos</strong>: {session.photosIncluded}
                    </Typography>
                </ListItem>
                {session.additionalInfo.length > 0
                    ? session.additionalInfo.map((info) => (
                          <ListItem>
                              <Typography color="textSecondary">{info}</Typography>
                          </ListItem>
                      ))
                    : null}
            </List>
        </Grid>
    );

    const renderLinks = () => {
        return (
            <Grid container className={classes.menu}>
                <Grid item xs={12}>
                    <Typography variant="h5">Menu</Typography>
                </Grid>
                <Grid item xs={12}>
                    <a href="#pregnancy">Pregnancy Sessions</a>
                </Grid>
                <Grid item xs={12}>
                    <a href="#baby">Baby Sessions</a>
                </Grid>
                <Grid item xs={12}>
                    <a href="#misc">Misc Sessions</a>
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid container alignItems="center" direction="column" className={classes.container}>
            <Hidden mdDown>{renderLinks()}</Hidden>

            <Grid item xs={12} md={10} lg={8} id="pregnancy" className="w-100">
                <Typography variant="h5">Pregnancy Photoshoots</Typography>
                <div className={`${classes.imgContainer} ${classes.pregnancyImg}`}></div>
                <Grid container>
                    {pregnancySessions.map((session) => renderSessionCard(session))}
                </Grid>
            </Grid>
            <Grid item xs={12} md={10} lg={8} id="baby" className="w-100">
                <Typography variant="h5">Babies and Tots Photoshoots</Typography>
                <div className={`${classes.imgContainer} ${classes.babyImg}`}></div>
                <Grid container>{babySessions.map((session) => renderSessionCard(session))}</Grid>
            </Grid>
            <Grid item xs={12} md={10} lg={8} id="misc" className="w-100">
                <Typography variant="h5">Miscellaneous Photoshoots</Typography>
                <div className={`${classes.imgContainer} ${classes.miscImg}`}></div>
                <Grid container>{miscSessions.map((session) => renderSessionCard(session))}</Grid>
            </Grid>
        </Grid>
    );
};

export default withStyles(PricingInfo);
