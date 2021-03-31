import { withStyles } from "@material-ui/core/styles";

import pregnancy from "../../static/mary33.jpg";
import baby from "../../static/mary13.jpg";
import misc from "../../static/mary12.jpg";

export default withStyles((theme) => {
    const { colors } = theme.palette;

    return {
        container: {
            padding: "20px 20%",
            marginTop: "60px",
            position: "relative",

            "& .MuiGrid-item": {
                marginTop: 12
            }
        },
        menu: {
            position: "fixed",
            top: 80,
            left: 30,

            "& a": {
                textDecoration: "underline",
                color: "#000"
            }
        },
        cardContainer: {
            width: "100%",
            paddingLeft: "20px"
        },
        subtitle: {
            textDecoration: "underline"
        },
        miscImg: {
            background: `url(${misc})`,
            backgroundPosition: "0% 25%"
        },
        pregnancyImg: {
            background: `url(${pregnancy})`,
            backgroundPosition: "0% 25%"
        },
        babyImg: {
            background: `url(${baby})`,
            backgroundPosition: "0% 50%"
        },
        imgContainer: {
            backgroundSize: "cover",
            width: "100%",
            height: "400px"
        }
    };
});
