import { withStyles } from "@material-ui/core/styles";
import bg from "../../assets/mary-bg.jpg";

export default withStyles((theme) => {
    const { colors } = theme.palette;
    return {
        container: {
            maxHeight: "100vh",
            maxWidth: "100vw",
            zIndex: 400,
            position: "absolute"
        },
        photoBg: {
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: 100
        },
        overlay: {
            height: "100vh",
            width: "100vw",
            background: "#000",
            opacity: 0.4,
            position: "absolute",
            zIndex: 200
        }
    };
});
