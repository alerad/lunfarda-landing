import React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedCta} from "../OutlinedCta";

const useStyles = makeStyles(theme => (
    {
        root: {
            [theme.breakpoints.up("md")]: {
                background: "url('https://i.imgur.com/a5D6n1j.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "90%"
            }
        },
        content: {
            [theme.breakpoints.up('md')]: {
                margin: '4rem 0'
            },
            [theme.breakpoints.down("sm")] : {
                margin: '0 0 4rem 0'
            }
        },
        image: {
            background: "url('https://i.imgur.com/a5D6n1j.png')",
            backgroundSize: 'cover',
            backgroundPositionX: "113%",
            backgroundRepeat: "no-repeat",
            minHeight: '300px',
            [theme.breakpoints.down("sm")] : {
                marginBottom: '4rem'
            }
        },
        subTitle: {
            marginTop: '2rem'
        },
        textContainer: {
            [theme.breakpoints.up('md')]: {
                justifyContent: "flex-end",
                textAlign: 'right'
            },
            [theme.breakpoints.down("sm")] : {
                justifyContent: "center",
                textAlign: 'left'
            },

        },
        cta: {
            borderColor: 'black',
            color: 'black'
        },
        pad: {
            margin: '1.3rem 0'
        }
    }
));


interface KidItinerariesProps {

}

export const KidItineraries: React.FC<KidItinerariesProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12} className={classes.content}>
                <Hidden mdUp>
                    <Grid item container xs={12} className={classes.image}>

                    </Grid>
                </Hidden>

                <Grid item container xs={12} md={6} alignItems={"center"} className={classes.textContainer}>
                    <Grid item xs={10}>
                        <Typography variant={"h1"} style={{color:'black'}}>
                            Itineraries
                        </Typography>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={6}/>
                    </Hidden>

                    <Grid item xs={10} className={classes.subTitle}>
                        <Typography variant={"subtitle1"} style={{color:'black'}}>
                            Let us know what your family needs and we’ll tailor it.<br/>
                            We have trusted bilingual babysitters in Buenos Aires, and family friendly destinations and accommodations across Argentina.
                        </Typography>
                    </Grid>

                    <Grid item xs={10} className={classes.pad}>
                        <OutlinedCta className={classes.cta}>
                            Plan family trip
                        </OutlinedCta>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default KidItineraries