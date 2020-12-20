import {Menu, MenuItem, Typography} from "@material-ui/core";
import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {HeaderButtonProps} from "./HeaderButton";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {

    },
    dropdown: {

    },
    mainButton: {
        color: "#FAFAFA",
        textDecoration: 'none'
    }
}))


export const DropDown = (props: HeaderButtonProps) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseOver = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Link to={`${props.Url}`} style={{textDecoration: 'none'}}>
                <div className={`${classes.mainButton}`} onMouseOver={handleMouseOver}>
                    <Typography className={props.ClassName}>{props.Text}</Typography>
                </div>
            </Link>
            <Menu
                className={classes.dropdown}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.subItems?.map(x => {
                    return (
                        <Link to={`${x.Url}`} style={{textDecoration: 'none'}} onMouseOver={handleMouseOver}>
                            <MenuItem onClick={handleClose}>{x.Text}</MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </React.Fragment>
    )
};
