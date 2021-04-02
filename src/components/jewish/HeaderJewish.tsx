import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            background: "url('https://i.imgur.com/RBr1bau.png')",
            [theme.breakpoints.down("sm")]: {
                backgroundSize: "100% 100%"
            },
            [theme.breakpoints.up("md")]: {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            },
            position: 'relative'
        },
        subtitle: {
            color: theme.palette.text.secondary
        },
        title: {
            paddingTop: '5rem',
            marginBottom: '2rem'
        },
        blackMask: {
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.5)'
        },
        content: {
            zIndex: 1
        }
    }
));


interface HeaderJewishProps {

}

export const HeaderJewish: React.FC<HeaderJewishProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} className={classes.content}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant={"h1"}>
                        Unravel the
                    </Typography>
                    <Typography variant={"h1"} className={classes.subtitle}>
                        Argentine-jewish identity
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} style={{color:"white", marginBottom: '2rem'}}>
                        Explore the history, landmarks, sorrows and shared identity of Latin America’s largest Jewish population.
                    </Typography>
                </Grid>
            </Grid>

            <div className={classes.blackMask}/>

        </Grid>
    )

}

export default HeaderJewish