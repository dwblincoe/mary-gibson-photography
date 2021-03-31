import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    const { colors } = theme.palette;

    return {
        container: {
            marginTop: "90px"
        },
        formContainer: {
            display: "flex",
            flexDirection: "column"
        },
        formItem: {
            marginTop: "20px"
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
