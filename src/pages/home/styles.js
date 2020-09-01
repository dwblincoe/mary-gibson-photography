import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    const { colors } = theme.palette;
    return {
        container: {
            fontFamily: "Sacramento",
            color: colors.white,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            "& h6": {
                margin: "30px 0 0 0"
            }
        },
        logo: {
            color: colors.white,
            height: "fit-content"
        },
        webpageContainer: {
            position: "absolute",
            bottom: 0,
            padding: "15rem",
            fontSize: "5rem"
        },
        webpageLogo: {
            fontSize: "30rem"
        },
        mobileContainer: {
            fontSize: "15vw",
            height: "100%",
            width: "100%"
        },
        mobileLogo: {
            fontSize: "90vw"
        }
    };
});
