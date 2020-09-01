import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    const { colors } = theme.palette;

    return {
        navbar: {
            width: "100vw",
            height: "60px",
            display: "flex",
            justifyContent: "space-between"
        },
        mainColor: {
            background: colors.main
        },
        navItem: {
            display: "flex"
        },
        logo: {
            fill: colors.white,
            height: "100%",
            width: "100px",
            marginLeft: "10px",
            alignSelf: "center"
        },
        name: {
            marginLeft: "10px",
            color: colors.white,
            fontFamily: "Sacramento",
            fontSize: "1.75rem",
            margin: "0px",
            alignSelf: "flex-end"
        },
        link: {
            marginRight: "30px",
            alignSelf: "center",

            "& p": {
                fontSize: "0.8rem"
            }
        },
        menuIcon: {
            color: colors.white,
            fontSize: "2.5rem",
            padding: "10px"
        }
    };
});
