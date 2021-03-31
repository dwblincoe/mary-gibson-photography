import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    const { colors } = theme.palette;

    return {
        container: {
            marginTop: "110px",
            "& p": {
                fontSize: "20px"
            }
        },
        about: {
            paddingLeft: "15px",
            margin: "0 auto"
        }
    };
});
