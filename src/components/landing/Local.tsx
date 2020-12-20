import * as React from "react"
import {Typography, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedCta} from "../OutlinedCta";
import Link from "next/link";


const useStyles = makeStyles(theme => (
    {
        root: {
            marginTop: '2rem',
            background: "url('/landing/tango.jpg')",
            minHeight: '80vh',
            backgroundSize: 'cover',
        },
        textContainer: {
            color: theme.palette.neutralText.secondary,
            opacity: '1',
            margin: '3rem 0'
        },
        blackCover: {
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        allTastes: {
            color: theme.palette.text.secondary
        },
        cta: {
            borderColor: theme.palette.text.secondary,
            marginTop: '1.5rem'
        }
    }
));


interface LocalProps {

}

export const Local : React.FC<LocalProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            {/*<Hidden smDown>*/}
                <Grid item container xs={2}/>
            {/*</Hidden>*/}
            <Grid
                item
                container xs={12} sm={12} md={8}
                justify="center"
            >
                <Hidden smDown>
                    <Grid item container xs={6}>

                    </Grid>
                </Hidden>

                <Grid item container xs={12} sm={12} md={6} justify={"space-around"} className={classes.blackCover}                >
                    <Grid item container xs={10} className={classes.textContainer} justify={"center"} alignItems={"center"}>
                        <Grid item xs={8}>
                            <Typography variant={"h1"} display="inline">
                                Local savvy&nbsp;
                            </Typography>
                            <Typography variant={"h1"}  display="inline" className={classes.allTastes}>
                                for all tastes.
                            </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant={"subtitle2"}>
                                Our local experts are ready to deliver their expertise and storytelling magic,
                                no matter what you’re looking for.<br/><br/>

                                Our guides will host unforgettable and in-depth city highlights tours -of course!- but also unique experiences of graffiti, Jewish Heritage, culinary workshops,
                                BA for Kids and beyond.<br/><br/>

                                Buenos Aires is yours for the taking.
                            </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Link href={"/AboutUs"} as={"about-us"} style={{textDecoration:'none'}}>
                                <OutlinedCta variant={"outlined"} className={classes.cta}>
                                    About Us
                                </OutlinedCta>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Hidden smDown>
                <Grid item container xs={2} className={classes.blackCover}/>
            </Hidden>
        </Grid>
    )

}

export default Local