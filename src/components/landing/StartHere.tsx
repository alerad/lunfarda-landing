import {Grid, Typography} from "@material-ui/core";
import {CtaButton} from "../CtaButton";
import * as React from "react";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {TailoredForm} from "./TailoredForm";


const styles = {
    imageCard: {
        backgroundColor: "#000000"
    },
    startHere: {
        zIndex: 3,
        marginTop: "2rem"
    }
}

const useStyles = makeStyles(theme => (
    {
        root: {
            background: "url('/landing/la-boca.jpg')",
            backgroundSize: 'cover',
            minHeight: '90vh',
            textAlign: 'left'
        },
        content: {
            marginTop: '13%',
            zIndex: 3,
            height: 'fit-content'
        },
        blackMask: {
            zIndex: 2,
            position: 'absolute',
            height: '90vh',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.7)'
        }
    }
));

export const StartHere = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item xs={2}/>
            <Grid item xs={8} className={classes.content}>
                <Typography variant="h1" color={"secondary"}>
                    Experience Buenos Aires,
                </Typography>
                <Typography variant="h1" color={"primary"} style={{fontWeight: 700}}>
                    tailor made.
                </Typography>
                <Typography variant="h3" style={{paddingTop:"1rem"}} color={"secondary"}>
                    We craft bespoke itineraries, private tours and unique experiences<br/> in Buenos Aires and across Argentina.
                </Typography>
                <CtaButton style={styles.startHere} onClick={handleOpen}>
                    Start here
                </CtaButton>
            </Grid>
            <Grid item xs={2}/>
            <TailoredForm open={open} close={handleClose}/>
            <div className={classes.blackMask}></div>
        </Grid>
    )
}

export default StartHere