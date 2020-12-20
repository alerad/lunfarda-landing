import {Checkbox, CheckboxProps, withStyles} from "@material-ui/core";
import React from "react";

export const CustomCheckbox = withStyles(theme => ({
    root: {
        color: theme.palette.text.primary,
        '&$checked': {
            color: theme.palette.text.primary
        },
    },
    checked: {},
}))((props: CheckboxProps) =>
    <Checkbox color="default" {...props} />
    );