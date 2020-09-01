import React from "react";
import ImageGallery from "react-image-gallery";
import { Grid } from "@material-ui/core";

import Body from "../../components/body";

import withStyles from "./styles";

const images = [];

for (let i = 39; i > 0; i--) {
    let image = {
        original: require(`../../static/mary${i}.jpg`),
        thumbnail: require(`../../static/mary${i}.jpg`)
    };

    if (image) images.push(image);
}

const Gallery = ({ classes }) => (
    <Body>
        <Grid container justify="center" alignItems="center" className={classes.container}>
            <Grid item xs={12} md={8}>
                <ImageGallery items={images} />
            </Grid>
        </Grid>
    </Body>
);

export default withStyles(Gallery);
