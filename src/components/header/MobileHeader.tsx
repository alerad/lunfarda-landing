import * as React from "react"
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import {MobileMenu} from "./mobile/MobileMenu";
import {hButtons} from "./Header";
import Link from "next/link";

const useStyles = makeStyles(theme => (
    {
        root: {},
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textDecoration: "none",
            color: "black"
        },
    }
));


interface MobileHeaderProps {

}

export const MobileHeader: React.FC<MobileHeaderProps> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    window.onpopstate = (e: PopStateEvent) => {
        const {hash} = window.location;
        if (open) {
            handleClose()
            e.stopImmediatePropagation()
            window.history.go(1)
        }
    }

    return (
        <AppBar position="static">
            <Toolbar style={{backgroundColor:"black"}}>
                <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu" onClick={handleMenu} >
                    <MenuIcon />
                </IconButton>
                <MobileMenu open={open} handleClose={handleClose} anchorEl={anchorEl} buttons={hButtons} handleOpen={handleMenu}/>
                <Link href={"/"} style={{textDecoration: 'none'}}>
                    <Typography variant="h6" className={classes.title} style={{color:"white"}}>
                        LUNFARDA TRAVEL
                    </Typography>
                </Link>

            </Toolbar>
        </AppBar>
    )

}

export default MobileHeader