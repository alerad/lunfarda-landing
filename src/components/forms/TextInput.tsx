import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const TextInput = withStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,
        width: '100%',
        '& .MuiInput-underline': {
            borderBottomColor: theme.palette.primary.main,
        },
        '& .MuiInputLabel-root': {
            color: theme.palette.primary.main,
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid '+ theme.palette.primary.main
        }
    }
}))(TextField);

