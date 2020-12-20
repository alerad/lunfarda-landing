import React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedCta} from "../OutlinedCta";

const useStyles = makeStyles(theme => (
    {
        root: {
            [theme.breakpoints.up("md")]: {
                background: "url('https://lun-us.icons8.com/api/assets/8e0f0f36-f2b7-4a58-96b4-12b07de3923d/kids%2003.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
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
            background: "url('https://i.imgur.com/S7r86rR.jpg')",
            backgroundSize: 'cover',
            minHeight: '300px',
            [theme.breakpoints.down("sm")] : {
                marginBottom: '4rem'
            },
        },
        subTitle: {
            marginTop: '2rem'
        },
        cta: {
            color: 'black',
            borderColor: 'black',
            marginTop: '2rem'
        },
        textContainer: {
            [theme.breakpoints.up('md')]: {
                justifyContent: "flex-start"
            },
            [theme.breakpoints.down("sm")] : {
                justifyContent: "center"
            }
        }
    }
));


interface KidToursProps {

}

export const KidTours: React.FC<KidToursProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12} className={classes.content}>
                <Grid item container xs={12} md={4} className={classes.image}>
                </Grid>
                <Hidden smDown>
                    <Grid item md={2}/>
                </Hidden>

                <Grid item container xs={12} md={6} alignItems={"center"} className={classes.textContainer}>
                    <Grid item xs={10} md={6}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            Tours & Experiences
                        </Typography>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={6}/>
                    </Hidden>

                    <Grid item xs={10} md={6} className={classes.subTitle}>
                        <Typography variant={"subtitle1"} style={{color:"black"}}>
                            Graffiti workshops, horseback riding, kayaking or scavenger hunts: we know how to make traveling fun for kids of all ages!
                        </Typography>
                    </Grid>

                    <Grid item xs={10}>
                        <OutlinedCta variant={"outlined"} className={classes.cta}>
                            Fun tours for kids
                        </OutlinedCta>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>
    )

}

export default KidTours