import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography, Menu, MenuItem} from "@material-ui/core";
import {DropDown} from "./DropdownButton";
import Link from "next/link";

export interface HeaderButtonProps {
    Text : string
    Url: String,
    subItems?: HeaderButtonProps[]
    ClassName?: string,
    As: String
}

const useStyles = makeStyles(theme => (
    {
        header: {
            height: '60px',
                backgroundColor: "#000000",
                width: "100%"
        },
        mainButton: {
            color: "#FAFAFA",
            textDecoration: 'none'
        }
    }
));

export const HeaderButton: React.FC<HeaderButtonProps> =
    ({ Text, Url, ClassName, subItems, As }) => {
        const classes = useStyles();
        if (!subItems) {
            return <GenerateNormalButton Text={Text} Url={Url} ClassName={ClassName} As={As}/>
        } else {
            return <GenerateDropDownButton Text={Text} Url={Url} ClassName={ClassName} subItems={subItems} As={As}/>
        }
    }


const GenerateNormalButton = (props: HeaderButtonProps) => {
    const classes = useStyles();
    return (
        <Link href={props.Url} as={props.As}>
            <div className={`${classes.mainButton}`} style={{textDecoration: 'none'}}>
                <Typography className={props.ClassName}>{props.Text}</Typography>
            </div>
        </Link>
    )
}


const GenerateDropDownButton = (props: HeaderButtonProps) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuStyle = {
        marginTop: '2.5rem'
    }

    const menuItemStyle= {
        color:'white',
        backgroundColor: 'black'
    }
    return (
        <React.Fragment>
            <Link href={props.Url} style={{textDecoration:'none'}}>
                <div className={`${classes.mainButton}`} onMouseEnter={handleClick}>
                    <Typography className={props.ClassName}>{props.Text}</Typography>
                </div>
            </Link>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={menuStyle}
            >
                {props.subItems?.map(x => {
                    return (
                        <Link href={x.Url} style={{textDecoration:'none'}}>
                            <MenuItem onClick={handleClose} style={menuItemStyle}>{x.Text}</MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </React.Fragment>
    )
}
