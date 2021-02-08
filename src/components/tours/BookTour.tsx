import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => (
    {
        root: {
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '3px 3px 6px 0 rgba(217, 217, 217, 0.5)',
            border: 'solid 1px #e6e6e6'
        },
        media: {
            height: "15rem",
        },
        cardWrapper: {
            position: 'relative'
        },
        cardTextOverlay: {
            position: 'absolute',
            top: '38%',
            left: '5%'
        },
        descriptionText: {
            fontWeight: 500,
            zIndex: 3,
            color: theme.palette.neutralText.secondary,
            textAlign: 'left'
        },
        bokunBotton: {
            backgroundColor: theme.palette.text.secondary,
            height: "2.2rem",
            textAlign: 'center',
            color: theme.palette.neutralText.secondary,
            fontWeight: 300,
            fontSize: '.8rem',
            borderRadius: '1rem',
            border: 0,
            width: '80%',
            cursor: 'pointer'
        },
        tourInfo : {
            color: theme.palette.neutralText.dark,
            justifySelf: "center",
            height:'100%',
            paddingLeft: '.5rem',
            paddingTop: ".5rem"
        },
        cardActions: {
            height:'3rem'
        },
        priceContent: {
            marginTop: '3%',
            marginBottom: '3%'
        },
        blackMask: {
            zIndex: 1,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.7)'
        },
        titleContainer: {
            zIndex: 3
        }
    }
));


interface BookTourProps {
    tour: any
}

const buildUrl = (props: BookTourProps) => {
    if (props.tour.keyPhoto.derived.length > 0)
        return 'url(\''+props.tour.keyPhoto.derived[1].url+'\')'
    return 'url(\''+props.tour.keyPhoto.originalUrl+'\')'
}

export const BookTour = (props: BookTourProps) => {
    const classes = useStyles();

    const buttonClasses = `bokunButton ${classes.bokunBotton}`

    const simulateBookClick = (e: any) => {
        bookRef.click()
    }

    let bookRef: HTMLButtonElement | null


    return (
            <Grid item container xs={12} justify={"center"} alignItems={"center"} className={classes.root} onClick={simulateBookClick}>
                <Grid item container xs={12} style={{background: buildUrl(props), minHeight:'200px', backgroundSize: '100% 100%', position:'relative'}} justify={"center"} alignItems={"center"}>
                    <Grid item xs={2}/>
                    <Grid item xs={8} className={classes.titleContainer}>
                        <Typography gutterBottom variant="h3" className={classes.descriptionText}>
                            {props.tour.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}/>
                    <div className={classes.blackMask}/>

                </Grid>
                <Grid item container xs={12} className={classes.priceContent} spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant={"h4"} className={classes.tourInfo}>
                            U$S {props.tour.price} - {props.tour.fields.durationHours}hs
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{textAlign:'right'}}>
                        <button
                            className={buttonClasses}
                            disabled
                            ref={(a) => bookRef = a}
                            id="bokun_064ade73_0773_4302_9af8_e03204ccbc4e"
                            data-src={"https://widgets.bokun.io/online-sales/f950a4c9-7805-4ef9-ac32-a3f40fc83793/experience/"+props.tour.id+"?partialView=1"}
                            data-testid="widget-book-button">
                                Book now
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        )
}