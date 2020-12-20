import {Button, withStyles} from "@material-ui/core";

export const OutlinedCta = withStyles({
    root: {
        borderRadius: "25px",
        border: '2px solid',
        backgroundColor: 'rgba(0,0,0,0)',
        fontWeight: 600,
        fontSize: "1.2rem",
        color: '#FAFAFA',
        height: 48,
        padding: '0 30px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);