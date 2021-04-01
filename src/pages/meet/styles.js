import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    return {
        container: {
            marginTop: "10vh",
            "& p": {
                fontSize: "20px"
            }
        },
        imgContainer: {
            position: "relative",

            "& img": {
                width: "100%",
                backgroundSize: "cover"
            }
        },
        about: {
            margin: "0 auto"
        },
        titleContainer: {
            display: "flex"
        },
        title: {
            flex: 1,
            textAlign: "center"
        },
        titleLine: {
            flex: 2,
            borderLeft: "0px",
            borderRight: "0px",
            borderBottom: "0px",
            marginTop: "15px",
            borderWidth: "2px"
        }
    };
});
