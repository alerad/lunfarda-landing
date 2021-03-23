import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {},
        content: {
            margin: '4rem 0'
        },
        subTitle: {
            marginTop: '2rem'
        }
    }
));


interface CovidProps {

}

export const Covid: React.FC<CovidProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} justify={"flex-start"} className={classes.content}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} style={{color:'black'}}>
                        COVID ULTRA - FLEXIBLE<br/>
                        CANCELLATION POLICY
                    </Typography>
                </Grid>
                <Grid item xs={8} className={classes.subTitle}>
                    <Typography variant={"subtitle1"} style={{color:'black'}}>
                        All tours and experiences can be cancelled with a 100% refund up to 24hs prior to start times until November 1st, 2021. Book at ease, we got you covered!
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )

}

export default Covid