import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export const CtaButton = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "25px",
        fontWeight: 600,
        fontSize: "1.2rem",
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        boxShadow: '1px 1px 4px 0 rgba(68, 68, 68, 0.5)',
    },
    label: {
        textTransform: 'capitalize',
    },
}))(Button);

