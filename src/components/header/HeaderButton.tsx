import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography, Menu, MenuItem, Grid, ClickAwayListener} from "@material-ui/core";
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
            textDecoration: 'none',
            cursor: 'pointer'
        },
        hoverButtons: {
            display: "block",
            position: "absolute",
            width: "auto",
            textAlign: "center",
            zIndex: 3,
            top: '5vh'
        },
        dropdownButon: {
            color: "#FAFAFA",
            textDecoration: 'none',
            cursor: 'pointer',
            backgroundColor: "black",
            padding:'1rem 0.2rem',
            margin: "0 0.2rem",
            width: '100%',
            fontWeight: 500
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

    const [open, setOpen] = React.useState(null);

    const handleHover = (event: any) => {
        setOpen(true)
    };

    const handleClose = (e: any) => {
        setOpen(false)
    }

    const menuStyle = {
        marginTop: '2.5rem'
    }

    return (
        <React.Fragment>
                <Grid item container xs={12} style={{position:"relative"}}>
                    <Grid item xs={12}>
                        <Link href={props.Url} style={{textDecoration:'none'}}>
                            <div className={`${classes.mainButton}`} onMouseEnter={handleHover}>
                                <Typography className={props.ClassName}>{props.Text}</Typography>
                            </div>
                        </Link>
                    </Grid>
                    <ClickAwayListener onClickAway={handleClose}>
                        <Grid item xs={12} className={classes.hoverButtons}>
                            {props.subItems?.filter(_ => open).map(x => {
                                return (
                                    <Link href={x.Url} as={x.As} style={{textDecoration:'none'}}>
                                        <div className={`${classes.dropdownButon}`} onMouseEnter={handleHover} onClick={handleClose}>
                                            <Typography className={x.ClassName} variant={"h5"} style={{fontSize: '.6rem', fontWeight:500}}>
                                                {x.Text}
                                            </Typography>
                                        </div>
                                    </Link>
                                )
                            })}
                        </Grid>
                    </ClickAwayListener>

                </Grid>


            {/*{props.subItems?.map(x => {*/}
            {/*    return (*/}
            {/*        <Link href={x.Url} style={{textDecoration:'none'}}>*/}
            {/*            <MenuItem onClick={handleClose} style={menuItemStyle}>{x.Text}</MenuItem>*/}
            {/*        </Link>*/}
            {/*    )*/}
            {/*})}*/}
        </React.Fragment>
    )
}
