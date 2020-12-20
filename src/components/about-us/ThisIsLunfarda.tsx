import React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {

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
            background: "url('https://i.imgur.com/5Vq5CEH.jpeg')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minHeight: '420px',
            [theme.breakpoints.down("sm")] : {
                marginBottom: '4rem',
                backgroundSize: '100% 100%'
            }
        },
        subTitle: {
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


interface ThisIsLunfardaProps {

}

export const ThisIsLunfarda: React.FC<ThisIsLunfardaProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12} className={classes.content}>
                <Grid item container xs={12} md={5} className={classes.image}>
                </Grid>
                <Hidden smDown>
                    <Grid item md={1}/>
                </Hidden>

                <Grid item container xs={12} md={6} alignItems={"center"} className={classes.textContainer}>
                    <Grid item xs={10}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            This is<br/>LUNFARDA TRAVEL
                        </Typography>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={6}/>
                    </Hidden>

                    <Grid item xs={10} className={classes.subTitle}>
                        <Typography variant={"subtitle1"} style={{color:"black"}}>
                            Lunfardo is an argot born in the gritty southern port of Buenos Aires in the times of the Big Immigration.
                            <br/><br/>
                            Lunfardo is a crossroads of languages, a slang shared by the native-americans, african-americans, criollos and european immigrants; a language of the people, a compromise and a meeting point.
                            <br/><br/>
                            Lunfardo reflects Argentina in its utter diversity, and it is still used on a daily basis to communicate in Buenos Aires.
                            <br/><br/>
                            Lunfarda, a boutique travel and tour agency, is born to be a bridge between cultures and to showcase the intensity, tenderness, history and sublime landscapes of the Argentine people through conscious, local travel.   </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )

}

export default ThisIsLunfarda