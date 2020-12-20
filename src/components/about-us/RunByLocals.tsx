import React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: theme.palette.text.secondary,
            padding: '4rem 0'
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
            background: "url('https://i.imgur.com/rqbxRml.jpg')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minHeight: '420px',
            [theme.breakpoints.down("sm")] : {
                marginBottom: '4rem'
            }
        },
        subTitle: {
            marginTop: '2rem'
        },
        textContainer: {
            [theme.breakpoints.up('md')]: {
                justifyContent: "flex-end"
            },
            [theme.breakpoints.down("sm")] : {
                justifyContent: "center"
            },
            textAlign: 'right'
        }
    }
));


interface RunByLocalsProps {

}

export const RunByLocals: React.FC<RunByLocalsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12} className={classes.content}>
               <Grid item container xs={12} md={6} alignItems={"center"} className={classes.textContainer}>
                    <Grid item xs={10}>
                        <Typography variant={"h1"} color={"secondary"}>
                            Owned & Run by locals
                        </Typography>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={6}/>
                    </Hidden>

                    <Grid item xs={10} className={classes.subTitle}>
                        <Typography variant={"subtitle1"} color={"secondary"}>
                            Lunfarda Travel connects savvy local mavens, restaurateurs and experience-makers to discerning travellers, in an ethical and socially responsible way.
                            <br/>
                            We are committed to fair trade practices to our employees and our community, supporting and empowering local small businesses, entrepreneurs, artists and NGOs.
                            <br/>
                            With your purchase, you are putting your money into the local community and supporting the dreams and livelihoods of proud experience creators.
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden smDown>
                    <Grid item md={1}/>
                    <Grid item container xs={12} md={5} className={classes.image}>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )

}

export default RunByLocals