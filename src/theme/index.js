import { createMuiTheme } from "@material-ui/core/styles";

import colors from "./colors";

/**
 * @summary Setup of base theme for the application using Material UI.
 */
export default createMuiTheme({
    typography: {
        fontFamily: "Montserrat"
    },
    palette: {
        colors,
        text: {
            primary: colors.white
        },
        primary: {
            main: colors.main
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                borderRadius: "2px"
            },
            contained: {
                boxShadow: "none"
            },
            containedPrimary: {
                color: colors.white,
                "&:hover": {
                    boxShadow: "none",
                    backgroundColor: colors.main
                }
            }
        },
        MuiCard: {
            root: {
                background: colors.hover,
                minHeight: 250,
                padding: "0px 20px"
            }
        },
        MuiDrawer: {
            paper: {
                background: colors.main
            }
        },
        MuiOutlinedInput: {
            root: {
                color: "#000",
                "&:hover $notchedOutline": {
                    borderColor: colors.main
                }
            }
        }
    }
});
