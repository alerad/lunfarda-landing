import * as React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedCta} from "../OutlinedCta";
import Link from "next/link";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: theme.palette.text.secondary,
            [theme.breakpoints.up('md')]: {
                minHeight: '90vh'
            }
        },
        content: {
            marginBottom: '4rem',
            marginTop: '4rem',
            overflow: 'hidden'
        },
        textBody: {
            color: theme.palette.neutralText.secondary,
            marginTop: '2.5rem',
            marginBottom: '2.5rem'
        },
        textContent: {
            marginTop: '1.5rem'
        },
        image: {
            maxHeight: '75vh'
        }
    }
));


interface PhilosophyProps {

}

export const Philosophy: React.FC<PhilosophyProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12} className={classes.content}>
                <Grid item xs={2}/>
                <Grid item xs={10} sm={10} md={3} className={classes.textContent}>
                    <Typography variant={"h2"}>
                        You're welcome here
                    </Typography>

                    <Typography variant={"body1"} className={classes.textBody}>
                        Lunfarda Travel is a safe space for all people, regardless of gender, race, sexual orientation, religion, nationality or ability. We believe in the beauty of diversity. We are committed to creating better travel practices, with fair-trade and sustainability policies.
                    </Typography>

                    <Link href={"/AboutUs"} as={"about-us"} style={{textDecoration:'none'}}>
                        <OutlinedCta variant={"outlined"}>
                            Our Philosophy
                        </OutlinedCta>
                    </Link>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={1}/>
                    <Grid item xs={6} >
                        <img src="/landing/mural.png" className={classes.image} alt={"Tourism Philosophy"}/>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )

}

export default Philosophy