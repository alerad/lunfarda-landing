import * as React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {DreamForm} from "./dream-vacation/DreamForm";

const useStyles = makeStyles(theme => (
    {
        root: {

        },
        image: {
            height: "80vh",
            width: "100%",
            opacity:"0.6",
            userDrag: "none",
            userSelect: "none" as "none",
            display: 'block'
        },
        imageCard: {
            backgroundColor: "#000000"
        },
        startHere: {
            marginTop: "3rem"
        },
        dreamText: {
            fontWeight: 500,
            textAlign: "right",
            color: theme.palette.neutralText.secondary,
            marginTop: "2.5rem",
            marginBottom: "2.5rem"
        },
        yellowLine: {
            width: '100%',
            height: '1px',
            border: "solid 3px #f1ca12",
            backgroundColor: "#f1ca12"
        },
        upperLine: {
            marginBottom: '2.5rem',
            width: '100%'
        },
        lowerLine: {
            marginTop: '2.5rem',
            width: '100%'
        },
        bookAppointment: {
            fontWeight: 500,
            cursor: 'pointer',
            textDecoration: 'underline',
            textAlign: "right"
        },
        consultation: {
            marginTop: "2rem",
            textAlign: "right",
            marginLeft: "3rem"
        },
        unsure: {
            float: "right",
            marginLeft: "5rem"
        },
        rightPanelRoot: {
            backgroundColor: '#000000',
            backgroundSize: 'cover',
            minHeight: '80vh'
        },
        dreamBackground: {
            background: "url('/landing/puente-mujer.jpg')",
            backgroundSize: 'cover',
            minHeight: '80vh'
        },
        leftPanelRoot: {
            background: "url('/landing/puente-mujer.jpg')",
            backgroundSize: 'cover',
            position:'relative',
            minHeight: '80vh'
        },
        leftPanelContent: {
            margin: '3rem 0'
        },
        unsureContent: {
            marginTop: '3rem',
            textAlign: 'right'
        },
        unsureNormalText: {
            fontWeight: 400
        },
        formContent: {
            paddingTop: '2.5rem'
        },
        blackMask: {
            zIndex: 2,
            position: 'absolute',
            minHeight: '100%',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.7)'
        }
    }
));


interface DreamVacationProps {

}

export const DreamVacation : React.FC<DreamVacationProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item sm={12} md={6}>
                <LeftPanel/>
            </Grid>
            <Grid item sm={12} md={6} className={classes.rightPanelRoot}>
                <RightPanel/>
            </Grid>
        </Grid>
    )
}


const LeftPanel = () => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.leftPanelRoot}>
            <Grid item container xs={12}  justify={"center"} alignItems={"center"} className={classes.leftPanelContent}>
                <Hidden smDown>
                    <Grid item sm={3}/>
                </Hidden>
                <Grid item xs={10} sm={10} md={6} style={{zIndex:3}}>
                    <Line/>
                    <Typography variant={"h2"} className={classes.dreamText}>
                        Tell us about your dream vacaction and we'll start crafting something unique.
                    </Typography>
                    <Line/>
                    <Grid item container xs={12}  justify={"center"} alignItems={"center"} className={classes.unsureContent} >
                        <Grid item xs={12}>
                            <Typography className={classes.unsureNormalText}>
                                Unsure about what to do?
                            </Typography>
                            <Typography color={"secondary"} className={classes.unsureNormalText}>
                                Schedule a complimentary advising<br/> consultation with our experts.
                            </Typography>
                            <Typography variant={"h5"} className={classes.bookAppointment} onClick={()=> window.open("http://www.calendly.com/lunfardatravel", "_blank")}>
                                <br/>
                                Book Appointment
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.blackMask}></div>
        </Grid>
    )
}


const RightPanel = () => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} justify={"flex-start"} alignItems={"center"}>
            <Grid item xs={1}/>
            <Grid item xs={10} md={8} className={classes.formContent}>
                <DreamForm/>
            </Grid>
        </Grid>
    )
}

const Line = () => {
    const classes = useStyles();

    return (
        <div className={classes.yellowLine}/>
    )
}

export default DreamVacation