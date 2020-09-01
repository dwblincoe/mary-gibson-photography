import React, { useState } from "react";
import { Typography, Hidden, Drawer, List, ListItem } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Logo from "../../assets/marygibson-logo";

import withStyles from "./styles";

const renderDesktopLinks = (links, classes) =>
    links.map((link) => (
        <Link className={classes.link} to={link.link}>
            <Typography color="textPrimary">{link.name}</Typography>
        </Link>
    ));

const renderMobileLinks = (links, classes, setOpenDrawer) =>
    links.map((link) => (
        <Link className={classes.link} to={link.link} onClick={() => setOpenDrawer(false)}>
            <ListItem className={classes.navItem}>
                <Typography color="textPrimary">{link.name}</Typography>
            </ListItem>
        </Link>
    ));

const Navbar = ({ classes, isHome }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const links = [
        { name: "GALLERY", link: "/gallery" },
        { name: "PRICING & INFO", link: "/pricing-info" },
        { name: "MEET THE PHOTOGRAPHER", link: "/meet" },
        { name: "CONTACT", link: "/contact" }
    ];

    return (
        <div className={`${classes.navbar} ${!isHome && classes.mainColor}`}>
            <div className={classes.navItem}>
                {!isHome && (
                    <React.Fragment>
                        <Link to="/">
                            <Logo className={classes.logo} />
                        </Link>
                        <Hidden smDown>
                            <p className={classes.name} color="textPrimary">
                                Mary Gibson Photography
                            </p>
                        </Hidden>
                    </React.Fragment>
                )}
            </div>
            <Hidden mdUp>
                <Menu onClick={() => setOpenDrawer(true)} className={classes.menuIcon} />
                <Drawer open={openDrawer} anchor="right" onClose={() => setOpenDrawer(false)}>
                    <List>{renderMobileLinks(links, classes, setOpenDrawer)}</List>
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <div className={classes.navItem}>{renderDesktopLinks(links, classes)}</div>
            </Hidden>
        </div>
    );
};

export default withStyles(Navbar);
