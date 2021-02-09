import * as React from "react"
import {Grid, ListItem, ListItemText, SwipeableDrawer} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {HeaderButtonProps} from "../HeaderButton";
import CloseIcon from '@material-ui/icons/Close';
import Link from "next/link";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: "black",
            height: '100%',
            width: '100vw'
        },
        listItem: {
            color: "white",
            fontWeight: 500,
            fontSize: '10rem',
            textAlign: "center",
            '& span, & svg': {
                textDecoration: "none",
                fontSize: '1.4rem'
            },
        },
        linkItem: {
            margin: "4rem 0",
            textDecoration: "none"
        }
    }
));


interface MobileMenuProps {
    anchorEl?: Element | null,
    open: boolean,
    handleClose: () => void,
    handleOpen: (event: any) => void,
    buttons: HeaderButtonProps[]
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
    const classes = useStyles();

    return (
        <SwipeableDrawer anchor={"left"} open={props.open} onClose={props.handleClose} onOpen={props.handleOpen}>
            <div className={classes.root}>
                <Grid item container xs={12} justify={"flex-start"}>
                    <Grid item xs={2}>
                        <CloseIcon
                            style={{width: '100%', color: 'white', textAlign: "center", fontSize: '2.5rem', marginTop: '1rem'}}
                            onClick={props.handleClose}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} justify={"center"}>
                    {props.buttons.map((b, i) => {
                        return (
                            <Grid item xs={12} key={i} onClick={props.handleClose}>
                                <Link href={b.Url} as={b.As} className={classes.linkItem}>
                                    <ListItem button key={b.Text} className={classes.listItem}>
                                        <ListItemText primary={b.Text} />
                                    </ListItem>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </SwipeableDrawer>
    )

}