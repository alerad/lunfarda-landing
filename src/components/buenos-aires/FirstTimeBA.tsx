import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {TourList} from "../tours/TourList";

const useStyles = makeStyles(theme => (
    {
        root: {
            marginTop: '3rem',
            textAlign: 'center'
        },
        inBa: {
            color: theme.palette.text.secondary
        },
        sectionMargin: {
            marginTop: '2rem'
        }
    }
));


interface FirstTimeBAProps {

}

export const FirstTimeBA: React.FC<FirstTimeBAProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} md={8} justify={"center"}>
                <Grid item xs={12}>
                    <Typography display={"inline"} variant={"h1"} style={{color:'black'}}>
                        First time&nbsp;
                    </Typography>
                    <Typography display={"inline"} variant={"h1"} color={"secondary"} className={classes.inBa}>
                        in BA?
                    </Typography>
                </Grid>

                <Grid item xs={12} className={classes.sectionMargin}>
                    <Typography variant={"subtitle1"} style={{color:'black'}}>
                        Let a local expert show you what makes our city magical.
                    </Typography>
                    <Typography variant={"subtitle1"} style={{color:'black'}}>
                        Explore what Buenos Aires has to offer.
                    </Typography>
                </Grid>


                <Grid item container xs={12} className={classes.sectionMargin}>
                    <TourList filters={["buenos aires"]}/>
                </Grid>
            </Grid>

        </Grid>
    )

}

export default FirstTimeBA